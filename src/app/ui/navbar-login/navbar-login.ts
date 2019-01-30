import { Component, NgModule, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.html',
  styleUrls: ['./navbar-login.scss']
})
export class NavBarLoginComponent {

  @Input() project: String;
  @Input() contentTemplate: TemplateRef<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver) { }

}

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  exports: [NavBarLoginComponent],
  declarations: [NavBarLoginComponent]
})
export class NavBarLoginModule { }
