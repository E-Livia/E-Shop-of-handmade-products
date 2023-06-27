using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class EmployeeWishlist
    {
        public EmployeeWishlist()
        {
            EmployeeWishlistProduct = new HashSet<EmployeeWishlistProduct>();
        }

        public int EmployeeWishlistId { get; set; }
        public int EmployeeId { get; set; }
        public bool? Active { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual ICollection<EmployeeWishlistProduct> EmployeeWishlistProduct { get; set; }
    }
}
