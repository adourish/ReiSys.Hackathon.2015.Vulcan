module ReiSysHackathon.Vulcan.Service {
    export class VulcanService {
        private baseUrl: string;
        constructor() {
            var getUrl = window.location;
            this.baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            this.baseUrl = this.baseUrl.replace('/interface','');
        }

        // get context.
        GetContext() {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/getcontext',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };
       
            $.ajax(settings);

            return result;
        }

        // get disaster infoi
        GetDisasterSumAndCountData() {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/GetDisasterSumAndCountData',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };

            $.ajax(settings);

            return result;
        }

        // get count by incident
        GetCountByIncidentType() {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/GetDisasterSumAndCountData',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };

            $.ajax(settings);

            return result;
        }

        // get count by incident
        GetIncidentCountByYear() {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/GetIncidentCountByYear',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };

            $.ajax(settings);

            return result;
        }

        AssistanceSummaryByYear() {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/AssistanceSummaryByYear',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };

            $.ajax(settings);

            return result;
        }

        GetDisasterCountAndSumByState() {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/DisasterCountAndSumByState',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };

            $.ajax(settings);

            return result;
        }

        // get count by incident
        GetDisasterPrediction(dpm: ReiSysHackathon.Vulcan.Model.DisasterPredictionModel) {
            var result = undefined;
            var settings: JQueryAjaxSettings = {
                url: this.baseUrl + '/api/vulcan/GetDisasterPrediction?disasterType=' + dpm.DisasterType + '&startDate=' + dpm.StartDate + '&endDate=' + dpm.EndDate + '',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                error: function (xhr, status, error) { console.log(error); },
                success: function (data) { result = data; },
                jsonpCallback: 'itDoesntMatterNotAFunction',
            };

            $.ajax(settings);
            
            return result;
        }
        
           
    }
}