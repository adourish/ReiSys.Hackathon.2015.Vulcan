module ReiSysHackathon.Vulcan.Controller {
    export class VulcanController {
        private vulcanService: ReiSysHackathon.Vulcan.Service.VulcanService;
        constructor() {
            this.vulcanService = new ReiSysHackathon.Vulcan.Service.VulcanService();
        }

        /* Gets the */
        GetContext(): any {
            return this.vulcanService.GetContext();
        }

        /* Get the count by incident type */
        GetCountByIncidentType() {
            return this.vulcanService.GetCountByIncidentType();
        }

        /* Gets the summary counts*/
        GetDisasterSumAndCountData() {
            var sumAndCount = this.vulcanService.GetDisasterSumAndCountData();
            var output = JSON.stringify(sumAndCount.Results.output1);
            var o1 = JSON.parse(output).value.Values[0];
            $('#divCountOfDisasterTill2014').html(o1[0])//0;
            $('#divCountOfDisaster2015').html(o1[1]); //1
            $('#divSumOfMoneySpentTill2014').html(o1[3]); //3
            $('#divSumOfMoneySpent2015').html(o1[2]); //2
        }

        /* Gets the counts of incidents by year*/
        GetIncidentCountByYear() {
            return this.vulcanService.GetIncidentCountByYear();
        }

        /* Gets the assistance summary (grant amount) by year*/
        AssistanceSummaryByYear() {
            return this.vulcanService.AssistanceSummaryByYear();
        }

        /* Gets Disaster information (count an dcost) by state for a given year and type of disaster*/
        GetDisasterCountAndSumByState() {
            return this.vulcanService.GetDisasterCountAndSumByState();
        }

        /* Gets the disaster prediction results */
        GetDisasterPrediction() {
            var dpm = new ReiSysHackathon.Vulcan.Model.DisasterPredictionModel($('#txtDisasterType').val(), $('#txtStartDate').val(), $('#txtEndDate').val());
            var result = this.vulcanService.GetDisasterPrediction(dpm);
            var output = JSON.stringify(result.Results.output1);
            var o1 = JSON.parse(output).value.Values[0];                        
            $('#divOutput').html("Predicted State Indicator: " + o1);
            return ;
        }

        /* Gets the disaster prediction results */
        GetPredictionByIncidentType() {
            var dpm = new ReiSysHackathon.Vulcan.Model.DisasterTypePredictionModel($('#txtState').val(), $('#txtCounty').val(), $('#txtYear').val());
            var result = this.vulcanService.GetPredictionByIncidentType(dpm);
            var output = JSON.stringify(result.Results.Incident_Type);
            var o1 = JSON.parse(output).value.Values[0];
            $('#divOutputByType').html("Predicted Indicator: " + o1);
            return;
        }


    }
}