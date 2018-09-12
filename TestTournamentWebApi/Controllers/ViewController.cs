using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestTournamentWebApi.Controllers
{
    public class ViewController : Controller
    {
        // GET: View
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult HtmlGetPage()
        {
            return new FilePathResult("~/Views/View/HtmlGetPage.html", "text/html");
        }
        public ActionResult HtmlGetPageAjax()
        {
            return new FilePathResult("~/Views/View/HtmlGetPageAjax.html", "text/html");
        }
        public ActionResult HtmlPostPage()
        {
            return new FilePathResult("~/Views/View/HtmlPostPage.html", "text/html");
        }
        public ActionResult HtmlPostPageAjax()
        {
            return new FilePathResult("~/Views/View/HtmlPostPageAjax.html", "text/html");
        }
        public ActionResult HtmlPutDeletePage()
        {
            return new FilePathResult("~/Views/View/HtmlPutDeletePage.html", "text/html");
        }
        public ActionResult HtmlPutDeletePageAjax()
        {
            return new FilePathResult("~/Views/View/HtmlPutDeletePageAjax.html", "text/html");
        }
        public ActionResult ObservablePage()
        {
            return new FilePathResult("~/Views/View/ObservablePage.html", "text/html");
        }
    }
}