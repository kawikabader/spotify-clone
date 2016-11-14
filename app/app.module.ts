import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';

import { routing } from './app.routing';

@NgModule({
	imports: [BrowserModule, routing, FormsModule, HttpModule],
	declarations: [AppComponent,
		SearchComponent,
		NavbarComponent,
		AboutComponent,
		ArtistComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
