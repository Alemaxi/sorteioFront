import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';

import { NumberComponent } from './number/number.component';
import { SelectedNumbersComponent } from './selected-numbers/selected-numbers.component';
import { InfoComponent } from './info/info.component';

const route: Route[] = [
  {path:'selected',component: SelectedNumbersComponent},
  {path:'play/:number/:shuffleTime',component:NumberComponent,},
  {path:'info', component:InfoComponent},
  {path:'', redirectTo:'selected',pathMatch:'full'},
  {path:'**', redirectTo:'selected/',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route,{onSameUrlNavigation:'reload'}),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
