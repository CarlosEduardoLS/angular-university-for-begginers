import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../app/model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private readonly httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');

    return this.httpClient.get<Course[]>('/api/courses', { params });
  }

  updateCourse(course: Course) {
    const headers = new HttpHeaders().set('X-Auth', 'userId');

    return this.httpClient.put(`/api/courses/${course.id}`, course, {
      headers,
    });
  }
}
