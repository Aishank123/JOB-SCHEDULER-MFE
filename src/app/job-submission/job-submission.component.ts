import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.css']
})
export class JobSubmissionComponent {

  jobName: string = '';
  jobDuration: string = ''; // Ensure jobDuration is of type string

  constructor(private jobService: JobService) { }

  submitJob(): void {
    if (this.jobName && this.jobDuration) {
      const isoDuration = this.convertToIsoDuration(this.jobDuration);
      this.jobService.submitJob(this.jobName, this.jobDuration).subscribe(() => {
        this.jobName = '';
        this.jobDuration = '';
      });
    }
  }

  convertToIsoDuration(duration: string): string {
    const seconds = parseInt(duration, 10);
    return `PT${seconds}S`;
  }
  
}
