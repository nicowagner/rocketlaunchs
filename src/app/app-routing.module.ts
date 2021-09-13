import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'launch/:id/:rocketid', component: LaunchDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
