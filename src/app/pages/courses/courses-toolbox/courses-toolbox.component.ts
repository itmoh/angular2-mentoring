import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'courses-toolbox',
	templateUrl: 'courses-toolbox.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CoursesToolboxComponent {
	searchQuery: string = '';

	@Output()
	search: EventEmitter<string> = new EventEmitter<string>();

	@Output()
	addCourse: EventEmitter<void> = new EventEmitter<void>();

	searchClick(): void {
		this.search.emit(this.searchQuery);
	}

	addCourseClick(): void {
		this.addCourse.emit();
	}
}
