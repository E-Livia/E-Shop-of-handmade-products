using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Material
    {
        public Material()
        {
            ProductMaterial = new HashSet<ProductMaterial>();
        }

        public int MaterialId { get; set; }
        public string MaterialName { get; set; }
        public bool? Active { get; set; }

        public virtual ICollection<ProductMaterial> ProductMaterial { get; set; }
    }
}
