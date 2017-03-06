import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail.component';

// Route Configuration
const pageOneRoutes: Routes = [
	{ 
		path: 'course-detail', 
		component: CourseDetailComponent
	},
];

export const routes = RouterModule.forChild(pageOneRoutes);
