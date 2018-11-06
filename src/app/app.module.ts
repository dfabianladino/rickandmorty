import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharatesService } from './service/charates.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DetailcharactersComponent } from './detailcharacters/detailcharacters.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'detail', component: DetailcharactersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    DetailcharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CharatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
