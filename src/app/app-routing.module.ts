import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserShowComponent } from './components/user-show/user-show.component';

const appRoutes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'form', component: UserFormComponent },
      { path: 'show', component: UserShowComponent },
      { path: '', redirectTo: 'form', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/user/form', pathMatch: 'full' },
  { path: '**', redirectTo: '/user/form' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
