ZCRM.Signal = {
	Model : {
		ResponseHandler : class{
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

		Signals : class{
			constructor(){

				this.displayLabel=null;
				this.namespace=null;
				this.chatEnabled=null;
				this.enabled=null;
				this.id=null;
				this.featureAvailability=null;
				this.extension=null;
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
			 * The method to get the namespace
			 * @returns {String} A String representing the namespace
			 */
			getNamespace()	{
				return this.namespace;

			}

			/**
			 * The method to set the value to namespace
			 * @param {String} namespace A String
			 */
			setNamespace(namespace)	{
				if((namespace != null) && (!(Object.prototype.toString.call(namespace) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: namespace EXPECTED TYPE: String", null, null);
				}
				this.namespace = namespace;
				this.keyModified.set("namespace", 1);

			}

			/**
			 * The method to get the chatEnabled
			 * @returns {Boolean} A Boolean representing the chatEnabled
			 */
			getChatEnabled()	{
				return this.chatEnabled;

			}

			/**
			 * The method to set the value to chatEnabled
			 * @param {Boolean} chatEnabled A Boolean
			 */
			setChatEnabled(chatEnabled)	{
				if((chatEnabled != null) && (!(Object.prototype.toString.call(chatEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chatEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.chatEnabled = chatEnabled;
				this.keyModified.set("chat_enabled", 1);

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
			 * The method to get the featureAvailability
			 * @returns {FeatureAvailability} An instance of FeatureAvailability
			 */
			getFeatureAvailability()	{
				return this.featureAvailability;

			}

			/**
			 * The method to set the value to featureAvailability
			 * @param {FeatureAvailability} featureAvailability An instance of FeatureAvailability
			 */
			setFeatureAvailability(featureAvailability)	{
				if((featureAvailability != null) && (!(featureAvailability instanceof ZCRM.Signal.Model.FeatureAvailability))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureAvailability EXPECTED TYPE: FeatureAvailability", null, null);
				}
				this.featureAvailability = featureAvailability;
				this.keyModified.set("feature_availability", 1);

			}

			/**
			 * The method to get the extension
			 * @returns {Extension} An instance of Extension
			 */
			getExtension()	{
				return this.extension;

			}

			/**
			 * The method to set the value to extension
			 * @param {Extension} extension An instance of Extension
			 */
			setExtension(extension)	{
				if((extension != null) && (!(extension instanceof ZCRM.Signal.Model.Extension))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extension EXPECTED TYPE: Extension", null, null);
				}
				this.extension = extension;
				this.keyModified.set("extension", 1);

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

				this.signals=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the signals
			 * @returns {List} An Array representing the signals
			 */
			getSignals()	{
				return this.signals;

			}

			/**
			 * The method to set the value to signals
			 * @param {List} signals An Array
			 */
			setSignals(signals)	{
				if((signals != null) && (!(Object.prototype.toString.call(signals) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signals EXPECTED TYPE: Array", null, null);
				}
				this.signals = signals;
				this.keyModified.set("signals", 1);

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

		FeatureAvailability : class{
			constructor(){

				this.scoring=null;
				this.signals=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the scoring
			 * @returns {Boolean} A Boolean representing the scoring
			 */
			getScoring()	{
				return this.scoring;

			}

			/**
			 * The method to set the value to scoring
			 * @param {Boolean} scoring A Boolean
			 */
			setScoring(scoring)	{
				if((scoring != null) && (!(Object.prototype.toString.call(scoring) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scoring EXPECTED TYPE: Boolean", null, null);
				}
				this.scoring = scoring;
				this.keyModified.set("scoring", 1);

			}

			/**
			 * The method to get the signals
			 * @returns {Boolean} A Boolean representing the signals
			 */
			getSignals()	{
				return this.signals;

			}

			/**
			 * The method to set the value to signals
			 * @param {Boolean} signals A Boolean
			 */
			setSignals(signals)	{
				if((signals != null) && (!(Object.prototype.toString.call(signals) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signals EXPECTED TYPE: Boolean", null, null);
				}
				this.signals = signals;
				this.keyModified.set("signals", 1);

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

		Extension : class{
			constructor(){

				this.displayLabel=null;
				this.namespace=null;
				this.id=null;
				this.type=null;
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
			 * The method to get the namespace
			 * @returns {String} A String representing the namespace
			 */
			getNamespace()	{
				return this.namespace;

			}

			/**
			 * The method to set the value to namespace
			 * @param {String} namespace A String
			 */
			setNamespace(namespace)	{
				if((namespace != null) && (!(Object.prototype.toString.call(namespace) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: namespace EXPECTED TYPE: String", null, null);
				}
				this.namespace = namespace;
				this.keyModified.set("namespace", 1);

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
			 * @returns {Integer} An Integer representing the type
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {Integer} type An Integer
			 */
			setType(type)	{
				if((type != null) && (!(Object.prototype.toString.call(type) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Integer", null, null);
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
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get signals
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getSignals(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/signals");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Signal.Model.ResponseHandler", "application/json");

		}
	},

}