module ReiSysHackathon.Vulcan.Model {
    export class DisasterPredictionModel {
        /* Holds the Disaster Prediction Model  */
        constructor(public DisasterType: string,
            public StartDate: string,
            public EndDate: string) {
        }

    }
}