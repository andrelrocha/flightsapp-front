// google-libphonenumber.d.ts
declare module 'google-libphonenumber' {
  export class PhoneNumberUtil {
    static getInstance(): PhoneNumberUtil;
    parse(phoneNumber: string, regionCode: string): any;
    isValidNumber(phoneNumber: any): boolean;
  }

  export class PhoneNumberFormat {
    static E164: string;
    static INTERNATIONAL: string;
    static NATIONAL: string;
    static RFC3966: string;
  }
}
