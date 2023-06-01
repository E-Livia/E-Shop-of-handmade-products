using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class ProductMaterial
    {
        public int ProductMaterialId { get; set; }
        public int MaterialId { get; set; }
        public int ProductId { get; set; }
        public bool? Active { get; set; }

        public virtual Material Material { get; set; }
        public virtual Product Product { get; set; }
    }
}
