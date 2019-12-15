using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SOVA_WebApplication.Controllers
{
    [ApiController]
    [Route("api/post")]
    public class PostController : Controller
    {
        // GET: api/post
        [HttpGet]
        public String Get()
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery("SELECT * FROM posts");
            var JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // GET api/post/5
        [HttpGet("{id}")]
        public String Get(int id)
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery($"SELECT * FROM posts WHERE id={id}");
            var JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // POST api/post
        [HttpPost]
        public string Post([FromBody]string value)
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery($"SELECT * FROM posts WHERE Contains(body, {value})");
            var JSONString = JsonConvert.SerializeObject(dt);
            return value.ToString();
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
