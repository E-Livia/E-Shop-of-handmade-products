using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop_backend.Models
{
    public class Product
    {
        public int productId { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public float price { get; set; }
        public string credits { get; set; }
        public bool active { get; set; }

    }
}
