import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "../types";
import { VideoDataService } from "../video-data.service";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.scss"],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo?: Video;
  allVideos: Observable<Video[]>;

  constructor(videoSvc: VideoDataService) {
    this.allVideos = videoSvc.getVideos();
  }

  ngOnInit(): void {}
}
