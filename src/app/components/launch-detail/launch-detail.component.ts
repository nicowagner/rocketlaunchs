import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Launches } from 'src/app/models/launches.model';
import { RocketsService } from 'src/app/services/rockets.service';

@Component({
  selector: 'spacex-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
  filteredLaunch: Launches;
  launchId: number;
  rocketId: number;

  constructor(
    private route: ActivatedRoute,
    private rocketsService: RocketsService
  ) {}

  ngOnInit(): void {
    combineLatest(
      this.route.params,
      this.rocketsService.getLauches(),
      this.rocketsService.getRockets()
    ).subscribe((data) => {
      const params = data[0];
      const launches = data[1];
      const rockets = data[2];

      const rocketId = params.rocketid;
      const launchId = params.id;

      // console.log('launchId', launchId);
      // console.log('rocketId', rocketId);

      // console.log('launches', launches);

      const filteredLaunches = launches.filter((launch) => {
        return launch.flight_number === launchId;
      });

      console.log('filteredLaunches', filteredLaunches);

      const filteredRockets = rockets.filter((rocket) => {
        return rocket.rocket_id === rocketId;
      });

      this.filteredLaunch = {
        flight_number: filteredLaunches.flight_number,
        mission_name: filteredLaunches.mission_name,
        launch_date_unix: filteredLaunches.launch_date_unix,
        rocket: {
          rocket_id: filteredRockets.rocket_id,
          rocket_name: filteredRockets.rocket_name,
          active: filteredRockets.active,
          cost_per_launch: filteredRockets.cost_per_launch,
          company: filteredRockets.company,
        },
        favorite: false,
      };
    });
  }
}
