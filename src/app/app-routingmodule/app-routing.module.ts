import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserStory1Component } from "../user-story1/user-story1.component";
import { UserStory2Component } from "../user-story2/user-story2.component";

const routes: Routes = [
  { path: "story1", component: UserStory1Component },
  { path: "story2", component: UserStory2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
