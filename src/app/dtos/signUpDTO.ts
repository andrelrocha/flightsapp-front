export class SignUpDTO {
  login: string;
  password: string;
  name: string;
  socialNumber: string;
  phone: string;
  birthday: string;
  countryId: string;
  username: string;
  twoFactorEnabled: boolean;
  refreshTokenEnabled: boolean;
  theme: string;

  constructor(data: any) {
    this.login = data.login;
    this.password = data.password;
    this.name = data.name;
    this.socialNumber = data.socialNumber;
    this.phone = data.phone;
    this.birthday = data.birthday;
    this.countryId = data.countryId;
    this.username = data.username;
    this.twoFactorEnabled = data.twoFactorEnabled;
    this.refreshTokenEnabled = data.refreshTokenEnabled;
    this.theme = data.theme;
  }
}
