import { environment } from 'src/environments/environment';

/**
 * Constants and enumerators used in the project
 */

export const BACKEND_URL = environment.backend_url;
export const SAVE_SUCCESSFULLY = 'SaveSuccessfully';
export const SUCCESSFULLY_DELETED = 'SuccessfullyDeleted';

export enum ApiUrlsEnum {
    Mudanza = 'mudanza'
}

export enum SendRequestDialog {
    Edit = 1,
    Save = 2,
    Delete = 3,
    Close = 4
}

export enum MsgDialogEnum {
    Info = 'Info',
    Error = 'Error',
    Warn = 'Warn'
}

export enum ColorsEnum {
    Info = 'primary',
    Error = 'warn',
    Warn = 'accent'
}

export enum IconsEnum {
    Error = 'error',
    Info = 'info'
}

export enum TitleDialogEnum {
    Warn = 'Warning',
    Info = 'Info',
    Error = 'Error'
}
