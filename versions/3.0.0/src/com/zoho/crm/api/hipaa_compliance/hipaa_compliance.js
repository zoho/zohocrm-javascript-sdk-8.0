ZCRM.HipaaCompliance = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

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

		Modules : class{
			constructor(){

				this.apiName=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

			}

			/**
			 * The method to set the value to apiName
			 * @param {String} apiName A String
			 */
			setAPIName(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.apiName = apiName;
				this.keyModified.set("api_name", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

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

		SuccessResponse : class{
			constructor(){

				this.code=null;
				this.message=null;
				this.status=null;
				this.details=null;
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

		ActionWrapper : class{
			constructor(){

				this.hipaaCompliance=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the hipaaCompliance
			 * @returns {ActionResponse} An instance of ActionResponse
			 */
			getHipaaCompliance()	{
				return this.hipaaCompliance;

			}

			/**
			 * The method to set the value to hipaaCompliance
			 * @param {ActionResponse} hipaaCompliance An instance of ActionResponse
			 */
			setHipaaCompliance(hipaaCompliance)	{
				this.hipaaCompliance = hipaaCompliance;
				this.keyModified.set("hipaa_compliance", 1);

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

		ResponseWrapper : class{
			constructor(){

				this.hipaaCompliance=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the hipaaCompliance
			 * @returns {HipaaCompliance} An instance of HipaaCompliance
			 */
			getHipaaCompliance()	{
				return this.hipaaCompliance;

			}

			/**
			 * The method to set the value to hipaaCompliance
			 * @param {HipaaCompliance} hipaaCompliance An instance of HipaaCompliance
			 */
			setHipaaCompliance(hipaaCompliance)	{
				if((hipaaCompliance != null) && (!(hipaaCompliance instanceof ZCRM.HipaaCompliance.Model.HipaaCompliance))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hipaaCompliance EXPECTED TYPE: HipaaCompliance", null, null);
				}
				this.hipaaCompliance = hipaaCompliance;
				this.keyModified.set("hipaa_compliance", 1);

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

		HipaaCompliance : class{
			constructor(){

				this.enabled=null;
				this.enabledForModules=null;
				this.restrictToZohoApps=null;
				this.restrictDataAccessThroughAPI=null;
				this.restrictDataInExport=null;
				this.restrictToThirdPartyApps=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the enabled
			 * @returns {Boolean} A Boolean representing the enabled
			 */
			getEnabled()	{
				return this.enabled;

			}

			/**
			 * The method to set the value to enabled
			 * @param {Boolean} enabled A Boolean
			 */
			setEnabled(enabled)	{
				if((enabled != null) && (!(Object.prototype.toString.call(enabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabled EXPECTED TYPE: Boolean", null, null);
				}
				this.enabled = enabled;
				this.keyModified.set("enabled", 1);

			}

			/**
			 * The method to get the enabledForModules
			 * @returns {List} An Array representing the enabledForModules
			 */
			getEnabledForModules()	{
				return this.enabledForModules;

			}

			/**
			 * The method to set the value to enabledForModules
			 * @param {List} enabledForModules An Array
			 */
			setEnabledForModules(enabledForModules)	{
				if((enabledForModules != null) && (!(Object.prototype.toString.call(enabledForModules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabledForModules EXPECTED TYPE: Array", null, null);
				}
				this.enabledForModules = enabledForModules;
				this.keyModified.set("enabled_for_modules", 1);

			}

			/**
			 * The method to get the restrictToZohoApps
			 * @returns {Boolean} A Boolean representing the restrictToZohoApps
			 */
			getRestrictToZohoApps()	{
				return this.restrictToZohoApps;

			}

			/**
			 * The method to set the value to restrictToZohoApps
			 * @param {Boolean} restrictToZohoApps A Boolean
			 */
			setRestrictToZohoApps(restrictToZohoApps)	{
				if((restrictToZohoApps != null) && (!(Object.prototype.toString.call(restrictToZohoApps) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictToZohoApps EXPECTED TYPE: Boolean", null, null);
				}
				this.restrictToZohoApps = restrictToZohoApps;
				this.keyModified.set("restrict_to_zoho_apps", 1);

			}

			/**
			 * The method to get the restrictDataAccessThroughapi
			 * @returns {Boolean} A Boolean representing the restrictDataAccessThroughAPI
			 */
			getRestrictDataAccessThroughAPI()	{
				return this.restrictDataAccessThroughAPI;

			}

			/**
			 * The method to set the value to restrictDataAccessThroughapi
			 * @param {Boolean} restrictDataAccessThroughAPI A Boolean
			 */
			setRestrictDataAccessThroughAPI(restrictDataAccessThroughAPI)	{
				if((restrictDataAccessThroughAPI != null) && (!(Object.prototype.toString.call(restrictDataAccessThroughAPI) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictDataAccessThroughAPI EXPECTED TYPE: Boolean", null, null);
				}
				this.restrictDataAccessThroughAPI = restrictDataAccessThroughAPI;
				this.keyModified.set("restrict_data_access_through_api", 1);

			}

			/**
			 * The method to get the restrictDataInExport
			 * @returns {Boolean} A Boolean representing the restrictDataInExport
			 */
			getRestrictDataInExport()	{
				return this.restrictDataInExport;

			}

			/**
			 * The method to set the value to restrictDataInExport
			 * @param {Boolean} restrictDataInExport A Boolean
			 */
			setRestrictDataInExport(restrictDataInExport)	{
				if((restrictDataInExport != null) && (!(Object.prototype.toString.call(restrictDataInExport) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictDataInExport EXPECTED TYPE: Boolean", null, null);
				}
				this.restrictDataInExport = restrictDataInExport;
				this.keyModified.set("restrict_data_in_export", 1);

			}

			/**
			 * The method to get the restrictToThirdPartyApps
			 * @returns {List} An Array representing the restrictToThirdPartyApps
			 */
			getRestrictToThirdPartyApps()	{
				return this.restrictToThirdPartyApps;

			}

			/**
			 * The method to set the value to restrictToThirdPartyApps
			 * @param {List} restrictToThirdPartyApps An Array
			 */
			setRestrictToThirdPartyApps(restrictToThirdPartyApps)	{
				if((restrictToThirdPartyApps != null) && (!(Object.prototype.toString.call(restrictToThirdPartyApps) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictToThirdPartyApps EXPECTED TYPE: Array", null, null);
				}
				this.restrictToThirdPartyApps = restrictToThirdPartyApps;
				this.keyModified.set("restrict_to_third_party_apps", 1);

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


}