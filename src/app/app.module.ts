import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListAnimesCategoriesComponent } from './components/list-animes-categories/list-animes-categories.component';
import { HomeComponent } from './pages/home/home.component';
import { SurpriseMeComponent } from './pages/surprise-me/surprise-me.component';
import { HightlightsComponent } from './components/hightlights/hightlights.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SurpriseMeComponent,
    ListAnimesCategoriesComponent,
    HightlightsComponent,
    FooterComponent,
    ModalComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
