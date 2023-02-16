import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as d3 from 'd3';
import { nest } from 'd3-collection';
import { scaleLinear } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';

import "leaflet.heat"


import { scaleSequential } from 'd3-scale';


interface BoroughData {
  borough: string;
  noise_mean: number;
}

@Component({
  selector: 'app-heatmap',
  template: `
    <div id="mapContainer" #mapContainer style="height: 100vh;"></div>
  `
})
export class HeatmapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  noiseData: any[] = [];
  map!: L.Map;
  geojson: any;

  heatLayer: L.HeatLayer | null = null;
 

  constructor() {}

  ngAfterViewInit(): void {
    this.heatLayer = L.heatLayer([], {
      radius: 20,
      blur: 15,
      gradient: {
        0.4: 'blue',
        0.65: 'lime',
        1: 'red'
      }
    });
    // this.map = L.map(this.mapContainer.nativeElement).setView([40.730610, -73.935242], 12);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    //   maxZoom: 18
    // }).addTo(this.map);
  
    // d3.json('https://data.cityofnewyork.us/resource/be8n-q3nj.json?$$app_token=9MbDY0sSqTMCA5eUolm0MScll').then((data: any) => {
    //   const castData = data as any[];
    //   this.noiseData = castData;
    //   this.createChloroplethHeatMap();
    // });
  }

  
  
  createBoroughsGeojson(boroughsData: BoroughData[]): any {
    const boroughsGeojson: any = {
      type: 'FeatureCollection',
      features: []
    };
  
    // Loop through boroughsData and create a GeoJSON feature for each borough
    for (const borough of boroughsData) {
      // Define the GeoJSON feature object
      const feature: any = {
        type: 'Feature',
        properties: {
          borough: borough.borough,
          noise_mean: borough.noise_mean
        },
        geometry: {
          // Replace this with the actual polygon geometry for the borough
          type: 'Polygon',
          coordinates: []
        }
      };
      // Add the feature to the GeoJSON object
      boroughsGeojson.features.push(feature);
    }
  
    return boroughsGeojson;
  }

  
  
  createColorScale(boroughsData: BoroughData[]) {
    const colorScale = scaleSequential().domain([0, 100]).interpolator((t) => `rgb(${t * 255}, 0, 0)`);


const color = colorScale(50);

    const min = d3.min(boroughsData, (d: BoroughData) => d.noise_mean) || 0;
    const max = d3.max(boroughsData, (d: BoroughData) => d.noise_mean) || 100;
  
    return "d3.scaleSequential(d3.interpolateRgb('blue', 'red')).domain([min, max]);"
  }
  
  createChloroplethHeatMap() {
    const boroughsData = this.groupDataByBorough();
    const colorScale = this.createColorScale(boroughsData);
  
    
    const boroughsGeojson = this.createBoroughsGeojson(boroughsData);
    boroughsGeojson.features.forEach((feature: any) => {
      const boroughName = feature.properties.borough;
      const boroughData = boroughsData.find((d: any) => d.borough === boroughName);
     
      
    });
  
    L.geoJSON(boroughsGeojson, {
      style: (feature: any) => {
        return {
          fillColor: feature.properties.color,
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      },
      onEachFeature: (feature: any, layer: L.Layer) => {
        layer.bindPopup(`
          <h3>${feature.properties.borough}</h3>
          <p>Mean noise level: ${feature.properties.noise_mean.toFixed(2)} decibels</p>
        `);
      }
    }).addTo(this.map);
  }
  
  groupDataByBorough(): BoroughData[] {
    const nestedData = d3
    .nest()
      .key((d: any) => d.borough)
      .entries(this.noiseData);
  
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
}
  