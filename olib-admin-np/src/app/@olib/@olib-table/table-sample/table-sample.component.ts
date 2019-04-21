import { Component }                from '@angular/core';
import { TableSampleService }       from './table-sample.service';
import { 
  OlibTableColsModel, 
  OlibTableOptionModel,
  OlibTableAbstract, 
   } from '..';

@Component({
  selector: 'olib-table-sample',
  templateUrl: './table-sample.component.html',
  styleUrls: ['./table-sample.component.scss']
})
export class TableSampleComponent extends OlibTableAbstract {
  
  constructor(
    private service : TableSampleService
  ) { 
    super();
  }

  initializeCols() {
    this.cols = new Array;
    this.cols.push(new OlibTableColsModel("id","No","5%",false,false,false));
    this.cols.push(new OlibTableColsModel("name","Name","25%",true,true,false));
    this.cols.push(new OlibTableColsModel("phone","Phone","25%",true,false,false));
    this.cols.push(new OlibTableColsModel("email","Id","45%",true,false,false));
  }
  
  initializeDatas() {
    this.datas = new Array;
    this.service.getSampleData().subscribe(res=>{
      this.setTableDatas(res.data);
    })
  }
  
  initializeOptions() {
    this.options = new OlibTableOptionModel();
    this.options.$isCheckbox=true;
    this.options.$isFilter=true;
    this.options.$isSort=true;
    this.options.$isPaginator=true;
    this.options.$isExport=false;
    this.options.$rowsPerPage=[10,20,30];
    this.options.$isCustom=false;
  }
}
