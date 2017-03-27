import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../../services/';
import { Router } from '@angular/router';

@Component({
	selector: 'user-info',
	templateUrl: 'user-info.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class UserInfoComponent implements OnInit {
	private isAuthenticated: boolean;
	private userInfo: string;
	private isAuthenticatedSubscription;
	private userInfoSubscription;

	constructor(
		private authorizationService: AuthorizationService,
		private router: Router,
	) {
		this.isAuthenticated = false;
	}

	ngOnInit() {
		this.authorizationService.IsAuthenticated().subscribe((result) => {
			this.isAuthenticated = result;
		});
		this.authorizationService.GetUserInfo().subscribe((result) => {
			this.userInfo = result;
		});
	}

	ngOnDestroy() {
		this.isAuthenticatedSubscription.unsubscribe();
		this.userInfoSubscription.unsubscribe();
	}

	logout() {
		this.authorizationService.logout();
		this.router.navigate(['/']);
	}
}
