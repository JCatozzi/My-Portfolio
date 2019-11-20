import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  animationIncrement: number = 0;

  public viewerOptions: any = {
    navbar: false,
    toolbar: {
      zoomIn: 0,
      zoomOut: 0,
      oneToOne: 0,
      reset: 0,
      prev: 4,
      play: {
        show: 0,
        size: "large"
      },
      next: 4,
      rotateLeft: 0,
      rotateRight: 0,
      flipHorizontal: 0,
      flipVertical: 0
    }
  };

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.animationIncrement++;
    }, 100);
  }
}
