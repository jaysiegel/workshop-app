import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Video } from "../types";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.scss"],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo?: Video;
  allVideos: Video[] = [];

  constructor(http: HttpClient) {
    http
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .subscribe((videos) => (this.allVideos = videos));
  }

  ngOnInit(): void {}
}