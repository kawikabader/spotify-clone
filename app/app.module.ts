import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

import { routing } from './app.routing';

@NgModule({
	imports: [BrowserModule, routing],
	declarations: [AppComponent,
		SearchComponent,
		NavbarComponent,
		AboutComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
