using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeAddress = new HashSet<EmployeeAddress>();
            EmployeeBillingAddress = new HashSet<EmployeeBillingAddress>();
            EmployeeCart = new HashSet<EmployeeCart>();
            EmployeeOrder = new HashSet<EmployeeOrder>();
            EmployeeWishlist = new HashSet<EmployeeWishlist>();
        }

        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Cnp { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public int PhoneNo { get; set; }
        public double Salary { get; set; }
        public DateTime EmploymentDate { get; set; }
        public bool? Active { get; set; }

        public virtual User UsernameNavigation { get; set; }
        public virtual ICollection<EmployeeAddress> EmployeeAddress { get; set; }
        public virtual ICollection<EmployeeBillingAddress> EmployeeBillingAddress { get; set; }
        public virtual ICollection<EmployeeCart> EmployeeCart { get; set; }
        public virtual ICollection<EmployeeOrder> EmployeeOrder { get; set; }
        public virtual ICollection<EmployeeWishlist> EmployeeWishlist { get; set; }
    }
}
