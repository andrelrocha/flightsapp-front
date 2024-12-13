export class SignUpReturnDTO {
  id: string;
  login: string;
  username: string;
  name: string;
  socialNumber: string;
  phone: string;
  birthday: string;
  theme: string;
  countryName: string;
  countryId: string;
  twoFactorEnabled: boolean;
  refreshTokenEnabled: boolean;
  role: string;

  constructor(data: any) {
    this.id = data.id;
    this.login = data.login;
    this.username = data.username;
    this.name = data.name;
    this.socialNumber = data.socialNumber;
    this.phone = data.phone;
    this.birthday = data.birthday;
    this.theme = data.theme;
    this.countryName = data.countryName;
    this.countryId = data.countryId;
    this.twoFactorEnabled = data.twoFactorEnabled;
    this.refreshTokenEnabled = data.refreshTokenEnabled;
    this.role = data.role;
  }
}
