using ReiSys.Hackathon.Vulcan.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Security;
using System.Web.SessionState;

namespace ReiSys.Hackathon.Vulcan.Web
{
    public class Global : System.Web.HttpApplication
    {
        /// <summary>
        /// start
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_Start(object sender, EventArgs e)
        {
            ReiSys.Hackathon.Vulcan.Api.Init.InitNow();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            BindingsFactory.Add();
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}