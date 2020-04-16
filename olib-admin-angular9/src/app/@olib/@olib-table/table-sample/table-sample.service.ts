import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TableSampleService {
 
  constructor(
    private apiService:ApiService
  ) { }

  getSampleData(): Observable<any> {
    return this.apiService.get('assets/data/sample.table.data.json');
  }
}
