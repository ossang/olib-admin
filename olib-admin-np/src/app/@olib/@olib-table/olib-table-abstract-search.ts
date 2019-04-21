import { FormGroup, FormBuilder }           from '@angular/forms';
import { OnInit }                           from '@angular/core';
import { OlibTableAbstract }                from './olib-table-abstract';

export abstract class OlibTableAbstractSearch extends OlibTableAbstract implements OnInit{
    
    abstract initialize();
    abstract initializeFormObject();
    abstract generateRequest(data : any);
    abstract onSubmit(data : any);

    searchForm : FormGroup;
    beforeSearchParam : any = {};

    constructor(
        protected fb:FormBuilder,
    ){
        super();
    }

    ngOnInit(): void {
        this.initialize();
        this.initializeSearchForm();
        this.initializeCols();
        this.initializeOptions();
        this.initializeDatas();
    }

    initializeSearchForm(){
        this.searchForm = this.fb.group(this.initializeFormObject());
     }

    refreshEmitter(data){
        if(data){
            this.refreshData();
        }
    }

    refreshData(){
        if(this.beforeSearchParam){
            this.onSubmit(this.beforeSearchParam);
        }
    }
}
