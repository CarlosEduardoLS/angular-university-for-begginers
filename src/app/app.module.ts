import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CourseCardExamplesComponent } from './course-card-examples/course-card-examples.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from '../services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    CourseCardExamplesComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
