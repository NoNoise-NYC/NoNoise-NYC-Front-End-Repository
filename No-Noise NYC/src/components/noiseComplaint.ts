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

    private zipcodes: any = [];

  private complaints: any;

  constructor() { }

  ngOnInit() {
    d3.csv('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv')
      .then((data) => {
        const nestedData = nest().key(function(d:any) { return d.key; }).entries(data);

        this.zipcodes = nestedData
        //   .key((d: any) => d.ZipCode)
        //   .rollup((v: any) => v.length)
          .entries()
        //   .map((d: any) => ({zip: d.key, count: d.value}));
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });

    d3.json('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/NY/ny.geo.json')
      .then((data) => {
        this.complaints = data;
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private render() {
    if (!this.complaints || !this.zipcodes) {
      return;
    }

    const width = 500, height = 500;

    const projection = d3.geoMercator()
      .scale(75000)
      .center([-73.94, 40.70])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const svg = d3.select('#map').append('svg')
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
      .attr('cy', (d: any) => {
        const coords = projection([d.zip, d.count]);
        return !coords![1];
      })
      .attr('r', (d: any) => Math.sqrt(d.count) * 10)
    
      .style('fill', 'red')
      .style('opacity', 0.75);
  }
}
