import { Injectable }                           from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent }  from '@angular/common/http';
import { Router }                               from '@angular/router';
import { Observable }                           from 'rxjs';
import { catchError }                           from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private storage:Storage = localStorage; 
    private tokenKey = "JWTTOKEN";

    constructor(
        private http: HttpClient,
        private router:Router
    ) {}

    saveToken(token:string){
        this.storage.setItem(this.tokenKey, token);
      }
    removeToken() {
        this.storage.removeItem(this.tokenKey);
    }
    getToken():string{
        return this.storage.getItem(this.tokenKey);
    }

    getHeaders():HttpHeaders {
        let headers = new HttpHeaders();
        let token = this.getToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", "Bearer "+token);
        }
        return headers;
    }

    get(url:string, urlParams?:HttpParams):Observable<any>{
        let me = this;
        return this.http.get(url, {headers:this.getHeaders(),  params:urlParams})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    post(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.post(url, JSON.stringify(body), { headers:this.getHeaders()})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    put(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.put(url, JSON.stringify(body), { headers:this.getHeaders()})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    delete(url:string):Observable<any>{
        let me = this;
        return this.http.delete(url, { headers:this.getHeaders()})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    multipart(url:string, file: File) : Observable<HttpEvent<{}>>{
        const formdata: FormData = new FormData();

        formdata.append('file', file);

        let token = this.getToken();
        let authHeaders = new HttpHeaders();
        if (token !== null) {
            authHeaders = authHeaders.append("Authorization", "Bearer "+token);
        }

        const requestParam = new HttpRequest('POST', url, formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:authHeaders
        });
        
        return this.http.request(requestParam);
    }

    errorHandler(error:any){
        let me = this;
        if (error.status === 401 || error.status === 403){
            me.router.navigate(['/login']);
        }
        return Observable.throw(error || 'Server error')
    }
}