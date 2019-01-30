import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MudanzaService } from './shared/services/mudanza.service';

import { Mudanza } from './shared/models/mudanza.model';

/**
 * Sandbox is a service which extends application core facade and exposes streams of state
 * and connections to the async services.
 */
@Injectable()
export class MudanzaSandbox {

  constructor(
    private mudanzaService: MudanzaService) {
  }

  createOutputFile(dataMudanza: Mudanza): Observable<any> {
    return this.mudanzaService.createOutputFile(dataMudanza);
  }
}
