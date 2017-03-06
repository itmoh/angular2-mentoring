import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './login.routes';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		routes,
		CommonModule
	],
	providers: []
})
export class LoginModule {
	constructor() {
	}
}
