ZCRM.Definition = {
	Model : {
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
			 * @returns {Choice} An instance of Choice
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {Choice} message An instance of Choice
			 */
			setMessage(message)	{
				if((message != null) && (!(message instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
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

				this.definition=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the definition
			 * @returns {Definition} An instance of Definition
			 */
			getDefinition()	{
				return this.definition;

			}

			/**
			 * The method to set the value to definition
			 * @param {Definition} definition An instance of Definition
			 */
			setDefinition(definition)	{
				if((definition != null) && (!(definition instanceof ZCRM.Definition.Model.Definition))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: definition EXPECTED TYPE: Definition", null, null);
				}
				this.definition = definition;
				this.keyModified.set("definition", 1);

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

		MinifiedProperty1 : class{
			constructor(){

				this.readOnly=null;
				this.apiName=null;
				this.dataType=null;
				this.length=null;
				this.required=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the readOnly
			 * @returns {Boolean} A Boolean representing the readOnly
			 */
			getReadOnly()	{
				return this.readOnly;

			}

			/**
			 * The method to set the value to readOnly
			 * @param {Boolean} readOnly A Boolean
			 */
			setReadOnly(readOnly)	{
				if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.readOnly = readOnly;
				this.keyModified.set("read_only", 1);

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
			 * The method to get the length
			 * @returns {Integer} An Integer representing the length
			 */
			getLength()	{
				return this.length;

			}

			/**
			 * The method to set the value to length
			 * @param {Integer} length An Integer
			 */
			setLength(length)	{
				if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: Integer", null, null);
				}
				this.length = length;
				this.keyModified.set("length", 1);

			}

			/**
			 * The method to get the required
			 * @returns {Boolean} A Boolean representing the required
			 */
			getRequired()	{
				return this.required;

			}

			/**
			 * The method to set the value to required
			 * @param {Boolean} required A Boolean
			 */
			setRequired(required)	{
				if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
				}
				this.required = required;
				this.keyModified.set("required", 1);

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

		Property : class{
			constructor(){

				this.displayLabel=null;
				this.allowedValues=null;
				this.uiType=null;
				this.regex=null;
				this.readOnly=null;
				this.apiName=null;
				this.fieldLabel=null;
				this.dataType=null;
				this.length=null;
				this.availableInUserLayout=null;
				this.required=null;
				this.properties=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the displayLabel
			 * @returns {String} A String representing the displayLabel
			 */
			getDisplayLabel()	{
				return this.displayLabel;

			}

			/**
			 * The method to set the value to displayLabel
			 * @param {String} displayLabel A String
			 */
			setDisplayLabel(displayLabel)	{
				if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
				}
				this.displayLabel = displayLabel;
				this.keyModified.set("display_label", 1);

			}

			/**
			 * The method to get the allowedValues
			 * @returns {List} An Array representing the allowedValues
			 */
			getAllowedValues()	{
				return this.allowedValues;

			}

			/**
			 * The method to set the value to allowedValues
			 * @param {List} allowedValues An Array
			 */
			setAllowedValues(allowedValues)	{
				if((allowedValues != null) && (!(Object.prototype.toString.call(allowedValues) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowedValues EXPECTED TYPE: Array", null, null);
				}
				this.allowedValues = allowedValues;
				this.keyModified.set("allowed_values", 1);

			}

			/**
			 * The method to get the uiType
			 * @returns {Integer} An Integer representing the uiType
			 */
			getUiType()	{
				return this.uiType;

			}

			/**
			 * The method to set the value to uiType
			 * @param {Integer} uiType An Integer
			 */
			setUiType(uiType)	{
				if((uiType != null) && (!(Object.prototype.toString.call(uiType) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: uiType EXPECTED TYPE: Integer", null, null);
				}
				this.uiType = uiType;
				this.keyModified.set("ui_type", 1);

			}

			/**
			 * The method to get the regex
			 * @returns {String} A String representing the regex
			 */
			getRegex()	{
				return this.regex;

			}

			/**
			 * The method to set the value to regex
			 * @param {String} regex A String
			 */
			setRegex(regex)	{
				if((regex != null) && (!(Object.prototype.toString.call(regex) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: regex EXPECTED TYPE: String", null, null);
				}
				this.regex = regex;
				this.keyModified.set("regex", 1);

			}

			/**
			 * The method to get the readOnly
			 * @returns {Boolean} A Boolean representing the readOnly
			 */
			getReadOnly()	{
				return this.readOnly;

			}

			/**
			 * The method to set the value to readOnly
			 * @param {Boolean} readOnly A Boolean
			 */
			setReadOnly(readOnly)	{
				if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.readOnly = readOnly;
				this.keyModified.set("read_only", 1);

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
			 * The method to get the fieldLabel
			 * @returns {String} A String representing the fieldLabel
			 */
			getFieldLabel()	{
				return this.fieldLabel;

			}

			/**
			 * The method to set the value to fieldLabel
			 * @param {String} fieldLabel A String
			 */
			setFieldLabel(fieldLabel)	{
				if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
				}
				this.fieldLabel = fieldLabel;
				this.keyModified.set("field_label", 1);

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
			 * The method to get the length
			 * @returns {Integer} An Integer representing the length
			 */
			getLength()	{
				return this.length;

			}

			/**
			 * The method to set the value to length
			 * @param {Integer} length An Integer
			 */
			setLength(length)	{
				if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: Integer", null, null);
				}
				this.length = length;
				this.keyModified.set("length", 1);

			}

			/**
			 * The method to get the availableInUserLayout
			 * @returns {Boolean} A Boolean representing the availableInUserLayout
			 */
			getAvailableInUserLayout()	{
				return this.availableInUserLayout;

			}

			/**
			 * The method to set the value to availableInUserLayout
			 * @param {Boolean} availableInUserLayout A Boolean
			 */
			setAvailableInUserLayout(availableInUserLayout)	{
				if((availableInUserLayout != null) && (!(Object.prototype.toString.call(availableInUserLayout) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: availableInUserLayout EXPECTED TYPE: Boolean", null, null);
				}
				this.availableInUserLayout = availableInUserLayout;
				this.keyModified.set("available_in_user_layout", 1);

			}

			/**
			 * The method to get the required
			 * @returns {Boolean} A Boolean representing the required
			 */
			getRequired()	{
				return this.required;

			}

			/**
			 * The method to set the value to required
			 * @param {Boolean} required A Boolean
			 */
			setRequired(required)	{
				if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
				}
				this.required = required;
				this.keyModified.set("required", 1);

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

		MinifiedProperty : class{
			constructor(){

				this.readOnly=null;
				this.apiName=null;
				this.dataType=null;
				this.length=null;
				this.required=null;
				this.properties=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the readOnly
			 * @returns {Boolean} A Boolean representing the readOnly
			 */
			getReadOnly()	{
				return this.readOnly;

			}

			/**
			 * The method to set the value to readOnly
			 * @param {Boolean} readOnly A Boolean
			 */
			setReadOnly(readOnly)	{
				if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.readOnly = readOnly;
				this.keyModified.set("read_only", 1);

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
			 * The method to get the length
			 * @returns {Integer} An Integer representing the length
			 */
			getLength()	{
				return this.length;

			}

			/**
			 * The method to set the value to length
			 * @param {Integer} length An Integer
			 */
			setLength(length)	{
				if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: Integer", null, null);
				}
				this.length = length;
				this.keyModified.set("length", 1);

			}

			/**
			 * The method to get the required
			 * @returns {Boolean} A Boolean representing the required
			 */
			getRequired()	{
				return this.required;

			}

			/**
			 * The method to set the value to required
			 * @param {Boolean} required A Boolean
			 */
			setRequired(required)	{
				if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
				}
				this.required = required;
				this.keyModified.set("required", 1);

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

		Definition : class{
			constructor(){

				this.rootElementName=null;
				this.extradetails=null;
				this.properties=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the rootElementName
			 * @returns {String} A String representing the rootElementName
			 */
			getRootElementName()	{
				return this.rootElementName;

			}

			/**
			 * The method to set the value to rootElementName
			 * @param {String} rootElementName A String
			 */
			setRootElementName(rootElementName)	{
				if((rootElementName != null) && (!(Object.prototype.toString.call(rootElementName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rootElementName EXPECTED TYPE: String", null, null);
				}
				this.rootElementName = rootElementName;
				this.keyModified.set("root_element_name", 1);

			}

			/**
			 * The method to get the extradetails
			 * @returns {Map} A Map representing the extradetails
			 */
			getExtradetails()	{
				return this.extradetails;

			}

			/**
			 * The method to set the value to extradetails
			 * @param {Map} extradetails A Map
			 */
			setExtradetails(extradetails)	{
				if((extradetails != null) && (!(Object.prototype.toString.call(extradetails) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extradetails EXPECTED TYPE: Map", null, null);
				}
				this.extradetails = extradetails;
				this.keyModified.set("extraDetails", 1);

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
		}
	},


}