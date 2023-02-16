import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
    <ng-template class='footer2' [ngStyle]="{'position': 'relative', 'bottom': '0', 'margin':'auto', 'width':'100%', 'background-color': 'black', 'height': '200px'}">
        <button>Copyright NoNoise NYC 2023</button>
        <button>Contact Us</button>
    </ng-template>
  `,
  styles: [`
    ::ng-deep .footer button {
      background-color: #FFFFFF;
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      transition: background-color 0.3s ease;
    }
    ::ng-deep .footer button:hover {
      background-color: #ccc;
      cursor: pointer;
    }
  `],
  
  styleUrls: ['../theme.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}