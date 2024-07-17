import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDisplayComponent } from './job-display/job-display.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: "full"
  },
  {
    path: 'home', component: JobDisplayComponent,
  },
  {
    path: 'submit', component: JobSubmissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
