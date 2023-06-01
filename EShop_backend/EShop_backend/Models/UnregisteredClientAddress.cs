using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class UnregisteredClientAddress
    {
        public UnregisteredClientAddress()
        {
            UnregisteredClientOrder = new HashSet<UnregisteredClientOrder>();
        }

        public int UClientNo { get; set; }
        public string UCountry { get; set; }
        public string UCity { get; set; }
        public int UPostalCode { get; set; }
        public string UAddressLine { get; set; }

        public virtual ICollection<UnregisteredClientOrder> UnregisteredClientOrder { get; set; }
    }
}
