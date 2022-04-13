import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  API_SERVER = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getHello() {
    console.log(this.API_SERVER);
    return this.http.get(`${this.API_SERVER}`, {
      responseType: 'text',
    });
  }
}
