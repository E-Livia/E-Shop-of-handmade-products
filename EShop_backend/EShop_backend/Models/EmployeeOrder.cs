using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class EmployeeOrder
    {
        public int EmployeeOrderId { get; set; }
        public int EmployeeId { get; set; }
        public int OrderId { get; set; }
        public bool? Active { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Order Order { get; set; }
    }
}
