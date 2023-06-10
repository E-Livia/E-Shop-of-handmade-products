using EShop_backend.Interfaces;
using EShop_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace EShop_backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly dbOnlineShopContext context;
        private readonly JWTSetting setting;
        private readonly IRefreshTokenGenerator tokenGenerator;
        private readonly IConfiguration _configuration;
        public UserController(dbOnlineShopContext dbcontext, IOptions<JWTSetting> options, IRefreshTokenGenerator _refreshToken, IConfiguration configuration)
        {
            context = dbcontext;
            setting = options.Value;
            tokenGenerator = _refreshToken;
            _configuration = configuration;
        }

        [NonAction]
        public TokenResponse Authenticate(string username, Claim[] claims)
        {
            TokenResponse tokenResponse = new TokenResponse();
            var tokenkey = Encoding.UTF8.GetBytes(setting.securitykey);
            var tokenhandler = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(2),
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256));
            tokenResponse.JWTToken = new JwtSecurityTokenHandler().WriteToken(tokenhandler);
            tokenResponse.RefreshToken = tokenGenerator.GenerateToken(username);
            return tokenResponse;
        }

        [Route("Authenticate")]
        [HttpPost]
        public IActionResult Authenticate([FromBody] usercred user)
        {
            TokenResponse tokenResponse = new TokenResponse();
            var _user = context.User.FirstOrDefault(o => o.UserId == user.username && o.Password == user.password);
            if (_user == null)
                return Unauthorized();
            var tokenhandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(setting.securitykey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(ClaimTypes.Name,_user.UserId),
                        new Claim(ClaimTypes.Role,_user.Role)
                    }),
                Expires = DateTime.Now.AddMinutes(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256)
            };
            var token = tokenhandler.CreateToken(tokenDescriptor);
            string finaltoken = tokenhandler.WriteToken(token);

            tokenResponse.JWTToken = finaltoken;
            tokenResponse.RefreshToken = tokenGenerator.GenerateToken(user.username);
            tokenResponse.Username = _user.UserId;
            tokenResponse.Role = _user.Role;

            return Ok(tokenResponse);
        }

        [Route("Refresh")]
        [HttpPost]
        public IActionResult Refresh([FromBody] TokenResponse token)
        {
            var tokenhandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;
            var principal = tokenhandler.ValidateToken(token.JWTToken, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(setting.securitykey)),
                ValidateIssuer = false,
                ValidateAudience = false
            }, out securityToken);

            var _token = securityToken as JwtSecurityToken;

            if (_token != null && _token.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                //return Unauthorized(); --cu asta comentat merge
            }

            var username = principal.Identity.Name;
            var _reftable = context.RefreshToken.FirstOrDefault(o => o.UserId == username && o.RefreshToken1 == token.RefreshToken);
            if (_reftable == null)
            {
                return Unauthorized();
            }
            TokenResponse _result = Authenticate(username, principal.Claims.ToArray());
            return Ok(_result);
        }

        [Route("Register")]
        [HttpPost]
        public IActionResult Register([FromBody] registercred user)
        {
            //verifing unique username
            var _existingUser = context.User.FirstOrDefault(o => o.UserId == user.username);
            var _existingClient = context.Client.FirstOrDefault(c => c.Username == user.username);
            if (_existingUser != null && _existingClient!=null)
                return BadRequest("Numele de utilizator exista deja. Introduceti alt nume");
            
            var query = @"EXEC RegisterUser @firstName, @lastName, @username, @password, @emailAddress, @phoneNo";
            
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");
            
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@firstName", user.firstName);
                    myCommand.Parameters.AddWithValue("@lastName", user.lastName);
                    myCommand.Parameters.AddWithValue("@username", user.username);
                    myCommand.Parameters.AddWithValue("@password", user.password);
                    myCommand.Parameters.AddWithValue("@emailAddress", user.emailAddress);
                    myCommand.Parameters.AddWithValue("@phoneNo", user.phoneNo);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return Ok(new { message = "Register successfully!" });
        }

        [Route("UpdatePassword")]
        [HttpPost]
        public IActionResult UpdatePassword([FromBody] usercred user)
        {
            //verify existing user
            var _existingUser = context.User.FirstOrDefault(o => o.UserId == user.username);
            if(_existingUser==null)
            {
                return BadRequest("Nu exista userul introdus!");
            }

            var query = @"EXEC UpdateClientPassword @username, @password";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");

            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", user.username);
                    myCommand.Parameters.AddWithValue("@password", user.password);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return Ok(new { message = "Password updated successfully!" });
        }
    }
}
