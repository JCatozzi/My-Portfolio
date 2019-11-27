import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  titleColor: string;
  navigationMode: string = "home";
  selected: number;
  isDesktopDevice: boolean;

  ngOnInit() {
    this.isDesktopDevice = this.deviceService.isDesktop();
  }

  toPrimaryNav(selectedIndex) {
    if (this.isDesktopDevice) {
      this.selected = selectedIndex;
      this.navigationMode = "primary";
    } else {
      setTimeout(() => {
        this.selected = selectedIndex;
        this.navigationMode = "primary";
      }, 1000);
    }
  }
}
