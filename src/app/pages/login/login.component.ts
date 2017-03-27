import { Component, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../../core/services';
import { Router } from '@angular/router';
import { LoginInfo } from '../../core/entities/loginInfo'

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	template: require('./login.template.html'),
	styles: [
		require('./login.component.scss')
	],
})
export class LoginComponent {
	private model;

	constructor(
		private authorizationService: AuthorizationService,
		private router: Router,
	) {
		this.model = new LoginInfo(null, null);
	}

	onSubmit() {
		this.authorizationService.login(this.model.login, this.model.password);
		this.router.navigate(['/']);
	}
}
