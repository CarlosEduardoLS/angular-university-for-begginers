import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: Course;

  @Input() cardIndex: number;

  @Output() selectedCourse = new EventEmitter<Course>();

  selectCourse() {
    this.selectedCourse.emit(this.course);
  }

  cardClasses() {
    return { beginner: this.course.category === 'BEGINNER' };
  }
}
