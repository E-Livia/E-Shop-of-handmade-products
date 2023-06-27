using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class EmployeeCart
    {
        public EmployeeCart()
        {
            EmployeeCartProduct = new HashSet<EmployeeCartProduct>();
        }

        public int EmployeeCartId { get; set; }
        public int EmployeeId { get; set; }
        public double TotalPrice { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual ICollection<EmployeeCartProduct> EmployeeCartProduct { get; set; }
    }
}
