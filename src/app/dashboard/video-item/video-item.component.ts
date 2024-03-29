import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../types';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() video?: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
