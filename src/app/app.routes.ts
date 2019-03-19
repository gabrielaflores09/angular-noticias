import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsContentComponent } from './news-content/news-content.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: '', component: NewsContentComponent},
    { path: '', component: FooterComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
