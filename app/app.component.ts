import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	providers: [SpotifyService]
})
export class AppComponent { }
