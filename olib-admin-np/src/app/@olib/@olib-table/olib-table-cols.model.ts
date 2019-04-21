export class OlibTableColsModel {
    private field : string;
    private isFilter : boolean;
    private isSort : boolean;
	private header : string;
	private width : string;
	private isDate: boolean;
    
    constructor(
		field:string, 
		header:string,
		width:string,
		isFilter:boolean,
		isSort:boolean,
		isDate:boolean){

        this.field = field;
		this.header = header;
		this.width = width;
        this.isFilter = isFilter;
        this.isSort = isSort;
		this.isDate = isDate;
    }

	public get $width(): string {
		return this.width;
	}
	public set $width(value: string) {
		this.width = value;
	}
	public get $field(): string {
		return this.field;
	}
	public set $field(value: string) {
		this.field = value;
    }
	public get $isFilter(): boolean {
		return this.isFilter;
	}
	public get $isSort(): boolean {
		return this.isSort;
	}
	public get $header(): string {
		return this.header;
	}
	public set $isFilter(value: boolean) {
		this.isFilter = value;
	}
	public set $isSort(value: boolean) {
		this.isSort = value;
	}
	public set $header(value: string) {
		this.header = value;
	}
	public get $isDate(): boolean {
		return this.isDate;
	}
	public set $isDate(value: boolean) {
		this.isDate = value;
	}
}