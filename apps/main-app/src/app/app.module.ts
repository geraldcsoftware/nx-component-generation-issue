import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentInRootComponent } from './component-in-root/component-in-root/component-in-root.component';
import { MyComponentComponent } from './my-component/my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';

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
