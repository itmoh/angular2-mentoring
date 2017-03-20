import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
	AuthorizationService,
} from '../../services';

import { HeaderComponent } from './header.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
	declarations: [
		HeaderComponent,
		UserInfoComponent,
	],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],

	providers: [
		AuthorizationService,
	]
})
export class HeaderModule {
	constructor() {
	}
}
