ZCRM.Field = {
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

		Expression : class{
			constructor(){

				this.functionParameters=null;
				this.criteria=null;
				this.function1=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the functionParameters
			 * @returns {List} An Array representing the functionParameters
			 */
			getFunctionParameters()	{
				return this.functionParameters;

			}

			/**
			 * The method to set the value to functionParameters
			 * @param {List} functionParameters An Array
			 */
			setFunctionParameters(functionParameters)	{
				if((functionParameters != null) && (!(Object.prototype.toString.call(functionParameters) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: functionParameters EXPECTED TYPE: Array", null, null);
				}
				this.functionParameters = functionParameters;
				this.keyModified.set("function_parameters", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Criteria} An instance of Criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Criteria} criteria An instance of Criteria
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(criteria instanceof ZCRM.Field.Model.Criteria))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

			}

			/**
			 * The method to get the function
			 * @returns {String} A String representing the function1
			 */
			getFunction()	{
				return this.function1;

			}

			/**
			 * The method to set the value to function
			 * @param {String} function1 A String
			 */
			setFunction(function1)	{
				if((function1 != null) && (!(Object.prototype.toString.call(function1) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: function1 EXPECTED TYPE: String", null, null);
				}
				this.function1 = function1;
				this.keyModified.set("function", 1);

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
				this.details=null;
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

		PickListValue : class{
			constructor(){

				this.colourCode=null;
				this.actualValue=null;
				this.type=null;
				this.id=null;
				this.sequenceNumber=null;
				this.displayValue=null;
				this.referenceValue=null;
				this.dealCategory=null;
				this.probability=null;
				this.forecastCategory=null;
				this.expectedDataType=null;
				this.sysRefName=null;
				this.forecastType=null;
				this.maps=null;
				this.delete1=null;
				this.showValue=null;
				this.globalPicklistValue=null;
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
			 * The method to get the actualValue
			 * @returns {String} A String representing the actualValue
			 */
			getActualValue()	{
				return this.actualValue;

			}

			/**
			 * The method to set the value to actualValue
			 * @param {String} actualValue A String
			 */
			setActualValue(actualValue)	{
				if((actualValue != null) && (!(Object.prototype.toString.call(actualValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actualValue EXPECTED TYPE: String", null, null);
				}
				this.actualValue = actualValue;
				this.keyModified.set("actual_value", 1);

			}

			/**
			 * The method to get the type
			 * @returns {Choice} An instance of Choice
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {Choice} type An instance of Choice
			 */
			setType(type)	{
				if((type != null) && (!(type instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

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
			 * The method to get the sequenceNumber
			 * @returns {Integer} An Integer representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {Integer} sequenceNumber An Integer
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

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
			 * The method to get the referenceValue
			 * @returns {String} A String representing the referenceValue
			 */
			getReferenceValue()	{
				return this.referenceValue;

			}

			/**
			 * The method to set the value to referenceValue
			 * @param {String} referenceValue A String
			 */
			setReferenceValue(referenceValue)	{
				if((referenceValue != null) && (!(Object.prototype.toString.call(referenceValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: referenceValue EXPECTED TYPE: String", null, null);
				}
				this.referenceValue = referenceValue;
				this.keyModified.set("reference_value", 1);

			}

			/**
			 * The method to get the dealCategory
			 * @returns {String} A String representing the dealCategory
			 */
			getDealCategory()	{
				return this.dealCategory;

			}

			/**
			 * The method to set the value to dealCategory
			 * @param {String} dealCategory A String
			 */
			setDealCategory(dealCategory)	{
				if((dealCategory != null) && (!(Object.prototype.toString.call(dealCategory) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dealCategory EXPECTED TYPE: String", null, null);
				}
				this.dealCategory = dealCategory;
				this.keyModified.set("deal_category", 1);

			}

			/**
			 * The method to get the probability
			 * @returns {Integer} An Integer representing the probability
			 */
			getProbability()	{
				return this.probability;

			}

			/**
			 * The method to set the value to probability
			 * @param {Integer} probability An Integer
			 */
			setProbability(probability)	{
				if((probability != null) && (!(Object.prototype.toString.call(probability) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: probability EXPECTED TYPE: Integer", null, null);
				}
				this.probability = probability;
				this.keyModified.set("probability", 1);

			}

			/**
			 * The method to get the forecastCategory
			 * @returns {ForecastCategory} An instance of ForecastCategory
			 */
			getForecastCategory()	{
				return this.forecastCategory;

			}

			/**
			 * The method to set the value to forecastCategory
			 * @param {ForecastCategory} forecastCategory An instance of ForecastCategory
			 */
			setForecastCategory(forecastCategory)	{
				if((forecastCategory != null) && (!(forecastCategory instanceof ZCRM.Field.Model.ForecastCategory))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: forecastCategory EXPECTED TYPE: ForecastCategory", null, null);
				}
				this.forecastCategory = forecastCategory;
				this.keyModified.set("forecast_category", 1);

			}

			/**
			 * The method to get the expectedDataType
			 * @returns {String} A String representing the expectedDataType
			 */
			getExpectedDataType()	{
				return this.expectedDataType;

			}

			/**
			 * The method to set the value to expectedDataType
			 * @param {String} expectedDataType A String
			 */
			setExpectedDataType(expectedDataType)	{
				if((expectedDataType != null) && (!(Object.prototype.toString.call(expectedDataType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expectedDataType EXPECTED TYPE: String", null, null);
				}
				this.expectedDataType = expectedDataType;
				this.keyModified.set("expected_data_type", 1);

			}

			/**
			 * The method to get the sysRefName
			 * @returns {String} A String representing the sysRefName
			 */
			getSysRefName()	{
				return this.sysRefName;

			}

			/**
			 * The method to set the value to sysRefName
			 * @param {String} sysRefName A String
			 */
			setSysRefName(sysRefName)	{
				if((sysRefName != null) && (!(Object.prototype.toString.call(sysRefName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sysRefName EXPECTED TYPE: String", null, null);
				}
				this.sysRefName = sysRefName;
				this.keyModified.set("sys_ref_name", 1);

			}

			/**
			 * The method to get the forecastType
			 * @returns {String} A String representing the forecastType
			 */
			getForecastType()	{
				return this.forecastType;

			}

			/**
			 * The method to set the value to forecastType
			 * @param {String} forecastType A String
			 */
			setForecastType(forecastType)	{
				if((forecastType != null) && (!(Object.prototype.toString.call(forecastType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: forecastType EXPECTED TYPE: String", null, null);
				}
				this.forecastType = forecastType;
				this.keyModified.set("forecast_type", 1);

			}

			/**
			 * The method to get the maps
			 * @returns {List} An Array representing the maps
			 */
			getMaps()	{
				return this.maps;

			}

			/**
			 * The method to set the value to maps
			 * @param {List} maps An Array
			 */
			setMaps(maps)	{
				if((maps != null) && (!(Object.prototype.toString.call(maps) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maps EXPECTED TYPE: Array", null, null);
				}
				this.maps = maps;
				this.keyModified.set("maps", 1);

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
			 * The method to get the showValue
			 * @returns {Boolean} A Boolean representing the showValue
			 */
			getShowValue()	{
				return this.showValue;

			}

			/**
			 * The method to set the value to showValue
			 * @param {Boolean} showValue A Boolean
			 */
			setShowValue(showValue)	{
				if((showValue != null) && (!(Object.prototype.toString.call(showValue) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showValue EXPECTED TYPE: Boolean", null, null);
				}
				this.showValue = showValue;
				this.keyModified.set("show_value", 1);

			}

			/**
			 * The method to get the globalPicklistValue
			 * @returns {Picklist} An instance of Picklist
			 */
			getGlobalPicklistValue()	{
				return this.globalPicklistValue;

			}

			/**
			 * The method to set the value to globalPicklistValue
			 * @param {Picklist} globalPicklistValue An instance of Picklist
			 */
			setGlobalPicklistValue(globalPicklistValue)	{
				if((globalPicklistValue != null) && (!(globalPicklistValue instanceof ZCRM.GlobalPicklist.Model.Picklist))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: globalPicklistValue EXPECTED TYPE: Picklist", null, null);
				}
				this.globalPicklistValue = globalPicklistValue;
				this.keyModified.set("_global_picklist_value", 1);

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
				this.assumeDefault=null;
				this.expression=null;
				this.dynamic=null;
				this.stopComputeConditionally=null;
				this.stopComputeExpression=null;
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
			 * The method to get the assumeDefault
			 * @returns {Boolean} A Boolean representing the assumeDefault
			 */
			getAssumeDefault()	{
				return this.assumeDefault;

			}

			/**
			 * The method to set the value to assumeDefault
			 * @param {Boolean} assumeDefault A Boolean
			 */
			setAssumeDefault(assumeDefault)	{
				if((assumeDefault != null) && (!(Object.prototype.toString.call(assumeDefault) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assumeDefault EXPECTED TYPE: Boolean", null, null);
				}
				this.assumeDefault = assumeDefault;
				this.keyModified.set("assume_default", 1);

			}

			/**
			 * The method to get the expression
			 * @returns {String} A String representing the expression
			 */
			getExpression()	{
				return this.expression;

			}

			/**
			 * The method to set the value to expression
			 * @param {String} expression A String
			 */
			setExpression(expression)	{
				if((expression != null) && (!(Object.prototype.toString.call(expression) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expression EXPECTED TYPE: String", null, null);
				}
				this.expression = expression;
				this.keyModified.set("expression", 1);

			}

			/**
			 * The method to get the dynamic
			 * @returns {Boolean} A Boolean representing the dynamic
			 */
			getDynamic()	{
				return this.dynamic;

			}

			/**
			 * The method to set the value to dynamic
			 * @param {Boolean} dynamic A Boolean
			 */
			setDynamic(dynamic)	{
				if((dynamic != null) && (!(Object.prototype.toString.call(dynamic) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dynamic EXPECTED TYPE: Boolean", null, null);
				}
				this.dynamic = dynamic;
				this.keyModified.set("dynamic", 1);

			}

			/**
			 * The method to get the stopComputeConditionally
			 * @returns {Boolean} A Boolean representing the stopComputeConditionally
			 */
			getStopComputeConditionally()	{
				return this.stopComputeConditionally;

			}

			/**
			 * The method to set the value to stopComputeConditionally
			 * @param {Boolean} stopComputeConditionally A Boolean
			 */
			setStopComputeConditionally(stopComputeConditionally)	{
				if((stopComputeConditionally != null) && (!(Object.prototype.toString.call(stopComputeConditionally) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: stopComputeConditionally EXPECTED TYPE: Boolean", null, null);
				}
				this.stopComputeConditionally = stopComputeConditionally;
				this.keyModified.set("stop_compute_conditionally", 1);

			}

			/**
			 * The method to get the stopComputeExpression
			 * @returns {String} A String representing the stopComputeExpression
			 */
			getStopComputeExpression()	{
				return this.stopComputeExpression;

			}

			/**
			 * The method to set the value to stopComputeExpression
			 * @param {String} stopComputeExpression A String
			 */
			setStopComputeExpression(stopComputeExpression)	{
				if((stopComputeExpression != null) && (!(Object.prototype.toString.call(stopComputeExpression) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: stopComputeExpression EXPECTED TYPE: String", null, null);
				}
				this.stopComputeExpression = stopComputeExpression;
				this.keyModified.set("stop_compute_expression", 1);

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

		Subform : class{
			constructor(){

				this.module=null;
				this.id=null;
				this.keyModified=new Map();
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

		HistoryTracking : class{
			constructor(){

				this.module=null;
				this.durationConfiguredField=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the module
			 * @returns {HistoryTrackingModule} An instance of HistoryTrackingModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {HistoryTrackingModule} module An instance of HistoryTrackingModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Field.Model.HistoryTrackingModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: HistoryTrackingModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

			}

			/**
			 * The method to get the durationConfiguredField
			 * @returns {MinifiedModule} An instance of MinifiedModule
			 */
			getDurationConfiguredField()	{
				return this.durationConfiguredField;

			}

			/**
			 * The method to set the value to durationConfiguredField
			 * @param {MinifiedModule} durationConfiguredField An instance of MinifiedModule
			 */
			setDurationConfiguredField(durationConfiguredField)	{
				if((durationConfiguredField != null) && (!(durationConfiguredField instanceof ZCRM.Module.Model.MinifiedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: durationConfiguredField EXPECTED TYPE: MinifiedModule", null, null);
				}
				this.durationConfiguredField = durationConfiguredField;
				this.keyModified.set("duration_configured_field", 1);

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

		Lookup : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
				this.queryDetails=null;
				this.module=null;
				this.id=null;
				this.revalidateFilterDuringEdit=null;
				this.showFields=null;
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
			 * The method to get the queryDetails
			 * @returns {QueryDetails} An instance of QueryDetails
			 */
			getQueryDetails()	{
				return this.queryDetails;

			}

			/**
			 * The method to set the value to queryDetails
			 * @param {QueryDetails} queryDetails An instance of QueryDetails
			 */
			setQueryDetails(queryDetails)	{
				if((queryDetails != null) && (!(queryDetails instanceof ZCRM.Field.Model.QueryDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: queryDetails EXPECTED TYPE: QueryDetails", null, null);
				}
				this.queryDetails = queryDetails;
				this.keyModified.set("query_details", 1);

			}

			/**
			 * The method to get the module
			 * @returns {MinifiedModule} An instance of MinifiedModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {MinifiedModule} module An instance of MinifiedModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Module.Model.MinifiedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: MinifiedModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
			 * The method to get the revalidateFilterDuringEdit
			 * @returns {Boolean} A Boolean representing the revalidateFilterDuringEdit
			 */
			getRevalidateFilterDuringEdit()	{
				return this.revalidateFilterDuringEdit;

			}

			/**
			 * The method to set the value to revalidateFilterDuringEdit
			 * @param {Boolean} revalidateFilterDuringEdit A Boolean
			 */
			setRevalidateFilterDuringEdit(revalidateFilterDuringEdit)	{
				if((revalidateFilterDuringEdit != null) && (!(Object.prototype.toString.call(revalidateFilterDuringEdit) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: revalidateFilterDuringEdit EXPECTED TYPE: Boolean", null, null);
				}
				this.revalidateFilterDuringEdit = revalidateFilterDuringEdit;
				this.keyModified.set("revalidate_filter_during_edit", 1);

			}

			/**
			 * The method to get the showFields
			 * @returns {List} An Array representing the showFields
			 */
			getShowFields()	{
				return this.showFields;

			}

			/**
			 * The method to set the value to showFields
			 * @param {List} showFields An Array
			 */
			setShowFields(showFields)	{
				if((showFields != null) && (!(Object.prototype.toString.call(showFields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showFields EXPECTED TYPE: Array", null, null);
				}
				this.showFields = showFields;
				this.keyModified.set("show_fields", 1);

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

		LayoutAssociation : class{
			constructor(){

				this.apiName=null;
				this.name=null;
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

		Textarea : class{
			constructor(){

				this.type=null;
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

		HistoryTrackingModule : class{
			constructor(){

				this.layout=null;
				this.displayLabel=null;
				this.apiName=null;
				this.module=null;
				this.id=null;
				this.moduleName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the layout
			 * @returns {Layouts} An instance of Layouts
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layouts} layout An instance of Layouts
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Layout.Model.Layouts))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layouts", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

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
			 * @returns {HistoryTrackingModule} An instance of HistoryTrackingModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {HistoryTrackingModule} module An instance of HistoryTrackingModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Field.Model.HistoryTrackingModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: HistoryTrackingModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
			 * The method to get the moduleName
			 * @returns {String} A String representing the moduleName
			 */
			getModuleName()	{
				return this.moduleName;

			}

			/**
			 * The method to set the value to moduleName
			 * @param {String} moduleName A String
			 */
			setModuleName(moduleName)	{
				if((moduleName != null) && (!(Object.prototype.toString.call(moduleName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleName EXPECTED TYPE: String", null, null);
				}
				this.moduleName = moduleName;
				this.keyModified.set("module_name", 1);

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

		ReferFromField : class{
			constructor(){

				this.id=null;
				this.apiName=null;
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
				this.status=null;
				this.column=null;
				this.table=null;
				this.encfldids=null;
				this.notify=null;
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
			 * The method to get the encfldids
			 * @returns {List} An Array representing the encfldids
			 */
			getEncfldids()	{
				return this.encfldids;

			}

			/**
			 * The method to set the value to encfldids
			 * @param {List} encfldids An Array
			 */
			setEncfldids(encfldids)	{
				if((encfldids != null) && (!(Object.prototype.toString.call(encfldids) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encfldids EXPECTED TYPE: Array", null, null);
				}
				this.encfldids = encfldids;
				this.keyModified.set("encFldIds", 1);

			}

			/**
			 * The method to get the notify
			 * @returns {String} A String representing the notify
			 */
			getNotify()	{
				return this.notify;

			}

			/**
			 * The method to set the value to notify
			 * @param {String} notify A String
			 */
			setNotify(notify)	{
				if((notify != null) && (!(Object.prototype.toString.call(notify) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notify EXPECTED TYPE: String", null, null);
				}
				this.notify = notify;
				this.keyModified.set("notify", 1);

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

		LookupRelatedList : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
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

		OperationType : class{
			constructor(){

				this.webUpdate=null;
				this.apiCreate=null;
				this.webCreate=null;
				this.apiUpdate=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the webUpdate
			 * @returns {Boolean} A Boolean representing the webUpdate
			 */
			getWebUpdate()	{
				return this.webUpdate;

			}

			/**
			 * The method to set the value to webUpdate
			 * @param {Boolean} webUpdate A Boolean
			 */
			setWebUpdate(webUpdate)	{
				if((webUpdate != null) && (!(Object.prototype.toString.call(webUpdate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webUpdate EXPECTED TYPE: Boolean", null, null);
				}
				this.webUpdate = webUpdate;
				this.keyModified.set("web_update", 1);

			}

			/**
			 * The method to get the apiCreate
			 * @returns {Boolean} A Boolean representing the apiCreate
			 */
			getAPICreate()	{
				return this.apiCreate;

			}

			/**
			 * The method to set the value to apiCreate
			 * @param {Boolean} apiCreate A Boolean
			 */
			setAPICreate(apiCreate)	{
				if((apiCreate != null) && (!(Object.prototype.toString.call(apiCreate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiCreate EXPECTED TYPE: Boolean", null, null);
				}
				this.apiCreate = apiCreate;
				this.keyModified.set("api_create", 1);

			}

			/**
			 * The method to get the webCreate
			 * @returns {Boolean} A Boolean representing the webCreate
			 */
			getWebCreate()	{
				return this.webCreate;

			}

			/**
			 * The method to set the value to webCreate
			 * @param {Boolean} webCreate A Boolean
			 */
			setWebCreate(webCreate)	{
				if((webCreate != null) && (!(Object.prototype.toString.call(webCreate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webCreate EXPECTED TYPE: Boolean", null, null);
				}
				this.webCreate = webCreate;
				this.keyModified.set("web_create", 1);

			}

			/**
			 * The method to get the apiUpdate
			 * @returns {Boolean} A Boolean representing the apiUpdate
			 */
			getAPIUpdate()	{
				return this.apiUpdate;

			}

			/**
			 * The method to set the value to apiUpdate
			 * @param {Boolean} apiUpdate A Boolean
			 */
			setAPIUpdate(apiUpdate)	{
				if((apiUpdate != null) && (!(Object.prototype.toString.call(apiUpdate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiUpdate EXPECTED TYPE: Boolean", null, null);
				}
				this.apiUpdate = apiUpdate;
				this.keyModified.set("api_update", 1);

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

		FunctionParameter : class{
			constructor(){

				this.apiName=null;
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

		Fields : class{
			constructor(){

				this.associatedModule=null;
				this.dataType=null;
				this.operationType=null;
				this.systemMandatory=null;
				this.webhook=null;
				this.sequenceNumber=null;
				this.defaultValue=null;
				this.blueprintSupported=null;
				this.virtualField=null;
				this.fieldReadOnly=null;
				this.customizableProperties=null;
				this.readOnly=null;
				this.customField=null;
				this.businesscardSupported=null;
				this.filterable=null;
				this.visible=null;
				this.availableInUserLayout=null;
				this.displayField=null;
				this.pickListValuesSortedLexically=null;
				this.sortable=null;
				this.layoutAssociations=null;
				this.separator=null;
				this.searchable=null;
				this.enableColourCode=null;
				this.massUpdate=null;
				this.jsonType=null;
				this.createdSource=null;
				this.type=null;
				this.displayLabel=null;
				this.columnName=null;
				this.apiName=null;
				this.displayType=null;
				this.uiType=null;
				this.colourCodeEnabledBySystem=null;
				this.length=null;
				this.decimalPlace=null;
				this.quickSequenceNumber=null;
				this.emailParser=null;
				this.rollupSummary=null;
				this.referFromField=null;
				this.createdTime=null;
				this.modifiedTime=null;
				this.showType=null;
				this.category=null;
				this.id=null;
				this.multiModuleLookup=null;
				this.sharingProperties=null;
				this.currency=null;
				this.fileUpoladOptionlist=null;
				this.lookup=null;
				this.profiles=null;
				this.viewType=null;
				this.unique=null;
				this.subModule=null;
				this.subform=null;
				this.external=null;
				this.formula=null;
				this.private1=null;
				this.convertMapping=null;
				this.multiselectlookup=null;
				this.multiuserlookup=null;
				this.autonumber=null;
				this.autoNumber61=null;
				this.pickListValues=null;
				this.crypt=null;
				this.tooltip=null;
				this.historyTracking=null;
				this.associationDetails=null;
				this.allowedModules=null;
				this.additionalColumn=null;
				this.fieldLabel=null;
				this.globalPicklist=null;
				this.hipaaComplianceEnabled=null;
				this.hipaaCompliance=null;
				this.updateExistingRecords=null;
				this.numberSeparator=null;
				this.textarea=null;
				this.staticField=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the associatedModule
			 * @returns {MinifiedModule} An instance of MinifiedModule
			 */
			getAssociatedModule()	{
				return this.associatedModule;

			}

			/**
			 * The method to set the value to associatedModule
			 * @param {MinifiedModule} associatedModule An instance of MinifiedModule
			 */
			setAssociatedModule(associatedModule)	{
				if((associatedModule != null) && (!(associatedModule instanceof ZCRM.Module.Model.MinifiedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associatedModule EXPECTED TYPE: MinifiedModule", null, null);
				}
				this.associatedModule = associatedModule;
				this.keyModified.set("associated_module", 1);

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
			 * The method to get the operationType
			 * @returns {OperationType} An instance of OperationType
			 */
			getOperationType()	{
				return this.operationType;

			}

			/**
			 * The method to set the value to operationType
			 * @param {OperationType} operationType An instance of OperationType
			 */
			setOperationType(operationType)	{
				if((operationType != null) && (!(operationType instanceof ZCRM.Field.Model.OperationType))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: operationType EXPECTED TYPE: OperationType", null, null);
				}
				this.operationType = operationType;
				this.keyModified.set("operation_type", 1);

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
			 * The method to get the sequenceNumber
			 * @returns {Integer} An Integer representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {Integer} sequenceNumber An Integer
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

			}

			/**
			 * The method to get the defaultValue
			 * @returns {String} A String representing the defaultValue
			 */
			getDefaultValue()	{
				return this.defaultValue;

			}

			/**
			 * The method to set the value to defaultValue
			 * @param {String} defaultValue A String
			 */
			setDefaultValue(defaultValue)	{
				if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: String", null, null);
				}
				this.defaultValue = defaultValue;
				this.keyModified.set("default_value", 1);

			}

			/**
			 * The method to get the blueprintSupported
			 * @returns {Boolean} A Boolean representing the blueprintSupported
			 */
			getBlueprintSupported()	{
				return this.blueprintSupported;

			}

			/**
			 * The method to set the value to blueprintSupported
			 * @param {Boolean} blueprintSupported A Boolean
			 */
			setBlueprintSupported(blueprintSupported)	{
				if((blueprintSupported != null) && (!(Object.prototype.toString.call(blueprintSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprintSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.blueprintSupported = blueprintSupported;
				this.keyModified.set("blueprint_supported", 1);

			}

			/**
			 * The method to get the virtualField
			 * @returns {Boolean} A Boolean representing the virtualField
			 */
			getVirtualField()	{
				return this.virtualField;

			}

			/**
			 * The method to set the value to virtualField
			 * @param {Boolean} virtualField A Boolean
			 */
			setVirtualField(virtualField)	{
				if((virtualField != null) && (!(Object.prototype.toString.call(virtualField) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: virtualField EXPECTED TYPE: Boolean", null, null);
				}
				this.virtualField = virtualField;
				this.keyModified.set("virtual_field", 1);

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
			 * The method to get the customizableProperties
			 * @returns {List} An Array representing the customizableProperties
			 */
			getCustomizableProperties()	{
				return this.customizableProperties;

			}

			/**
			 * The method to set the value to customizableProperties
			 * @param {List} customizableProperties An Array
			 */
			setCustomizableProperties(customizableProperties)	{
				if((customizableProperties != null) && (!(Object.prototype.toString.call(customizableProperties) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizableProperties EXPECTED TYPE: Array", null, null);
				}
				this.customizableProperties = customizableProperties;
				this.keyModified.set("customizable_properties", 1);

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
			 * The method to get the businesscardSupported
			 * @returns {Boolean} A Boolean representing the businesscardSupported
			 */
			getBusinesscardSupported()	{
				return this.businesscardSupported;

			}

			/**
			 * The method to set the value to businesscardSupported
			 * @param {Boolean} businesscardSupported A Boolean
			 */
			setBusinesscardSupported(businesscardSupported)	{
				if((businesscardSupported != null) && (!(Object.prototype.toString.call(businesscardSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businesscardSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.businesscardSupported = businesscardSupported;
				this.keyModified.set("businesscard_supported", 1);

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
			 * The method to get the displayField
			 * @returns {Boolean} A Boolean representing the displayField
			 */
			getDisplayField()	{
				return this.displayField;

			}

			/**
			 * The method to set the value to displayField
			 * @param {Boolean} displayField A Boolean
			 */
			setDisplayField(displayField)	{
				if((displayField != null) && (!(Object.prototype.toString.call(displayField) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayField EXPECTED TYPE: Boolean", null, null);
				}
				this.displayField = displayField;
				this.keyModified.set("display_field", 1);

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
			 * The method to get the layoutAssociations
			 * @returns {List} An Array representing the layoutAssociations
			 */
			getLayoutAssociations()	{
				return this.layoutAssociations;

			}

			/**
			 * The method to set the value to layoutAssociations
			 * @param {List} layoutAssociations An Array
			 */
			setLayoutAssociations(layoutAssociations)	{
				if((layoutAssociations != null) && (!(Object.prototype.toString.call(layoutAssociations) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layoutAssociations EXPECTED TYPE: Array", null, null);
				}
				this.layoutAssociations = layoutAssociations;
				this.keyModified.set("layout_associations", 1);

			}

			/**
			 * The method to get the separator
			 * @returns {Boolean} A Boolean representing the separator
			 */
			getSeparator()	{
				return this.separator;

			}

			/**
			 * The method to set the value to separator
			 * @param {Boolean} separator A Boolean
			 */
			setSeparator(separator)	{
				if((separator != null) && (!(Object.prototype.toString.call(separator) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: separator EXPECTED TYPE: Boolean", null, null);
				}
				this.separator = separator;
				this.keyModified.set("separator", 1);

			}

			/**
			 * The method to get the searchable
			 * @returns {Boolean} A Boolean representing the searchable
			 */
			getSearchable()	{
				return this.searchable;

			}

			/**
			 * The method to set the value to searchable
			 * @param {Boolean} searchable A Boolean
			 */
			setSearchable(searchable)	{
				if((searchable != null) && (!(Object.prototype.toString.call(searchable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: searchable EXPECTED TYPE: Boolean", null, null);
				}
				this.searchable = searchable;
				this.keyModified.set("searchable", 1);

			}

			/**
			 * The method to get the enableColourCode
			 * @returns {Boolean} A Boolean representing the enableColourCode
			 */
			getEnableColourCode()	{
				return this.enableColourCode;

			}

			/**
			 * The method to set the value to enableColourCode
			 * @param {Boolean} enableColourCode A Boolean
			 */
			setEnableColourCode(enableColourCode)	{
				if((enableColourCode != null) && (!(Object.prototype.toString.call(enableColourCode) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enableColourCode EXPECTED TYPE: Boolean", null, null);
				}
				this.enableColourCode = enableColourCode;
				this.keyModified.set("enable_colour_code", 1);

			}

			/**
			 * The method to get the massUpdate
			 * @returns {Boolean} A Boolean representing the massUpdate
			 */
			getMassUpdate()	{
				return this.massUpdate;

			}

			/**
			 * The method to set the value to massUpdate
			 * @param {Boolean} massUpdate A Boolean
			 */
			setMassUpdate(massUpdate)	{
				if((massUpdate != null) && (!(Object.prototype.toString.call(massUpdate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: massUpdate EXPECTED TYPE: Boolean", null, null);
				}
				this.massUpdate = massUpdate;
				this.keyModified.set("mass_update", 1);

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
			 * The method to get the displayType
			 * @returns {Integer} An Integer representing the displayType
			 */
			getDisplayType()	{
				return this.displayType;

			}

			/**
			 * The method to set the value to displayType
			 * @param {Integer} displayType An Integer
			 */
			setDisplayType(displayType)	{
				if((displayType != null) && (!(Object.prototype.toString.call(displayType) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayType EXPECTED TYPE: Integer", null, null);
				}
				this.displayType = displayType;
				this.keyModified.set("display_type", 1);

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
			 * The method to get the colourCodeEnabledBySystem
			 * @returns {Boolean} A Boolean representing the colourCodeEnabledBySystem
			 */
			getColourCodeEnabledBySystem()	{
				return this.colourCodeEnabledBySystem;

			}

			/**
			 * The method to set the value to colourCodeEnabledBySystem
			 * @param {Boolean} colourCodeEnabledBySystem A Boolean
			 */
			setColourCodeEnabledBySystem(colourCodeEnabledBySystem)	{
				if((colourCodeEnabledBySystem != null) && (!(Object.prototype.toString.call(colourCodeEnabledBySystem) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: colourCodeEnabledBySystem EXPECTED TYPE: Boolean", null, null);
				}
				this.colourCodeEnabledBySystem = colourCodeEnabledBySystem;
				this.keyModified.set("colour_code_enabled_by_system", 1);

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
			 * The method to get the decimalPlace
			 * @returns {Integer} An Integer representing the decimalPlace
			 */
			getDecimalPlace()	{
				return this.decimalPlace;

			}

			/**
			 * The method to set the value to decimalPlace
			 * @param {Integer} decimalPlace An Integer
			 */
			setDecimalPlace(decimalPlace)	{
				if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: Integer", null, null);
				}
				this.decimalPlace = decimalPlace;
				this.keyModified.set("decimal_place", 1);

			}

			/**
			 * The method to get the quickSequenceNumber
			 * @returns {String} A String representing the quickSequenceNumber
			 */
			getQuickSequenceNumber()	{
				return this.quickSequenceNumber;

			}

			/**
			 * The method to set the value to quickSequenceNumber
			 * @param {String} quickSequenceNumber A String
			 */
			setQuickSequenceNumber(quickSequenceNumber)	{
				if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: String", null, null);
				}
				this.quickSequenceNumber = quickSequenceNumber;
				this.keyModified.set("quick_sequence_number", 1);

			}

			/**
			 * The method to get the emailParser
			 * @returns {EmailParser} An instance of EmailParser
			 */
			getEmailParser()	{
				return this.emailParser;

			}

			/**
			 * The method to set the value to emailParser
			 * @param {EmailParser} emailParser An instance of EmailParser
			 */
			setEmailParser(emailParser)	{
				if((emailParser != null) && (!(emailParser instanceof ZCRM.Field.Model.EmailParser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailParser EXPECTED TYPE: EmailParser", null, null);
				}
				this.emailParser = emailParser;
				this.keyModified.set("email_parser", 1);

			}

			/**
			 * The method to get the rollupSummary
			 * @returns {RollupSummary} An instance of RollupSummary
			 */
			getRollupSummary()	{
				return this.rollupSummary;

			}

			/**
			 * The method to set the value to rollupSummary
			 * @param {RollupSummary} rollupSummary An instance of RollupSummary
			 */
			setRollupSummary(rollupSummary)	{
				if((rollupSummary != null) && (!(rollupSummary instanceof ZCRM.Field.Model.RollupSummary))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rollupSummary EXPECTED TYPE: RollupSummary", null, null);
				}
				this.rollupSummary = rollupSummary;
				this.keyModified.set("rollup_summary", 1);

			}

			/**
			 * The method to get the referFromField
			 * @returns {ReferFromField} An instance of ReferFromField
			 */
			getReferFromField()	{
				return this.referFromField;

			}

			/**
			 * The method to set the value to referFromField
			 * @param {ReferFromField} referFromField An instance of ReferFromField
			 */
			setReferFromField(referFromField)	{
				if((referFromField != null) && (!(referFromField instanceof ZCRM.Field.Model.ReferFromField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: referFromField EXPECTED TYPE: ReferFromField", null, null);
				}
				this.referFromField = referFromField;
				this.keyModified.set("refer_from_field", 1);

			}

			/**
			 * The method to get the createdTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTime()	{
				return this.createdTime;

			}

			/**
			 * The method to set the value to createdTime
			 * @param {OffsetDateTime} createdTime An instance of OffsetDateTime
			 */
			setCreatedTime(createdTime)	{
				if((createdTime != null) && (!(createdTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
				}
				this.createdTime = createdTime;
				this.keyModified.set("created_time", 1);

			}

			/**
			 * The method to get the modifiedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTime()	{
				return this.modifiedTime;

			}

			/**
			 * The method to set the value to modifiedTime
			 * @param {OffsetDateTime} modifiedTime An instance of OffsetDateTime
			 */
			setModifiedTime(modifiedTime)	{
				if((modifiedTime != null) && (!(modifiedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
				}
				this.modifiedTime = modifiedTime;
				this.keyModified.set("modified_time", 1);

			}

			/**
			 * The method to get the showType
			 * @returns {Integer} An Integer representing the showType
			 */
			getShowType()	{
				return this.showType;

			}

			/**
			 * The method to set the value to showType
			 * @param {Integer} showType An Integer
			 */
			setShowType(showType)	{
				if((showType != null) && (!(Object.prototype.toString.call(showType) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showType EXPECTED TYPE: Integer", null, null);
				}
				this.showType = showType;
				this.keyModified.set("show_type", 1);

			}

			/**
			 * The method to get the category
			 * @returns {Integer} An Integer representing the category
			 */
			getCategory()	{
				return this.category;

			}

			/**
			 * The method to set the value to category
			 * @param {Integer} category An Integer
			 */
			setCategory(category)	{
				if((category != null) && (!(Object.prototype.toString.call(category) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: Integer", null, null);
				}
				this.category = category;
				this.keyModified.set("category", 1);

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
			 * The method to get the sharingProperties
			 * @returns {SharingProperties} An instance of SharingProperties
			 */
			getSharingProperties()	{
				return this.sharingProperties;

			}

			/**
			 * The method to set the value to sharingProperties
			 * @param {SharingProperties} sharingProperties An instance of SharingProperties
			 */
			setSharingProperties(sharingProperties)	{
				if((sharingProperties != null) && (!(sharingProperties instanceof ZCRM.Module.Model.SharingProperties))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharingProperties EXPECTED TYPE: SharingProperties", null, null);
				}
				this.sharingProperties = sharingProperties;
				this.keyModified.set("sharing_properties", 1);

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
				if((currency != null) && (!(currency instanceof ZCRM.Field.Model.Currency))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
				}
				this.currency = currency;
				this.keyModified.set("currency", 1);

			}

			/**
			 * The method to get the fileUpoladOptionlist
			 * @returns {List} An Array representing the fileUpoladOptionlist
			 */
			getFileUpoladOptionlist()	{
				return this.fileUpoladOptionlist;

			}

			/**
			 * The method to set the value to fileUpoladOptionlist
			 * @param {List} fileUpoladOptionlist An Array
			 */
			setFileUpoladOptionlist(fileUpoladOptionlist)	{
				if((fileUpoladOptionlist != null) && (!(Object.prototype.toString.call(fileUpoladOptionlist) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileUpoladOptionlist EXPECTED TYPE: Array", null, null);
				}
				this.fileUpoladOptionlist = fileUpoladOptionlist;
				this.keyModified.set("file_upolad_optionlist", 1);

			}

			/**
			 * The method to get the lookup
			 * @returns {Lookup} An instance of Lookup
			 */
			getLookup()	{
				return this.lookup;

			}

			/**
			 * The method to set the value to lookup
			 * @param {Lookup} lookup An instance of Lookup
			 */
			setLookup(lookup)	{
				if((lookup != null) && (!(lookup instanceof ZCRM.Field.Model.Lookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Lookup", null, null);
				}
				this.lookup = lookup;
				this.keyModified.set("lookup", 1);

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
				if((viewType != null) && (!(viewType instanceof ZCRM.Field.Model.ViewType))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

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
			 * The method to get the subModule
			 * @returns {MinifiedModule} An instance of MinifiedModule
			 */
			getSubModule()	{
				return this.subModule;

			}

			/**
			 * The method to set the value to subModule
			 * @param {MinifiedModule} subModule An instance of MinifiedModule
			 */
			setSubModule(subModule)	{
				if((subModule != null) && (!(subModule instanceof ZCRM.Module.Model.MinifiedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subModule EXPECTED TYPE: MinifiedModule", null, null);
				}
				this.subModule = subModule;
				this.keyModified.set("sub_module", 1);

			}

			/**
			 * The method to get the subform
			 * @returns {Subform} An instance of Subform
			 */
			getSubform()	{
				return this.subform;

			}

			/**
			 * The method to set the value to subform
			 * @param {Subform} subform An instance of Subform
			 */
			setSubform(subform)	{
				if((subform != null) && (!(subform instanceof ZCRM.Field.Model.Subform))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subform EXPECTED TYPE: Subform", null, null);
				}
				this.subform = subform;
				this.keyModified.set("subform", 1);

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
				if((formula != null) && (!(formula instanceof ZCRM.Field.Model.Formula))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
				}
				this.formula = formula;
				this.keyModified.set("formula", 1);

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
			 * The method to get the convertMapping
			 * @returns {ConvertMapping} An instance of ConvertMapping
			 */
			getConvertMapping()	{
				return this.convertMapping;

			}

			/**
			 * The method to set the value to convertMapping
			 * @param {ConvertMapping} convertMapping An instance of ConvertMapping
			 */
			setConvertMapping(convertMapping)	{
				if((convertMapping != null) && (!(convertMapping instanceof ZCRM.Field.Model.ConvertMapping))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: ConvertMapping", null, null);
				}
				this.convertMapping = convertMapping;
				this.keyModified.set("convert_mapping", 1);

			}

			/**
			 * The method to get the multiselectlookup
			 * @returns {Multiselectlookup} An instance of Multiselectlookup
			 */
			getMultiselectlookup()	{
				return this.multiselectlookup;

			}

			/**
			 * The method to set the value to multiselectlookup
			 * @param {Multiselectlookup} multiselectlookup An instance of Multiselectlookup
			 */
			setMultiselectlookup(multiselectlookup)	{
				if((multiselectlookup != null) && (!(multiselectlookup instanceof ZCRM.Field.Model.Multiselectlookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: Multiselectlookup", null, null);
				}
				this.multiselectlookup = multiselectlookup;
				this.keyModified.set("multiselectlookup", 1);

			}

			/**
			 * The method to get the multiuserlookup
			 * @returns {Multiselectlookup} An instance of Multiselectlookup
			 */
			getMultiuserlookup()	{
				return this.multiuserlookup;

			}

			/**
			 * The method to set the value to multiuserlookup
			 * @param {Multiselectlookup} multiuserlookup An instance of Multiselectlookup
			 */
			setMultiuserlookup(multiuserlookup)	{
				if((multiuserlookup != null) && (!(multiuserlookup instanceof ZCRM.Field.Model.Multiselectlookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiuserlookup EXPECTED TYPE: Multiselectlookup", null, null);
				}
				this.multiuserlookup = multiuserlookup;
				this.keyModified.set("multiuserlookup", 1);

			}

			/**
			 * The method to get the autonumber
			 * @returns {AutoNumber} An instance of AutoNumber
			 */
			getAutonumber()	{
				return this.autonumber;

			}

			/**
			 * The method to set the value to autonumber
			 * @param {AutoNumber} autonumber An instance of AutoNumber
			 */
			setAutonumber(autonumber)	{
				if((autonumber != null) && (!(autonumber instanceof ZCRM.Field.Model.AutoNumber))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autonumber EXPECTED TYPE: AutoNumber", null, null);
				}
				this.autonumber = autonumber;
				this.keyModified.set("autonumber", 1);

			}

			/**
			 * The method to get the autoNumber61
			 * @returns {AutoNumber} An instance of AutoNumber
			 */
			getAutoNumber61()	{
				return this.autoNumber61;

			}

			/**
			 * The method to set the value to autoNumber61
			 * @param {AutoNumber} autoNumber61 An instance of AutoNumber
			 */
			setAutoNumber61(autoNumber61)	{
				if((autoNumber61 != null) && (!(autoNumber61 instanceof ZCRM.Field.Model.AutoNumber))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber61 EXPECTED TYPE: AutoNumber", null, null);
				}
				this.autoNumber61 = autoNumber61;
				this.keyModified.set("auto_number", 1);

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
				if((crypt != null) && (!(crypt instanceof ZCRM.Field.Model.Crypt))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
				}
				this.crypt = crypt;
				this.keyModified.set("crypt", 1);

			}

			/**
			 * The method to get the tooltip
			 * @returns {Tooltip} An instance of Tooltip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {Tooltip} tooltip An instance of Tooltip
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(tooltip instanceof ZCRM.Field.Model.Tooltip))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: Tooltip", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

			}

			/**
			 * The method to get the historyTracking
			 * @returns {HistoryTracking} An instance of HistoryTracking
			 */
			getHistoryTracking()	{
				return this.historyTracking;

			}

			/**
			 * The method to set the value to historyTracking
			 * @param {HistoryTracking} historyTracking An instance of HistoryTracking
			 */
			setHistoryTracking(historyTracking)	{
				if((historyTracking != null) && (!(historyTracking instanceof ZCRM.Field.Model.HistoryTracking))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: HistoryTracking", null, null);
				}
				this.historyTracking = historyTracking;
				this.keyModified.set("history_tracking", 1);

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
				if((associationDetails != null) && (!(associationDetails instanceof ZCRM.Field.Model.AssociationDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
				}
				this.associationDetails = associationDetails;
				this.keyModified.set("association_details", 1);

			}

			/**
			 * The method to get the allowedModules
			 * @returns {List} An Array representing the allowedModules
			 */
			getAllowedModules()	{
				return this.allowedModules;

			}

			/**
			 * The method to set the value to allowedModules
			 * @param {List} allowedModules An Array
			 */
			setAllowedModules(allowedModules)	{
				if((allowedModules != null) && (!(Object.prototype.toString.call(allowedModules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowedModules EXPECTED TYPE: Array", null, null);
				}
				this.allowedModules = allowedModules;
				this.keyModified.set("allowed_modules", 1);

			}

			/**
			 * The method to get the additionalColumn
			 * @returns {String} A String representing the additionalColumn
			 */
			getAdditionalColumn()	{
				return this.additionalColumn;

			}

			/**
			 * The method to set the value to additionalColumn
			 * @param {String} additionalColumn A String
			 */
			setAdditionalColumn(additionalColumn)	{
				if((additionalColumn != null) && (!(Object.prototype.toString.call(additionalColumn) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: additionalColumn EXPECTED TYPE: String", null, null);
				}
				this.additionalColumn = additionalColumn;
				this.keyModified.set("additional_column", 1);

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
			 * The method to get the globalPicklist
			 * @returns {Picklist} An instance of Picklist
			 */
			getGlobalPicklist()	{
				return this.globalPicklist;

			}

			/**
			 * The method to set the value to globalPicklist
			 * @param {Picklist} globalPicklist An instance of Picklist
			 */
			setGlobalPicklist(globalPicklist)	{
				if((globalPicklist != null) && (!(globalPicklist instanceof ZCRM.GlobalPicklist.Model.Picklist))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: globalPicklist EXPECTED TYPE: Picklist", null, null);
				}
				this.globalPicklist = globalPicklist;
				this.keyModified.set("global_picklist", 1);

			}

			/**
			 * The method to get the hipaaComplianceEnabled
			 * @returns {Boolean} A Boolean representing the hipaaComplianceEnabled
			 */
			getHipaaComplianceEnabled()	{
				return this.hipaaComplianceEnabled;

			}

			/**
			 * The method to set the value to hipaaComplianceEnabled
			 * @param {Boolean} hipaaComplianceEnabled A Boolean
			 */
			setHipaaComplianceEnabled(hipaaComplianceEnabled)	{
				if((hipaaComplianceEnabled != null) && (!(Object.prototype.toString.call(hipaaComplianceEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hipaaComplianceEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.hipaaComplianceEnabled = hipaaComplianceEnabled;
				this.keyModified.set("hipaa_compliance_enabled", 1);

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
				if((hipaaCompliance != null) && (!(hipaaCompliance instanceof ZCRM.Field.Model.HipaaCompliance))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hipaaCompliance EXPECTED TYPE: HipaaCompliance", null, null);
				}
				this.hipaaCompliance = hipaaCompliance;
				this.keyModified.set("hipaa_compliance", 1);

			}

			/**
			 * The method to get the updateExistingRecords
			 * @returns {Boolean} A Boolean representing the updateExistingRecords
			 */
			getUpdateExistingRecords()	{
				return this.updateExistingRecords;

			}

			/**
			 * The method to set the value to updateExistingRecords
			 * @param {Boolean} updateExistingRecords A Boolean
			 */
			setUpdateExistingRecords(updateExistingRecords)	{
				if((updateExistingRecords != null) && (!(Object.prototype.toString.call(updateExistingRecords) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: updateExistingRecords EXPECTED TYPE: Boolean", null, null);
				}
				this.updateExistingRecords = updateExistingRecords;
				this.keyModified.set("_update_existing_records", 1);

			}

			/**
			 * The method to get the numberSeparator
			 * @returns {Boolean} A Boolean representing the numberSeparator
			 */
			getNumberSeparator()	{
				return this.numberSeparator;

			}

			/**
			 * The method to set the value to numberSeparator
			 * @param {Boolean} numberSeparator A Boolean
			 */
			setNumberSeparator(numberSeparator)	{
				if((numberSeparator != null) && (!(Object.prototype.toString.call(numberSeparator) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: numberSeparator EXPECTED TYPE: Boolean", null, null);
				}
				this.numberSeparator = numberSeparator;
				this.keyModified.set("number_separator", 1);

			}

			/**
			 * The method to get the textarea
			 * @returns {Textarea} An instance of Textarea
			 */
			getTextarea()	{
				return this.textarea;

			}

			/**
			 * The method to set the value to textarea
			 * @param {Textarea} textarea An instance of Textarea
			 */
			setTextarea(textarea)	{
				if((textarea != null) && (!(textarea instanceof ZCRM.Field.Model.Textarea))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: textarea EXPECTED TYPE: Textarea", null, null);
				}
				this.textarea = textarea;
				this.keyModified.set("textarea", 1);

			}

			/**
			 * The method to get the staticField
			 * @returns {Boolean} A Boolean representing the staticField
			 */
			getStaticField()	{
				return this.staticField;

			}

			/**
			 * The method to set the value to staticField
			 * @param {Boolean} staticField A Boolean
			 */
			setStaticField(staticField)	{
				if((staticField != null) && (!(Object.prototype.toString.call(staticField) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: staticField EXPECTED TYPE: Boolean", null, null);
				}
				this.staticField = staticField;
				this.keyModified.set("static_field", 1);

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

		Unique : class{
			constructor(){

				this.casesensitive=null;
				this.disable=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the casesensitive
			 * @returns {String} A String representing the casesensitive
			 */
			getCasesensitive()	{
				return this.casesensitive;

			}

			/**
			 * The method to set the value to casesensitive
			 * @param {String} casesensitive A String
			 */
			setCasesensitive(casesensitive)	{
				if((casesensitive != null) && (!(Object.prototype.toString.call(casesensitive) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: casesensitive EXPECTED TYPE: String", null, null);
				}
				this.casesensitive = casesensitive;
				this.keyModified.set("casesensitive", 1);

			}

			/**
			 * The method to get the disable
			 * @returns {Object} An Object representing the disable
			 */
			getDisable()	{
				return this.disable;

			}

			/**
			 * The method to set the value to disable
			 * @param {Object} disable An Object
			 */
			setDisable(disable)	{
				this.disable = disable;
				this.keyModified.set("_disable", 1);

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

		QueryDetails : class{
			constructor(){

				this.queryId=null;
				this.criteria=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the queryId
			 * @returns {Long} A BigInt representing the queryId
			 */
			getQueryId()	{
				return this.queryId;

			}

			/**
			 * The method to set the value to queryId
			 * @param {Long} queryId A BigInt
			 */
			setQueryId(queryId)	{
				if((queryId != null) && (!(Object.prototype.toString.call(queryId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: queryId EXPECTED TYPE: BigInt", null, null);
				}
				this.queryId = queryId;
				this.keyModified.set("query_id", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Criteria} An instance of Criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Criteria} criteria An instance of Criteria
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(criteria instanceof ZCRM.Field.Model.Criteria))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

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

		ShowFields : class{
			constructor(){

				this.showData=null;
				this.field=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the showData
			 * @returns {Boolean} A Boolean representing the showData
			 */
			getShowData()	{
				return this.showData;

			}

			/**
			 * The method to set the value to showData
			 * @param {Boolean} showData A Boolean
			 */
			setShowData(showData)	{
				if((showData != null) && (!(Object.prototype.toString.call(showData) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showData EXPECTED TYPE: Boolean", null, null);
				}
				this.showData = showData;
				this.keyModified.set("show_data", 1);

			}

			/**
			 * The method to get the field
			 * @returns {MinifiedField} An instance of MinifiedField
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {MinifiedField} field An instance of MinifiedField
			 */
			setField(field)	{
				if((field != null) && (!(field instanceof ZCRM.Field.Model.MinifiedField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: MinifiedField", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

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

		ConnectedDetails : class{
			constructor(){

				this.module=null;
				this.field=null;
				this.layouts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the module
			 * @returns {LinkingModule} An instance of LinkingModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {LinkingModule} module An instance of LinkingModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Field.Model.LinkingModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: LinkingModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

			}

			/**
			 * The method to get the field
			 * @returns {LookupField} An instance of LookupField
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {LookupField} field An instance of LookupField
			 */
			setField(field)	{
				if((field != null) && (!(field instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: LookupField", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

			}

			/**
			 * The method to get the layouts
			 * @returns {List} An Array representing the layouts
			 */
			getLayouts()	{
				return this.layouts;

			}

			/**
			 * The method to set the value to layouts
			 * @param {List} layouts An Array
			 */
			setLayouts(layouts)	{
				if((layouts != null) && (!(Object.prototype.toString.call(layouts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Array", null, null);
				}
				this.layouts = layouts;
				this.keyModified.set("layouts", 1);

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

				this.fieldLabel=null;
				this.apiName=null;
				this.id=null;
				this.keyModified=new Map();
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

		Profile : class{
			constructor(){

				this.name=null;
				this.id=null;
				this.permissionType=null;
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

		Maps : class{
			constructor(){

				this.apiName=null;
				this.pickListValues=null;
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

		Tooltip : class{
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

		MandatoryDetails : class{
			constructor(){

				this.apiName=null;
				this.jsonPath=null;
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

				this.fields=null;
				this.keyModified=new Map();
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

		LinkingDetails : class{
			constructor(){

				this.module=null;
				this.lookupField=null;
				this.connectedLookupField=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the module
			 * @returns {LinkingModule} An instance of LinkingModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {LinkingModule} module An instance of LinkingModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Field.Model.LinkingModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: LinkingModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
				if((lookupField != null) && (!(lookupField instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupField EXPECTED TYPE: LookupField", null, null);
				}
				this.lookupField = lookupField;
				this.keyModified.set("lookup_field", 1);

			}

			/**
			 * The method to get the connectedLookupField
			 * @returns {LookupField} An instance of LookupField
			 */
			getConnectedLookupField()	{
				return this.connectedLookupField;

			}

			/**
			 * The method to set the value to connectedLookupField
			 * @param {LookupField} connectedLookupField An instance of LookupField
			 */
			setConnectedLookupField(connectedLookupField)	{
				if((connectedLookupField != null) && (!(connectedLookupField instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedLookupField EXPECTED TYPE: LookupField", null, null);
				}
				this.connectedLookupField = connectedLookupField;
				this.keyModified.set("connected_lookup_field", 1);

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

		EmailParser : class{
			constructor(){

				this.fieldsUpdateSupported=null;
				this.recordOperationsSupported=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fieldsUpdateSupported
			 * @returns {Boolean} A Boolean representing the fieldsUpdateSupported
			 */
			getFieldsUpdateSupported()	{
				return this.fieldsUpdateSupported;

			}

			/**
			 * The method to set the value to fieldsUpdateSupported
			 * @param {Boolean} fieldsUpdateSupported A Boolean
			 */
			setFieldsUpdateSupported(fieldsUpdateSupported)	{
				if((fieldsUpdateSupported != null) && (!(Object.prototype.toString.call(fieldsUpdateSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldsUpdateSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.fieldsUpdateSupported = fieldsUpdateSupported;
				this.keyModified.set("fields_update_supported", 1);

			}

			/**
			 * The method to get the recordOperationsSupported
			 * @returns {Boolean} A Boolean representing the recordOperationsSupported
			 */
			getRecordOperationsSupported()	{
				return this.recordOperationsSupported;

			}

			/**
			 * The method to set the value to recordOperationsSupported
			 * @param {Boolean} recordOperationsSupported A Boolean
			 */
			setRecordOperationsSupported(recordOperationsSupported)	{
				if((recordOperationsSupported != null) && (!(Object.prototype.toString.call(recordOperationsSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordOperationsSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.recordOperationsSupported = recordOperationsSupported;
				this.keyModified.set("record_operations_supported", 1);

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

		LookupLayout : class{
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

		Criteria : class{
			constructor(){

				this.comparator=null;
				this.field=null;
				this.value=null;
				this.groupOperator=null;
				this.group=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the comparator
			 * @returns {String} A String representing the comparator
			 */
			getComparator()	{
				return this.comparator;

			}

			/**
			 * The method to set the value to comparator
			 * @param {String} comparator A String
			 */
			setComparator(comparator)	{
				if((comparator != null) && (!(Object.prototype.toString.call(comparator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: String", null, null);
				}
				this.comparator = comparator;
				this.keyModified.set("comparator", 1);

			}

			/**
			 * The method to get the field
			 * @returns {MinifiedField} An instance of MinifiedField
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {MinifiedField} field An instance of MinifiedField
			 */
			setField(field)	{
				if((field != null) && (!(field instanceof ZCRM.Field.Model.MinifiedField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: MinifiedField", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

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
			 * The method to get the groupOperator
			 * @returns {String} A String representing the groupOperator
			 */
			getGroupOperator()	{
				return this.groupOperator;

			}

			/**
			 * The method to set the value to groupOperator
			 * @param {String} groupOperator A String
			 */
			setGroupOperator(groupOperator)	{
				if((groupOperator != null) && (!(Object.prototype.toString.call(groupOperator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groupOperator EXPECTED TYPE: String", null, null);
				}
				this.groupOperator = groupOperator;
				this.keyModified.set("group_operator", 1);

			}

			/**
			 * The method to get the group
			 * @returns {List} An Array representing the group
			 */
			getGroup()	{
				return this.group;

			}

			/**
			 * The method to set the value to group
			 * @param {List} group An Array
			 */
			setGroup(group)	{
				if((group != null) && (!(Object.prototype.toString.call(group) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: group EXPECTED TYPE: Array", null, null);
				}
				this.group = group;
				this.keyModified.set("group", 1);

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

				this.startingNumberLength=null;
				this.prefix=null;
				this.suffix=null;
				this.startNumber=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the startingNumberLength
			 * @returns {Integer} An Integer representing the startingNumberLength
			 */
			getStartingNumberLength()	{
				return this.startingNumberLength;

			}

			/**
			 * The method to set the value to startingNumberLength
			 * @param {Integer} startingNumberLength An Integer
			 */
			setStartingNumberLength(startingNumberLength)	{
				if((startingNumberLength != null) && (!(Object.prototype.toString.call(startingNumberLength) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startingNumberLength EXPECTED TYPE: Integer", null, null);
				}
				this.startingNumberLength = startingNumberLength;
				this.keyModified.set("starting_number_length", 1);

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

		MinifiedField : class{
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

		BodyWrapper : class{
			constructor(){

				this.fields=null;
				this.keyModified=new Map();
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

		SharingProperties : class{
			constructor(){

				this.schedulerStatus=null;
				this.sharePreferenceEnabled=null;
				this.sharePermission=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the schedulerStatus
			 * @returns {String} A String representing the schedulerStatus
			 */
			getSchedulerStatus()	{
				return this.schedulerStatus;

			}

			/**
			 * The method to set the value to schedulerStatus
			 * @param {String} schedulerStatus A String
			 */
			setSchedulerStatus(schedulerStatus)	{
				if((schedulerStatus != null) && (!(Object.prototype.toString.call(schedulerStatus) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: schedulerStatus EXPECTED TYPE: String", null, null);
				}
				this.schedulerStatus = schedulerStatus;
				this.keyModified.set("scheduler_status", 1);

			}

			/**
			 * The method to get the sharePreferenceEnabled
			 * @returns {Boolean} A Boolean representing the sharePreferenceEnabled
			 */
			getSharePreferenceEnabled()	{
				return this.sharePreferenceEnabled;

			}

			/**
			 * The method to set the value to sharePreferenceEnabled
			 * @param {Boolean} sharePreferenceEnabled A Boolean
			 */
			setSharePreferenceEnabled(sharePreferenceEnabled)	{
				if((sharePreferenceEnabled != null) && (!(Object.prototype.toString.call(sharePreferenceEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharePreferenceEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.sharePreferenceEnabled = sharePreferenceEnabled;
				this.keyModified.set("share_preference_enabled", 1);

			}

			/**
			 * The method to get the sharePermission
			 * @returns {Choice} An instance of Choice
			 */
			getSharePermission()	{
				return this.sharePermission;

			}

			/**
			 * The method to set the value to sharePermission
			 * @param {Choice} sharePermission An instance of Choice
			 */
			setSharePermission(sharePermission)	{
				if((sharePermission != null) && (!(sharePermission instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharePermission EXPECTED TYPE: Choice", null, null);
				}
				this.sharePermission = sharePermission;
				this.keyModified.set("share_permission", 1);

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

		ConvertMapping : class{
			constructor(){

				this.contacts=null;
				this.deals=null;
				this.accounts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the contacts
			 * @returns {String} A String representing the contacts
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {String} contacts A String
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: String", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {String} A String representing the deals
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {String} deals A String
			 */
			setDeals(deals)	{
				if((deals != null) && (!(Object.prototype.toString.call(deals) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: String", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {String} A String representing the accounts
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {String} accounts A String
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: String", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

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
				this.quickCreate=null;
				this.create=null;
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

				this.fields=null;
				this.keyModified=new Map();
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

				this.restrictedInExport=null;
				this.restricted=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the restrictedInExport
			 * @returns {Boolean} A Boolean representing the restrictedInExport
			 */
			getRestrictedInExport()	{
				return this.restrictedInExport;

			}

			/**
			 * The method to set the value to restrictedInExport
			 * @param {Boolean} restrictedInExport A Boolean
			 */
			setRestrictedInExport(restrictedInExport)	{
				if((restrictedInExport != null) && (!(Object.prototype.toString.call(restrictedInExport) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictedInExport EXPECTED TYPE: Boolean", null, null);
				}
				this.restrictedInExport = restrictedInExport;
				this.keyModified.set("restricted_in_export", 1);

			}

			/**
			 * The method to get the restricted
			 * @returns {Boolean} A Boolean representing the restricted
			 */
			getRestricted()	{
				return this.restricted;

			}

			/**
			 * The method to set the value to restricted
			 * @param {Boolean} restricted A Boolean
			 */
			setRestricted(restricted)	{
				if((restricted != null) && (!(Object.prototype.toString.call(restricted) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restricted EXPECTED TYPE: Boolean", null, null);
				}
				this.restricted = restricted;
				this.keyModified.set("restricted", 1);

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

		LinkingModule : class{
			constructor(){

				this.pluralLabel=null;
				this.visibility=null;
				this.apiName=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the pluralLabel
			 * @returns {String} A String representing the pluralLabel
			 */
			getPluralLabel()	{
				return this.pluralLabel;

			}

			/**
			 * The method to set the value to pluralLabel
			 * @param {String} pluralLabel A String
			 */
			setPluralLabel(pluralLabel)	{
				if((pluralLabel != null) && (!(Object.prototype.toString.call(pluralLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pluralLabel EXPECTED TYPE: String", null, null);
				}
				this.pluralLabel = pluralLabel;
				this.keyModified.set("plural_label", 1);

			}

			/**
			 * The method to get the visibility
			 * @returns {Integer} An Integer representing the visibility
			 */
			getVisibility()	{
				return this.visibility;

			}

			/**
			 * The method to set the value to visibility
			 * @param {Integer} visibility An Integer
			 */
			setVisibility(visibility)	{
				if((visibility != null) && (!(Object.prototype.toString.call(visibility) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visibility EXPECTED TYPE: Integer", null, null);
				}
				this.visibility = visibility;
				this.keyModified.set("visibility", 1);

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

		Multiselectlookup : class{
			constructor(){

				this.linkingDetails=null;
				this.connectedDetails=null;
				this.relatedList=null;
				this.recordAccess=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the linkingDetails
			 * @returns {LinkingDetails} An instance of LinkingDetails
			 */
			getLinkingDetails()	{
				return this.linkingDetails;

			}

			/**
			 * The method to set the value to linkingDetails
			 * @param {LinkingDetails} linkingDetails An instance of LinkingDetails
			 */
			setLinkingDetails(linkingDetails)	{
				if((linkingDetails != null) && (!(linkingDetails instanceof ZCRM.Field.Model.LinkingDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingDetails EXPECTED TYPE: LinkingDetails", null, null);
				}
				this.linkingDetails = linkingDetails;
				this.keyModified.set("linking_details", 1);

			}

			/**
			 * The method to get the connectedDetails
			 * @returns {ConnectedDetails} An instance of ConnectedDetails
			 */
			getConnectedDetails()	{
				return this.connectedDetails;

			}

			/**
			 * The method to set the value to connectedDetails
			 * @param {ConnectedDetails} connectedDetails An instance of ConnectedDetails
			 */
			setConnectedDetails(connectedDetails)	{
				if((connectedDetails != null) && (!(connectedDetails instanceof ZCRM.Field.Model.ConnectedDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedDetails EXPECTED TYPE: ConnectedDetails", null, null);
				}
				this.connectedDetails = connectedDetails;
				this.keyModified.set("connected_details", 1);

			}

			/**
			 * The method to get the relatedList
			 * @returns {LookupRelatedList} An instance of LookupRelatedList
			 */
			getRelatedList()	{
				return this.relatedList;

			}

			/**
			 * The method to set the value to relatedList
			 * @param {LookupRelatedList} relatedList An instance of LookupRelatedList
			 */
			setRelatedList(relatedList)	{
				if((relatedList != null) && (!(relatedList instanceof ZCRM.Field.Model.LookupRelatedList))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: LookupRelatedList", null, null);
				}
				this.relatedList = relatedList;
				this.keyModified.set("related_list", 1);

			}

			/**
			 * The method to get the recordAccess
			 * @returns {Boolean} A Boolean representing the recordAccess
			 */
			getRecordAccess()	{
				return this.recordAccess;

			}

			/**
			 * The method to set the value to recordAccess
			 * @param {Boolean} recordAccess A Boolean
			 */
			setRecordAccess(recordAccess)	{
				if((recordAccess != null) && (!(Object.prototype.toString.call(recordAccess) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordAccess EXPECTED TYPE: Boolean", null, null);
				}
				this.recordAccess = recordAccess;
				this.keyModified.set("record_access", 1);

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
			 * @returns {Choice} An instance of Choice
			 */
			getRoundingOption()	{
				return this.roundingOption;

			}

			/**
			 * The method to set the value to roundingOption
			 * @param {Choice} roundingOption An instance of Choice
			 */
			setRoundingOption(roundingOption)	{
				if((roundingOption != null) && (!(roundingOption instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: roundingOption EXPECTED TYPE: Choice", null, null);
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

		AssociationDetails : class{
			constructor(){

				this.relatedField=null;
				this.lookupField=null;
				this.keyModified=new Map();
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
				if((relatedField != null) && (!(relatedField instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedField EXPECTED TYPE: LookupField", null, null);
				}
				this.relatedField = relatedField;
				this.keyModified.set("related_field", 1);

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
				if((lookupField != null) && (!(lookupField instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupField EXPECTED TYPE: LookupField", null, null);
				}
				this.lookupField = lookupField;
				this.keyModified.set("lookup_field", 1);

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

		FileUpoladOption : class{
			constructor(){

				this.actualValue=null;
				this.displayValue=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the actualValue
			 * @returns {String} A String representing the actualValue
			 */
			getActualValue()	{
				return this.actualValue;

			}

			/**
			 * The method to set the value to actualValue
			 * @param {String} actualValue A String
			 */
			setActualValue(actualValue)	{
				if((actualValue != null) && (!(Object.prototype.toString.call(actualValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actualValue EXPECTED TYPE: String", null, null);
				}
				this.actualValue = actualValue;
				this.keyModified.set("actual_value", 1);

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

		External : class{
			constructor(){

				this.show=null;
				this.type=null;
				this.allowMultipleConfig=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the show
			 * @returns {Boolean} A Boolean representing the show
			 */
			getShow()	{
				return this.show;

			}

			/**
			 * The method to set the value to show
			 * @param {Boolean} show A Boolean
			 */
			setShow(show)	{
				if((show != null) && (!(Object.prototype.toString.call(show) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: show EXPECTED TYPE: Boolean", null, null);
				}
				this.show = show;
				this.keyModified.set("show", 1);

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
			 * The method to get the allowMultipleConfig
			 * @returns {Boolean} A Boolean representing the allowMultipleConfig
			 */
			getAllowMultipleConfig()	{
				return this.allowMultipleConfig;

			}

			/**
			 * The method to set the value to allowMultipleConfig
			 * @param {Boolean} allowMultipleConfig A Boolean
			 */
			setAllowMultipleConfig(allowMultipleConfig)	{
				if((allowMultipleConfig != null) && (!(Object.prototype.toString.call(allowMultipleConfig) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowMultipleConfig EXPECTED TYPE: Boolean", null, null);
				}
				this.allowMultipleConfig = allowMultipleConfig;
				this.keyModified.set("allow_multiple_config", 1);

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

		ForecastCategory : class{
			constructor(){

				this.id=null;
				this.name=null;
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

		MultiModuleLookup : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
				this.modules=null;
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
			 * The method to get the modules
			 * @returns {List} An Array representing the modules
			 */
			getModules()	{
				return this.modules;

			}

			/**
			 * The method to set the value to modules
			 * @param {List} modules An Array
			 */
			setModules(modules)	{
				if((modules != null) && (!(Object.prototype.toString.call(modules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modules EXPECTED TYPE: Array", null, null);
				}
				this.modules = modules;
				this.keyModified.set("modules", 1);

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

		Private : class{
			constructor(){

				this.restricted=null;
				this.type=null;
				this.export1=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the restricted
			 * @returns {Boolean} A Boolean representing the restricted
			 */
			getRestricted()	{
				return this.restricted;

			}

			/**
			 * The method to set the value to restricted
			 * @param {Boolean} restricted A Boolean
			 */
			setRestricted(restricted)	{
				if((restricted != null) && (!(Object.prototype.toString.call(restricted) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restricted EXPECTED TYPE: Boolean", null, null);
				}
				this.restricted = restricted;
				this.keyModified.set("restricted", 1);

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
			 * The method to get the export
			 * @returns {Boolean} A Boolean representing the export1
			 */
			getExport()	{
				return this.export1;

			}

			/**
			 * The method to set the value to export
			 * @param {Boolean} export1 A Boolean
			 */
			setExport(export1)	{
				if((export1 != null) && (!(Object.prototype.toString.call(export1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: export1 EXPECTED TYPE: Boolean", null, null);
				}
				this.export1 = export1;
				this.keyModified.set("export", 1);

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

		RollupSummary : class{
			constructor(){

				this.returnType=null;
				this.expression=null;
				this.basedOnModule=null;
				this.relatedList=null;
				this.rollupBasedOn=null;
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
			 * @returns {Expression} An instance of Expression
			 */
			getExpression()	{
				return this.expression;

			}

			/**
			 * The method to set the value to expression
			 * @param {Expression} expression An instance of Expression
			 */
			setExpression(expression)	{
				if((expression != null) && (!(expression instanceof ZCRM.Field.Model.Expression))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expression EXPECTED TYPE: Expression", null, null);
				}
				this.expression = expression;
				this.keyModified.set("expression", 1);

			}

			/**
			 * The method to get the basedOnModule
			 * @returns {MinifiedModule} An instance of MinifiedModule
			 */
			getBasedOnModule()	{
				return this.basedOnModule;

			}

			/**
			 * The method to set the value to basedOnModule
			 * @param {MinifiedModule} basedOnModule An instance of MinifiedModule
			 */
			setBasedOnModule(basedOnModule)	{
				if((basedOnModule != null) && (!(basedOnModule instanceof ZCRM.Module.Model.MinifiedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: basedOnModule EXPECTED TYPE: MinifiedModule", null, null);
				}
				this.basedOnModule = basedOnModule;
				this.keyModified.set("based_on_module", 1);

			}

			/**
			 * The method to get the relatedList
			 * @returns {RelatedList} An instance of RelatedList
			 */
			getRelatedList()	{
				return this.relatedList;

			}

			/**
			 * The method to set the value to relatedList
			 * @param {RelatedList} relatedList An instance of RelatedList
			 */
			setRelatedList(relatedList)	{
				if((relatedList != null) && (!(relatedList instanceof ZCRM.RelatedList.Model.RelatedList))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: RelatedList", null, null);
				}
				this.relatedList = relatedList;
				this.keyModified.set("related_list", 1);

			}

			/**
			 * The method to get the rollupBasedOn
			 * @returns {String} A String representing the rollupBasedOn
			 */
			getRollupBasedOn()	{
				return this.rollupBasedOn;

			}

			/**
			 * The method to set the value to rollupBasedOn
			 * @param {String} rollupBasedOn A String
			 */
			setRollupBasedOn(rollupBasedOn)	{
				if((rollupBasedOn != null) && (!(Object.prototype.toString.call(rollupBasedOn) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rollupBasedOn EXPECTED TYPE: String", null, null);
				}
				this.rollupBasedOn = rollupBasedOn;
				this.keyModified.set("rollup_based_on", 1);

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
		 * The method to get fields
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getFields(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create field
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createField(request, paramInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Field.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update fields
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateFields(request, paramInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Field.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get field
		 * @param {Long} field A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getField(field, paramInstance=null){
			if((!(Object.prototype.toString.call(field) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields/");
			apiPath = apiPath.concat(field.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update field
		 * @param {Long} field A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateField(field, request, paramInstance=null){
			if((!(Object.prototype.toString.call(field) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Field.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields/");
			apiPath = apiPath.concat(field.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete field
		 * @param {Long} field A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteField(field, paramInstance=null){
			if((!(Object.prototype.toString.call(field) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields/");
			apiPath = apiPath.concat(field.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ActionHandler", "application/json");

		}
	},

}