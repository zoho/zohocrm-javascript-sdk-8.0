ZCRM.GetRelatedRecordsCount = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		Params : class{
			constructor(){

				this.approved=null;
				this.converted=null;
				this.associated=null;
				this.category=null;
				this.approvalState=null;
				this.filters=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the approved
			 * @returns {Boolean} A Boolean representing the approved
			 */
			getApproved()	{
				return this.approved;

			}

			/**
			 * The method to set the value to approved
			 * @param {Boolean} approved A Boolean
			 */
			setApproved(approved)	{
				if((approved != null) && (!(Object.prototype.toString.call(approved) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approved EXPECTED TYPE: Boolean", null, null);
				}
				this.approved = approved;
				this.keyModified.set("approved", 1);

			}

			/**
			 * The method to get the converted
			 * @returns {Boolean} A Boolean representing the converted
			 */
			getConverted()	{
				return this.converted;

			}

			/**
			 * The method to set the value to converted
			 * @param {Boolean} converted A Boolean
			 */
			setConverted(converted)	{
				if((converted != null) && (!(Object.prototype.toString.call(converted) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: converted EXPECTED TYPE: Boolean", null, null);
				}
				this.converted = converted;
				this.keyModified.set("converted", 1);

			}

			/**
			 * The method to get the associated
			 * @returns {Boolean} A Boolean representing the associated
			 */
			getAssociated()	{
				return this.associated;

			}

			/**
			 * The method to set the value to associated
			 * @param {Boolean} associated A Boolean
			 */
			setAssociated(associated)	{
				if((associated != null) && (!(Object.prototype.toString.call(associated) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associated EXPECTED TYPE: Boolean", null, null);
				}
				this.associated = associated;
				this.keyModified.set("associated", 1);

			}

			/**
			 * The method to get the category
			 * @returns {Choice} An instance of Choice
			 */
			getCategory()	{
				return this.category;

			}

			/**
			 * The method to set the value to category
			 * @param {Choice} category An instance of Choice
			 */
			setCategory(category)	{
				if((category != null) && (!(category instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: Choice", null, null);
				}
				this.category = category;
				this.keyModified.set("category", 1);

			}

			/**
			 * The method to get the approvalState
			 * @returns {Choice} An instance of Choice
			 */
			getApprovalState()	{
				return this.approvalState;

			}

			/**
			 * The method to set the value to approvalState
			 * @param {Choice} approvalState An instance of Choice
			 */
			setApprovalState(approvalState)	{
				if((approvalState != null) && (!(approvalState instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approvalState EXPECTED TYPE: Choice", null, null);
				}
				this.approvalState = approvalState;
				this.keyModified.set("approval_state", 1);

			}

			/**
			 * The method to get the filters
			 * @returns {Filters} An instance of Filters
			 */
			getFilters()	{
				return this.filters;

			}

			/**
			 * The method to set the value to filters
			 * @param {Filters} filters An instance of Filters
			 */
			setFilters(filters)	{
				if((filters != null) && (!(filters instanceof ZCRM.GetRelatedRecordsCount.Model.Filters))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: Filters", null, null);
				}
				this.filters = filters;
				this.keyModified.set("filters", 1);

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

		Dependee : class{
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

		RelatedList : class{
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

		ActionWrapper : class{
			constructor(){

				this.getRelatedRecordsCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the getRelatedRecordsCount
			 * @returns {List} An Array representing the getRelatedRecordsCount
			 */
			getGetRelatedRecordsCount()	{
				return this.getRelatedRecordsCount;

			}

			/**
			 * The method to set the value to getRelatedRecordsCount
			 * @param {List} getRelatedRecordsCount An Array
			 */
			setGetRelatedRecordsCount(getRelatedRecordsCount)	{
				if((getRelatedRecordsCount != null) && (!(Object.prototype.toString.call(getRelatedRecordsCount) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: getRelatedRecordsCount EXPECTED TYPE: Array", null, null);
				}
				this.getRelatedRecordsCount = getRelatedRecordsCount;
				this.keyModified.set("get_related_records_count", 1);

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

		GetRelatedRecordCount : class{
			constructor(){

				this.relatedList=null;
				this.keyModified=new Map();
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
				if((relatedList != null) && (!(relatedList instanceof ZCRM.GetRelatedRecordsCount.Model.RelatedList))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: RelatedList", null, null);
				}
				this.relatedList = relatedList;
				this.keyModified.set("related_list", 1);

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

				this.getRelatedRecordsCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the getRelatedRecordsCount
			 * @returns {List} An Array representing the getRelatedRecordsCount
			 */
			getGetRelatedRecordsCount()	{
				return this.getRelatedRecordsCount;

			}

			/**
			 * The method to set the value to getRelatedRecordsCount
			 * @param {List} getRelatedRecordsCount An Array
			 */
			setGetRelatedRecordsCount(getRelatedRecordsCount)	{
				if((getRelatedRecordsCount != null) && (!(Object.prototype.toString.call(getRelatedRecordsCount) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: getRelatedRecordsCount EXPECTED TYPE: Array", null, null);
				}
				this.getRelatedRecordsCount = getRelatedRecordsCount;
				this.keyModified.set("get_related_records_count", 1);

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

		Field : class{
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

		Filters : class{
			constructor(){

				this.comparator=null;
				this.field=null;
				this.value=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the comparator
			 * @returns {Choice} An instance of Choice
			 */
			getComparator()	{
				return this.comparator;

			}

			/**
			 * The method to set the value to comparator
			 * @param {Choice} comparator An instance of Choice
			 */
			setComparator(comparator)	{
				if((comparator != null) && (!(comparator instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: Choice", null, null);
				}
				this.comparator = comparator;
				this.keyModified.set("comparator", 1);

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
				if((field != null) && (!(field instanceof ZCRM.GetRelatedRecordsCount.Model.Field))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

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

		SuccessResponse : class{
			constructor(){

				this.count=null;
				this.relatedList=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the count
			 * @returns {Integer} An Integer representing the count
			 */
			getCount()	{
				return this.count;

			}

			/**
			 * The method to set the value to count
			 * @param {Integer} count An Integer
			 */
			setCount(count)	{
				if((count != null) && (!(Object.prototype.toString.call(count) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: Integer", null, null);
				}
				this.count = count;
				this.keyModified.set("count", 1);

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
				if((relatedList != null) && (!(relatedList instanceof ZCRM.GetRelatedRecordsCount.Model.RelatedList))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: RelatedList", null, null);
				}
				this.relatedList = relatedList;
				this.keyModified.set("related_list", 1);

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
		 * Creates an instance of GetRelatedRecordsCountOperations with the given parameters
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 */
		constructor(recordId, moduleAPIName){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.recordId = recordId;
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get related records count
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecordsCount(request){
			if((request != null) && (!(request instanceof ZCRM.GetRelatedRecordsCount.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/get_related_records_count");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("GetRelatedRecordsCount.Model.ActionHandler", "application/json");

		}

	},

}