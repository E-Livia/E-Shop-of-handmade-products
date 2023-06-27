using EShop_backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EShop_backend.Controllers
{
    //[Authorize(Roles = "admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly dbOnlineShopContext context;
        private readonly IConfiguration _configuration;
        public ClientController(dbOnlineShopContext dbOnlineShopContext, IConfiguration configuration)
        {
            context = dbOnlineShopContext;
            _configuration = configuration;
        }

        //get client info
        [HttpGet("{username}")]
        public JsonResult GetClientInfo(string username)
        {
            var query = "EXEC GetClientInfo @username";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");

            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", username);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        //update client info
        [HttpPut("{username}/{firstName}/{lastName}/{emailAddress}/{phoneNo}")]
        public JsonResult UpdateClientInfo(string username, string firstName, string lastName, string emailAddress, int phoneNo)
        {
            var query = "EXEC UpdateClientInfo @username, @firstName, @lastName, @emailAddress, @phoneNo";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");

            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", username);
                    myCommand.Parameters.AddWithValue("@firstName", firstName);
                    myCommand.Parameters.AddWithValue("@lastName", lastName);
                    myCommand.Parameters.AddWithValue("@emailAddress", emailAddress);
                    myCommand.Parameters.AddWithValue("@phoneNo", phoneNo);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [Route("clientAddress/{username}")]
        [HttpGet]
        public JsonResult GetClientAddress(string username)
        {
            var query = "EXEC GetProfileClientAddress @username";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");

            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", username);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [Route("clientBillingAddress/{username}")]
        [HttpGet]
        public JsonResult GetClientBillingAddress(string username)
        {
            var query = "EXEC GetClientBillingAddress @username";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");

            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", username);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [Route("clientOrderHistory/{username}")]
        [HttpGet]
        public JsonResult GetClientOrderHistory(string username)
        {
            var query = "EXEC GetOrderHistory @username";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");

            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", username);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}
