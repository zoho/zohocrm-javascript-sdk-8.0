ZCRM.Blueprint = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ProcessInfo : class{
			constructor(){

				this.fieldId=null;
				this.isContinuous=null;
				this.apiName=null;
				this.continuous=null;
				this.fieldLabel=null;
				this.name=null;
				this.columnName=null;
				this.fieldValue=null;
				this.id=null;
				this.fieldName=null;
				this.escalation=null;
				this.currentPicklist=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fieldId
			 * @returns {Long} A BigInt representing the fieldId
			 */
			getFieldId()	{
				return this.fieldId;

			}

			/**
			 * The method to set the value to fieldId
			 * @param {Long} fieldId A BigInt
			 */
			setFieldId(fieldId)	{
				if((fieldId != null) && (!(Object.prototype.toString.call(fieldId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldId EXPECTED TYPE: BigInt", null, null);
				}
				this.fieldId = fieldId;
				this.keyModified.set("field_id", 1);

			}

			/**
			 * The method to get the isContinuous
			 * @returns {Boolean} A Boolean representing the isContinuous
			 */
			getIsContinuous()	{
				return this.isContinuous;

			}

			/**
			 * The method to set the value to isContinuous
			 * @param {Boolean} isContinuous A Boolean
			 */
			setIsContinuous(isContinuous)	{
				if((isContinuous != null) && (!(Object.prototype.toString.call(isContinuous) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isContinuous EXPECTED TYPE: Boolean", null, null);
				}
				this.isContinuous = isContinuous;
				this.keyModified.set("is_continuous", 1);

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
			 * The method to get the continuous
			 * @returns {Boolean} A Boolean representing the continuous
			 */
			getContinuous()	{
				return this.continuous;

			}

			/**
			 * The method to set the value to continuous
			 * @param {Boolean} continuous A Boolean
			 */
			setContinuous(continuous)	{
				if((continuous != null) && (!(Object.prototype.toString.call(continuous) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: continuous EXPECTED TYPE: Boolean", null, null);
				}
				this.continuous = continuous;
				this.keyModified.set("continuous", 1);

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
			 * The method to get the columnName
			 * @returns {String} A String representing the columnName
			 */
			getColumnName()	{
				return this.columnName;

			}

			/**
			 * The method to set the value to columnName
			 * @param {String} columnName A String
			 */
			setColumnName(columnName)	{
				if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
				}
				this.columnName = columnName;
				this.keyModified.set("column_name", 1);

			}

			/**
			 * The method to get the fieldValue
			 * @returns {String} A String representing the fieldValue
			 */
			getFieldValue()	{
				return this.fieldValue;

			}

			/**
			 * The method to set the value to fieldValue
			 * @param {String} fieldValue A String
			 */
			setFieldValue(fieldValue)	{
				if((fieldValue != null) && (!(Object.prototype.toString.call(fieldValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldValue EXPECTED TYPE: String", null, null);
				}
				this.fieldValue = fieldValue;
				this.keyModified.set("field_value", 1);

			}

			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the fieldName
			 * @returns {String} A String representing the fieldName
			 */
			getFieldName()	{
				return this.fieldName;

			}

			/**
			 * The method to set the value to fieldName
			 * @param {String} fieldName A String
			 */
			setFieldName(fieldName)	{
				if((fieldName != null) && (!(Object.prototype.toString.call(fieldName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldName EXPECTED TYPE: String", null, null);
				}
				this.fieldName = fieldName;
				this.keyModified.set("field_name", 1);

			}

			/**
			 * The method to get the escalation
			 * @returns {Escalation} An instance of Escalation
			 */
			getEscalation()	{
				return this.escalation;

			}

			/**
			 * The method to set the value to escalation
			 * @param {Escalation} escalation An instance of Escalation
			 */
			setEscalation(escalation)	{
				if((escalation != null) && (!(escalation instanceof ZCRM.Blueprint.Model.Escalation))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: escalation EXPECTED TYPE: Escalation", null, null);
				}
				this.escalation = escalation;
				this.keyModified.set("escalation", 1);

			}

			/**
			 * The method to get the currentPicklist
			 * @returns {CurrentPicklist} An instance of CurrentPicklist
			 */
			getCurrentPicklist()	{
				return this.currentPicklist;

			}

			/**
			 * The method to set the value to currentPicklist
			 * @param {CurrentPicklist} currentPicklist An instance of CurrentPicklist
			 */
			setCurrentPicklist(currentPicklist)	{
				if((currentPicklist != null) && (!(currentPicklist instanceof ZCRM.Blueprint.Model.CurrentPicklist))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currentPicklist EXPECTED TYPE: CurrentPicklist", null, null);
				}
				this.currentPicklist = currentPicklist;
				this.keyModified.set("current_picklist", 1);

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

				this.roundingOption=null;
				this.precision=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the roundingOption
			 * @returns {String} A String representing the roundingOption
			 */
			getRoundingOption()	{
				return this.roundingOption;

			}

			/**
			 * The method to set the value to roundingOption
			 * @param {String} roundingOption A String
			 */
			setRoundingOption(roundingOption)	{
				if((roundingOption != null) && (!(Object.prototype.toString.call(roundingOption) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: roundingOption EXPECTED TYPE: String", null, null);
				}
				this.roundingOption = roundingOption;
				this.keyModified.set("rounding_option", 1);

			}

			/**
			 * The method to get the precision
			 * @returns {Integer} An Integer representing the precision
			 */
			getPrecision()	{
				return this.precision;

			}

			/**
			 * The method to set the value to precision
			 * @param {Integer} precision An Integer
			 */
			setPrecision(precision)	{
				if((precision != null) && (!(Object.prototype.toString.call(precision) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: precision EXPECTED TYPE: Integer", null, null);
				}
				this.precision = precision;
				this.keyModified.set("precision", 1);

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

		Layout : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

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

		MultiSelectLookup : class{
			constructor(){

				this.displayLabel=null;
				this.linkingModule=null;
				this.lookupApiname=null;
				this.apiName=null;
				this.connectedlookupApiname=null;
				this.id=null;
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
			 * The method to get the linkingModule
			 * @returns {String} A String representing the linkingModule
			 */
			getLinkingModule()	{
				return this.linkingModule;

			}

			/**
			 * The method to set the value to linkingModule
			 * @param {String} linkingModule A String
			 */
			setLinkingModule(linkingModule)	{
				if((linkingModule != null) && (!(Object.prototype.toString.call(linkingModule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingModule EXPECTED TYPE: String", null, null);
				}
				this.linkingModule = linkingModule;
				this.keyModified.set("linking_module", 1);

			}

			/**
			 * The method to get the lookupApiname
			 * @returns {String} A String representing the lookupApiname
			 */
			getLookupApiname()	{
				return this.lookupApiname;

			}

			/**
			 * The method to set the value to lookupApiname
			 * @param {String} lookupApiname A String
			 */
			setLookupApiname(lookupApiname)	{
				if((lookupApiname != null) && (!(Object.prototype.toString.call(lookupApiname) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupApiname EXPECTED TYPE: String", null, null);
				}
				this.lookupApiname = lookupApiname;
				this.keyModified.set("lookup_apiname", 1);

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
			 * The method to get the connectedlookupApiname
			 * @returns {String} A String representing the connectedlookupApiname
			 */
			getConnectedlookupApiname()	{
				return this.connectedlookupApiname;

			}

			/**
			 * The method to set the value to connectedlookupApiname
			 * @param {String} connectedlookupApiname A String
			 */
			setConnectedlookupApiname(connectedlookupApiname)	{
				if((connectedlookupApiname != null) && (!(Object.prototype.toString.call(connectedlookupApiname) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedlookupApiname EXPECTED TYPE: String", null, null);
				}
				this.connectedlookupApiname = connectedlookupApiname;
				this.keyModified.set("connectedlookup_apiname", 1);

			}

			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
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

				this.blueprint=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the blueprint
			 * @returns {BluePrint} An instance of BluePrint
			 */
			getBlueprint()	{
				return this.blueprint;

			}

			/**
			 * The method to set the value to blueprint
			 * @param {BluePrint} blueprint An instance of BluePrint
			 */
			setBlueprint(blueprint)	{
				if((blueprint != null) && (!(blueprint instanceof ZCRM.Blueprint.Model.BluePrint))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprint EXPECTED TYPE: BluePrint", null, null);
				}
				this.blueprint = blueprint;
				this.keyModified.set("blueprint", 1);

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

		Crypt : class{
			constructor(){

				this.mode=null;
				this.column=null;
				this.table=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the mode
			 * @returns {String} A String representing the mode
			 */
			getMode()	{
				return this.mode;

			}

			/**
			 * The method to set the value to mode
			 * @param {String} mode A String
			 */
			setMode(mode)	{
				if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: String", null, null);
				}
				this.mode = mode;
				this.keyModified.set("mode", 1);

			}

			/**
			 * The method to get the column
			 * @returns {String} A String representing the column
			 */
			getColumn()	{
				return this.column;

			}

			/**
			 * The method to set the value to column
			 * @param {String} column A String
			 */
			setColumn(column)	{
				if((column != null) && (!(Object.prototype.toString.call(column) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: column EXPECTED TYPE: String", null, null);
				}
				this.column = column;
				this.keyModified.set("column", 1);

			}

			/**
			 * The method to get the table
			 * @returns {String} A String representing the table
			 */
			getTable()	{
				return this.table;

			}

			/**
			 * The method to set the value to table
			 * @param {String} table A String
			 */
			setTable(table)	{
				if((table != null) && (!(Object.prototype.toString.call(table) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: table EXPECTED TYPE: String", null, null);
				}
				this.table = table;
				this.keyModified.set("table", 1);

			}

			/**
			 * The method to get the status
			 * @returns {Integer} An Integer representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Integer} status An Integer
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Integer", null, null);
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

		NextTransition : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.criteriaMatched=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

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
			 * The method to get the criteriaMatched
			 * @returns {Boolean} A Boolean representing the criteriaMatched
			 */
			getCriteriaMatched()	{
				return this.criteriaMatched;

			}

			/**
			 * The method to set the value to criteriaMatched
			 * @param {Boolean} criteriaMatched A Boolean
			 */
			setCriteriaMatched(criteriaMatched)	{
				if((criteriaMatched != null) && (!(Object.prototype.toString.call(criteriaMatched) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMatched EXPECTED TYPE: Boolean", null, null);
				}
				this.criteriaMatched = criteriaMatched;
				this.keyModified.set("criteria_matched", 1);

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

		Escalation : class{
			constructor(){

				this.days=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the days
			 * @returns {Integer} An Integer representing the days
			 */
			getDays()	{
				return this.days;

			}

			/**
			 * The method to set the value to days
			 * @param {Integer} days An Integer
			 */
			setDays(days)	{
				if((days != null) && (!(Object.prototype.toString.call(days) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: Integer", null, null);
				}
				this.days = days;
				this.keyModified.set("days", 1);

			}

			/**
			 * The method to get the status
			 * @returns {String} A String representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {String} status A String
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
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

		LookupField : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

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

		Profile : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.permissionType=null;
				this.keyModified=new Map();
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
			 * The method to get the permissionType
			 * @returns {String} A String representing the permissionType
			 */
			getPermissionType()	{
				return this.permissionType;

			}

			/**
			 * The method to set the value to permissionType
			 * @param {String} permissionType A String
			 */
			setPermissionType(permissionType)	{
				if((permissionType != null) && (!(Object.prototype.toString.call(permissionType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissionType EXPECTED TYPE: String", null, null);
				}
				this.permissionType = permissionType;
				this.keyModified.set("permission_type", 1);

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

				this.external=null;
				this.displayType=null;
				this.filterable=null;
				this.pickListValuesSortedLexically=null;
				this.sortable=null;
				this.uiType=null;
				this.private1=null;
				this.systemMandatory=null;
				this.webhook=null;
				this.jsonType=null;
				this.crypt=null;
				this.fieldLabel=null;
				this.tooltip=null;
				this.createdSource=null;
				this.layouts=null;
				this.fieldReadOnly=null;
				this.content=null;
				this.displayLabel=null;
				this.validationRule=null;
				this.readOnly=null;
				this.associationDetails=null;
				this.multiModuleLookup=null;
				this.currency=null;
				this.id=null;
				this.customField=null;
				this.lookup=null;
				this.convertMapping=null;
				this.visible=null;
				this.length=null;
				this.columnName=null;
				this.type=null;
				this.viewType=null;
				this.transitionSequence=null;
				this.apiName=null;
				this.unique=null;
				this.historyTracking=null;
				this.dataType=null;
				this.formula=null;
				this.decimalPlace=null;
				this.multiselectlookup=null;
				this.pickListValues=null;
				this.autoNumber=null;
				this.personalityName=null;
				this.mandatory=null;
				this.quickSequenceNumber=null;
				this.profiles=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the external
			 * @returns {External} An instance of External
			 */
			getExternal()	{
				return this.external;

			}

			/**
			 * The method to set the value to external
			 * @param {External} external An instance of External
			 */
			setExternal(external)	{
				if((external != null) && (!(external instanceof ZCRM.Field.Model.External))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: external EXPECTED TYPE: External", null, null);
				}
				this.external = external;
				this.keyModified.set("external", 1);

			}

			/**
			 * The method to get the displayType
			 * @returns {Choice} An instance of Choice
			 */
			getDisplayType()	{
				return this.displayType;

			}

			/**
			 * The method to set the value to displayType
			 * @param {Choice} displayType An instance of Choice
			 */
			setDisplayType(displayType)	{
				if((displayType != null) && (!(displayType instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayType EXPECTED TYPE: Choice", null, null);
				}
				this.displayType = displayType;
				this.keyModified.set("display_type", 1);

			}

			/**
			 * The method to get the filterable
			 * @returns {Boolean} A Boolean representing the filterable
			 */
			getFilterable()	{
				return this.filterable;

			}

			/**
			 * The method to set the value to filterable
			 * @param {Boolean} filterable A Boolean
			 */
			setFilterable(filterable)	{
				if((filterable != null) && (!(Object.prototype.toString.call(filterable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterable EXPECTED TYPE: Boolean", null, null);
				}
				this.filterable = filterable;
				this.keyModified.set("filterable", 1);

			}

			/**
			 * The method to get the pickListValuesSortedLexically
			 * @returns {Boolean} A Boolean representing the pickListValuesSortedLexically
			 */
			getPickListValuesSortedLexically()	{
				return this.pickListValuesSortedLexically;

			}

			/**
			 * The method to set the value to pickListValuesSortedLexically
			 * @param {Boolean} pickListValuesSortedLexically A Boolean
			 */
			setPickListValuesSortedLexically(pickListValuesSortedLexically)	{
				if((pickListValuesSortedLexically != null) && (!(Object.prototype.toString.call(pickListValuesSortedLexically) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValuesSortedLexically EXPECTED TYPE: Boolean", null, null);
				}
				this.pickListValuesSortedLexically = pickListValuesSortedLexically;
				this.keyModified.set("pick_list_values_sorted_lexically", 1);

			}

			/**
			 * The method to get the sortable
			 * @returns {Boolean} A Boolean representing the sortable
			 */
			getSortable()	{
				return this.sortable;

			}

			/**
			 * The method to set the value to sortable
			 * @param {Boolean} sortable A Boolean
			 */
			setSortable(sortable)	{
				if((sortable != null) && (!(Object.prototype.toString.call(sortable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortable EXPECTED TYPE: Boolean", null, null);
				}
				this.sortable = sortable;
				this.keyModified.set("sortable", 1);

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
			 * The method to get the private
			 * @returns {Private} An instance of Private
			 */
			getPrivate()	{
				return this.private1;

			}

			/**
			 * The method to set the value to private
			 * @param {Private} private1 An instance of Private
			 */
			setPrivate(private1)	{
				if((private1 != null) && (!(private1 instanceof ZCRM.Field.Model.Private))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: private1 EXPECTED TYPE: Private", null, null);
				}
				this.private1 = private1;
				this.keyModified.set("private", 1);

			}

			/**
			 * The method to get the systemMandatory
			 * @returns {Boolean} A Boolean representing the systemMandatory
			 */
			getSystemMandatory()	{
				return this.systemMandatory;

			}

			/**
			 * The method to set the value to systemMandatory
			 * @param {Boolean} systemMandatory A Boolean
			 */
			setSystemMandatory(systemMandatory)	{
				if((systemMandatory != null) && (!(Object.prototype.toString.call(systemMandatory) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemMandatory EXPECTED TYPE: Boolean", null, null);
				}
				this.systemMandatory = systemMandatory;
				this.keyModified.set("system_mandatory", 1);

			}

			/**
			 * The method to get the webhook
			 * @returns {Boolean} A Boolean representing the webhook
			 */
			getWebhook()	{
				return this.webhook;

			}

			/**
			 * The method to set the value to webhook
			 * @param {Boolean} webhook A Boolean
			 */
			setWebhook(webhook)	{
				if((webhook != null) && (!(Object.prototype.toString.call(webhook) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webhook EXPECTED TYPE: Boolean", null, null);
				}
				this.webhook = webhook;
				this.keyModified.set("webhook", 1);

			}

			/**
			 * The method to get the jsonType
			 * @returns {String} A String representing the jsonType
			 */
			getJsonType()	{
				return this.jsonType;

			}

			/**
			 * The method to set the value to jsonType
			 * @param {String} jsonType A String
			 */
			setJsonType(jsonType)	{
				if((jsonType != null) && (!(Object.prototype.toString.call(jsonType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonType EXPECTED TYPE: String", null, null);
				}
				this.jsonType = jsonType;
				this.keyModified.set("json_type", 1);

			}

			/**
			 * The method to get the crypt
			 * @returns {Crypt} An instance of Crypt
			 */
			getCrypt()	{
				return this.crypt;

			}

			/**
			 * The method to set the value to crypt
			 * @param {Crypt} crypt An instance of Crypt
			 */
			setCrypt(crypt)	{
				if((crypt != null) && (!(crypt instanceof ZCRM.Blueprint.Model.Crypt))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
				}
				this.crypt = crypt;
				this.keyModified.set("crypt", 1);

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
			 * The method to get the tooltip
			 * @returns {ToolTip} An instance of ToolTip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {ToolTip} tooltip An instance of ToolTip
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(tooltip instanceof ZCRM.Blueprint.Model.ToolTip))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: ToolTip", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

			}

			/**
			 * The method to get the createdSource
			 * @returns {String} A String representing the createdSource
			 */
			getCreatedSource()	{
				return this.createdSource;

			}

			/**
			 * The method to set the value to createdSource
			 * @param {String} createdSource A String
			 */
			setCreatedSource(createdSource)	{
				if((createdSource != null) && (!(Object.prototype.toString.call(createdSource) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdSource EXPECTED TYPE: String", null, null);
				}
				this.createdSource = createdSource;
				this.keyModified.set("created_source", 1);

			}

			/**
			 * The method to get the layouts
			 * @returns {Layout} An instance of Layout
			 */
			getLayouts()	{
				return this.layouts;

			}

			/**
			 * The method to set the value to layouts
			 * @param {Layout} layouts An instance of Layout
			 */
			setLayouts(layouts)	{
				if((layouts != null) && (!(layouts instanceof ZCRM.Blueprint.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Layout", null, null);
				}
				this.layouts = layouts;
				this.keyModified.set("layouts", 1);

			}

			/**
			 * The method to get the fieldReadOnly
			 * @returns {Boolean} A Boolean representing the fieldReadOnly
			 */
			getFieldReadOnly()	{
				return this.fieldReadOnly;

			}

			/**
			 * The method to set the value to fieldReadOnly
			 * @param {Boolean} fieldReadOnly A Boolean
			 */
			setFieldReadOnly(fieldReadOnly)	{
				if((fieldReadOnly != null) && (!(Object.prototype.toString.call(fieldReadOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldReadOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.fieldReadOnly = fieldReadOnly;
				this.keyModified.set("field_read_only", 1);

			}

			/**
			 * The method to get the content
			 * @returns {String} A String representing the content
			 */
			getContent()	{
				return this.content;

			}

			/**
			 * The method to set the value to content
			 * @param {String} content A String
			 */
			setContent(content)	{
				if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
				}
				this.content = content;
				this.keyModified.set("content", 1);

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
			 * The method to get the validationRule
			 * @returns {String} A String representing the validationRule
			 */
			getValidationRule()	{
				return this.validationRule;

			}

			/**
			 * The method to set the value to validationRule
			 * @param {String} validationRule A String
			 */
			setValidationRule(validationRule)	{
				if((validationRule != null) && (!(Object.prototype.toString.call(validationRule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: validationRule EXPECTED TYPE: String", null, null);
				}
				this.validationRule = validationRule;
				this.keyModified.set("validation_rule", 1);

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
			 * The method to get the associationDetails
			 * @returns {AssociationDetails} An instance of AssociationDetails
			 */
			getAssociationDetails()	{
				return this.associationDetails;

			}

			/**
			 * The method to set the value to associationDetails
			 * @param {AssociationDetails} associationDetails An instance of AssociationDetails
			 */
			setAssociationDetails(associationDetails)	{
				if((associationDetails != null) && (!(associationDetails instanceof ZCRM.Blueprint.Model.AssociationDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
				}
				this.associationDetails = associationDetails;
				this.keyModified.set("association_details", 1);

			}

			/**
			 * The method to get the multiModuleLookup
			 * @returns {MultiModuleLookup} An instance of MultiModuleLookup
			 */
			getMultiModuleLookup()	{
				return this.multiModuleLookup;

			}

			/**
			 * The method to set the value to multiModuleLookup
			 * @param {MultiModuleLookup} multiModuleLookup An instance of MultiModuleLookup
			 */
			setMultiModuleLookup(multiModuleLookup)	{
				if((multiModuleLookup != null) && (!(multiModuleLookup instanceof ZCRM.Field.Model.MultiModuleLookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiModuleLookup EXPECTED TYPE: MultiModuleLookup", null, null);
				}
				this.multiModuleLookup = multiModuleLookup;
				this.keyModified.set("multi_module_lookup", 1);

			}

			/**
			 * The method to get the currency
			 * @returns {Currency} An instance of Currency
			 */
			getCurrency()	{
				return this.currency;

			}

			/**
			 * The method to set the value to currency
			 * @param {Currency} currency An instance of Currency
			 */
			setCurrency(currency)	{
				if((currency != null) && (!(currency instanceof ZCRM.Blueprint.Model.Currency))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
				}
				this.currency = currency;
				this.keyModified.set("currency", 1);

			}

			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the customField
			 * @returns {Boolean} A Boolean representing the customField
			 */
			getCustomField()	{
				return this.customField;

			}

			/**
			 * The method to set the value to customField
			 * @param {Boolean} customField A Boolean
			 */
			setCustomField(customField)	{
				if((customField != null) && (!(Object.prototype.toString.call(customField) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customField EXPECTED TYPE: Boolean", null, null);
				}
				this.customField = customField;
				this.keyModified.set("custom_field", 1);

			}

			/**
			 * The method to get the lookup
			 * @returns {Module} An instance of Module
			 */
			getLookup()	{
				return this.lookup;

			}

			/**
			 * The method to set the value to lookup
			 * @param {Module} lookup An instance of Module
			 */
			setLookup(lookup)	{
				if((lookup != null) && (!(lookup instanceof ZCRM.Blueprint.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Module", null, null);
				}
				this.lookup = lookup;
				this.keyModified.set("lookup", 1);

			}

			/**
			 * The method to get the convertMapping
			 * @returns {Map} A Map representing the convertMapping
			 */
			getConvertMapping()	{
				return this.convertMapping;

			}

			/**
			 * The method to set the value to convertMapping
			 * @param {Map} convertMapping A Map
			 */
			setConvertMapping(convertMapping)	{
				if((convertMapping != null) && (!(Object.prototype.toString.call(convertMapping) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: Map", null, null);
				}
				this.convertMapping = convertMapping;
				this.keyModified.set("convert_mapping", 1);

			}

			/**
			 * The method to get the visible
			 * @returns {Boolean} A Boolean representing the visible
			 */
			getVisible()	{
				return this.visible;

			}

			/**
			 * The method to set the value to visible
			 * @param {Boolean} visible A Boolean
			 */
			setVisible(visible)	{
				if((visible != null) && (!(Object.prototype.toString.call(visible) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visible EXPECTED TYPE: Boolean", null, null);
				}
				this.visible = visible;
				this.keyModified.set("visible", 1);

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
			 * The method to get the columnName
			 * @returns {String} A String representing the columnName
			 */
			getColumnName()	{
				return this.columnName;

			}

			/**
			 * The method to set the value to columnName
			 * @param {String} columnName A String
			 */
			setColumnName(columnName)	{
				if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
				}
				this.columnName = columnName;
				this.keyModified.set("column_name", 1);

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
				this.keyModified.set("_type", 1);

			}

			/**
			 * The method to get the viewType
			 * @returns {ViewType} An instance of ViewType
			 */
			getViewType()	{
				return this.viewType;

			}

			/**
			 * The method to set the value to viewType
			 * @param {ViewType} viewType An instance of ViewType
			 */
			setViewType(viewType)	{
				if((viewType != null) && (!(viewType instanceof ZCRM.Blueprint.Model.ViewType))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

			}

			/**
			 * The method to get the transitionSequence
			 * @returns {Integer} An Integer representing the transitionSequence
			 */
			getTransitionSequence()	{
				return this.transitionSequence;

			}

			/**
			 * The method to set the value to transitionSequence
			 * @param {Integer} transitionSequence An Integer
			 */
			setTransitionSequence(transitionSequence)	{
				if((transitionSequence != null) && (!(Object.prototype.toString.call(transitionSequence) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionSequence EXPECTED TYPE: Integer", null, null);
				}
				this.transitionSequence = transitionSequence;
				this.keyModified.set("transition_sequence", 1);

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
			 * The method to get the unique
			 * @returns {Unique} An instance of Unique
			 */
			getUnique()	{
				return this.unique;

			}

			/**
			 * The method to set the value to unique
			 * @param {Unique} unique An instance of Unique
			 */
			setUnique(unique)	{
				if((unique != null) && (!(unique instanceof ZCRM.Field.Model.Unique))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unique EXPECTED TYPE: Unique", null, null);
				}
				this.unique = unique;
				this.keyModified.set("unique", 1);

			}

			/**
			 * The method to get the historyTracking
			 * @returns {Boolean} A Boolean representing the historyTracking
			 */
			getHistoryTracking()	{
				return this.historyTracking;

			}

			/**
			 * The method to set the value to historyTracking
			 * @param {Boolean} historyTracking A Boolean
			 */
			setHistoryTracking(historyTracking)	{
				if((historyTracking != null) && (!(Object.prototype.toString.call(historyTracking) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: Boolean", null, null);
				}
				this.historyTracking = historyTracking;
				this.keyModified.set("history_tracking", 1);

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
			 * The method to get the formula
			 * @returns {Formula} An instance of Formula
			 */
			getFormula()	{
				return this.formula;

			}

			/**
			 * The method to set the value to formula
			 * @param {Formula} formula An instance of Formula
			 */
			setFormula(formula)	{
				if((formula != null) && (!(formula instanceof ZCRM.Blueprint.Model.Formula))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
				}
				this.formula = formula;
				this.keyModified.set("formula", 1);

			}

			/**
			 * The method to get the decimalPlace
			 * @returns {String} A String representing the decimalPlace
			 */
			getDecimalPlace()	{
				return this.decimalPlace;

			}

			/**
			 * The method to set the value to decimalPlace
			 * @param {String} decimalPlace A String
			 */
			setDecimalPlace(decimalPlace)	{
				if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: String", null, null);
				}
				this.decimalPlace = decimalPlace;
				this.keyModified.set("decimal_place", 1);

			}

			/**
			 * The method to get the multiselectlookup
			 * @returns {MultiSelectLookup} An instance of MultiSelectLookup
			 */
			getMultiselectlookup()	{
				return this.multiselectlookup;

			}

			/**
			 * The method to set the value to multiselectlookup
			 * @param {MultiSelectLookup} multiselectlookup An instance of MultiSelectLookup
			 */
			setMultiselectlookup(multiselectlookup)	{
				if((multiselectlookup != null) && (!(multiselectlookup instanceof ZCRM.Blueprint.Model.MultiSelectLookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: MultiSelectLookup", null, null);
				}
				this.multiselectlookup = multiselectlookup;
				this.keyModified.set("multiselectlookup", 1);

			}

			/**
			 * The method to get the pickListValues
			 * @returns {List} An Array representing the pickListValues
			 */
			getPickListValues()	{
				return this.pickListValues;

			}

			/**
			 * The method to set the value to pickListValues
			 * @param {List} pickListValues An Array
			 */
			setPickListValues(pickListValues)	{
				if((pickListValues != null) && (!(Object.prototype.toString.call(pickListValues) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValues EXPECTED TYPE: Array", null, null);
				}
				this.pickListValues = pickListValues;
				this.keyModified.set("pick_list_values", 1);

			}

			/**
			 * The method to get the autoNumber
			 * @returns {AutoNumber} An instance of AutoNumber
			 */
			getAutoNumber()	{
				return this.autoNumber;

			}

			/**
			 * The method to set the value to autoNumber
			 * @param {AutoNumber} autoNumber An instance of AutoNumber
			 */
			setAutoNumber(autoNumber)	{
				if((autoNumber != null) && (!(autoNumber instanceof ZCRM.Blueprint.Model.AutoNumber))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber EXPECTED TYPE: AutoNumber", null, null);
				}
				this.autoNumber = autoNumber;
				this.keyModified.set("auto_number", 1);

			}

			/**
			 * The method to get the personalityName
			 * @returns {String} A String representing the personalityName
			 */
			getPersonalityName()	{
				return this.personalityName;

			}

			/**
			 * The method to set the value to personalityName
			 * @param {String} personalityName A String
			 */
			setPersonalityName(personalityName)	{
				if((personalityName != null) && (!(Object.prototype.toString.call(personalityName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityName EXPECTED TYPE: String", null, null);
				}
				this.personalityName = personalityName;
				this.keyModified.set("personality_name", 1);

			}

			/**
			 * The method to get the mandatory
			 * @returns {Boolean} A Boolean representing the mandatory
			 */
			getMandatory()	{
				return this.mandatory;

			}

			/**
			 * The method to set the value to mandatory
			 * @param {Boolean} mandatory A Boolean
			 */
			setMandatory(mandatory)	{
				if((mandatory != null) && (!(Object.prototype.toString.call(mandatory) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandatory EXPECTED TYPE: Boolean", null, null);
				}
				this.mandatory = mandatory;
				this.keyModified.set("mandatory", 1);

			}

			/**
			 * The method to get the quickSequenceNumber
			 * @returns {Long} A BigInt representing the quickSequenceNumber
			 */
			getQuickSequenceNumber()	{
				return this.quickSequenceNumber;

			}

			/**
			 * The method to set the value to quickSequenceNumber
			 * @param {Long} quickSequenceNumber A BigInt
			 */
			setQuickSequenceNumber(quickSequenceNumber)	{
				if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: BigInt", null, null);
				}
				this.quickSequenceNumber = quickSequenceNumber;
				this.keyModified.set("quick_sequence_number", 1);

			}

			/**
			 * The method to get the profiles
			 * @returns {List} An Array representing the profiles
			 */
			getProfiles()	{
				return this.profiles;

			}

			/**
			 * The method to set the value to profiles
			 * @param {List} profiles An Array
			 */
			setProfiles(profiles)	{
				if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
				}
				this.profiles = profiles;
				this.keyModified.set("profiles", 1);

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

		Transition : class{
			constructor(){

				this.type=null;
				this.executionTime=null;
				this.sequence=null;
				this.nextTransitions=null;
				this.parentTransition=null;
				this.percentPartialSave=null;
				this.data=null;
				this.nextFieldValue=null;
				this.textColorCode=null;
				this.name=null;
				this.criteriaMatched=null;
				this.id=null;
				this.fields=null;
				this.colorCode=null;
				this.criteriaMessage=null;
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
			 * The method to get the executionTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getExecutionTime()	{
				return this.executionTime;

			}

			/**
			 * The method to set the value to executionTime
			 * @param {OffsetDateTime} executionTime An instance of OffsetDateTime
			 */
			setExecutionTime(executionTime)	{
				if((executionTime != null) && (!(executionTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executionTime EXPECTED TYPE: Date", null, null);
				}
				this.executionTime = executionTime;
				this.keyModified.set("execution_time", 1);

			}

			/**
			 * The method to get the sequence
			 * @returns {Integer} An Integer representing the sequence
			 */
			getSequence()	{
				return this.sequence;

			}

			/**
			 * The method to set the value to sequence
			 * @param {Integer} sequence An Integer
			 */
			setSequence(sequence)	{
				if((sequence != null) && (!(Object.prototype.toString.call(sequence) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequence EXPECTED TYPE: Integer", null, null);
				}
				this.sequence = sequence;
				this.keyModified.set("sequence", 1);

			}

			/**
			 * The method to get the nextTransitions
			 * @returns {List} An Array representing the nextTransitions
			 */
			getNextTransitions()	{
				return this.nextTransitions;

			}

			/**
			 * The method to set the value to nextTransitions
			 * @param {List} nextTransitions An Array
			 */
			setNextTransitions(nextTransitions)	{
				if((nextTransitions != null) && (!(Object.prototype.toString.call(nextTransitions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextTransitions EXPECTED TYPE: Array", null, null);
				}
				this.nextTransitions = nextTransitions;
				this.keyModified.set("next_transitions", 1);

			}

			/**
			 * The method to get the parentTransition
			 * @returns {Transition} An instance of Transition
			 */
			getParentTransition()	{
				return this.parentTransition;

			}

			/**
			 * The method to set the value to parentTransition
			 * @param {Transition} parentTransition An instance of Transition
			 */
			setParentTransition(parentTransition)	{
				if((parentTransition != null) && (!(parentTransition instanceof ZCRM.Blueprint.Model.Transition))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentTransition EXPECTED TYPE: Transition", null, null);
				}
				this.parentTransition = parentTransition;
				this.keyModified.set("parent_transition", 1);

			}

			/**
			 * The method to get the percentPartialSave
			 * @returns {Double} A Float representing the percentPartialSave
			 */
			getPercentPartialSave()	{
				return this.percentPartialSave;

			}

			/**
			 * The method to set the value to percentPartialSave
			 * @param {Double} percentPartialSave A Float
			 */
			setPercentPartialSave(percentPartialSave)	{
				if((percentPartialSave != null) && (!(Object.prototype.toString.call(percentPartialSave) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: percentPartialSave EXPECTED TYPE: Float", null, null);
				}
				this.percentPartialSave = percentPartialSave;
				this.keyModified.set("percent_partial_save", 1);

			}

			/**
			 * The method to get the data
			 * @returns {Record} An instance of Record
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {Record} data An instance of Record
			 */
			setData(data)	{
				if((data != null) && (!(data instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the nextFieldValue
			 * @returns {String} A String representing the nextFieldValue
			 */
			getNextFieldValue()	{
				return this.nextFieldValue;

			}

			/**
			 * The method to set the value to nextFieldValue
			 * @param {String} nextFieldValue A String
			 */
			setNextFieldValue(nextFieldValue)	{
				if((nextFieldValue != null) && (!(Object.prototype.toString.call(nextFieldValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextFieldValue EXPECTED TYPE: String", null, null);
				}
				this.nextFieldValue = nextFieldValue;
				this.keyModified.set("next_field_value", 1);

			}

			/**
			 * The method to get the textColorCode
			 * @returns {String} A String representing the textColorCode
			 */
			getTextColorCode()	{
				return this.textColorCode;

			}

			/**
			 * The method to set the value to textColorCode
			 * @param {String} textColorCode A String
			 */
			setTextColorCode(textColorCode)	{
				if((textColorCode != null) && (!(Object.prototype.toString.call(textColorCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: textColorCode EXPECTED TYPE: String", null, null);
				}
				this.textColorCode = textColorCode;
				this.keyModified.set("text_color_code", 1);

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
			 * The method to get the criteriaMatched
			 * @returns {Boolean} A Boolean representing the criteriaMatched
			 */
			getCriteriaMatched()	{
				return this.criteriaMatched;

			}

			/**
			 * The method to set the value to criteriaMatched
			 * @param {Boolean} criteriaMatched A Boolean
			 */
			setCriteriaMatched(criteriaMatched)	{
				if((criteriaMatched != null) && (!(Object.prototype.toString.call(criteriaMatched) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMatched EXPECTED TYPE: Boolean", null, null);
				}
				this.criteriaMatched = criteriaMatched;
				this.keyModified.set("criteria_matched", 1);

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
			 * The method to get the fields
			 * @returns {List} An Array representing the fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {List} fields An Array
			 */
			setFields(fields)	{
				if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

			}

			/**
			 * The method to get the colorCode
			 * @returns {String} A String representing the colorCode
			 */
			getColorCode()	{
				return this.colorCode;

			}

			/**
			 * The method to set the value to colorCode
			 * @param {String} colorCode A String
			 */
			setColorCode(colorCode)	{
				if((colorCode != null) && (!(Object.prototype.toString.call(colorCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: colorCode EXPECTED TYPE: String", null, null);
				}
				this.colorCode = colorCode;
				this.keyModified.set("color_code", 1);

			}

			/**
			 * The method to get the criteriaMessage
			 * @returns {String} A String representing the criteriaMessage
			 */
			getCriteriaMessage()	{
				return this.criteriaMessage;

			}

			/**
			 * The method to set the value to criteriaMessage
			 * @param {String} criteriaMessage A String
			 */
			setCriteriaMessage(criteriaMessage)	{
				if((criteriaMessage != null) && (!(Object.prototype.toString.call(criteriaMessage) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMessage EXPECTED TYPE: String", null, null);
				}
				this.criteriaMessage = criteriaMessage;
				this.keyModified.set("criteria_message", 1);

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

		Module : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
				this.module=null;
				this.id=null;
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
			 * The method to get the module
			 * @returns {String} A String representing the module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {String} module A String
			 */
			setModule(module)	{
				if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

			}

			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
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

		CurrentPicklist : class{
			constructor(){

				this.colourCode=null;
				this.id=null;
				this.value=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the colourCode
			 * @returns {String} A String representing the colourCode
			 */
			getColourCode()	{
				return this.colourCode;

			}

			/**
			 * The method to set the value to colourCode
			 * @param {String} colourCode A String
			 */
			setColourCode(colourCode)	{
				if((colourCode != null) && (!(Object.prototype.toString.call(colourCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: colourCode EXPECTED TYPE: String", null, null);
				}
				this.colourCode = colourCode;
				this.keyModified.set("colour_code", 1);

			}

			/**
			 * The method to get the id
			 * @returns {String} A String representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {String} id A String
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the value
			 * @returns {String} A String representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {String} value A String
			 */
			setValue(value)	{
				if((value != null) && (!(Object.prototype.toString.call(value) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: String", null, null);
				}
				this.value = value;
				this.keyModified.set("value", 1);

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

		AutoNumber : class{
			constructor(){

				this.prefix=null;
				this.suffix=null;
				this.startNumber=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the prefix
			 * @returns {String} A String representing the prefix
			 */
			getPrefix()	{
				return this.prefix;

			}

			/**
			 * The method to set the value to prefix
			 * @param {String} prefix A String
			 */
			setPrefix(prefix)	{
				if((prefix != null) && (!(Object.prototype.toString.call(prefix) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prefix EXPECTED TYPE: String", null, null);
				}
				this.prefix = prefix;
				this.keyModified.set("prefix", 1);

			}

			/**
			 * The method to get the suffix
			 * @returns {String} A String representing the suffix
			 */
			getSuffix()	{
				return this.suffix;

			}

			/**
			 * The method to set the value to suffix
			 * @param {String} suffix A String
			 */
			setSuffix(suffix)	{
				if((suffix != null) && (!(Object.prototype.toString.call(suffix) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: suffix EXPECTED TYPE: String", null, null);
				}
				this.suffix = suffix;
				this.keyModified.set("suffix", 1);

			}

			/**
			 * The method to get the startNumber
			 * @returns {Integer} An Integer representing the startNumber
			 */
			getStartNumber()	{
				return this.startNumber;

			}

			/**
			 * The method to set the value to startNumber
			 * @param {Integer} startNumber An Integer
			 */
			setStartNumber(startNumber)	{
				if((startNumber != null) && (!(Object.prototype.toString.call(startNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startNumber EXPECTED TYPE: Integer", null, null);
				}
				this.startNumber = startNumber;
				this.keyModified.set("start_number", 1);

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

		ToolTip : class{
			constructor(){

				this.name=null;
				this.value=null;
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
			 * The method to get the value
			 * @returns {String} A String representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {String} value A String
			 */
			setValue(value)	{
				if((value != null) && (!(Object.prototype.toString.call(value) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: String", null, null);
				}
				this.value = value;
				this.keyModified.set("value", 1);

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

		AssociationDetails : class{
			constructor(){

				this.lookupField=null;
				this.relatedField=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the lookupField
			 * @returns {LookupField} An instance of LookupField
			 */
			getLookupField()	{
				return this.lookupField;

			}

			/**
			 * The method to set the value to lookupField
			 * @param {LookupField} lookupField An instance of LookupField
			 */
			setLookupField(lookupField)	{
				if((lookupField != null) && (!(lookupField instanceof ZCRM.Blueprint.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupField EXPECTED TYPE: LookupField", null, null);
				}
				this.lookupField = lookupField;
				this.keyModified.set("lookup_field", 1);

			}

			/**
			 * The method to get the relatedField
			 * @returns {LookupField} An instance of LookupField
			 */
			getRelatedField()	{
				return this.relatedField;

			}

			/**
			 * The method to set the value to relatedField
			 * @param {LookupField} relatedField An instance of LookupField
			 */
			setRelatedField(relatedField)	{
				if((relatedField != null) && (!(relatedField instanceof ZCRM.Blueprint.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedField EXPECTED TYPE: LookupField", null, null);
				}
				this.relatedField = relatedField;
				this.keyModified.set("related_field", 1);

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

		ViewType : class{
			constructor(){

				this.view=null;
				this.edit=null;
				this.create=null;
				this.quickCreate=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the view
			 * @returns {Boolean} A Boolean representing the view
			 */
			getView()	{
				return this.view;

			}

			/**
			 * The method to set the value to view
			 * @param {Boolean} view A Boolean
			 */
			setView(view)	{
				if((view != null) && (!(Object.prototype.toString.call(view) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: view EXPECTED TYPE: Boolean", null, null);
				}
				this.view = view;
				this.keyModified.set("view", 1);

			}

			/**
			 * The method to get the edit
			 * @returns {Boolean} A Boolean representing the edit
			 */
			getEdit()	{
				return this.edit;

			}

			/**
			 * The method to set the value to edit
			 * @param {Boolean} edit A Boolean
			 */
			setEdit(edit)	{
				if((edit != null) && (!(Object.prototype.toString.call(edit) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: edit EXPECTED TYPE: Boolean", null, null);
				}
				this.edit = edit;
				this.keyModified.set("edit", 1);

			}

			/**
			 * The method to get the create
			 * @returns {Boolean} A Boolean representing the create
			 */
			getCreate()	{
				return this.create;

			}

			/**
			 * The method to set the value to create
			 * @param {Boolean} create A Boolean
			 */
			setCreate(create)	{
				if((create != null) && (!(Object.prototype.toString.call(create) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: create EXPECTED TYPE: Boolean", null, null);
				}
				this.create = create;
				this.keyModified.set("create", 1);

			}

			/**
			 * The method to get the quickCreate
			 * @returns {Boolean} A Boolean representing the quickCreate
			 */
			getQuickCreate()	{
				return this.quickCreate;

			}

			/**
			 * The method to set the value to quickCreate
			 * @param {Boolean} quickCreate A Boolean
			 */
			setQuickCreate(quickCreate)	{
				if((quickCreate != null) && (!(Object.prototype.toString.call(quickCreate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickCreate EXPECTED TYPE: Boolean", null, null);
				}
				this.quickCreate = quickCreate;
				this.keyModified.set("quick_create", 1);

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

				this.blueprint=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the blueprint
			 * @returns {List} An Array representing the blueprint
			 */
			getBlueprint()	{
				return this.blueprint;

			}

			/**
			 * The method to set the value to blueprint
			 * @param {List} blueprint An Array
			 */
			setBlueprint(blueprint)	{
				if((blueprint != null) && (!(Object.prototype.toString.call(blueprint) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprint EXPECTED TYPE: Array", null, null);
				}
				this.blueprint = blueprint;
				this.keyModified.set("blueprint", 1);

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

		Formula : class{
			constructor(){

				this.returnType=null;
				this.expression=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the returnType
			 * @returns {String} A String representing the returnType
			 */
			getReturnType()	{
				return this.returnType;

			}

			/**
			 * The method to set the value to returnType
			 * @param {String} returnType A String
			 */
			setReturnType(returnType)	{
				if((returnType != null) && (!(Object.prototype.toString.call(returnType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: returnType EXPECTED TYPE: String", null, null);
				}
				this.returnType = returnType;
				this.keyModified.set("return_type", 1);

			}

			/**
			 * The method to get the expression
			 * @returns {Integer} An Integer representing the expression
			 */
			getExpression()	{
				return this.expression;

			}

			/**
			 * The method to set the value to expression
			 * @param {Integer} expression An Integer
			 */
			setExpression(expression)	{
				if((expression != null) && (!(Object.prototype.toString.call(expression) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expression EXPECTED TYPE: Integer", null, null);
				}
				this.expression = expression;
				this.keyModified.set("expression", 1);

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

		BluePrint : class{
			constructor(){

				this.transitionId=null;
				this.data=null;
				this.processInfo=null;
				this.transitions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the transitionId
			 * @returns {String} A String representing the transitionId
			 */
			getTransitionId()	{
				return this.transitionId;

			}

			/**
			 * The method to set the value to transitionId
			 * @param {String} transitionId A String
			 */
			setTransitionId(transitionId)	{
				if((transitionId != null) && (!(Object.prototype.toString.call(transitionId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionId EXPECTED TYPE: String", null, null);
				}
				this.transitionId = transitionId;
				this.keyModified.set("transition_id", 1);

			}

			/**
			 * The method to get the data
			 * @returns {Record} An instance of Record
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {Record} data An instance of Record
			 */
			setData(data)	{
				if((data != null) && (!(data instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the processInfo
			 * @returns {ProcessInfo} An instance of ProcessInfo
			 */
			getProcessInfo()	{
				return this.processInfo;

			}

			/**
			 * The method to set the value to processInfo
			 * @param {ProcessInfo} processInfo An instance of ProcessInfo
			 */
			setProcessInfo(processInfo)	{
				if((processInfo != null) && (!(processInfo instanceof ZCRM.Blueprint.Model.ProcessInfo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processInfo EXPECTED TYPE: ProcessInfo", null, null);
				}
				this.processInfo = processInfo;
				this.keyModified.set("process_info", 1);

			}

			/**
			 * The method to get the transitions
			 * @returns {List} An Array representing the transitions
			 */
			getTransitions()	{
				return this.transitions;

			}

			/**
			 * The method to set the value to transitions
			 * @param {List} transitions An Array
			 */
			setTransitions(transitions)	{
				if((transitions != null) && (!(Object.prototype.toString.call(transitions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitions EXPECTED TYPE: Array", null, null);
				}
				this.transitions = transitions;
				this.keyModified.set("transitions", 1);

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
		 * Creates an instance of BlueprintOperations with the given parameters
		 * @param {String} recordId A String
		 * @param {String} moduleAPIName A String
		 */
		constructor(recordId, moduleAPIName){
			if((!(Object.prototype.toString.call(recordId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.recordId = recordId;
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get blueprint
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getBlueprint(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/blueprint");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Blueprint.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update blueprint
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateBlueprint(request){
			if((request != null) && (!(request instanceof ZCRM.Blueprint.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/blueprint");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Blueprint.Model.ActionHandler", "application/json");

		}

	},

}