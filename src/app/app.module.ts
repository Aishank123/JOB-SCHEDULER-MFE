import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDisplayComponent } from './job-display/job-display.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebsocketService } from './websocket.service';
import { JobService } from './job.service';


@NgModule({
  declarations: [
    AppComponent,
    JobDisplayComponent,
    JobSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WebsocketService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
