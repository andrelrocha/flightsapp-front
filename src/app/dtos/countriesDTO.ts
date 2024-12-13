export class CountriesDTO {
  id: string;
  name: string;
  isoCode: string;

  constructor(id: string, name: string, isoCode: string) {
    this.id = id;
    this.name = name;
    this.isoCode = isoCode;
  }
}

export class CountriesPageDTO {
  content: CountriesDTO[];

  constructor(content: CountriesDTO[]) {
    this.content = content;
  }
}
