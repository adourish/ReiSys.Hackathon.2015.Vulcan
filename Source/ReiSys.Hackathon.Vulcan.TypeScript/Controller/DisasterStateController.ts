/// <reference path="../external/angular.d.ts" />
module ReiSysHackathon.Vulcan.Controller {
    export class DisasterStateController {
        private usStatesController: ReiSysHackathon.Vulcan.Controller.USStatesController;
        private disasterColorCollection: ReiSysHackathon.Vulcan.Model.DisasterColorCollectionModel;
        constructor() {
            this.usStatesController = new ReiSysHackathon.Vulcan.Controller.USStatesController();
            this.disasterColorCollection = new ReiSysHackathon.Vulcan.Model.DisasterColorCollectionModel();
        }

        start() {
            this.setUpSelection();
            this.dataChanged();
            $(window).resize(function () {
                disasterStateController.dataChanged();
            });
        }



        dataChanged() {
            var disasterType = $('#disasterTypeStateDD').val();
            var year = $('#yearStateDD').val();
            var dimension = $('#dimensionStateDD').val();
            //collectData from selections
            //with disaster type get colors and determine max value
            var data = this.getData();
            var minColor = "#ffffcc";
            var maxColor = "#800026"
            var disasterTypeCount = this.disasterColorCollection.disasterColorModelItems.length;
            for (var i = 0; i < disasterTypeCount; i++) {
                var current = this.disasterColorCollection.disasterColorModelItems[i];
                if (current.id === disasterType) {
                    console.log(disasterType);
                    minColor = current.minColor;
                    maxColor = current.maxColor;
                }
            }
            var maxValue = 0;
            data.forEach(function (item) {
                if (item.value > maxValue) {
                    maxValue = item.value;
                }
            });



            this.usStatesController.render(data, minColor, maxColor, maxValue);
        }

        private getData() {

            var data = new Array<any>();
            ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
                "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
                "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
                "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
                "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
                .forEach(function (d) {
                    var low = Math.round(100 * Math.random());
                    data.push({ id: d, value: low });
                });
            return data;
        }

        private setUpSelection() {
            var selectCtrl = $('#yearStateDD');
            var startDate = 2015;
            var endDate = 1953;
            selectCtrl.append($("<option></option>")
                .attr("value", "Overall")
                .text("Overall"));
            for (var i = 2015; i >= 1953; i--) {
                selectCtrl.append($("<option></option>")
                    .attr("value", i)
                    .text(i));
            }
        }

        disasterTypeDropdownChange(value: string) {
            this.dataChanged();
        }

        yearDropdownChange(value: string) {
            this.dataChanged();
        }

        dimensionDropdownChange(value: string) {
            this.dataChanged();
        }



    }
}
var disasterStateController: ReiSysHackathon.Vulcan.Controller.DisasterStateController ;
$(document).ready(function () {
    disasterStateController = new ReiSysHackathon.Vulcan.Controller.DisasterStateController();

});
