export class OlibFileuploadConfig{
    private credentials : string;
    private url : string;
    private accept : string;
    private maxFileSize : string;
    private authToken : string;

    constructor(){
    }

    /**
     * Getter $credentials
     * @return {string}
     */
	public get $credentials(): string {
		return this.credentials;
	}

    /**
     * Getter $url
     * @return {string}
     */
	public get $url(): string {
		return this.url;
	}

    /**
     * Getter $accept
     * @return {string}
     */
	public get $accept(): string {
		return this.accept;
	}

    /**
     * Getter $maxFileSize
     * @return {string}
     */
	public get $maxFileSize(): string {
		return this.maxFileSize;
	}

    /**
     * Setter $credentials
     * @param {string} value
     */
	public set $credentials(value: string) {
		this.credentials = value;
	}

    /**
     * Setter $url
     * @param {string} value
     */
	public set $url(value: string) {
		this.url = value;
	}

    /**
     * Setter $accept
     * @param {string} value
     */
	public set $accept(value: string) {
		this.accept = value;
	}

    /**
     * Setter $maxFileSize
     * @param {string} value
     */
	public set $maxFileSize(value: string) {
		this.maxFileSize = value;
	}

    /**
     * Getter $authToken
     * @return {string}
     */
	public get $authToken(): string {
		return this.authToken;
	}

    /**
     * Setter $authToken
     * @param {string} value
     */
	public set $authToken(value: string) {
		this.authToken = value;
	}

}
