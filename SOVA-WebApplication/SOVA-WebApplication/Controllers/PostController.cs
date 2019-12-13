using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SOVA_WebApplication.Controllers
{
    [ApiController]
    [Route("api/post")]
    public class PostController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public DataTable Get()
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery("SELECT * FROM posts");
            return dt;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public DataTable Get(int id)
        {
            ConnectionDB b = new ConnectionDB();
            return b.SendQuery($"SELECT * FROM posts WHERE id={id}");
        }

        // POST api/<controller>
        [HttpPost]
        public string Post([FromBody]string value)
        {
            return value;
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
