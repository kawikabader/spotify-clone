import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	private searchUrl: string;

	constructor(private _http:Http) {
		
	}

	searchMusic(str:string, type='artist') {
		this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
		return this._http.get(this.searchUrl).map(res => res.json());
	}
}