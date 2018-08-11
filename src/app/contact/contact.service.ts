import { Injectable } from '@angular/core';
import { Contact } from 'src/app/contact/models/contact.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url_base = `${environment.URL_API}`;
  constructor(private httpClient: HttpClient) { }

  public save(contact: Contact) {
    return this.httpClient.post(this.url_base, contact, { responseType: 'text' } ).toPromise();
  }

  public listaContatos() {
    return this.httpClient.get<Contact[]>(this.url_base).toPromise();
  }

  public edita(id: string, contact: Contact) {
    return this.httpClient.put(`${this.url_base}/${id}`,  contact, { responseType: 'text' } ).toPromise();
  }

  public deleteContato(id: string) {
    return this.httpClient.delete(`${this.url_base}/${id}`, { responseType: 'text' } ).toPromise();
  }
}
