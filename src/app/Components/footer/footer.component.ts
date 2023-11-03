import { Component } from '@angular/core';
import { faFacebook} from '@fortawesome/free-brands-svg-icons'; 
import { faTwitter} from '@fortawesome/free-brands-svg-icons'; 
import { faInstagram} from '@fortawesome/free-brands-svg-icons'; 
import { faPinterest} from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  facebook=faFacebook; 
  twitter=faTwitter;
  insta=faInstagram;
  pinterest=faPinterest;

}
