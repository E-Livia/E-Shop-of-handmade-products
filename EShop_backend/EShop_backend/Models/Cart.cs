using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Cart
    {
        public Cart()
        {
            CartProduct = new HashSet<CartProduct>();
        }

        public int CartId { get; set; }
        public int ClientId { get; set; }
        public double? TotalPrice { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<CartProduct> CartProduct { get; set; }
    }
}
