import {
	Component,
	ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html')
})
export class AppComponent {
}
