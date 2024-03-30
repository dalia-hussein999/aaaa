import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NumberToArrayPipe } from './shared/pipes/number-to-array.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogItemComponent,
    PaginationControlsComponent,
    LoadingIndicatorComponent,
    ErrorMessageComponent,
    NumberToArrayPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
