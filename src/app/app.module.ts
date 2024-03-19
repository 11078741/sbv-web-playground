import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {ChipModule} from "primeng/chip";
import {DialogModule} from "primeng/dialog";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratePdfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    FileUploadModule,
    ChipModule,
    DialogModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
