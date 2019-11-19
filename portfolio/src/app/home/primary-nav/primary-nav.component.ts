import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-primary-nav",
  templateUrl: "./primary-nav.component.html",
  styleUrls: ["./primary-nav.component.css"]
})
export class PrimaryNavComponent implements OnInit {
  constructor() {}

  titleColor: string;
  transition: boolean = false;
  @Input() toBeSelected: number;
  selected: number;

  ngOnInit() {
    setTimeout(() => {
      this.transition = true;
      setTimeout(() => {
        this.selected = this.toBeSelected;
      }, 1000);
    }, 300);
  }
}
