import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public formCode: any;
  constructor(private http: HttpClient) { }

  contactUsSubmission(data: any): Observable<any> {
    let requestBody = {
      ...data,
      type: 'Contact US'
    };
    return this.http.post(
      `https://submit-form.com/bs2LbY4L`,
      requestBody
    );
  }

  newsletterSubmission(data: any): Observable<any> {
    let requestBody = {
      ...data,
      type: 'Newsletter'
    };
    return this.http.post(
      `https://submit-form.com/${this.formCode}`,
      requestBody
    );
  }
}
