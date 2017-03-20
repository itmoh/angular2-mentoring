import { Injectable } from '@angular/core';

import { Course, ICourse } from '../../entities';

@Injectable()
export class CoursesService {
	private courses: ICourse[];

	constructor() {
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

	public getAll(): ICourse[] {
		return this.courses;
	}

	public create(
		title,
		duration,
		date,
		description,
	): string {
		const id = `${Math.floor((Math.random() * 10000000))}`;
		const newCourse = new Course(
			id,
			title,
			duration,
			date,
			description,
		);
		this.courses.push(newCourse);
		return id;
	}

	public getById(id: string): ICourse {
		return this.courses.find(course => course.id === id);
	}

	public update(id: string, values: Object): boolean {
		const courseToUpdate = this.getById(id);
		if (!courseToUpdate) {
			return false;
		}
		Object.assign(courseToUpdate, values);
		return true;
	}

	public remove(id: string): boolean {
		const courseIndex = this.courses.findIndex(course => course.id === id);
		this.courses.splice(courseIndex, 1);
		return true;
	}
}
