import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
