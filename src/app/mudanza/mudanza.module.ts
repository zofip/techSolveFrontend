import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MudanzaRoutingModule } from './mudanza-routing.module';
import { MsgDialogModule } from '../ui/msg-dialog/msg-dialog';
import { SpinnerModule } from '../ui/spinner/spinner';

import { MudanzaComponent } from './pages/mudanza.component';

import { MudanzaSandbox } from './mudanza.sandbox';
import { MudanzaService } from './shared/services/mudanza.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [MudanzaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatButtonModule,
    MudanzaRoutingModule,
    MsgDialogModule,
    SpinnerModule
  ],
  providers: [MudanzaService, MudanzaSandbox],
})
export class MudanzaModule { }
