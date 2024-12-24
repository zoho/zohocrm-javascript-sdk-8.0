ZCRM.ConversionOption = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ConversionOptions : class{
			constructor(){

				this.modulePreference=null;
				this.contacts=null;
				this.deals=null;
				this.accounts=null;
				this.preferenceFieldMatchedValue=null;
				this.modulesWithMultipleLayouts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the modulePreference
			 * @returns {Modules} An instance of Modules
			 */
			getModulePreference()	{
				return this.modulePreference;

			}

			/**
			 * The method to set the value to modulePreference
			 * @param {Modules} modulePreference An instance of Modules
			 */
			setModulePreference(modulePreference)	{
				if((modulePreference != null) && (!(modulePreference instanceof ZCRM.Module.Model.Modules))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modulePreference EXPECTED TYPE: Modules", null, null);
				}
				this.modulePreference = modulePreference;
				this.keyModified.set("module_preference", 1);

			}

			/**
			 * The method to get the contacts
			 * @returns {List} An Array representing the contacts
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {List} contacts An Array
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: Array", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {List} An Array representing the deals
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {List} deals An Array
			 */
			setDeals(deals)	{
				if((deals != null) && (!(Object.prototype.toString.call(deals) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Array", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {List} An Array representing the accounts
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {List} accounts An Array
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: Array", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

			}

			/**
			 * The method to get the preferenceFieldMatchedValue
			 * @returns {PreferenceFieldMatchedValue} An instance of PreferenceFieldMatchedValue
			 */
			getPreferenceFieldMatchedValue()	{
				return this.preferenceFieldMatchedValue;

			}

			/**
			 * The method to set the value to preferenceFieldMatchedValue
			 * @param {PreferenceFieldMatchedValue} preferenceFieldMatchedValue An instance of PreferenceFieldMatchedValue
			 */
			setPreferenceFieldMatchedValue(preferenceFieldMatchedValue)	{
				if((preferenceFieldMatchedValue != null) && (!(preferenceFieldMatchedValue instanceof ZCRM.ConversionOption.Model.PreferenceFieldMatchedValue))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: preferenceFieldMatchedValue EXPECTED TYPE: PreferenceFieldMatchedValue", null, null);
				}
				this.preferenceFieldMatchedValue = preferenceFieldMatchedValue;
				this.keyModified.set("preference_field_matched_value", 1);

			}

			/**
			 * The method to get the modulesWithMultipleLayouts
			 * @returns {List} An Array representing the modulesWithMultipleLayouts
			 */
			getModulesWithMultipleLayouts()	{
				return this.modulesWithMultipleLayouts;

			}

			/**
			 * The method to set the value to modulesWithMultipleLayouts
			 * @param {List} modulesWithMultipleLayouts An Array
			 */
			setModulesWithMultipleLayouts(modulesWithMultipleLayouts)	{
				if((modulesWithMultipleLayouts != null) && (!(Object.prototype.toString.call(modulesWithMultipleLayouts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modulesWithMultipleLayouts EXPECTED TYPE: Array", null, null);
				}
				this.modulesWithMultipleLayouts = modulesWithMultipleLayouts;
				this.keyModified.set("modules_with_multiple_layouts", 1);

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

				this.status=null;
				this.code=null;
				this.message=null;
				this.details=null;
				this.keyModified=new Map();
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

		ResponseWrapper : class{
			constructor(){

				this.conversionoptions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the conversionoptions
			 * @returns {ConversionOptions} An instance of ConversionOptions
			 */
			getConversionoptions()	{
				return this.conversionoptions;

			}

			/**
			 * The method to set the value to conversionoptions
			 * @param {ConversionOptions} conversionoptions An instance of ConversionOptions
			 */
			setConversionoptions(conversionoptions)	{
				if((conversionoptions != null) && (!(conversionoptions instanceof ZCRM.ConversionOption.Model.ConversionOptions))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: conversionoptions EXPECTED TYPE: ConversionOptions", null, null);
				}
				this.conversionoptions = conversionoptions;
				this.keyModified.set("__conversion_options", 1);

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

		PreferenceFieldMatch : class{
			constructor(){

				this.field=null;
				this.matchedLeadValue=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the field
			 * @returns {Field} An instance of Field
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {Field} field An instance of Field
			 */
			setField(field)	{
				if((field != null) && (!(field instanceof ZCRM.ConversionOption.Model.Field))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

			}

			/**
			 * The method to get the matchedLeadValue
			 * @returns {String} A String representing the matchedLeadValue
			 */
			getMatchedLeadValue()	{
				return this.matchedLeadValue;

			}

			/**
			 * The method to set the value to matchedLeadValue
			 * @param {String} matchedLeadValue A String
			 */
			setMatchedLeadValue(matchedLeadValue)	{
				if((matchedLeadValue != null) && (!(Object.prototype.toString.call(matchedLeadValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: matchedLeadValue EXPECTED TYPE: String", null, null);
				}
				this.matchedLeadValue = matchedLeadValue;
				this.keyModified.set("matched_lead_value", 1);

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

		PreferenceFieldMatchedValue : class{
			constructor(){

				this.contacts=null;
				this.accounts=null;
				this.deals=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the contacts
			 * @returns {List} An Array representing the contacts
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {List} contacts An Array
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: Array", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {List} An Array representing the accounts
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {List} accounts An Array
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: Array", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {List} An Array representing the deals
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {List} deals An Array
			 */
			setDeals(deals)	{
				if((deals != null) && (!(Object.prototype.toString.call(deals) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Array", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

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

		Field : class{
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
		}
	},
	Operations : class {


		/**
		 * Creates an instance of ConversionOptionOperations with the given parameters
		 * @param {Long} leadId A BigInt
		 */
		constructor(leadId){
			if((!(Object.prototype.toString.call(leadId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: leadId EXPECTED TYPE: BigInt", null, null);
			}
						this.leadId = leadId;

		}

		/**
		 * The method to lead conversion options
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async leadConversionOptions(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Leads/");
			apiPath = apiPath.concat(this.leadId.toString());
			apiPath = apiPath.concat("/__conversion_options");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setModuleAPIName("Leads");
			await Utility.getFields("Leads,Contacts,Deals,Accounts", handlerInstance);
			return handlerInstance.apiCall("ConversionOption.Model.ResponseHandler", "application/json");

		}

	},

}