import { Component, OnInit } from '@angular/core';
import { CharatesService } from '../service/charates.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any;

  constructor(private charates: CharatesService) {
  }

  ngOnInit() {
    this.charates.getHome().subscribe(result => {
      const data = JSON.parse(result._body);
      this.images = data;
      console.log(this.images);
    });
  }

}
