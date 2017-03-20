import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../services/';

@Component({
	selector: 'user-info',
	templateUrl: 'user-info.component.html',
	encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnInit {
	private isAuthenticated: boolean;
	constructor(
		private authorizationService: AuthorizationService
	) {
		this.isAuthenticated = false;
	}

	ngOnInit() {
		this.isAuthenticated = this.authorizationService.IsAuthenticated();
	}
}
