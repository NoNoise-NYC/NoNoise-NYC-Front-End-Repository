import { Component } from '@angular/core';
import * as L from 'leaflet';
import * as d3 from 'd3';

@Component({
  selector: 'app-heat-map',
  template: `
    <div id="map" style="height: 500px; width: 100%"></div>
  `,
  styles: [`
    #map {
      height: 100%;
      width: 100%;
    }
  `]
})
export class HeatMapComponent {

  map: any;
  heatLayer: any;
  noiseData: any[];

  constructor() { }

  ngOnInit() {
    this.initMap();
    this.getData();
  }

  initMap() {
    this.map = L.map('map').setView([40.7128, -74.0060], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  getData() {
    d3.json("https://data.cityofnewyork.us/resource/be8n-q3nj.json?$$app_token=9MbDY0sSqTMCA5eUolm0MScll").then(data => {
      this.noiseData = data;
      this.createHeatMap();
    });
  }

  createHeatMap() {
    const aggregatedData = this.aggregateData();

    this.heatLayer = L.heatLayer(aggregatedData, {
      radius: 20,
      blur: 15,
      gradient: {
        0.4: 'blue',
        0.65: 'lime',
        1: 'red'
      }
    }).addTo(this.map);
  }

  aggregateData() {
    const zipCodeFrequency = {};

    this.noiseData.forEach(complaint => {
      const zipCode = complaint.incident_zip;
      if (!zipCodeFrequency[zipCode]) {
        zipCodeFrequency[zipCode] = 0;
      }
      zipCodeFrequency[zipCode]++;
    });

    const aggregatedData = [];

    for (const zipCode in zipCodeFrequency) {
      aggregatedData.push([zipCode, zipCodeFrequency[zipCode]]);
    }

    return aggregatedData;
  }

}
