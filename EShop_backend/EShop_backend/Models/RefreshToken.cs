using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class RefreshToken
    {
        public string UserId { get; set; }
        public string TokenId { get; set; }
        public string RefreshToken1 { get; set; }
        public bool? Active { get; set; }
    }
}
