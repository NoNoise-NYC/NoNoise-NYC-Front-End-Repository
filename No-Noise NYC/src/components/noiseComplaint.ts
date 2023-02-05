import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { nest } from 'd3-collection';

@Component({
  selector: 'app-noise-complaints-map',
  template: `
    <div id="map"></div>
  `,
  styles: [`
    #map {
      width: 100%;
      height: 500px;
      
    }
  `]
})
export class NoiseComplaintsMapComponent implements OnInit {
  zipcodes: any = [];
  complaints: any;

  constructor() {}

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {


    async function fetchData(): Promise<unknown[]> {
      const complaintsData = await fetch('https://data.cityofnewyork.us/resource/be8n-q3nj.json?$$app_token=9MbDY0sSqTMCA5eUolm0MScll');
      const data = await complaintsData.json();
      return data;
    }
    
    async function processData() {
      const complaintsDataArray = await fetchData();
      // processing code here
    }
    
    processData();
    
    try {
      const [ geojsonData] = await Promise.all([
        // d3.json('https://data.cityofnewyork.us/resource/be8n-q3nj.json?$$app_token=9MbDY0sSqTMCA5eUolm0MScll'),
        d3.json('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NY/ny.geo.json')
      ]);
  
    
      console.log(geojsonData);
      this.zipcodes = nest()
        // .key((d: any) => d.zipcode)
        // .rollup((v: any) => v.length)
        // .entries(complaintsData)
        // .map((d: any) => ({ zip: d.key, count: d.value }));
      this.complaints = geojsonData;
      this.render();
    } catch (error) {
      console.error(error);
    }
  }
  

  private render() {
    const width = 500, height = 500;

    const projection = d3.geoMercator()
      .scale(75000)
      .center([-73.94, 40.70])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const svg = d3.select('#map')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('path')
      .data(this.complaints.features)
      .enter()
      .append('path')
      .attr('d', path as any)
      .style('fill', '#ccc')
      .style('stroke', '#fff')
      .style('stroke-width', 1);

    svg.selectAll('circle')
      .data(this.zipcodes)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => {
        const coords = projection([d.zip, d.count]);
        return coords![0];
      })
      
    }
  }