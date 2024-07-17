import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from './models/Job';
import { Client, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private stompClient!: Client;
  private jobUpdatesSubject: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>([]);

  public jobUpdates$ = this.jobUpdatesSubject.asObservable();


  constructor() { 
    this.connect();
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/wss');
    this.stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str:any) => {
        console.log(str);
      }
    });
    

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe('/topic/jobs', (message: IMessage) => {
        if (message.body) {
          const job: Job = JSON.parse(message.body);
          const currentJobs = this.jobUpdatesSubject.value;
          const updatedJobs = currentJobs.filter(j => j.id !== job.id);
          updatedJobs.push(job);
          this.jobUpdatesSubject.next(updatedJobs);
        }
      });
    };

    this.stompClient.activate();
  }

}
