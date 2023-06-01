using EShop_backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EShop_backend.Controllers
{
    [Authorize(Roles ="admin")]
    [Route("[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly dbOnlineShopContext context;
        public ClientController(dbOnlineShopContext dbOnlineShopContext)
        {
            context = dbOnlineShopContext;
        }

        // GET: api/<ClientController>
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return context.Client.ToList();
        }

        // GET api/<ClientController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ClientController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ClientController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ClientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
