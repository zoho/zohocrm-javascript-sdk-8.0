/**
 * This class representing the HTTP parameter name and value.
 */
class ParameterMap {
    constructor() {
        this._parameterMap = new Map();
    }

    /**
     * This is a getter method to get parameter map.
     * @returns {Map} A Map representing the API response parameters.
     */
    getParameterMap() {
        return this._parameterMap;
    }

    /**
     * This is a setter method to set parameter map.
     * @returns {Map} An Map representing the API request parameters.
     */
    setParameterMap(parameterMap) {
        this._parameterMap = parameterMap;
    }

    /**
     * This method to add parameter name and value.
     * @param {Param} param A Param class instance.
     * @param {object} value A Object containing the parameter value.
     */
    async add(param, value) {
        if (param === null) {
            throw new SDKException(Constants.PARAMETER_NULL_ERROR, Constants.PARAM_INSTANCE_NULL_ERROR);
        }
        let paramName = param.getName();
        if (paramName === null) {
            throw new SDKException(Constants.PARAM_NAME_NULL_ERROR, Constants.PARAM_NAME_NULL_ERROR_MESSAGE);
        }
        if (value === null) {
            throw new SDKException(Constants.PARAMETER_NULL_ERROR, paramName + Constants.NULL_VALUE_ERROR_MESSAGE);
        }
        try {
            let paramClassName = param.getClassName();
            let parsedParamValue = null;
            if (paramClassName !== null) {
                let headerParamValidator = new HeaderParamValidator();
                parsedParamValue = await headerParamValidator.validate(paramName, paramClassName, value).catch(err=> { throw err;});
            }
            else {
                try {
                    let type = Object.prototype.toString.call(value);
                    parsedParamValue = await DataTypeConverter.postConvert(value, type.toLowerCase());
                }
                catch (ex) {
                    parsedParamValue = value;
                }
            }
			if (parsedParamValue === true || parsedParamValue === false || value instanceof Map || Array.isArray(value)) {
				parsedParamValue = JSON.stringify(parsedParamValue);
			}
            if (this._parameterMap.has(paramName) && this._parameterMap.get(paramName) != null) {
                let paramValue = this._parameterMap.get(paramName);
                paramValue = paramValue.concat(",", parsedParamValue.toString());
                this._parameterMap.set(paramName, paramValue);
            }
            else {
                this._parameterMap.set(paramName, parsedParamValue.toString());
            }
        } catch (error) {
			if (!(error instanceof SDKException)) {
			  error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.PARAM_EXCEPTION, error);
			throw error;
		}
    }
}