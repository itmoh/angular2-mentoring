import { Component, Input, ViewEncapsulation } from '@angular/core';

import { ICourse } from '../../../core/entities';

@Component({
	selector: 'courses-item',
	templateUrl: 'courses-item.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CoursesItemComponent {
	@Input('course')
	course: ICourse;
	
}
