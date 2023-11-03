import { Component } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  youtubeIcon=faYoutube;
  cartIcon=faCartPlus;
}
