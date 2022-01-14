import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordComponent } from './keyword/keyword.component';
import { ProductResearchComponent } from './product-research/product-research.component';
import { ListingGraderComponent } from './listing-grader/listing-grader.component';
import { ProducdDatabaseComponent } from './producd-database/producd-database.component';
import { OpurtunityFinderComponent } from './opurtunity-finder/opurtunity-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordComponent,
    ProductResearchComponent,
    ListingGraderComponent,
    ProducdDatabaseComponent,
    OpurtunityFinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
