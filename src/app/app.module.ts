import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { SharedserviceService } from "./sharedservice.service";
import { UserStory1Component } from "./user-story1/user-story1.component";
import { UserStory2Component } from "./user-story2/user-story2.component";
import { AppRoutingModule } from "./app-routingmodule/app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserStory1Component,
    UserStory2Component
  ],
  bootstrap: [AppComponent],
  providers: [SharedserviceService]
})
export class AppModule {}
