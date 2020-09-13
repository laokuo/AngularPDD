import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components/scrollable-tab/scrollable-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
