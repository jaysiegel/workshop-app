import { Component, Input, OnInit, Output,EventEmitter } from "@angular/core";
import { Video } from "../types";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"],
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[] = [];
  @Output() videoSelected = new EventEmitter<Video>();

  selectedVideo?: Video; // "?" means "or undefined"

  constructor() {}

  ngOnInit(): void {}

  selectVideo(v: Video) {
    this.selectedVideo = v;
    this.videoSelected.emit(v);
  }
}
