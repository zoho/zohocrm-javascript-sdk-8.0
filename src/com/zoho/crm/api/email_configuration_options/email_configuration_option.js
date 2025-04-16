ZCRM.EmailConfigurationOption = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.configurationOptions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the configurationOptions
			 * @returns {List} An Array representing the configurationOptions
			 */
			getConfigurationOptions()	{
				return this.configurationOptions;

			}

			/**
			 * The method to set the value to configurationOptions
			 * @param {List} configurationOptions An Array
			 */
			setConfigurationOptions(configurationOptions)	{
				if((configurationOptions != null) && (!(Object.prototype.toString.call(configurationOptions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: configurationOptions EXPECTED TYPE: Array", null, null);
				}
				this.configurationOptions = configurationOptions;
				this.keyModified.set("configuration_options", 1);

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

		RangeStructure : class{
			constructor(){

				this.from=null;
				this.to=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the from
			 * @returns {String} A String representing the from
			 */
			getFrom()	{
				return this.from;

			}

			/**
			 * The method to set the value to from
			 * @param {String} from A String
			 */
			setFrom(from)	{
				if((from != null) && (!(Object.prototype.toString.call(from) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: String", null, null);
				}
				this.from = from;
				this.keyModified.set("from", 1);

			}

			/**
			 * The method to get the to
			 * @returns {String} A String representing the to
			 */
			getTo()	{
				return this.to;

			}

			/**
			 * The method to set the value to to
			 * @param {String} to A String
			 */
			setTo(to)	{
				if((to != null) && (!(Object.prototype.toString.call(to) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: String", null, null);
				}
				this.to = to;
				this.keyModified.set("to", 1);

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

		PropertyDetails : class{
			constructor(){

				this.name=null;
				this.values=null;
				this.dataType=null;
				this.properties=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the values
			 * @returns {List} An Array representing the values
			 */
			getValues()	{
				return this.values;

			}

			/**
			 * The method to set the value to values
			 * @param {List} values An Array
			 */
			setValues(values)	{
				if((values != null) && (!(Object.prototype.toString.call(values) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: values EXPECTED TYPE: Array", null, null);
				}
				this.values = values;
				this.keyModified.set("values", 1);

			}

			/**
			 * The method to get the dataType
			 * @returns {String} A String representing the dataType
			 */
			getDataType()	{
				return this.dataType;

			}

			/**
			 * The method to set the value to dataType
			 * @param {String} dataType A String
			 */
			setDataType(dataType)	{
				if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
				}
				this.dataType = dataType;
				this.keyModified.set("data_type", 1);

			}

			/**
			 * The method to get the properties
			 * @returns {List} An Array representing the properties
			 */
			getProperties()	{
				return this.properties;

			}

			/**
			 * The method to set the value to properties
			 * @param {List} properties An Array
			 */
			setProperties(properties)	{
				if((properties != null) && (!(Object.prototype.toString.call(properties) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Array", null, null);
				}
				this.properties = properties;
				this.keyModified.set("properties", 1);

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

		BodyWrapper : class{
			constructor(){

				this.configurationOptions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the configurationOptions
			 * @returns {List} An Array representing the configurationOptions
			 */
			getConfigurationOptions()	{
				return this.configurationOptions;

			}

			/**
			 * The method to set the value to configurationOptions
			 * @param {List} configurationOptions An Array
			 */
			setConfigurationOptions(configurationOptions)	{
				if((configurationOptions != null) && (!(Object.prototype.toString.call(configurationOptions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: configurationOptions EXPECTED TYPE: Array", null, null);
				}
				this.configurationOptions = configurationOptions;
				this.keyModified.set("configuration_options", 1);

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

		ConfigurationOptions : class{
			constructor(){

				this.name=null;
				this.values=null;
				this.dataType=null;
				this.properties=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the values
			 * @returns {List} An Array representing the values
			 */
			getValues()	{
				return this.values;

			}

			/**
			 * The method to set the value to values
			 * @param {List} values An Array
			 */
			setValues(values)	{
				if((values != null) && (!(Object.prototype.toString.call(values) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: values EXPECTED TYPE: Array", null, null);
				}
				this.values = values;
				this.keyModified.set("values", 1);

			}

			/**
			 * The method to get the dataType
			 * @returns {Choice} An instance of Choice
			 */
			getDataType()	{
				return this.dataType;

			}

			/**
			 * The method to set the value to dataType
			 * @param {Choice} dataType An instance of Choice
			 */
			setDataType(dataType)	{
				if((dataType != null) && (!(dataType instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: Choice", null, null);
				}
				this.dataType = dataType;
				this.keyModified.set("data_type", 1);

			}

			/**
			 * The method to get the properties
			 * @returns {List} An Array representing the properties
			 */
			getProperties()	{
				return this.properties;

			}

			/**
			 * The method to set the value to properties
			 * @param {List} properties An Array
			 */
			setProperties(properties)	{
				if((properties != null) && (!(Object.prototype.toString.call(properties) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Array", null, null);
				}
				this.properties = properties;
				this.keyModified.set("properties", 1);

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

		ErrorDetails : class{
			constructor(){

				this.apiName=null;
				this.jsonPath=null;
				this.range=null;
				this.supportedValues=null;
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
			 * The method to get the jsonPath
			 * @returns {String} A String representing the jsonPath
			 */
			getJsonPath()	{
				return this.jsonPath;

			}

			/**
			 * The method to set the value to jsonPath
			 * @param {String} jsonPath A String
			 */
			setJsonPath(jsonPath)	{
				if((jsonPath != null) && (!(Object.prototype.toString.call(jsonPath) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonPath EXPECTED TYPE: String", null, null);
				}
				this.jsonPath = jsonPath;
				this.keyModified.set("json_path", 1);

			}

			/**
			 * The method to get the range
			 * @returns {RangeStructure} An instance of RangeStructure
			 */
			getRange()	{
				return this.range;

			}

			/**
			 * The method to set the value to range
			 * @param {RangeStructure} range An instance of RangeStructure
			 */
			setRange(range)	{
				if((range != null) && (!(range instanceof ZCRM.EmailConfigurationOption.Model.RangeStructure))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: range EXPECTED TYPE: RangeStructure", null, null);
				}
				this.range = range;
				this.keyModified.set("range", 1);

			}

			/**
			 * The method to get the supportedValues
			 * @returns {List} An Array representing the supportedValues
			 */
			getSupportedValues()	{
				return this.supportedValues;

			}

			/**
			 * The method to set the value to supportedValues
			 * @param {List} supportedValues An Array
			 */
			setSupportedValues(supportedValues)	{
				if((supportedValues != null) && (!(Object.prototype.toString.call(supportedValues) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: supportedValues EXPECTED TYPE: Array", null, null);
				}
				this.supportedValues = supportedValues;
				this.keyModified.set("supported_values", 1);

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

		ValueDetails : class{
			constructor(){

				this.type=null;
				this.value=null;
				this.delete1=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the type
			 * @returns {String} A String representing the type
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {String} type A String
			 */
			setType(type)	{
				if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

			}

			/**
			 * The method to get the value
			 * @returns {Object} An Object representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Object} value An Object
			 */
			setValue(value)	{
				this.value = value;
				this.keyModified.set("value", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {Boolean} A Boolean representing the delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {Boolean} delete1 A Boolean
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Boolean", null, null);
				}
				this.delete1 = delete1;
				this.keyModified.set("_delete", 1);

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

				this.configurationOptions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the configurationOptions
			 * @returns {List} An Array representing the configurationOptions
			 */
			getConfigurationOptions()	{
				return this.configurationOptions;

			}

			/**
			 * The method to set the value to configurationOptions
			 * @param {List} configurationOptions An Array
			 */
			setConfigurationOptions(configurationOptions)	{
				if((configurationOptions != null) && (!(Object.prototype.toString.call(configurationOptions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: configurationOptions EXPECTED TYPE: Array", null, null);
				}
				this.configurationOptions = configurationOptions;
				this.keyModified.set("configuration_options", 1);

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
		 * Creates an instance of EmailConfigurationOptionsOperations
		 */
		constructor(){
			
		}

		/**
		 * The method to get email configuration options
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailConfigurationOptions(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/email/v8/settings/compose/configuration_options");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("EmailConfigurationOption.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update email configuration options
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateEmailConfigurationOptions(request){
			if((request != null) && (!(request instanceof ZCRM.EmailConfigurationOption.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/email/v8/settings/compose/configuration_options");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("EmailConfigurationOption.Model.ActionHandler", "application/json");

		}

	},

}