import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root-examples',
  templateUrl: './app.component-examples.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponentExample {
  courses = COURSES;

  title = 'angular core deep dive';

  price = 9.99294249294294;

  rate = 0.67;

  course = COURSES[0];

  startDate = new Date(2000, 0, 1);

  getSelectedCourse(course: Course) {
    console.log('Selected Course -> ', course);
  }
}
