import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureOneComponent } from './components/feature-one/feature-one.component';
import { FeatureTwoComponent } from './components/feature-two/feature-two.component';

@NgModule({
  declarations: [FeatureComponent, FeatureOneComponent, FeatureTwoComponent],
  imports: [
    FeatureRoutingModule,
    SharedModule,
  ]
})
export class FeatureModule { }
