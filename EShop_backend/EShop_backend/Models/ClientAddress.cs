using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class ClientAddress
    {
        public int ClientAddressId { get; set; }
        public int ClientId { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public int PostalCode { get; set; }
        public string AddressLine { get; set; }
        public bool? Active { get; set; }

        public virtual Client Client { get; set; }
    }
}
