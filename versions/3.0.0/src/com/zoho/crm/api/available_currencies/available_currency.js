ZCRM.AvailableCurrency = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.availableCurrencies=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the availableCurrencies
			 * @returns {List} An Array representing the availableCurrencies
			 */
			getAvailableCurrencies()	{
				return this.availableCurrencies;

			}

			/**
			 * The method to set the value to availableCurrencies
			 * @param {List} availableCurrencies An Array
			 */
			setAvailableCurrencies(availableCurrencies)	{
				if((availableCurrencies != null) && (!(Object.prototype.toString.call(availableCurrencies) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: availableCurrencies EXPECTED TYPE: Array", null, null);
				}
				this.availableCurrencies = availableCurrencies;
				this.keyModified.set("available_currencies", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		Currency : class{
			constructor(){

				this.displayValue=null;
				this.decimalSeparator=null;
				this.symbol=null;
				this.thousandSeparator=null;
				this.displayName=null;
				this.isoCode=null;
				this.decimalPlaces=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the displayValue
			 * @returns {String} A String representing the displayValue
			 */
			getDisplayValue()	{
				return this.displayValue;

			}

			/**
			 * The method to set the value to displayValue
			 * @param {String} displayValue A String
			 */
			setDisplayValue(displayValue)	{
				if((displayValue != null) && (!(Object.prototype.toString.call(displayValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayValue EXPECTED TYPE: String", null, null);
				}
				this.displayValue = displayValue;
				this.keyModified.set("display_value", 1);

			}

			/**
			 * The method to get the decimalSeparator
			 * @returns {String} A String representing the decimalSeparator
			 */
			getDecimalSeparator()	{
				return this.decimalSeparator;

			}

			/**
			 * The method to set the value to decimalSeparator
			 * @param {String} decimalSeparator A String
			 */
			setDecimalSeparator(decimalSeparator)	{
				if((decimalSeparator != null) && (!(Object.prototype.toString.call(decimalSeparator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalSeparator EXPECTED TYPE: String", null, null);
				}
				this.decimalSeparator = decimalSeparator;
				this.keyModified.set("decimal_separator", 1);

			}

			/**
			 * The method to get the symbol
			 * @returns {String} A String representing the symbol
			 */
			getSymbol()	{
				return this.symbol;

			}

			/**
			 * The method to set the value to symbol
			 * @param {String} symbol A String
			 */
			setSymbol(symbol)	{
				if((symbol != null) && (!(Object.prototype.toString.call(symbol) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: symbol EXPECTED TYPE: String", null, null);
				}
				this.symbol = symbol;
				this.keyModified.set("symbol", 1);

			}

			/**
			 * The method to get the thousandSeparator
			 * @returns {String} A String representing the thousandSeparator
			 */
			getThousandSeparator()	{
				return this.thousandSeparator;

			}

			/**
			 * The method to set the value to thousandSeparator
			 * @param {String} thousandSeparator A String
			 */
			setThousandSeparator(thousandSeparator)	{
				if((thousandSeparator != null) && (!(Object.prototype.toString.call(thousandSeparator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: thousandSeparator EXPECTED TYPE: String", null, null);
				}
				this.thousandSeparator = thousandSeparator;
				this.keyModified.set("thousand_separator", 1);

			}

			/**
			 * The method to get the displayName
			 * @returns {String} A String representing the displayName
			 */
			getDisplayName()	{
				return this.displayName;

			}

			/**
			 * The method to set the value to displayName
			 * @param {String} displayName A String
			 */
			setDisplayName(displayName)	{
				if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
				}
				this.displayName = displayName;
				this.keyModified.set("display_name", 1);

			}

			/**
			 * The method to get the isoCode
			 * @returns {String} A String representing the isoCode
			 */
			getIsoCode()	{
				return this.isoCode;

			}

			/**
			 * The method to set the value to isoCode
			 * @param {String} isoCode A String
			 */
			setIsoCode(isoCode)	{
				if((isoCode != null) && (!(Object.prototype.toString.call(isoCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isoCode EXPECTED TYPE: String", null, null);
				}
				this.isoCode = isoCode;
				this.keyModified.set("iso_code", 1);

			}

			/**
			 * The method to get the decimalPlaces
			 * @returns {String} A String representing the decimalPlaces
			 */
			getDecimalPlaces()	{
				return this.decimalPlaces;

			}

			/**
			 * The method to set the value to decimalPlaces
			 * @param {String} decimalPlaces A String
			 */
			setDecimalPlaces(decimalPlaces)	{
				if((decimalPlaces != null) && (!(Object.prototype.toString.call(decimalPlaces) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlaces EXPECTED TYPE: String", null, null);
				}
				this.decimalPlaces = decimalPlaces;
				this.keyModified.set("decimal_places", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		APIException : class{
			constructor(){

				this.code=null;
				this.details=null;
				this.message=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to get the message
			 * @returns {String} A String representing the message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {String} message A String
			 */
			setMessage(message)	{
				if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get available currencies
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getAvailableCurrencies(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/org/currencies/actions/available_currencies");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("AvailableCurrency.Model.ResponseHandler", "application/json");

		}
	},

}