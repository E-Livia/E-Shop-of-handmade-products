using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Product
    {
        public Product()
        {
            CartProduct = new HashSet<CartProduct>();
            Inventory = new HashSet<Inventory>();
            ProductCategory = new HashSet<ProductCategory>();
            ProductImage = new HashSet<ProductImage>();
            ProductMaterial = new HashSet<ProductMaterial>();
            ProductOrder = new HashSet<ProductOrder>();
            WishlistProduct = new HashSet<WishlistProduct>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Credits { get; set; }
        public bool? Active { get; set; }

        public virtual ICollection<CartProduct> CartProduct { get; set; }
        public virtual ICollection<Inventory> Inventory { get; set; }
        public virtual ICollection<ProductCategory> ProductCategory { get; set; }
        public virtual ICollection<ProductImage> ProductImage { get; set; }
        public virtual ICollection<ProductMaterial> ProductMaterial { get; set; }
        public virtual ICollection<ProductOrder> ProductOrder { get; set; }
        public virtual ICollection<WishlistProduct> WishlistProduct { get; set; }
    }
}
