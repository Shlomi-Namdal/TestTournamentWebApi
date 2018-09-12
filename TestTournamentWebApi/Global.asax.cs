using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using TestTournamentWebApi.Models;

namespace TestTournamentWebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            using (DataContext data = new DataContext())
            {
                data.Database.CreateIfNotExists();
                //Tournament tournament = new Tournament();
                //tournament.Game_Name = "game";
                //tournament.Player1 = "shlomi";
                //tournament.Player2 = "moshe";
                //tournament.Who_Won = "shlomi";
                //data.Tournament.Add(tournament);
                //data.SaveChanges();
            }
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
