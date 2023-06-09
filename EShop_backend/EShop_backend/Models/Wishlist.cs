using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Wishlist
    {
        public Wishlist()
        {
            WishlistProduct = new HashSet<WishlistProduct>();
        }

        public int WishlistId { get; set; }
        public int ClientId { get; set; }
        public bool? Active { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<WishlistProduct> WishlistProduct { get; set; }
    }
}
