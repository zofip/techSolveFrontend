import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BACKEND_URL, ApiUrlsEnum } from 'src/app/core/enums/enum';
import { HandleError, HttpErrorHandler } from 'src/app/core/http/http-error-handler.service';
import { MessageService } from 'src/app/core/http/message.service';

import { Mudanza } from '../models/mudanza.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

/**
 * Manage the logic of mudanza services
 */
@Injectable()
export class MudanzaService {

  private handleError: HandleError;

  constructor(
    public http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('MudanzaService');
  }

  /**
   * Returns the number of trips and saves traceability
   * @param dataMudanza 
   */
  createOutputFile(dataMudanza: Mudanza): Observable<any> {
    const url = BACKEND_URL.concat(ApiUrlsEnum.Mudanza);
    return this.http.post<any>(url, dataMudanza, httpOptions)
      .pipe(
        catchError(this.handleError('createOutputFile', dataMudanza))
      );
  }

  private log(message: string) {
    this.messageService.add(`MudanzaService: ${message}`);
  }

}
