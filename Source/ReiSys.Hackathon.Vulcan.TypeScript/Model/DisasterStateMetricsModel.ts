module ReiSysHackathon.Vulcan.Model {
    /* Container for a year , by state, by disaster type  */
    export class DisasterStateMetricsModel {
        constructor(public year: number, public state: string, public disasterType: string, public incidentCount: number, public cost: number) { }
    }
}