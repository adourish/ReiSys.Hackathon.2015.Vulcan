/// <reference path="../external/angular.d.ts" />
module ReiSysHackathon.Vulcan.Controller {
    export class DisasterStateController {
        private usStatesController: ReiSysHackathon.Vulcan.Controller.USStatesController;
        private disasterColorCollection: ReiSysHackathon.Vulcan.Model.DisasterColorCollectionModel;
        private vulcanController: ReiSysHackathon.Vulcan.Controller.VulcanController;

        constructor() {
            this.usStatesController = new ReiSysHackathon.Vulcan.Controller.USStatesController();
            this.disasterColorCollection = new ReiSysHackathon.Vulcan.Model.DisasterColorCollectionModel();
            this.vulcanController = new ReiSysHackathon.Vulcan.Controller.VulcanController();
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
            var data = this.getData(disasterType, year, dimension);
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

        private storedSet: Array<ReiSysHackathon.Vulcan.Model.DisasterStateMetricsModel>;

        private createCleanDataSet(serverData: any) {
            this.storedSet = new Array<ReiSysHackathon.Vulcan.Model.DisasterStateMetricsModel>();
            var disasterCount = serverData.length;
            for (var i = 0; i < disasterCount; i++) {
                var currentItemInSet = serverData[i];
                this.storedSet.push(new ReiSysHackathon.Vulcan.Model.DisasterStateMetricsModel(currentItemInSet[0], currentItemInSet[1], currentItemInSet[2], currentItemInSet[3], currentItemInSet[4]));
            }
            console.log('Thomas Look here');
        }


        private getCost(disasterType: string, year: number) {
            var storedSetCount = this.storedSet.length;
            var data = new Array<any>();
            for (var i = 0; i < storedSetCount; i++) {
                var currentItem = this.storedSet[i];
                if (currentItem.disasterType === disasterType && currentItem.year === year) {
                    data.push({ id: currentItem.state, value: currentItem.cost });
                }
            }
            return data;
        }

        private getIncidentCount(disasterType: string, year: number) {
            var storedSetCount = this.storedSet.length;
            var data = new Array<any>();
            for (var i = 0; i < storedSetCount; i++) {
                var currentItem = this.storedSet[i];
                if (currentItem.disasterType === disasterType && currentItem.year === year) {
                    data.push({ id: currentItem.state, value: currentItem.incidentCount });
                }
            }
            return data;
        }

        private getData(disasterType: string, year: number, dimension: string) {
            if (this.storedSet === null || this.storedSet === undefined) {
                var serverResultSet = this.vulcanController.GetDisasterCountAndSumByState();
                var serverData = serverResultSet.Results.output1.value.Values;
                this.createCleanDataSet(serverData);

            }
            var data = new Array<any>();
            console.log(dimension);
            if (dimension === 'Count') {
                data = this.getIncidentCount(disasterType, year);
            } else if (dimension === 'Cost') {
                data = this.getCost(disasterType, year);
            } else {
                //Would be unsupported data types
            }

            return data;
        }

        private setUpSelection() {
            var selectCtrl = $('#yearStateDD');
            var startDate = 2015;
            var endDate = 1993;
            for (var i = startDate; i >= endDate; i--) {
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
var disasterStateController: ReiSysHackathon.Vulcan.Controller.DisasterStateController;
$(document).ready(function () {
    disasterStateController = new ReiSysHackathon.Vulcan.Controller.DisasterStateController();

});
