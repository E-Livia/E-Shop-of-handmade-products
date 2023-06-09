using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class WishlistProduct
    {
        public int WishlistProductid { get; set; }
        public int WishlistId { get; set; }
        public int ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual Wishlist Wishlist { get; set; }
    }
}
