import { Directive, OnInit } from '@angular/core';
import { BreadCrumbConfig } from '../configs/breadcrumb.config';

@Directive()
export abstract class Admin implements OnInit{
    abstract initialize();

    constructor(
        protected breadCrumbConfig : BreadCrumbConfig,
        private category : string,
        private sub : string
        ){
    }

    ngOnInit(): void {
        this.breadCrumbConfig.items = [{label:this.category},{label:this.sub}];
        this.initialize();
    }
}