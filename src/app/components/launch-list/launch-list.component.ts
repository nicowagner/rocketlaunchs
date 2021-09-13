import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spacex-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
})
export class LaunchListComponent implements OnInit {
  @Input('launches') launches: any;

  constructor() {}

  ngOnInit(): void {}
}
