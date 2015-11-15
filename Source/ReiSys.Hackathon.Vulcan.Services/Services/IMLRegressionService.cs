using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace ReiSys.Hackathon.Vulcan.Service.Services
{
    public interface IMLRegressionService
    {

        string DMLMPredictiveExperiment();

        string GetDisasterSumAndCountsData();

        string GetCountByIncidentType();

        string GetIncidentCountByYear();

        string DisasterManagementPrediction(string disasterType, string startDate, string endDate);

        string AssistanceSummaryByYear();

        string GetPredictionByIncidentType(string state, string county, string year);

        string GetDisasterCountAndSumByState();
    }
}
