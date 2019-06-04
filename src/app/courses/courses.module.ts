import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from './course-card/course-card.component';
import {CoursesService} from './courses.service';
import {HttpClientModule} from '@angular/common/http';
import {CourseTitleComponent} from '../course-title/course-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CourseCardComponent
     
  ],
    exports: [
        CourseCardComponent
        
        
    ],
    providers: [CoursesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }