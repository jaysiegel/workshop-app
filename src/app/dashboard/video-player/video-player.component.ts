import { Component, Input, OnInit } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { Video } from "../types";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {
  title = "";
  iframeUrl?: SafeResourceUrl;

  @Input() set video(v: Video | undefined) {
    if (v) {
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.id}`
      );
      this.title = v.title;
    }
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}