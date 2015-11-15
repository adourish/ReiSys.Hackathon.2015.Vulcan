using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;
using System.Xml.Linq;
using System.Xml;
using System.Data;
using ReiSys.Hackathon.Vulcan.Domain.Entities;
using ReiSys.Hackathon.Vulcan.Services.Services;
using ReiSys.Hackathon.Vulcan.Services;
using ReiSys.Hackathon.Vulcan.Services.Data;
using ReiSys.Hackathon.Vulcan.Core.Constants;

namespace ReiSys.Hackathon.Vulcan.Service.Services
{
    /// <summary>
    /// regression service
    /// </summary>
    public class MLRegressionService : IMLRegressionService
    {
        private readonly IMLAPIClientService mlAPIClientService;
        /// <summary>
        /// init
        /// </summary>
        public MLRegressionService()
        {
            mlAPIClientService = BindingsFactory.InstanceOf<IMLAPIClientService>();
        }

        /// <summary>
        /// test predictive experiment
        /// </summary>
        /// <returns></returns>
        public string DMLMPredictiveExperiment()
        {

            var scoreRequest = new
            {
                inputs = new Dictionary<string, StringTable>() {
                        {
                            "dmlm-p-in",
                            new StringTable()
                            {
                                ColumnNames = new string[] {"Declaration Data Set", "Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6", "Column 7", "Column 8", "Column 9", "Column 10", "Column 11", "Column 12", "Column 13", "Column 14"},
                                Values = new string[,] {  { "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value" },  { "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value", "value" },  }
                            }
                        } },
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };

            var result = mlAPIClientService.GetClientData(scoreRequest, MLConstants.DMLMPBaseAddress, MLConstants.APIKey);

            return result;
        }





        /// <summary>
        /// disaster sum
        /// </summary>
        /// <returns></returns>
        public string GetDisasterSumAndCountsData()
        {
            var scoreRequest = new
            {
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };
            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.DisasterCountAndSumDataRequestURI,
                MLConstants.DisasterCountAndSumDataAPIKey);

            return result;
        }

        /// <summary>
        /// Gets the Disaster count and sum by state
        /// </summary>
        /// <returns></returns>
        public string GetDisasterCountAndSumByState()
        {
            var scoreRequest = new
            {
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };
            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.DisasterCountAndSumByStateDataRequestURI,
                MLConstants.DisasterCountAndSumByStateDataAPIKey);

            return result;
        }

        /// <summary>
        /// count by incident
        /// </summary>
        /// <returns></returns>
        public string GetCountByIncidentType()
        {
            var scoreRequest = new
            {
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };
            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.CountByIncidentTypeRequestURI,
                MLConstants.CountByIncidentTypeAPIKey);

            return result;
        }

        /// <summary>
        /// incident by year
        /// </summary>
        /// <returns></returns>
        public string GetIncidentCountByYear()
        {
            var scoreRequest = new
            {
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };
            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.IncidentCountByYearRequestURI,
                MLConstants.IncidentCountByYearAPIKey);

            //string result = "{ \"date\": \"20150101\", \"Hurricane\": \"1000\", \"Severe Storm\": \"1500\", \"Earthquake\": \"500\" },{ \"date\": \"20140101\", \"Hurricane\": \"500\", \"Severe Storm\": \"800\", \"Earthquake\": \"1500\" },{ \"date\": \"20130101\", \"Hurricane\": \"1500\", \"Severe Storm\": \"500\", \"Earthquake\": \"1000\" }";
            return result;
        }

        /// <summary>
        /// Disaster prediction
        /// </summary>
        /// <param name="disasterType"></param>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <returns></returns>
        public string DisasterManagementPrediction(string disasterType, string startDate, string endDate)
        {
            var scoreRequest = new
            {

                Inputs = new Dictionary<string, StringTable>() {
                        {
                            "input1",
                            new StringTable()
                            {
                                ColumnNames = new string[] {"9", "10", "11"},
                                Values = new string[,] { { disasterType, startDate, endDate }  }
                            }
                        },
                },
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };


            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.DisasterManagementPredictionRequestURI,
                MLConstants.DisasterManagementPredictionAPIKey);

            return result;
        }

        /// <summary>
        /// get assistence
        /// </summary>
        /// <returns></returns>
        public string AssistanceSummaryByYear()
        {
            var scoreRequest = new
            {
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };

            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.AssistanceSummaryByYearRequestURI,
                MLConstants.AssistanceSummaryByYearAPIKey);

            return result;
        }


        /// <summary>
        /// Get Prediction by Incident Type
        /// </summary>
        /// <param name="state"></param>
        /// <param name="county"></param>
        /// <param name="year"></param>
        /// <returns></returns>
        public string GetPredictionByIncidentType(string state, string county, string year)
        {
            var scoreRequest = new
            {

                Inputs = new Dictionary<string, StringTable>() {
                        {
                            "input1",
                            new StringTable()
                            {
                                ColumnNames = new string[] {"State", "County", "Disaster Number", "Declaration Date"},
                                Values = new string[,] { { state, county, "1239", "01/01/"+year }  }
                            }
                        },
                },
                GlobalParameters = new Dictionary<string, string>()
                {
                }
            };


            var result = mlAPIClientService.GetClientData(scoreRequest,
                MLConstants.PredictionByIncidentTypeRequestURI,
                MLConstants.PredictionByIncidentTypeAPIKey);

            return result;
        }

    }
}
