import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseServiceService} from './courseservice.service';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
