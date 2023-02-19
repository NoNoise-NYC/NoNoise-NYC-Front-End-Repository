import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { scaleSequential } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';
import * as d3 from 'd3';


declare var google: any;

interface BoroughData {
  borough: string;
  noise_mean: number;
}

@Component({
  selector: 'app-heatmap',
  template: `
    <div id="map" style="height: 500px; width: 500px;"></div>
  `
})
export class HeatmapComponent implements AfterViewInit {
  map: any;
  boroughsData: BoroughData[];
  heatmap: any;

  constructor(private http: HttpClient) {
    this.boroughsData = {};
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.730610, lng: -73.935242 },
      zoom: 12
    });

    this.http.get('https://data.cityofnewyork.us/resource/be8n-q3nj.json').subscribe((data: any) => {
      const castData = data as any[];
      this.boroughsData = this.groupDataByBorough(castData);
      this.createChloroplethHeatMap();
    });
  }

  createChloroplethHeatMap(): void {
    const colorScale = scaleSequential(interpolateRdYlGn).domain([0, 100]);

    const heatmapData = this.boroughsData.map((borough: BoroughData) => {
      const boroughData = {
        location: new google.maps.LatLng(this.getBoroughCenter(borough.borough)),
        weight: borough.noise_mean
      };
      return boroughData;
    });

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 20,
      opacity: 0.7,
      maxIntensity: 100,
      gradient: [
        'blue', 'lime', 'red'
      ]
    });
    this.heatmap.setMap(this.map);
  }

  groupDataByBorough(noiseData: any[]): BoroughData[] {
    const nestedData = d3.nest()
      .key((d: any) => d.borough)
      .entries(noiseData);

    const boroughsData = nestedData.map((boroughData: any) => {
      const noiseLevels = boroughData.values.map((d: any) => +d.noise_level);
      const noiseMean = d3.mean(noiseLevels);
      return {
        borough: boroughData.key,
        noise_mean: noiseMean
      };
    });

    return boroughsData;
  }

  getBoroughCenter(borough: string): { lat: number, lng: number } {
    const boroughCenters = {
      'Bronx': { lat: 40.8448, lng: -73.8648 },
      'Brooklyn': { lat: 40.6782, lng: -73.9442 },
      'Manhattan': { lat: 40.7831, lng: -73.9712 },
      'Queens': { lat: 40.7282, lng: -73.7949 },
      'Staten Island': { lat: 40.5795, lng: -74.1502 }
    };
    return boroughCenters[borough];
  }
}
