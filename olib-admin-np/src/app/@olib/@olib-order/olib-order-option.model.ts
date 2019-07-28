export class OlibOrderOption{
    private isTopButton : boolean;

    constructor(isTopButton:boolean){
        this.isTopButton = isTopButton;
    }
    

    /**
     * Getter $isTopButton
     * @return {boolean}
     */
	public get $isTopButton(): boolean {
		return this.isTopButton;
	}

    /**
     * Setter $isTopButton
     * @param {boolean} value
     */
	public set $isTopButton(value: boolean) {
		this.isTopButton = value;
	}

}