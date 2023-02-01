import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
    <footer class='footer' [ngStyle]="{'position': 'fixed', 'bottom': '0', 'width':'100%', 'background-color': '#FFFFFF', 'height': '500px'}">
      <!-- First Section -->
    </footer>

    <footer class='footer' [ngStyle]="{'position': 'fixed', 'bottom': '0', 'width':'100%', 'background-color': '#EFEFEF', 'height': '500px'}">
      <!-- Second Section -->
    </footer>
  `,
  styleUrls: ['../theme.scss']
  })
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
