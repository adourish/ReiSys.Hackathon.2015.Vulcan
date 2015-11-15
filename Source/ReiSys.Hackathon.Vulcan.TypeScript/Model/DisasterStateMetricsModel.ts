module ReiSysHackathon.Vulcan.Model {
    export class DisasterStateMetricsModel {
        constructor(public year: number, public state: string, public disasterType: string, public incidentCount: number, public cost: number) { }
    }
}