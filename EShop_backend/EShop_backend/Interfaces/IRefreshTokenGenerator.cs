using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop_backend.Interfaces
{
    public interface IRefreshTokenGenerator
    {
        string GenerateToken(string username);
    }
}
