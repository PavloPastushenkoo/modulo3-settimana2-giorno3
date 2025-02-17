import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, ProductComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
