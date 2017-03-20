import { Component, ViewEncapsulation, OnInit, ViewContainerRef } from '@angular/core';

import { ICourse } from '../../core/entities';
import { CoursesService } from '../../core/services';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	template: require('./courses.template.html'),
	styles: [
		require('./courses.component.scss')
	],
})
export class CoursesComponet implements OnInit {
	private searchQuery: string;

	private courses: ICourse[];

	constructor(
		private coursesService: CoursesService,
	) {
		this.courses = [];
	}

	//region methods
	onSearch(event) {
		console.log(`search: ${event}`);
	}

	onDelete(id) {
		if (confirm('Do you really want to delete this course?')) {
			this.coursesService.remove(id);
		}
	}

	onAddCourse() {
		console.log('add course click');
	}
	//endregion

	//region lifecycle hooks
	ngOnInit() {
		console.log('inInit');
		this.courses = this.coursesService.getAll();
	}
	//endregion
}
