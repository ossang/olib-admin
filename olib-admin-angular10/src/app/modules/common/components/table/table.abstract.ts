import { Directive, OnInit } from '@angular/core';
import { TableCol } from './table-col.model';
import { TableOption } from './table-option.model';

@Directive()
export abstract class TableAbstract implements OnInit{

    cols:TableCol[];
    datas:any;
    options:TableOption;
    selectedValues:any;

    abstract initialize();
    abstract initializeCols();
    abstract initializeDatas();
    abstract initializeOptions();

    constructor() {
    }
    
    ngOnInit(): void {
        this.initialize();
        this.initializeCols();
        this.initializeDatas();
        this.initializeOptions();
    }

}