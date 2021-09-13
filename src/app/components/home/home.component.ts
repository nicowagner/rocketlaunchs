import { Component, OnInit } from '@angular/core';
import { Launches } from 'src/app/models/launches.model';
import { RocketsService } from 'src/app/services/rockets.service';

@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: Launches;

  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.rocketsService.getLauches().subscribe((data) => {
      this.data = data;
    });
  }
}
