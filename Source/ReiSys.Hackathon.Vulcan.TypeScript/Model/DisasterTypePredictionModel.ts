module ReiSysHackathon.Vulcan.Model {
    export class DisasterTypePredictionModel {
        /* Holds the Disaster Prediction Model  */
        constructor(public State: string,
            public County: string,
            public Year: string) {
        }

    }
}