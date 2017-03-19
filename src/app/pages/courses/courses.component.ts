import { log } from 'util';
import { Component, ViewEncapsulation, OnInit } '@angular/core';

import { ICourse } from '../../core/entities';

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

	constructor() {
		this.courses = [];
	}

	//region methods
	onSearch(event) {
		console.log(`search: ${event}`);
	}

	onDelete(id) {
		console.log(`delete: ${id}`);
	}

	onAddCourse() {
		console.log('add course click');
	}
	//endregion

	//region lifecycle hooks
	ngOnInit() {
		console.log('inInit');
		this.courses = [{
			id: '1',
			title: 'test meating',
			duration: 30,
			date: new Date(),
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac finibus nibh, in imperdiet odio. Cras eu turpis vitae nisl bibendum tempor. Nunc ipsum neque, euismod a dolor in, viverra suscipit nunc. Duis dignissim mi at scelerisque sodales. In molestie diam vel tincidunt viverra. Donec ac sodales mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}, {
			id: '2',
			title: 'test mentoring',
			duration: 120,
			date: new Date(),
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac finibus nibh, in imperdiet odio. Cras eu turpis vitae nisl bibendum tempor. Nunc ipsum neque, euismod a dolor in, viverra suscipit nunc. Duis dignissim mi at scelerisque sodales. In molestie diam vel tincidunt viverra. Donec ac sodales mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}];	
	}
	//endregion
}
