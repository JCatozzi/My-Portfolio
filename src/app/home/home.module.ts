import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { PrimaryNavComponent } from "./primary-nav/primary-nav.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NgxViewerModule } from "ngx-viewer";
import { ContactComponent } from "./contact/contact.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgxViewerModule, FormsModule],
  declarations: [
    HomeComponent,
    PrimaryNavComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent
  ]
})
export class HomeModule {}
