ZCRM.Api = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.apis=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the apis
			 * @returns {List} An Array representing the apis
			 */
			getApis()	{
				return this.apis;

			}

			/**
			 * The method to set the value to apis
			 * @param {List} apis An Array
			 */
			setApis(apis)	{
				if((apis != null) && (!(Object.prototype.toString.call(apis) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apis EXPECTED TYPE: Array", null, null);
				}
				this.apis = apis;
				this.keyModified.set("__apis", 1);

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
		},

		SupportedAPI : class{
			constructor(){

				this.path=null;
				this.operationTypes=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the path
			 * @returns {String} A String representing the path
			 */
			getPath()	{
				return this.path;

			}

			/**
			 * The method to set the value to path
			 * @param {String} path A String
			 */
			setPath(path)	{
				if((path != null) && (!(Object.prototype.toString.call(path) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: path EXPECTED TYPE: String", null, null);
				}
				this.path = path;
				this.keyModified.set("path", 1);

			}

			/**
			 * The method to get the operationTypes
			 * @returns {List} An Array representing the operationTypes
			 */
			getOperationTypes()	{
				return this.operationTypes;

			}

			/**
			 * The method to set the value to operationTypes
			 * @param {List} operationTypes An Array
			 */
			setOperationTypes(operationTypes)	{
				if((operationTypes != null) && (!(Object.prototype.toString.call(operationTypes) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: operationTypes EXPECTED TYPE: Array", null, null);
				}
				this.operationTypes = operationTypes;
				this.keyModified.set("operation_types", 1);

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

		OperationTypes : class{
			constructor(){

				this.method=null;
				this.oauthScope=null;
				this.maxCredits=null;
				this.minCredits=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the method
			 * @returns {String} A String representing the method
			 */
			getMethod()	{
				return this.method;

			}

			/**
			 * The method to set the value to method
			 * @param {String} method A String
			 */
			setMethod(method)	{
				if((method != null) && (!(Object.prototype.toString.call(method) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: method EXPECTED TYPE: String", null, null);
				}
				this.method = method;
				this.keyModified.set("method", 1);

			}

			/**
			 * The method to get the oauthScope
			 * @returns {String} A String representing the oauthScope
			 */
			getOauthScope()	{
				return this.oauthScope;

			}

			/**
			 * The method to set the value to oauthScope
			 * @param {String} oauthScope A String
			 */
			setOauthScope(oauthScope)	{
				if((oauthScope != null) && (!(Object.prototype.toString.call(oauthScope) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: oauthScope EXPECTED TYPE: String", null, null);
				}
				this.oauthScope = oauthScope;
				this.keyModified.set("oauth_scope", 1);

			}

			/**
			 * The method to get the maxCredits
			 * @returns {Integer} An Integer representing the maxCredits
			 */
			getMaxCredits()	{
				return this.maxCredits;

			}

			/**
			 * The method to set the value to maxCredits
			 * @param {Integer} maxCredits An Integer
			 */
			setMaxCredits(maxCredits)	{
				if((maxCredits != null) && (!(Object.prototype.toString.call(maxCredits) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maxCredits EXPECTED TYPE: Integer", null, null);
				}
				this.maxCredits = maxCredits;
				this.keyModified.set("max_credits", 1);

			}

			/**
			 * The method to get the minCredits
			 * @returns {Integer} An Integer representing the minCredits
			 */
			getMinCredits()	{
				return this.minCredits;

			}

			/**
			 * The method to set the value to minCredits
			 * @param {Integer} minCredits An Integer
			 */
			setMinCredits(minCredits)	{
				if((minCredits != null) && (!(Object.prototype.toString.call(minCredits) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: minCredits EXPECTED TYPE: Integer", null, null);
				}
				this.minCredits = minCredits;
				this.keyModified.set("min_credits", 1);

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


		/**
		 * Creates an instance of ApisOperations with the given parameters
		 * @param {String} filters A String
		 */
		constructor(filters=null){
			if((filters != null) && (!(Object.prototype.toString.call(filters) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: String", null, null);
			}
						this.filters = filters;

		}

		/**
		 * The method to get supported api
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getSupportedAPI(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__apis");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("filters", "Api.Model.GetSupportedAPIParam"), this.filters);
			return handlerInstance.apiCall("Api.Model.ResponseHandler", "application/json");

		}

	},

}