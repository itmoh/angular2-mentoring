import { Routes, RouterModule } from '@angular/router';
import { CoursesComponet }    from './courses.component';

// Route Configuration
const homeRoutes: Routes = [
	{
		path: 'courses',
		component: CoursesComponet
	},
];

export const routes = RouterModule.forChild(homeRoutes);
