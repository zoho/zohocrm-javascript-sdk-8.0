ZCRM.Feature = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.features=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the features
			 * @returns {List} An Array representing the features
			 */
			getFeatures()	{
				return this.features;

			}

			/**
			 * The method to set the value to features
			 * @param {List} features An Array
			 */
			setFeatures(features)	{
				if((features != null) && (!(Object.prototype.toString.call(features) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: features EXPECTED TYPE: Array", null, null);
				}
				this.features = features;
				this.keyModified.set("__features", 1);

			}

			/**
			 * The method to get the info
			 * @returns {Info} An instance of Info
			 */
			getInfo()	{
				return this.info;

			}

			/**
			 * The method to set the value to info
			 * @param {Info} info An instance of Info
			 */
			setInfo(info)	{
				if((info != null) && (!(info instanceof ZCRM.Feature.Model.Info))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Info", null, null);
				}
				this.info = info;
				this.keyModified.set("info", 1);

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

		Feature : class{
			constructor(){

				this.apiName=null;
				this.parentFeature=null;
				this.moduleSupported=null;
				this.details=null;
				this.featureLabel=null;
				this.components=null;
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
			 * The method to get the parentFeature
			 * @returns {Feature} An instance of Feature
			 */
			getParentFeature()	{
				return this.parentFeature;

			}

			/**
			 * The method to set the value to parentFeature
			 * @param {Feature} parentFeature An instance of Feature
			 */
			setParentFeature(parentFeature)	{
				if((parentFeature != null) && (!(parentFeature instanceof ZCRM.Feature.Model.Feature))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentFeature EXPECTED TYPE: Feature", null, null);
				}
				this.parentFeature = parentFeature;
				this.keyModified.set("parent_feature", 1);

			}

			/**
			 * The method to get the moduleSupported
			 * @returns {Boolean} A Boolean representing the moduleSupported
			 */
			getModuleSupported()	{
				return this.moduleSupported;

			}

			/**
			 * The method to set the value to moduleSupported
			 * @param {Boolean} moduleSupported A Boolean
			 */
			setModuleSupported(moduleSupported)	{
				if((moduleSupported != null) && (!(Object.prototype.toString.call(moduleSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.moduleSupported = moduleSupported;
				this.keyModified.set("module_supported", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Detail} An instance of Detail
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Detail} details An instance of Detail
			 */
			setDetails(details)	{
				if((details != null) && (!(details instanceof ZCRM.Feature.Model.Detail))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Detail", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to get the featureLabel
			 * @returns {String} A String representing the featureLabel
			 */
			getFeatureLabel()	{
				return this.featureLabel;

			}

			/**
			 * The method to set the value to featureLabel
			 * @param {String} featureLabel A String
			 */
			setFeatureLabel(featureLabel)	{
				if((featureLabel != null) && (!(Object.prototype.toString.call(featureLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureLabel EXPECTED TYPE: String", null, null);
				}
				this.featureLabel = featureLabel;
				this.keyModified.set("feature_label", 1);

			}

			/**
			 * The method to get the components
			 * @returns {List} An Array representing the components
			 */
			getComponents()	{
				return this.components;

			}

			/**
			 * The method to set the value to components
			 * @param {List} components An Array
			 */
			setComponents(components)	{
				if((components != null) && (!(Object.prototype.toString.call(components) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: components EXPECTED TYPE: Array", null, null);
				}
				this.components = components;
				this.keyModified.set("components", 1);

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

		Component : class{
			constructor(){

				this.apiName=null;
				this.moduleSupported=null;
				this.details=null;
				this.featureLabel=null;
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
			 * The method to get the moduleSupported
			 * @returns {Boolean} A Boolean representing the moduleSupported
			 */
			getModuleSupported()	{
				return this.moduleSupported;

			}

			/**
			 * The method to set the value to moduleSupported
			 * @param {Boolean} moduleSupported A Boolean
			 */
			setModuleSupported(moduleSupported)	{
				if((moduleSupported != null) && (!(Object.prototype.toString.call(moduleSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.moduleSupported = moduleSupported;
				this.keyModified.set("module_supported", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Detail} An instance of Detail
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Detail} details An instance of Detail
			 */
			setDetails(details)	{
				if((details != null) && (!(details instanceof ZCRM.Feature.Model.Detail))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Detail", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to get the featureLabel
			 * @returns {String} A String representing the featureLabel
			 */
			getFeatureLabel()	{
				return this.featureLabel;

			}

			/**
			 * The method to set the value to featureLabel
			 * @param {String} featureLabel A String
			 */
			setFeatureLabel(featureLabel)	{
				if((featureLabel != null) && (!(Object.prototype.toString.call(featureLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureLabel EXPECTED TYPE: String", null, null);
				}
				this.featureLabel = featureLabel;
				this.keyModified.set("feature_label", 1);

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

		Limit : class{
			constructor(){

				this.total=null;
				this.editionLimit=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the total
			 * @returns {Integer} An Integer representing the total
			 */
			getTotal()	{
				return this.total;

			}

			/**
			 * The method to set the value to total
			 * @param {Integer} total An Integer
			 */
			setTotal(total)	{
				if((total != null) && (!(Object.prototype.toString.call(total) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: total EXPECTED TYPE: Integer", null, null);
				}
				this.total = total;
				this.keyModified.set("total", 1);

			}

			/**
			 * The method to get the editionLimit
			 * @returns {Integer} An Integer representing the editionLimit
			 */
			getEditionLimit()	{
				return this.editionLimit;

			}

			/**
			 * The method to set the value to editionLimit
			 * @param {Integer} editionLimit An Integer
			 */
			setEditionLimit(editionLimit)	{
				if((editionLimit != null) && (!(Object.prototype.toString.call(editionLimit) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editionLimit EXPECTED TYPE: Integer", null, null);
				}
				this.editionLimit = editionLimit;
				this.keyModified.set("edition_limit", 1);

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

		Detail : class{
			constructor(){

				this.availableCount=null;
				this.limits=null;
				this.usedCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the availableCount
			 * @returns {Limit} An instance of Limit
			 */
			getAvailableCount()	{
				return this.availableCount;

			}

			/**
			 * The method to set the value to availableCount
			 * @param {Limit} availableCount An instance of Limit
			 */
			setAvailableCount(availableCount)	{
				if((availableCount != null) && (!(availableCount instanceof ZCRM.Feature.Model.Limit))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: availableCount EXPECTED TYPE: Limit", null, null);
				}
				this.availableCount = availableCount;
				this.keyModified.set("available_count", 1);

			}

			/**
			 * The method to get the limits
			 * @returns {Limit} An instance of Limit
			 */
			getLimits()	{
				return this.limits;

			}

			/**
			 * The method to set the value to limits
			 * @param {Limit} limits An instance of Limit
			 */
			setLimits(limits)	{
				if((limits != null) && (!(limits instanceof ZCRM.Feature.Model.Limit))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: limits EXPECTED TYPE: Limit", null, null);
				}
				this.limits = limits;
				this.keyModified.set("limits", 1);

			}

			/**
			 * The method to get the usedCount
			 * @returns {Limit} An instance of Limit
			 */
			getUsedCount()	{
				return this.usedCount;

			}

			/**
			 * The method to set the value to usedCount
			 * @param {Limit} usedCount An instance of Limit
			 */
			setUsedCount(usedCount)	{
				if((usedCount != null) && (!(usedCount instanceof ZCRM.Feature.Model.Limit))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usedCount EXPECTED TYPE: Limit", null, null);
				}
				this.usedCount = usedCount;
				this.keyModified.set("used_count", 1);

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

		Info : class{
			constructor(){

				this.perPage=null;
				this.count=null;
				this.page=null;
				this.moreRecords=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the perPage
			 * @returns {Integer} An Integer representing the perPage
			 */
			getPerPage()	{
				return this.perPage;

			}

			/**
			 * The method to set the value to perPage
			 * @param {Integer} perPage An Integer
			 */
			setPerPage(perPage)	{
				if((perPage != null) && (!(Object.prototype.toString.call(perPage) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: perPage EXPECTED TYPE: Integer", null, null);
				}
				this.perPage = perPage;
				this.keyModified.set("per_page", 1);

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
			 * The method to get the page
			 * @returns {Integer} An Integer representing the page
			 */
			getPage()	{
				return this.page;

			}

			/**
			 * The method to set the value to page
			 * @param {Integer} page An Integer
			 */
			setPage(page)	{
				if((page != null) && (!(Object.prototype.toString.call(page) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: page EXPECTED TYPE: Integer", null, null);
				}
				this.page = page;
				this.keyModified.set("page", 1);

			}

			/**
			 * The method to get the moreRecords
			 * @returns {Boolean} A Boolean representing the moreRecords
			 */
			getMoreRecords()	{
				return this.moreRecords;

			}

			/**
			 * The method to set the value to moreRecords
			 * @param {Boolean} moreRecords A Boolean
			 */
			setMoreRecords(moreRecords)	{
				if((moreRecords != null) && (!(Object.prototype.toString.call(moreRecords) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moreRecords EXPECTED TYPE: Boolean", null, null);
				}
				this.moreRecords = moreRecords;
				this.keyModified.set("more_records", 1);

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
		 * The method to get feature details
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getFeatureDetails(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__features");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Feature.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get feature detail
		 * @param {String} featureAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getFeatureDetail(featureAPIName, paramInstance=null){
			if((!(Object.prototype.toString.call(featureAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureAPIName EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__features/");
			apiPath = apiPath.concat(featureAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Feature.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get data enrichment
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getDataEnrichment(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__features/data_enrichment");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Feature.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get user licences count
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getUserLicencesCount(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__features/user_licenses");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Feature.Model.ResponseHandler", "application/json");

		}
	},

}