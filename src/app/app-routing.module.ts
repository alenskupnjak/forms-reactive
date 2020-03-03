import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule} from '@angular/core';
import { PrviComponent } from './prvi/prvi.component';
import { DrugiComponent } from './drugi/drugi.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prvi', component: PrviComponent},
  {path: 'drugi', component: DrugiComponent},
  // {path: 'users', component: UsersComponent, children: [
  //   {path: ':id/:name', component: UserComponent}
  // ]},

  // {  path: 'servers',
  // canActivate: [AuthGuard],
  // canActivateChild: [AuthGuard],
  // component: ServersComponent,
  // children: [
  //   {path: ':id', component: ServerComponent, resolve: {server: ServerReslover}},
  //   {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
  // ]},
  // {path: 'lista', component: ListaComponent},
  // {path: 'lista/:id/:name/:status', component: DetaljlisteComponent},
  // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: 'not-found', component: HomeComponent},
  {path: '**', redirectTo: '/not-found'}  // '**' mora biti zadnji u nizu !!!
];

@NgModule({
 imports: [
   RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})

export class AppRoutingModule {}
