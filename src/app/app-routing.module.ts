import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { HomePage } from './pages/home/home';

const routes: Routes = [
  { path: 'tab1Root', component: HomePage },
  { path: 'tab2Root', component: AboutPage },
  { path: 'tab3Root', component: ContactPage },
  { path: 'my-modal', loadChildren: './modals/my-modal/my-modal.module#MyModalPageModule' },
  // { path: 'view-shop', loadChildren: './view-shop/view-shop.module#ViewShopPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
