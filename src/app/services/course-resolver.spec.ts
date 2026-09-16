import { describe, vi, beforeEach } from "vitest";
import { CoursesService } from "./courses.service";
import { TestBed } from "@angular/core/testing";
import { CoursePage } from "../course-page/course-page";

describe ('CourseResolver', () => {
    let mockCoursesService: any;

    beforeEach(async () => {
        mockCoursesService = {
            findCourseById: vi.fn()
        }

    await TestBed.configureTestingModule({
        imports: [CoursePage],
        providers: [
            {provide: CoursesService, useValue: mockCoursesService},
        ]
    })

})

})