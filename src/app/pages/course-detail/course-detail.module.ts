import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './course-detail.routes';

import { CourseDetailComponent } from './course-detail.component';

@NgModule({
	declarations: [
		CourseDetailComponent
	],
	imports: [
		routes,
		CommonModule
	],
})
export class CourseDetailModule {
}
