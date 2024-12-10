import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/hero/hero.component';
import { TrackSnippetsComponent } from './Components/track-snippets/track-snippets.component';
import { AccessClipboardComponent } from './Components/access-clipboard/access-clipboard.component';
import { WorkFlowComponent } from './Components/work-flow/work-flow.component';
import { DownloadComponent } from './Components/download/download.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TrackSnippetsComponent,
    AccessClipboardComponent,
    WorkFlowComponent,
    DownloadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
