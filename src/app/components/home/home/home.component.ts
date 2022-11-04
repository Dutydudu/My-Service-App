import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../service/timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public timer: TimerService) {}

  ngOnInit() {}
}
