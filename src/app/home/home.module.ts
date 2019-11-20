import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { PrimaryNavComponent } from "./primary-nav/primary-nav.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NgxViewerModule } from "ngx-viewer";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgxViewerModule],
  declarations: [
    HomeComponent,
    PrimaryNavComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent
  ]
})
export class HomeModule {}
