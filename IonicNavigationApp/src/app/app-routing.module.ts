import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'pageOne', loadChildren: './pages/page-one/page-one.module#PageOnePageModule' },
  { path: 'pageTwo', loadChildren: './pages/page-two/page-two.module#PageTwoPageModule' },
  { path: 'pageThree', loadChildren: './pages/page-three/page-three.module#PageThreePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
