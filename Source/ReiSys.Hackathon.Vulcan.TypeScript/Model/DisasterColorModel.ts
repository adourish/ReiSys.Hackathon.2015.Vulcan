module ReiSysHackathon.Vulcan.Model {
    export class DisasterColorModel {
        constructor(public id: string, public minColor: string, public maxColor: string) { }
    }

    export class DisasterColorCollectionModel {
        public disasterColorModelItems: Array<DisasterColorModel>
        constructor() {
            this.disasterColorModelItems = new Array<DisasterColorModel>();
            this.disasterColorModelItems.push(new DisasterColorModel("Hurricane", "#ffffcc", "#CC00FF"));
            this.disasterColorModelItems.push(new DisasterColorModel("Severe Storm(s)", "#ffffcc", "#FFFF00"));
            this.disasterColorModelItems.push(new DisasterColorModel("Fire", "#ffffcc", "#800026"));
            this.disasterColorModelItems.push(new DisasterColorModel("Flood", "#ffffcc", "#0000FF"));
            this.disasterColorModelItems.push(new DisasterColorModel("Severe Ice Storm", "#ffffcc", "#00FFFF"));
            this.disasterColorModelItems.push(new DisasterColorModel("Snow", "#ffffcc", "#000000"));
            this.disasterColorModelItems.push(new DisasterColorModel("Overall", "#ffffcc", "#FFA200"));
        }

    }
}

