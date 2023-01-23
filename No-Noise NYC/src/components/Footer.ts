import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `<footer class='footer' [ngStyle]="{'position': 'fixed', 'bottom': '0', 'background-color': 'black'}"> <ul> <li><a [routerLink]='["/resources"]'>Resources</a></li> <li><a [routerLink]='["/contact"]'>Contact Us</a></li> </ul> </footer> `,
  styleUrls: ['../theme.scss']
  })
export class FooterComponent implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

}