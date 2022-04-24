import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from '../services/courses.service';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';

@NgModule({
  declarations: [AppComponent, CourseCardComponent, CourseImageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
