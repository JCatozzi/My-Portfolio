import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  titleColor: string;
  navigationMode: string = "home";
  selected: number;

  ngOnInit() {}

  toPrimaryNav(selectedIndex) {
    setTimeout(() => {
      this.selected = selectedIndex;
      this.navigationMode = "primary";
    }, 1000);
  }
}
