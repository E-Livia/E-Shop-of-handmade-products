using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Client
    {
        public Client()
        {
            Cart = new HashSet<Cart>();
            ClientAddress = new HashSet<ClientAddress>();
            ClientOrder = new HashSet<ClientOrder>();
            Wishlist = new HashSet<Wishlist>();
        }

        public int ClientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public int PhoneNo { get; set; }
        public bool? Active { get; set; }

        public virtual User UsernameNavigation { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<ClientAddress> ClientAddress { get; set; }
        public virtual ICollection<ClientOrder> ClientOrder { get; set; }
        public virtual ICollection<Wishlist> Wishlist { get; set; }
    }
}
