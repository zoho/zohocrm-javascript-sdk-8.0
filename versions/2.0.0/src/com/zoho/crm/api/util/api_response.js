/**
 * This class is the common API response object.
 */
class APIResponse {
    /**
     * Creates an APIResponse class instance with the specified parameters.
     * @param {Map} headers A Map containing the API response headers.
     * @param {String} statusCode A String containing the API response HTTP status code.
     * @param {object} dataObject A Object containing the API response POJO class instance.
     * @param {object} responseJSON A Object containing the API response object
     */
    constructor(headers, statusCode, dataObject, responseJSON) {
        this._headers = headers;
        this._statusCode = statusCode;
        this._dataObject = dataObject;
        this._responseJSON = responseJSON
    }

    /**
     * This is a getter method to get API response headers.
     * @returns {Map} A Map representing the API response headers.
     */
    getHeaders() {
        return this._headers;
    }

    /**
     * This is a getter method to get the API response HTTP status code.
     * @returns {String} A String representing the API response HTTP status code.
     */
    getStatusCode() {
        return this._statusCode;
    }

    /**
     * This method to get an API response POJO class instance.
     * @returns {object} A POJO class instance.
     */
    getObject() {
        return this._dataObject;
    }

    /**
     * This method to get an API response obejct.
     * @returns {object} A response object.
     */
    getResponseJSON() {
        return this._responseJSON;
    }
}