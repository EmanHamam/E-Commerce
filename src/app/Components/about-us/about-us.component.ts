import { Component, OnInit } from '@angular/core';
import { Ifeature } from 'src/app/Models/ifeature';
import { FeaturesService } from 'src/app/Services/features.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  features: Ifeature[] = [];
  constructor(public featureService: FeaturesService) {}
  ngOnInit(): void {
    this.features = this.featureService.getAllFeatures();
  }
}
