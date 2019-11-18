import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home/home.module";

const appRoutes: Routes = [
  { path: "", loadChildren: "./home/home.module#HomeModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
