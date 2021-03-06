﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SOVA_WebApplication.Controllers
{
    [Route("api/word")]
    public class WordCloudController : Controller
    {
        // GET: api/word
        [HttpGet]
        public string Get()
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery("SELECT DISTINCT word FROM words");
            var JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // GET api/word/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // GET api/word/count/word
        [HttpGet("count/{countWord}")]
        public string Get(string countWord)
        {
            ConnectionDB b = new ConnectionDB();
            DataTable dt = b.SendQuery($"SELECT count(word) AS count FROM words WHERE word like'{countWord}'");
            var JSONString = JsonConvert.SerializeObject(dt);
            return JSONString;
        }

        // PUT api/word/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/word/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
