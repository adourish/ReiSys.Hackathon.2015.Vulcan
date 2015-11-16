using System.Web.Http;
using ReiSys.Hackathon.Vulcan.Service.Services;
using ReiSys.Hackathon.Vulcan.Services;
using Newtonsoft.Json.Linq;

namespace ReiSys.Hackathon.Vulcan.Web.Controllers
{
    /// <summary>
    /// http://mydevbox.reisys.com/vulcan/api/vulcan/test?test=this
    /// http://localhost:8080/vulcan/api/vulcan/test?test=this
    /// http://reisys-hackathon2015-vulcan-dev.azurewebsites.net/interface/
    /// </summary>
    [RoutePrefix("api/vulcan")]
    public class VulcanApiController : ApiController
    {
        /// <summary>
        /// Read only version of the Vulcan Service
        /// </summary>
        private readonly IMLRegressionService mlRegressionService;
        /// <summary>
        /// init
        /// </summary>
        public VulcanApiController()
        {
            this.mlRegressionService = BindingsFactory.InstanceOf<IMLRegressionService>();
        }

        /// <summary>
        /// easy test
        /// </summary>
        /// <param name="test"></param>
        /// <returns>returns test to have a basic test to see if the service is up</returns>
        [Route("test")]
        [HttpGet]
        public string Test(string test)
        {

            return "anth";
        }

        /// <summary>
        /// Get disasters by route.
        /// </summary>
        /// <returns> returns JObject of the disaster data</returns>
        [Route("GetDisasterSumAndCountData")]
        [HttpGet]
        public JObject GetDisasterSumAndCountData()
        {
            var o = JObject.Parse(mlRegressionService.GetDisasterSumAndCountsData());
            
            return o;
        }

        /// <summary>
        /// get by incident
        /// </summary>
        /// <returns> returns JObject of the disaster data</returns>
        [Route("GetCountByIncidentType")]
        [HttpGet]
        public JObject GetCountByIncidentType()
        {
            var o = JObject.Parse(mlRegressionService.GetCountByIncidentType());
            return o;
        }

        /// <summary>
        /// get incident
        /// </summary>
        /// <returns> returns JObject of the disaster data</returns>
        [Route("GetIncidentCountByYear")]
        [HttpGet]
        public JObject GetIncidentCountByYear()
        {
            var o = JObject.Parse(mlRegressionService.GetIncidentCountByYear());
            return o;
        }

        /// <summary>
        /// get disaster prediction
        /// </summary>
        /// <param name="disasterType"></param>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <returns> returns JObject of the predited result</returns>
        [Route("GetDisasterPrediction")]
        [HttpGet]
        public JObject GetDisasterPrediction(string disasterType, string startDate, string endDate)
        {            
            var o = JObject.Parse(mlRegressionService.DisasterManagementPrediction(disasterType, startDate, endDate));
            return o;
        }

        /// <summary>
        /// get assistance
        /// </summary>
        /// <returns> returns JObject of the disaster data</returns>
        [Route("AssistanceSummaryByYear")]
        [HttpGet]
        public JObject AssistanceSummaryByYear()
        {
            var o = JObject.Parse(mlRegressionService.AssistanceSummaryByYear());
            return o;
        }

        /// <summary>
        /// Gets the
        /// </summary>
        /// <returns> returns JObject of the disaster data</returns>
        [Route("DisasterCountAndSumByState")]
        [HttpGet]
        public JObject DisasterCountAndSumByState() {
            var o = JObject.Parse(mlRegressionService.GetDisasterCountAndSumByState());
            return o;
        }


    }
}