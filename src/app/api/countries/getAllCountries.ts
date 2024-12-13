import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments';
import { CountriesDTO, CountriesPageDTO } from 'src/app/dtos/countriesDTO';

@Injectable({
  providedIn: 'root',
})
export class GetAllCountriesUseCase {
  constructor(private http: HttpClient) {}

  async getCountriesData(): Promise<CountriesDTO[]> {
    try {
      const response = await firstValueFrom(
        this.http.get<CountriesPageDTO>(`${environment.apiUrl}countries/all`)
      );

      return response.content;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
          throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão.');
        } else if (error.status >= 400 && error.status < 500) {
          throw new Error(`Ocorreu um erro ao processar sua solicitação: ${error.error.message}`);
        } else if (error.status >= 500) {
          throw new Error('Ocorreu um erro no servidor. Tente novamente mais tarde.');
        }
      }
      throw new Error('Erro desconhecido. Tente novamente.');
    }
  }
}
