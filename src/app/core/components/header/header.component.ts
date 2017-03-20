import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
	constructor() {

	}
}
