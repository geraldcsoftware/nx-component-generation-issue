import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
/* These 2 components were generated using the commands:
   - nx generate @nrwl/angular:component component-in-root --project main-app --style scss
   - nx g component my-component --project main-app --style scss
     --> select @nrwl/angular:component from the list that is shown.
*/
import { ComponentInRootComponent } from './component-in-root/component-in-root/component-in-root.component';
import { MyComponentComponent } from './my-component/my-component/my-component.component';

/*
  This component was generated via:
  - nx g component my-component2 --project main-app --style scss
    --> select @schematics/angular:component from the list that is shown
*/
import { MyComponent2Component } from './my-component2/my-component2.component';
/*
 * Components generated using @nrwl/angular:component have the component directory duplicated in the path.
 */


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ComponentInRootComponent,
    MyComponentComponent,
    MyComponent2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
