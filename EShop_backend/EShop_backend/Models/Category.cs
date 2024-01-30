using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Category
    {
        public Category()
        {
            ProductCategory = new HashSet<ProductCategory>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryParent { get; set; }
        public bool? Active { get; set; }

        public virtual ICollection<ProductCategory> ProductCategory { get; set; }
    }
}
