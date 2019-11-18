import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  lightsOn: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.lightsOn = true;
    }, 500);
  }
}
