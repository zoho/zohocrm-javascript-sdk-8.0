/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap {
    constructor() {
        this._headerMap = new Map();
    }

    /**
     * This is a getter method to get header map.
     * @return A Map representing the API request headers.
     */
    getHeaderMap() {
        return this._headerMap;
    }

    /**
     * This is a setter method to set header map.
     * @param {Map} headerMap  An Map representing the API request headers.
     */
    setHeaderMap(headerMap) {
        this._headerMap = headerMap;
    }

    /**
     * This method is to add header name and value.
     * @param {Header} header A Header class instance.
     * @param {object} value A object containing the header value.
     */
    async add(header, value) {
        if (header === null) {
            throw new SDKException(Constants.HEADER_NULL_ERROR, Constants.HEADER_INSTANCE_NULL_ERROR);
        }
        let headerName = header.getName();
        if (headerName === null) {
            throw new SDKException(Constants.HEADER_NAME_NULL_ERROR, Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
        }
        if (value === null) {
            throw new SDKException(Constants.HEADER_NULL_ERROR, headerName + Constants.NULL_VALUE_ERROR_MESSAGE);
        }
        try {
            let headerClassName = header.getClassName();
            let parsedHeaderValue = null;
            if (headerClassName !== null) {
                let headerParamValidator = new HeaderParamValidator();
                parsedHeaderValue = await headerParamValidator.validate(headerName, headerClassName, value).catch(err=> { throw err;});
            }
            else {
                try {
                    let type = Object.prototype.toString.call(value);
                    parsedHeaderValue = await DataTypeConverter.postConvert(value, type.toLowerCase());
                }
                catch (ex) {
                    parsedHeaderValue = value;
                }
            }
            if (parsedHeaderValue === true || parsedHeaderValue === false) {
				parsedHeaderValue = JSON.stringify(parsedHeaderValue);
			}
            if (this._headerMap.has(headerName) && this._headerMap.get(headerName) !== null) {
                let headerValue = this._headerMap.get(headerName);
                headerValue = headerValue.concat(",", parsedHeaderValue.toString());
                this._headerMap.set(headerName, headerValue);
            }
            else {
                this._headerMap.set(headerName, parsedHeaderValue.toString());
            }
        }
        catch (error) {
			if (!(error instanceof SDKException)) {
			  error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.HEADER_EXCEPTION, error);
			throw error;
		}
        
    }
}