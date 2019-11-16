import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-primary-nav",
  templateUrl: "./primary-nav.component.html",
  styleUrls: ["./primary-nav.component.css"]
})
export class PrimaryNavComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  titleColor: string;
  transition: boolean = false;
  selected: number;

  ngOnInit() {
    setTimeout(() => {
      this.transition = true;
      setTimeout(() => {
        this.selected = this.route.snapshot.params["selected"];
        console.log("selected:", this.selected);
      }, 1500);
    }, 300);
  }
}
