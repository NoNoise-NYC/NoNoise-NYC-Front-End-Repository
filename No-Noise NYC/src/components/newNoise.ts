import { Component } from '@angular/core';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { GeoJSON } from 'ol/format';
import { Fill, Stroke, Style } from 'ol/style';

@Component({
  selector: 'app-nyc-noise-map',
  template: `
    <div id="map" class="map"></div>
  `,
  styles: [`
    .map {
      width: 100%;
      height: 500px;
    }
  `]
})
export class NycNoiseMapComponent {
  map: Map;

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: new VectorSource({
            url: 'assets/nyc-zip-codes-noise-density.json',
            format: new GeoJSON()
          }),
          style: this.createStyleFunction()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  createStyleFunction() {
    return (feature) => {
      let noiseDensity = feature.get('noise_density');
      let color = '#ccc';
      if (noiseDensity < 20) {
        color = '#2ecc71';
      } else if (noiseDensity < 50) {
        color = '#f1c40f';
      } else if (noiseDensity < 100) {
        color = '#e67e22';
      } else if (noiseDensity < 200) {
        color = '#e74c3c';
      } else {
        color = '#c0392b';
      }
      return new Style({
        fill: new Fill({
          color: color
        }),
        stroke: new Stroke({
          color: '#333',
          width: 1
        })
      });
    };
  }
}
