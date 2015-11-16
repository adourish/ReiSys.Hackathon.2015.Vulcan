module ReiSysHackathon.Vulcan.Controller {
    export class USStatesController {

        constructor() {

        }

       
        /* draw states on id #statesvg */
        private stateContainerDivId = '#statesvg';
        
        /* takes in the collection of states to draw and what color it should be*/
        draw(data: Array<ReiSysHackathon.Vulcan.Model.StateDrawModel>) {
            var stateData = new ReiSysHackathon.Vulcan.Model.StatePositionCollection();
            //calcualte page size
            var stateContainer = $(this.stateContainerDivId);
            stateContainer.html('');
            var standardHeight = 600;
            var standardWidth = 960;
            var containerHeight = stateContainer.height();
            var containerWidth = stateContainer.width();
            var heightRatio = containerHeight / standardHeight;
            var widthRatio = containerWidth / standardWidth;
            d3.select(this.stateContainerDivId).selectAll(".state")
                .data(stateData.statePostionItems).enter().append("path").attr("class", "state")
                .attr("d", function (d: ReiSysHackathon.Vulcan.Model.StatePostitionModel) {
                    var distance = d.buildState(heightRatio, widthRatio);
                    return distance;
                })
                .style("fill", function (d: ReiSysHackathon.Vulcan.Model.StatePostitionModel) {
                    var color = "#ffffff";
                    var dataLenth = data.length;
                    for (var i = 0; i < dataLenth; i++) {
                        if (data[i].id === d.id) {
                            color = data[i].color;
                        }
                    }
                    return color;
                });
        }

        /* taks in the collection to be drawn and determines the color it should be filled and than draws and fills the states */
        render(valueCollection: any[], lightColor: string, darkColor: string, maxValue: number) {
            var val = 10;
            var drawCollection = new Array<ReiSysHackathon.Vulcan.Model.StateDrawModel>();
            valueCollection.forEach(function (item) {
                drawCollection.push(new ReiSysHackathon.Vulcan.Model.StateDrawModel(item.id, d3.interpolate(lightColor, darkColor)(item.value / maxValue)));
            });
            this.draw(drawCollection);
        }



    }
}