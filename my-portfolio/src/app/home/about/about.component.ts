import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  lightsOn: boolean = false;
  animationIncrement: number = 0;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.animationIncrement++;
    }, 600);
  }
}
