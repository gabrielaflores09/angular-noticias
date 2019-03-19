import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { FooterComponent } from './footer/footer.component';
import { NewsServiceService } from './service/news-service.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
