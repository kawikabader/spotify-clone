import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	moduleId: module.id,
	selector: 'album',
	templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
	id: string;
	album: Album[];

	constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

	}

	ngOnInit() {
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getAlbum(id)
					.subscribe(album => {
						this.album = album;
					})
			});
	}
}
