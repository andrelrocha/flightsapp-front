import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { environment } from 'src/environments';
import { SignInDTO } from 'src/app/dtos/signinDTO';
import { AccessTokenDTO } from 'src/app/dtos/accessTokenDTO';

@Injectable({
  providedIn: 'root',
})
export class SignInUseCase {
  constructor(private http: HttpClient) {}

  async signIn(data: SignInDTO): Promise<AccessTokenDTO> {
    try {
      return await firstValueFrom(
        this.http.post<AccessTokenDTO>(`${environment.apiUrl}auth/signin`, data)
      );
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
