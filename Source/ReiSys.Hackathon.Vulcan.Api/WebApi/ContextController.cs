using ReiSys.Hackathon.Vulcan.Web.Models;
using System;
using System.Web.Http;

namespace ReiSys.Hackathon.Vulcan.Web.WebApi
{
    [RoutePrefix("api/vulcan")]
    public class ContextController : ApiController
    {

        /// <summary>
        /// context api
        /// </summary>
        /// <returns></returns>
        [Route("GetContext")]
        [HttpGet]
        public ContextModel GetContext()
        {
            var contextModel = new ContextModel();
            contextModel.WebsiteUrl = String.Format("{0}://{1}{2}", Url.Request.RequestUri.Scheme, Url.Request.RequestUri.Authority, ControllerContext.Configuration.VirtualPathRoot);
            contextModel.ApiUrl = contextModel.WebsiteUrl + "/api/vulcan";
            return contextModel;
        }
    }
}