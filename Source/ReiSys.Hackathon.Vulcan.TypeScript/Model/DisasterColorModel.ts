module ReiSysHackathon.Vulcan.Model {
    export class DisasterColorModel {
        constructor(public id: string, public minColor: string, public maxColor: string) { }
    }
    /* Contains the coloction for the disaster type */
    export class DisasterColorCollectionModel {
        public disasterColorModelItems: Array<DisasterColorModel>
        constructor() {
            this.disasterColorModelItems = new Array<DisasterColorModel>();
            this.disasterColorModelItems.push(new DisasterColorModel("Hurricane", "#ffffcc", "#CC00FF"));
            this.disasterColorModelItems.push(new DisasterColorModel("Severe Storm(s)", "#ffffcc", "#FFFF00"));
            this.disasterColorModelItems.push(new DisasterColorModel("Fire", "#6D0019", "#FF003C"));
            this.disasterColorModelItems.push(new DisasterColorModel("Flood", "#ffffcc", "#0000FF"));
            this.disasterColorModelItems.push(new DisasterColorModel("Severe Ice Storm", "#ffffcc", "#00FFFF"));
            this.disasterColorModelItems.push(new DisasterColorModel("Snow", "#03588C", "#F0F2F2"));
            this.disasterColorModelItems.push(new DisasterColorModel("Overall", "#ffffcc", "#FFA200"));
        }

    }
}

