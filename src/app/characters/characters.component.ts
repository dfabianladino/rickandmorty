import { Component, OnInit } from '@angular/core';
import { CharatesService } from '../service/charates.service';
import { Router } from '@angular/router';
import { first, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  imagesAll: any;
  error: any;

  constructor(private charactes: CharatesService, private router: Router) {
    charactes.getAllCharacters().subscribe(result => {
      const data = JSON.parse(result._body);
      this.imagesAll = data.results;
      console.log(this.imagesAll);
    });
  }

  getdatos(id) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.charactes.getDetailCharacters(id)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/detail']);
        },
        error => {
          this.error = error;
        });
    console.log(id);
  }

  ngOnInit() {}

}
