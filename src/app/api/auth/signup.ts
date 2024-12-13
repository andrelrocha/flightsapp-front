import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments';
import { SignUpReturnDTO } from 'src/app/dtos/signUpReturnDTO';
import { SignUpDTO } from 'src/app/dtos/signUpDTO';

@Injectable({
  providedIn: 'root',
})
export class SignUpUseCase {
  constructor(private http: HttpClient) {}

  async signUp(data: SignUpDTO): Promise<SignUpReturnDTO> {
    try {
      const response = await firstValueFrom(
        this.http.post<SignUpReturnDTO>(`${environment.apiUrl}auth/signup`, data)
      );

      return response;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
          throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão.');
        } else if (error.status >= 400 && error.status < 500) {
          throw new Error(`${error.status}: ${error.error}`);
        } else if (error.status >= 500) {
          throw new Error(`${error.status}: Ocorreu um erro no servidor. Tente novamente mais tarde.`);
        }
      }
      throw new Error('Erro desconhecido. Tente novamente.');
    }
  }
}
