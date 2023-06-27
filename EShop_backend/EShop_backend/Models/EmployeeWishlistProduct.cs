using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class EmployeeWishlistProduct
    {
        public int EmpWpid { get; set; }
        public int EmployeeWishlistId { get; set; }
        public int ProductId { get; set; }

        public virtual EmployeeWishlist EmployeeWishlist { get; set; }
        public virtual Product Product { get; set; }
    }
}
