import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
selector: 'app-severity-meter',
template: `
<div #map class="map"></div>
<form (ngSubmit)="onSubmit()">
<div class="form-group">
<label>Title:</label>
<input type="text" [(ngModel)]="complaint.title" name="title" class="form-control">
</div>
<div class="form-group">
    <label>Description:</label>
    <input type="text" [(ngModel)]="complaint.description" name="description" class="form-control">
  </div>

  <div class="form-group">
    <label>Zip Code:</label>
    <input type="text" [(ngModel)]="complaint.zipCode" name="zipCode" class="form-control">
  </div>

  <div class="form-group">
    <label>Severity (1-10):</label>
    <div class="severity-meter">
      <input type="range" [(ngModel)]="complaint.severity" name="severity" min="1" max="10" class="form-control-range">
      <div class="severity-indicator">{{complaint.severity}}</div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`, 
styles: [`
  .severity-meter {
  display: flex;
  align-items: center;
  }
  .severity-indicator {
  margin-left: 0.5em;
  font-weight: bold;
  }
  .map {
  height: 400px;
  width: 400px;
  }
  `],
  styleUrls: ['../theme.scss']
  })
  export class SeverityMeterComponent implements OnInit {
    @ViewChild('map', { static: true }) mapElement!: ElementRef;

  
    private map: L.Map = L.map('map');


  private markerGroup!: L.LayerGroup;

  private defaultZoomLevel = 12;
  
  complaint = {
  title: '',
  description: '',
  zipCode: '',
  severity: 1,
  userId: ''
  };
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  // Initialize the map
  this.initMap();
  }
  
  onSubmit() {
  // Submit the complaint
  this.http.post('http://localhost:4005/complaints', this.complaint)
  .subscribe(res => {
  // Parse the zip code from the complaint
  const zipCode = this.complaint.zipCode;

  // Add a marker to the map at the zip code location
    this.addMarkerAtZipCode(zipCode);
  });
}

getUserId(){
this.http.get('http://localhost:4005/users')

}

private initMap() {
// Initialize the map
this.map = L.map(this.mapElement.nativeElement).setView([40.7128, -74.0060], this.defaultZoomLevel);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
maxZoom: 18,
}).addTo(this.map);

// Initialize the marker group
  this.markerGroup = L.layerGroup().addTo(this.map);
}

private addMarkerAtZipCode(zipCode: string) {
// Get the latitude and longitude for the zip code
this.http.get('https://nominatim.openstreetmap.org/search?format=json&postalcode=${zipCode}&country=US&limit=1')
.subscribe((data: any) => {
if (data.length > 0) {
const lat = data[0].lat;
const lon = data[0].lon;

// Add a marker to the map at the zip code location
      const marker = L.marker([lat, lon]).addTo(this.markerGroup);
      marker.bindPopup(`<b>${this.complaint.title}</b><br>${this.complaint.description}`).openPopup();
    } else {
      console.error(`Could not find location for zip code ${zipCode}`);
    }
  });
}
}