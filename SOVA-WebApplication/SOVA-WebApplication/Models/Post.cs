using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SOVA_WebApplication.Models
{
    public class Post
    {
        public int ID { get; set; }
        public int PostTypeID { get; set; }
        public int PerentID { get; set; }
        public int AcceptedAnswerID { get; set; }
        public DateTime CreationDate { get; set; }
        public int Score { get; set; }
        public string Body { get; set; }
        public DateTime ClosedDate { get; set; }
        public string Title { get; set; }
        public string Tags { get; set; }
        public int OwnerID { get; set; }
        public int LinkPostID { get; set; }
    }
}
