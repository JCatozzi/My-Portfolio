import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { PrimaryNavComponent } from "./primary-nav/primary-nav.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, PrimaryNavComponent]
})
export class HomeModule {}
