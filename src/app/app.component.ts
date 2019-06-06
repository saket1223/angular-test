import {AfterViewInit,ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit,ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Course} from './model/course';
import {COURSES} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

     courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    ngAfterViewInit() {

    }

    onCourseSelected(course:Course) {

    }

   

}