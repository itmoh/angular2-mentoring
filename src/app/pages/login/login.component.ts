import { Component, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../../core/services';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	template: require('./login.template.html'),
	styles: [
		require('./login.component.scss')
	],
})
export class LoginComponent {
	constructor(
		private authorizationService: AuthorizationService
	) {
	}

	onLoginClick() {
		this.authorizationService.login('test', 'test');
	}
}
