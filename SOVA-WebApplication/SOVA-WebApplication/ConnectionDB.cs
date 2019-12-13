using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;

namespace SOVA_WebApplication
{
    public class ConnectionDB
    {
        public DataTable SendQuery(string sql)
        {
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            // PostgeSQL connection string (hide this in json file later)
            string connString = "Host=rawdata.ruc.dk;Username=raw5;Password=o1a1O.A);Database=raw5";
            // Making connection with server
            NpgsqlConnection conn = new NpgsqlConnection(connString);
            conn.Open();
            // data adapter to make a request to database
            NpgsqlDataAdapter da = new NpgsqlDataAdapter(sql, conn);
            // reseting the dataSet before use XD
            ds.Reset();
            // filling DataSet with result from youre request to database
            da.Fill(ds);
            // since C# DataSets can handle multiple tables, we will select first
            dt = ds.Tables[0];
            conn.Close();
            return dt;
        }
    }
}
