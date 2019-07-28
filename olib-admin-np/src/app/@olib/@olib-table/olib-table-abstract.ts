import { OnInit, OnDestroy }                from "@angular/core";
import { OlibTableOptionModel }             from './olib-table-option.model';
import { OlibTableColsModel }               from './olib-table-cols.model';

export abstract class OlibTableAbstract implements OnInit, OnDestroy {
    
    cols:OlibTableColsModel[];
    datas:any;
    options:OlibTableOptionModel;
    selectedValues:any;

    abstract initializeCols();
    abstract initializeDatas();
    abstract initializeOptions();

    constructor() {
    }
    
    ngOnInit(): void {
        this.initializeCols();
        this.initializeDatas();
        this.initializeOptions();
    }

    ngOnDestroy() {
    }

    setSelectedValues(values){
        this.selectedValues = values;
    }

    clearSelectedValues(){
        this.selectedValues = [];
    }

    setTableDatas(data){
        this.resetTable();
        if(data){
            this.datas = data;
        }
    }

    resetTable(){
        this.datas = [];
        this.selectedValues = [];
    }

    getSelectedIdx(){
        if(this.selectedValues){
            let ids = new Array;
        
            Object.keys(this.selectedValues).forEach(key=>{
              ids.push(this.selectedValues[key].idx);
            });
            
            return ids;
        }
    }
}