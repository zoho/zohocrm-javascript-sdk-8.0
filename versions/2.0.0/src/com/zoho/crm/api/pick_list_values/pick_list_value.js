ZCRM.PickListValue = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.pickListValues=null;
				this.keyModified=new Map();
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

		PickListValues : class{
			constructor(){

				this.sequenceNumber=null;
				this.displayValue=null;
				this.referenceValue=null;
				this.colourCode=null;
				this.actualValue=null;
				this.id=null;
				this.type=null;
				this.layoutAssociations=null;
				this.keyModified=new Map();
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
		 * Creates an instance of PickListValuesOperations with the given parameters
		 * @param {Long} fieldId A BigInt
		 * @param {String} module A String
		 */
		constructor(fieldId, module=null){
			if((!(Object.prototype.toString.call(fieldId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldId EXPECTED TYPE: BigInt", null, null);
			}
			if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
						this.fieldId = fieldId;
						this.module = module;

		}

		/**
		 * The method to get pick list values
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getPickListValues(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/fields/");
			apiPath = apiPath.concat(this.fieldId.toString());
			apiPath = apiPath.concat("/pick_list_values");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "PickListValue.Model.GetPickListValuesParam"), this.module);
			return handlerInstance.apiCall("PickListValue.Model.ResponseHandler", "application/json");

		}

	},

}