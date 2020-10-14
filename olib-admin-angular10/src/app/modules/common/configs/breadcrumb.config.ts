import {Injectable} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({providedIn: 'root'})
export class BreadCrumbConfig {
    items: MenuItem[]=[];

    setBreadCrumb(category : string, sub : string){
        this.items = [{label:category},{label:sub}];
    }
}