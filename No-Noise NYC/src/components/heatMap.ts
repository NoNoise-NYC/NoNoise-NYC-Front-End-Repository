import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import * as d3 from 'd3';

import "leaflet.heat"

@Component({
  selector: 'app-heatmap',
  template: `
    <div id="map" #mapContainer style="height: 100vh;"></div>
  `,
  styles: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef;

noiseData: any[] = [];
map = L.map('map').setView([51.505, -0.09], 13);

heatLayer = L.heatLayer([
  [50.5, 30.5, 0.2], // lat, lng, intensity
  [50.6, 30.4, 0.5]

], {radius: 25}).addTo(this.map);



constructor() {
  
  this.mapContainer = new ElementRef(this.map);
}

ngOnInit(): void {
  this.map = L.map(this.mapContainer.nativeElement).setView([40.730610, -73.935242], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(this.map);

  d3.json('https://data.cityofnewyork.us/resource/be8n-q3nj.json?$$app_token=9MbDY0sSqTMCA5eUolm0MScll').then((data: any) => {
    const castData = data as any[];
    this.noiseData = castData;
    this.createHeatMap();
   
  });
}

createHeatMap() {
  const aggregatedData = this.aggregateData();

  this.heatLayer = (L as any).HeatLayer(aggregatedData, {
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
  const zipCodeFrequency: { [key: string]: number } = {};

  this.noiseData.forEach(complaint => {
    const zipCode = complaint.incident_zip;
    if (!zipCodeFrequency[zipCode]) {
      zipCodeFrequency[zipCode] = 0;
    }
    zipCodeFrequency[zipCode]++;
  });

  const aggregatedData = [];

  for (const zipCode in zipCodeFrequency) {
    const zipCodeString: string = zipCode;
    aggregatedData.push([zipCodeString, zipCodeFrequency[zipCodeString]]);
  }
  return aggregatedData;
}

}
