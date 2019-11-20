import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  lightsOn: boolean = false;
  animationIncrement: number = 0;

  public viewerOptions: any = {
    navbar: false,
    toolbar: false
  };

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.animationIncrement++;
    }, 200);
  }
}
