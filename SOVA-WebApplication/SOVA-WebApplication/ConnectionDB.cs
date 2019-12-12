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
            // PostgeSQL connection string
            string connString = "Host=rawdata.ruc.dk;Username=raw5;Password=o1a1O.A);Database=raw5";
            // Making connection with Npgsql provider
            NpgsqlConnection conn = new NpgsqlConnection(connString);
            conn.Open();
            // data adapter making request from our connection
            NpgsqlDataAdapter da = new NpgsqlDataAdapter(sql, conn);
            // i always reset DataSet before i do
            // something with it.... i don't know why :-)
            ds.Reset();
            // filling DataSet with result from NpgsqlDataAdapter
            da.Fill(ds);
            // since it C# DataSet can handle multiple tables, we will select first
            dt = ds.Tables[0];
            // since we only showing the result we don't need connection anymore
            conn.Close();
            return dt;
        }
    }
}
