import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './courses.routes';

import { CoursesComponet } from './courses.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesToolboxComponent } from './courses-toolbox/courses-toolbox.component';

@NgModule({
	declarations: [
		CoursesComponet,
		CoursesItemComponent,
		CoursesToolboxComponent
	],
	imports: [
		routes,
		CommonModule,
		FormsModule,
	],
	providers: []
})
export class CourcesModule {
	constructor() {
	}
}
