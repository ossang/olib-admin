export class OlibTableOptionModel{
	private isCheckbox : boolean;
	private isFilter : boolean;
	private isSort : boolean;
    private isPaginator : boolean;
    private rowsPerPage : any;
    private isExport : boolean;
    private rows : number;
    private isCustom : boolean;

	constructor() {
	}

    /**
     * Getter $isCheckbox
     * @return {boolean}
     */
	public get $isCheckbox(): boolean {
		return this.isCheckbox;
	}

    /**
     * Setter $isCheckbox
     * @param {boolean} value
     */
	public set $isCheckbox(value: boolean) {
		this.isCheckbox = value;
	}

    /**
     * Getter $isFilter
     * @return {boolean}
     */
	public get $isFilter(): boolean {
		return this.isFilter;
	}

    /**
     * Setter $isFilter
     * @param {boolean} value
     */
	public set $isFilter(value: boolean) {
		this.isFilter = value;
	}

    /**
     * Getter $isSort
     * @return {boolean}
     */
	public get $isSort(): boolean {
		return this.isSort;
	}

    /**
     * Setter $isSort
     * @param {boolean} value
     */
	public set $isSort(value: boolean) {
		this.isSort = value;
	}

    /**
     * Getter $isPaginator
     * @return {boolean}
     */
	public get $isPaginator(): boolean {
		return this.isPaginator;
	}

    /**
     * Setter $isPaginator
     * @param {boolean} value
     */
	public set $isPaginator(value: boolean) {
		this.isPaginator = value;
	}

    /**
     * Getter $rowsPerPage
     * @return {any}
     */
	public get $rowsPerPage(): any {
		return this.rowsPerPage;
	}

    /**
     * Setter $rowsPerPage
     * @param {any} value
     */
	public set $rowsPerPage(value: any) {
		this.rowsPerPage = value;
	}

    /**
     * Getter $isExport
     * @return {boolean}
     */
	public get $isExport(): boolean {
		return this.isExport;
	}

    /**
     * Setter $isExport
     * @param {boolean} value
     */
	public set $isExport(value: boolean) {
		this.isExport = value;
	}

    /**
     * Getter $rows
     * @return {number}
     */
	public get $rows(): number {
		return this.rows;
	}

    /**
     * Setter $rows
     * @param {number} value
     */
	public set $rows(value: number) {
		this.rows = value;
    }

    /**
     * Getter $isCustom
     * @return {boolean}
     */
	public get $isCustom(): boolean {
		return this.isCustom;
	}

    /**
     * Setter $isCustom
     * @param {boolean} value
     */
	public set $isCustom(value: boolean) {
		this.isCustom = value;
	}


}