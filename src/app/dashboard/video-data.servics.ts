import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Video } from "./types";

@Injectable({
  providedIn: "root",
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .pipe(
        map((videos) =>
          videos.map((video) => ({
            ...video,
            title: video.title.toUpperCase(),
          }))
        )
      );
  }
}