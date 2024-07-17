import { Component, OnInit } from '@angular/core';
import { Job } from '../models/Job';
import { WebsocketService } from '../websocket.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css']
})
export class JobDisplayComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private webSocketService: WebsocketService, private jobsService:JobService) { }

  ngOnInit(): void {
    // this.webSocketService.jobUpdates$.subscribe((res: Job[]) => {
    //   const updatedJob = res[0];
    //   if(updatedJob){
    //     const existingJobIndex = this.jobs.findIndex(j => j.id === updatedJob.id);
    //     if (existingJobIndex !== -1) {
    //       this.jobs[existingJobIndex] = updatedJob;
    //     } else {
    //       this.jobs.push(updatedJob);
    //     }
    //   }
    //   this.sortJobs();
    // });

    // this.jobsService.getJobs().subscribe(res=>{
    //   this.jobs = res;
    //   this.sortJobs();
    // });
    this.webSocketService.jobUpdates$.subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  sortJobs() {
    this.jobs.sort((a, b) => {
        if (a.id > b.id) {
          return -1; // b comes first (descending)
        }
        if (a.id < b.id) {
          return 1; // a comes first (descending)
        }
        return 0; // no change
      });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'pending': return 'badge badge-warning';
      case 'running': return 'badge badge-primary';
      case 'completed': return 'badge badge-success';
      default: return 'badge badge-secondary';
    }
  }

}
