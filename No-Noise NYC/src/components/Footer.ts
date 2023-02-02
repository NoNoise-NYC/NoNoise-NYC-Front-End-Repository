import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
    <footer class='footer' [ngStyle]="{'position': 'relative', 'bottom': '0', 'margin':'auto', 'width':'100%', 'background-color': '#FFFFFF', 'height': '100px'}">
      <div>
        <button>Copyright NoNoise NYC 2023</button>
        <button>Contact Us</button>
      </div>
    </footer>
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
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}