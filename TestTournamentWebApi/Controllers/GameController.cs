using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestTournamentWebApi;
using TestTournamentWebApi.Models;

namespace TestTournamentWebApi.Controllers
{
    public class GameController : ApiController
    {
        #region Get All
        public HttpResponseMessage Get()
        {
            List<Tournament> a;
            using (DataContext data = new DataContext())
            {
                 a = data.Tournament.ToList();   
            }
            if (a != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, a);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("{0}", "Error please try again.."));
            }
        }
        #endregion

        #region GET by id
       // public Tournament Get(int id)
        public HttpResponseMessage Get(int id)
        {
            Tournament a;
            using (DataContext data = new DataContext())
            {
                a = data.Tournament.FirstOrDefault(x => x.ID == id);
            }
            //return a;
            if (a != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, a);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("{0}", "try again.."));
            }
        }
        #endregion

        #region GET By PlayerName
        [Route("api/Game/ByName")]
        public IEnumerable<Tournament> GetByName(string PlayerName)
        {
            List<Tournament> a;
            using (DataContext data = new DataContext())
            {
                a = data.Tournament.Where(x => x.Player1 == PlayerName || x.Player2 == PlayerName).ToList();
            }
            return a;
        }
        #endregion

        #region filter get api/game/filter
        [Route("api/Game/Filter")]
        public  IEnumerable<Tournament> GetByFilter(string Game_Name = "", string PlayerName = "", string PlayerName2 = "", string Who_Won = "")
        {
            List<Tournament> a;
            using (DataContext data = new DataContext())
            {
                a = data.Tournament.Where(x => x.Game_Name == Game_Name || x.Player2 == PlayerName2 || x.Player1 == PlayerName||x.Who_Won==Who_Won).ToList();
                
            }
            return a;
        }

        #endregion

        #region POST api/game
        public HttpResponseMessage Post([FromBody]Tournament value)
        {
            using (DataContext data = new DataContext())
            {
                Tournament tournament = new Tournament()
                {
                    Game_Name=value.Game_Name,
                    Player1 = value.Player1,
                    Player2 = value.Player2,
                    Who_Won = value.Who_Won
                };
                if (tournament.Game_Name != null )
                {
                    data.Tournament.Add(tournament);
                    data.SaveChanges();

                    return Request.CreateResponse(HttpStatusCode.Created, String.Format("{0}", "Created New Game!"));
                }
                else { return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("{0}", "Eroor enter value ")); }
            }
        }
        #endregion

        #region PUT api/game/
        public HttpResponseMessage Put(int id, [FromBody]Tournament value)
        {
            using (DataContext data = new DataContext())
            {
                Tournament tournament = data.Tournament.FirstOrDefault(x => x.ID == id);
                if(tournament != null)
                {
                    tournament.Game_Name = value.Game_Name;
                    tournament.Player1 = value.Player1;
                    tournament.Player2 = value.Player2;
                    tournament.Who_Won = value.Who_Won;
                    data.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, String.Format("{0}", "Edited!"));
                }
                else { return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("{0}", "Eroor enter value ")); }

            }
        }
        #endregion

        #region Delete
        public HttpResponseMessage Delete(int id)
        {
            using (DataContext data = new DataContext())
            {
               Tournament tournament = data.Tournament.FirstOrDefault(x => x.ID == id);
                if (tournament != null)
                {
                    data.Tournament.Remove(tournament);
                    data.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, String.Format("{0}", "Delete!"));

                }
                else { return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("{0}", "Eroor enter value ")); }

            }
        }
        #endregion
    }
}
