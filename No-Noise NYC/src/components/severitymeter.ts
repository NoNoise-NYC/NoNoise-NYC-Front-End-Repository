import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-severity-meter',
  template: `
    <form style="position: absolute; top: 120px; height: 200px; left: 500px; background-color: white;display: flex; justify-content: center;"(ngSubmit)="onSubmit()">
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
    <img src="./assets/images/npise complaints.png" alt="logo" class="logo2">
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
  `],
  styleUrls: ['../theme.scss']
})
export class SeverityMeterComponent implements OnInit {
  complaint = {
    title: '',
    description: '',
    zipCode: '',
    severity: 1,
    userId: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Get the userId of the currently logged in user
   
  }

  onSubmit() {
    this.http.post('http://localhost:4005/complaints', this.complaint)
      .subscribe(res => console.log(res));
  }
}
