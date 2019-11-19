import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PrimaryNavComponent } from "./primary-nav/primary-nav.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "primary/:selected", component: PrimaryNavComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
