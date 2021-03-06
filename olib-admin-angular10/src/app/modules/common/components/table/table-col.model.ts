export class TableCol{
    field : string;
	header : string;
	width : string;
    link : string;
    isFilter : boolean;
    isSort : boolean;
	isDate: boolean;
    parser : any;
    linkParamField : any;

    constructor(
		field:string, 
		header:string,
		width:string,
		isFilter:boolean,
		isSort:boolean,
        isDate:boolean,
        link?:string,
        linkParamField?:any,
        parser?:any){

        this.field = field;
		this.header = header;
		this.width = width;
        this.isFilter = isFilter;
        this.isSort = isSort;
        this.isDate = isDate;
        this.link = link;
        this.parser = parser;
        this.linkParamField = linkParamField;
    }
}