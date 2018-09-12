using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TestTournamentWebApi.Controllers
{
    public class ValuesController : ApiController
    {
        // GET ALL
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET By ID
        public string Get(int id)
        {
            return "value";
        }

        // GET By PlayerName
        public string GetByName(int id)
        {
            return "value";
        }

        //get by filter
        public string GetByFilter(string Game_Name="",string PlayerName="", string Who_Won="")
        {
            return "value";
        }
        
        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
