import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

import { ICourse } from '../../../core/entities';

@Component({
	selector: 'courses-item',
	templateUrl: 'courses-item.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CoursesItemComponent {
	@Input('course')
	course: ICourse;

	@Output()
	delete: EventEmitter<string> = new EventEmitter<string>();

	deleteClick(): void {
		this.delete.emit(this.course.id);
	}

}
