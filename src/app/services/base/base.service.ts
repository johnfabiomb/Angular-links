import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BaseService {


  public urlBase: string;

  private _token: any = '';
  private _session: string = '';

  get token() {
    if (this._token) {
      return this._token;
    }else if(localStorage.getItem('token')){
      this._token = <string> localStorage.getItem('token');
      return  this._token;
    }else{
      return '';
    }
  }

  set token(value) {
    localStorage.setItem('token', <string> value);
    this._token = <string> value;
  }

  constructor(
    protected http: HttpClient
    ) {
    this.urlBase = environment.api;
  }

  clearCredentials(){
    this.token = '';
    localStorage.clear();
  }




  private HttpHeaders() {
    let headers = new HttpHeaders(this.cleanHeaders());
    return headers;
  }

  private cleanHeaders = () => {
    let h: any = {};
    if (this.token.length) {
      h['Token'] = `${this.token}`;
    }
    h['Content-Type'] = 'application/json';
    return h;
  };

  /**
   * Httpclient get method
   * @param  {string}       url       [ Accepts a string as url]
   * @param  {any}          params    [ OPTIONAL if the param value is present can be any. To be send to the API ]
   * @param  {any}          tokens    [ Special parameter to handle api tokens ]
   * @return {Obervable}              [ Returns the http get call as an observable ]
   */
  public get(endpoint: any, params: any = {}, domain = this.urlBase): Observable<any> {
    // Variables para el servicio
    let urlOperation = domain + endpoint;
    let paramsUrl = this.serializate(params);
    // Definimos los Header de la peticion
    let headers = this.HttpHeaders();

    // Does the request to API
    return this.http.get(urlOperation+  paramsUrl, { headers: headers });
  }

  public post(endpoint: any, params: any = {}, domain = this.urlBase): Observable<any> {
    // Variables para el servicio
    let urlOperation = domain + endpoint;

    // // Definimos los Header de la peticion
    let headers = this.HttpHeaders();

    // Does the request to API
    return this.http.post(urlOperation, params,{headers: headers});
  }
  
  public put(endpoint: any, params: any = {}, domain = this.urlBase): Observable<any> {
    // Variables para el servicio
    let urlOperation = domain + endpoint;

    // // Definimos los Header de la peticion
    let headers = this.HttpHeaders();
    //headers.set('Content-Type', 'multipart/form-data')

    // Does the request to API
    return this.http.put(urlOperation, params, {headers: headers});
  }

  public delete(endpoint:string, domain = this.urlBase): Observable<any> {
    // Variables para el servicio
    let urlOperation = domain + endpoint;

    // // Definimos los Header de la peticion
    let headers = this.HttpHeaders();

    // Does the request to API
    
    return this.http.delete(urlOperation, {headers: headers});
  }


  /**
 * Convierte Objeto a parametros url.
 * @param {any} obj Objecto a convertir en paramtros url.
 */
  serializate(obj: any) {
    if (!obj) return '';
    var output_string: any = [];
    Object.keys(obj).forEach((val) => {
      if (Array.isArray(obj[val])) {
        if (obj[val].length > 0) {
          for (let i of obj[val]) {
            if (this.noNull(i)) output_string.push(`${val}[]=${i}`);
          }
        }
      } else {
        let value = String(obj[val]);
        if (value.length > 0) {
          if (this.noNull(value)) output_string.push(`${val}=${value}`);
        }
      }
    });
    let results = output_string.join('&');
    if (results.length > 0) {
      return '?' + results;
    } else {
      return '';
    }
  }

  noNull(val: any) {
    let sw1 = val != null;
    let sw2 = typeof val !== undefined;
    let sw3 = val != 'null';
    return sw1 && sw2 && sw3;
  }

}
