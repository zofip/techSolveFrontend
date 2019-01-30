import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MsgDialogComponent } from 'src/app/ui/msg-dialog/msg-dialog';

import { MudanzaSandbox } from '../mudanza.sandbox';

import { TitleDialogEnum, IconsEnum, ColorsEnum, MsgDialogEnum } from 'src/app/core/enums/enum';

import { Mudanza } from '../shared/models/mudanza.model';


@Component({
  selector: 'app-mudanza',
  templateUrl: './mudanza.component.html'
})
export class MudanzaComponent {

  @ViewChild('fileInput') fileInput: ElementRef;

  identificationControl = new FormControl('', [
    Validators.required
  ]);

  fileUrl: SafeResourceUrl;
  fileName = 'lazy_loading_example_output.txt';
  showSpinner = false;

  constructor(private translate: TranslateService,
    private sanitizer: DomSanitizer,
    private mudanzaSandbox: MudanzaSandbox,
    public dialog: MatDialog) {
    this.translate.use('es');
  }

  /**
   * Trigger event manually to attach xml and capture document type
   */
  triggerAttach() {
    this.fileInput.nativeElement.click();
  }

  /**
   * Read file to calculate algorithm
   * @param event contains file data
   */
  attach(event) {
    this.showSpinner = true;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => { this.sendFile(reader.result); };
      reader.onerror = function (error) {
        console.error(error);
      };
    }
  }

  /**
   * Send the identification and the attached file
   * @param inputFile file content
   */
  sendFile(inputFile: any) {
    const mudanza = {
      identification: this.identificationControl.value,
      inputFile: inputFile
    } as Mudanza;
    this.mudanzaSandbox.createOutputFile(mudanza).subscribe(response => {
      if (response) {
        this.generateOutputFile(response.outputFile);
      } else {
        this.loadDialogError('Error in the archives');
      }
    });
  }

  /**
   * Generate the file to download
   * @param base64 to create the blob
   */
  generateOutputFile(base64: string) {
    fetch('data:text/plain;base64,' + base64)
      .then(res => res.blob())
      .then(blob => {
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        this.showSpinner = false;
      });
  }

  /**
   * Displays dialog with error
   * @param messageError message text
   */
  loadDialogError(messageError: string) {
    this.dialog.open(MsgDialogComponent, {
      data: {
        title: TitleDialogEnum.Error,
        icon: IconsEnum.Error,
        color: ColorsEnum.Error,
        typeMessage: MsgDialogEnum.Error,
        message: messageError,
      }
    });
  }

}
