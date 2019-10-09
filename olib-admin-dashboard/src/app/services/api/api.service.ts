import { Injectable }                           from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }  from '@angular/common/http';
import { Router }                               from '@angular/router';
import { Observable }                           from 'rxjs';
import { catchError }                           from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private storage:Storage = sessionStorage; 
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
        return this.http.get(url, {headers:this.getHeaders(),  params:urlParams})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    post(url:string, body:Object):Observable<any>{
        return this.http.post(url, JSON.stringify(body), { headers:this.getHeaders()})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    put(url:string, body:Object):Observable<any>{
        return this.http.put(url, JSON.stringify(body), { headers:this.getHeaders()})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    delete(url:string):Observable<any>{
        return this.http.delete(url, { headers:this.getHeaders()})
                        .pipe(catchError((error)=>this.errorHandler(error)));
    }

    errorHandler(error:any){
        let me = this;
        if (error.status === 401 || error.status === 403){
            me.router.navigate(['/login']);
        }
        return Observable.throw(error || 'Server error')
    }
}