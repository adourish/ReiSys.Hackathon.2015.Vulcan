module ReiSysHackathon.Vulcan.Model {
    export class DisasterTypeModel {
        constructor(
            public date: string,
            public Earthquake: string,
            public Typhoon: string) { }
    }

    export class DisasterTypeModelCollection {
        public diasterTypeModelItems: Array<DisasterTypeModel>
        constructor() {
            this.diasterTypeModelItems = new Array<DisasterTypeModel>();
            this.diasterTypeModelItems.push(new DisasterTypeModel("20150101", "1000", "1500"));
            this.diasterTypeModelItems.push(new DisasterTypeModel("20140101", "500", "2000"));
        }
    }
}

    /*Earthquake
Typhoon
Other
Freezing
Coastal Storm
Drought
Tornado
Severe Ice Storm
Fire
Snow
Hurricane
Flood
Severe Storm(s)
*/