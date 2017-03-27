import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { routes } from './login.routes';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		routes,
		CommonModule,
		FormsModule,
	],
	providers: []
})
export class LoginModule {
	constructor() {
	}
}
