import { Component, ViewEncapsulation } from '@angular/core';

import { Course } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	template: require('./courses.template.html')
})
export class CoursesComponet {
	private courses: Course[];

	constructor() {
		this.courses = [];
	}
}
