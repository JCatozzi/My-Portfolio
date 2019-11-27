import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  animationIncrement: number = 0;

  screenshots: any[] = [
    { caption: "Gradebook", url: "../assets/screenshots/gradebook.png" },
    { caption: "Grader", url: "../assets/screenshots/freeFormGrader.png" },
    {
      caption: "Gradebook (edit mode)",
      url: "../assets/screenshots/gradebookEdit.png"
    },
    {
      caption: "Assessment Container",
      url: "../assets/screenshots/container.png"
    },
    {
      caption: "Assessment List",
      url: "../assets/screenshots/assessmentList.png"
    },
    {
      caption: " Multi-Media Question Response",
      url: "../assets/screenshots/freeFormResponse.png"
    },
    {
      caption: "Question Builder",
      url: "../assets/screenshots/questionBuilder.png"
    },
    {
      caption: "Clicker Question Presenter",
      url: "../assets/screenshots/clickerPresenter.png"
    }
  ];

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
    }, 500);
  }
}
