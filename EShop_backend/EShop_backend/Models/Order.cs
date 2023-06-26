using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Order
    {
        public Order()
        {
            ClientOrder = new HashSet<ClientOrder>();
            EmployeeOrder = new HashSet<EmployeeOrder>();
            ProductOrder = new HashSet<ProductOrder>();
        }

        public int OrderId { get; set; }
        public double TotalPrice { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public bool? Active { get; set; }

        public virtual ICollection<ClientOrder> ClientOrder { get; set; }
        public virtual ICollection<EmployeeOrder> EmployeeOrder { get; set; }
        public virtual ICollection<ProductOrder> ProductOrder { get; set; }
    }
}
