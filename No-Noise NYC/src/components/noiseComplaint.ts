import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as mapboxgl from 'mapbox-gl';
import { nest } from 'd3-collection';

@Component({
  selector: 'app-noise-complaints-map',
  template: `
    <div id="map"></div>
    <app-severity-meter></app-severity-meter>
  `,
  styles: [`
    #map {
      top:200px;
      background-color:aqua;
      width: 100%;
      height: 500px;
<<<<<<< HEAD
      background-color: blue;
=======
>>>>>>> 56f756a4b0d913948fba2906268d20b3e2ecc173
    }
  `]
})
export class NoiseComplaintsMapComponent implements OnInit {
  zipcodes: any = [];
  complaints: any;

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {
    async function fetchComplaintsData(): Promise<unknown[]> {
      const complaintsData = await fetch('https://data.cityofnewyork.us/resource/be8n-q3nj.json?$$app_token=9MbDY0sSqTMCA5eUolm0MScll');
      const data = await complaintsData.json();
      return data;
    }

    async function processData() {
      const complaintsData = await fetchComplaintsData();
      // processing code here
    }

    processData();

    try {
      const [complaintsData, geojsonData] = await Promise.all([
        fetchComplaintsData(),
        d3.json('https://data.cityofnewyork.us/resource/qyv6-5ipu.json')
      ]);
      this.zipcodes = nest()
        .key((d: any) => d.Borough)
        .rollup((v: any) => v.length)
        .entries(complaintsData)
        .map((d: any) => ({ zip: d.key, count: d.value }));
      this.complaints = geojsonData;
      this.render();
    } catch (error) {
      console.error(error);
    }
  }

  private render() {

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-73.94, 40.70],
      zoom: 9
    });

    map.on('load', () => {
      map.addSource('ny', {
        type: 'geojson',
        data: this.complaints
      });

      map.addLayer({
        id: 'ny-fill',
        type: 'fill',
        source: 'ny',
        paint: {
          'fill-color': {
            property: 'count',
            stops: [
              [0, '#EBF0F8'],
              [10, '#D1E5F0'],
              [20, '#B3CCE2'],
              [30, '#88AAC7'],
              [40, '#548DA0'],
              [50, '#225A77']
            ]
          }
        }
      });
    });
  }
}

