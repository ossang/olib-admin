export class TableOption {
    showTotalLabel : string;
    emptymessage : string;
    sortField : string;
    isCheckbox : boolean;
	isFilter : boolean;
	isSort : boolean;
    isPaginator : boolean;
    isExport : boolean;
    isShowTotal : boolean;
    rows : number;
    rowsPerPage : any;
    selectedValues : any;
    styleClass : TableStyleClass;
    sortOrder : TableSortOrder
}

export enum TableSortOrder{
    DESC = "-1",
    ASC = "1"
}

export enum TableStyleClass{
    LINE = "p-datatable-gridlines",
    STRIPED = "p-datatable-striped",
    SIZE_SMALL = "p-datatable-sm",
    SIZE_LARGE = "p-datatable-lg",

    LINE_SM = "p-datatable-gridlines p-datatable-sm",
    LINE_LG = "p-datatable-gridlines p-datatable-lg",
    STRIPED_SM = "p-datatable-striped p-datatable-sm",
    STRIPED_LG = "p-datatable-striped p-datatable-lg"
}