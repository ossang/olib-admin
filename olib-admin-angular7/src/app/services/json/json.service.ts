import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(
    private apiService : ApiService
  ) { }

  getMenu():Observable<any>{
    return this.apiService.get("../../assets/json/menu/menu.json");
  }
  
  getUrl():Observable<any>{
    return this.apiService.get("../../assets/json/url/url.json");
  }

}

