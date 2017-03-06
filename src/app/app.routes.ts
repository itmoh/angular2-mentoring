import { Routes } from '@angular/router';
import { CoursesComponet } from './pages/courses';
import { CourseDetailComponent } from './pages/course-detail';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponet},
	{path: 'courses', component: CoursesComponet},
	{path: 'course-detail', component: CourseDetailComponent},
	{path: 'login', component: LoginComponent},
	{path: '**', component: NoContentComponent},
];
