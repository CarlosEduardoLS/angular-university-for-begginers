import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card-examples',
  templateUrl: './course-card-examples.component.html',
  styleUrls: ['./course-card-examples.component.css'],
})
export class CourseCardExamplesComponent {
  @Input() course: Course;

  @Input() cardIndex: number;

  @Output() selectedCourse = new EventEmitter<Course>();

  selectCourse() {
    this.selectedCourse.emit(this.course);
  }

  cardClasses() {
    return { beginner: this.course.category === 'BEGINNER' };
  }

  cardStyles() {
    return { 'text-decoration': 'underline' };
  }
}
