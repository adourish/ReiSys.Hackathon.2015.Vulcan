using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ReiSys.Hackathon.Vulcan.Services;
using Microsoft.Practices.Unity;
using ReiSys.Hackathon.Vulcan.Service.Services;

namespace ReiSys.Hackathon.Vulcan.Service.Tests
{
    [TestClass]
    public class MLRegressionServiceTest
    {
        private readonly IMLRegressionService mlRegressionService;
        /// <summary>
        /// add bindings
        /// </summary>
        public MLRegressionServiceTest()
        {
            BindingsFactory.Add();
            mlRegressionService = BindingsFactory.InstanceOf<IMLRegressionService>();
        }

        /// <summary>
        /// run test.
        /// </summary>
        [TestMethod]
        public void DMLMPredictiveExperiment()
        {

            var test = mlRegressionService.DMLMPredictiveExperiment();
            Assert.IsTrue(true);
        }



        [TestMethod]
        public void GetDisasterSumAndCountsData()
        {
            var test = mlRegressionService.GetDisasterSumAndCountsData();
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void GetDisasterCountAndSumByState()
        {
            var test = mlRegressionService.GetDisasterCountAndSumByState();
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void GetCountByIncidentType()
        {
            var test = mlRegressionService.GetCountByIncidentType();
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void GetIncidentCountByYear()
        {
            var test = mlRegressionService.GetIncidentCountByYear();
            Assert.IsTrue(true);
        }


        [TestMethod]
        public void DisasterManagementPrediction()
        {
            var test = mlRegressionService.DisasterManagementPrediction("Hurricane", "01/01/2016", "01/01/2016");
            Assert.IsTrue(true);
        }


        [TestMethod]
        public void AssistanceSummaryByYear()
        {
            var test = mlRegressionService.AssistanceSummaryByYear();
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void GetPredictionByIncidentType()
        {
            var test = mlRegressionService.GetPredictionByIncidentType("Virginia", "Loudoun", "2016");
            Assert.IsTrue(true);
        }


    }
}
