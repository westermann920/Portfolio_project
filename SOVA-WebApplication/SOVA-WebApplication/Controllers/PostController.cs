using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Npgsql.Spatial;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SOVA_WebApplication.Controllers
{
    [Route("api/post")]
    public class PostController : Controller
    {
        // GET: api/post
        [HttpGet]
        public string Get()
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery("SELECT id, title, body FROM posts");
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

        // GET api/post/find/this
        [HttpGet("find/{searchTerm}")]
        public string Get(string searchTerm)
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery($"SELECT DISTINCT id, title, body, creationdate, tags, score FROM posts WHERE body LIKE '%{searchTerm}%' ORDER BY score DESC");
            var JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // PUT api/post/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            ConnectionDB b = new ConnectionDB();
            b.SendQuery("MAX(ID) FROM posts");
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete([FromBody] int id)
        {
            ConnectionDB b = new ConnectionDB(); 
            b.SendQuery($"DELETE FROM posts WHERE id = '%{id}%'");
        }
    }
}
