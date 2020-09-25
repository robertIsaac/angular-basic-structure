import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureComponent } from './feature.component';
import { FeatureOneComponent } from './components/feature-one/feature-one.component';
import { FeatureTwoComponent } from './components/feature-two/feature-two.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
  },
  {
    path: 'feature-one',
    component: FeatureOneComponent,
  },
  {
    path: 'feature-two',
    component: FeatureTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
