import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './courses.routes';

import { CoursesComponet } from './courses.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';

@NgModule({
	declarations: [
		CoursesComponet,
		CoursesItemComponent
	],
	imports: [
		routes,
		CommonModule
	],
	providers: []
})
export class CourcesModule {
	constructor() {
	}
}
