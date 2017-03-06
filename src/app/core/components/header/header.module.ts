import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
	declarations: [
		HeaderComponent,
		UserInfoComponent,
	],
	imports: [RouterModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}
