using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class EmployeeCartProduct
    {
        public int EmplCpid { get; set; }
        public int EmployeeCartId { get; set; }
        public int ProductId { get; set; }
        public int ProductQuantity { get; set; }

        public virtual EmployeeCart EmployeeCart { get; set; }
        public virtual Product Product { get; set; }
    }
}
