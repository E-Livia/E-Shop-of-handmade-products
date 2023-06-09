using EShop_backend.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using EShop_backend.Models;

namespace EShop_backend.Helpers
{
    public class RefreshTokenGenerator : IRefreshTokenGenerator
    {
        private readonly dbOnlineShopContext context;
        public RefreshTokenGenerator(dbOnlineShopContext dbOnlineShopContext)
        {
            context = dbOnlineShopContext;
        }
        public string GenerateToken(string username)
        {
            var randomNumber = new byte[32];
            using (var randomNumberGenerator = RandomNumberGenerator.Create())
            {
                randomNumberGenerator.GetBytes(randomNumber);
                string RefreshToken = Convert.ToBase64String(randomNumber);

                var _user = context.RefreshToken.FirstOrDefault(o => o.UserId == username);
                if (_user != null)
                {
                    _user.RefreshToken1 = RefreshToken;
                    context.SaveChanges();
                }
                else
                {
                    RefreshToken refresh = new RefreshToken()
                    {
                        UserId = username,
                        TokenId = new Random().Next().ToString(),
                        RefreshToken1 = RefreshToken,
                        Active = true
                    };
                }

                return RefreshToken;
            }
        }
    }
}
