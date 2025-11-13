ZCRM.ConvertLead = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		LeadConverter : class{
			constructor(){

				this.overwrite=null;
				this.notifyLeadOwner=null;
				this.notifyNewEntityOwner=null;
				this.moveAttachmentsTo=null;
				this.accounts=null;
				this.contacts=null;
				this.assignTo=null;
				this.deals=null;
				this.addToExistingRecord=null;
				this.carryOverTags=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the overwrite
			 * @returns {Boolean} A Boolean representing the overwrite
			 */
			getOverwrite()	{
				return this.overwrite;

			}

			/**
			 * The method to set the value to overwrite
			 * @param {Boolean} overwrite A Boolean
			 */
			setOverwrite(overwrite)	{
				if((overwrite != null) && (!(Object.prototype.toString.call(overwrite) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overwrite EXPECTED TYPE: Boolean", null, null);
				}
				this.overwrite = overwrite;
				this.keyModified.set("overwrite", 1);

			}

			/**
			 * The method to get the notifyLeadOwner
			 * @returns {Boolean} A Boolean representing the notifyLeadOwner
			 */
			getNotifyLeadOwner()	{
				return this.notifyLeadOwner;

			}

			/**
			 * The method to set the value to notifyLeadOwner
			 * @param {Boolean} notifyLeadOwner A Boolean
			 */
			setNotifyLeadOwner(notifyLeadOwner)	{
				if((notifyLeadOwner != null) && (!(Object.prototype.toString.call(notifyLeadOwner) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyLeadOwner EXPECTED TYPE: Boolean", null, null);
				}
				this.notifyLeadOwner = notifyLeadOwner;
				this.keyModified.set("notify_lead_owner", 1);

			}

			/**
			 * The method to get the notifyNewEntityOwner
			 * @returns {Boolean} A Boolean representing the notifyNewEntityOwner
			 */
			getNotifyNewEntityOwner()	{
				return this.notifyNewEntityOwner;

			}

			/**
			 * The method to set the value to notifyNewEntityOwner
			 * @param {Boolean} notifyNewEntityOwner A Boolean
			 */
			setNotifyNewEntityOwner(notifyNewEntityOwner)	{
				if((notifyNewEntityOwner != null) && (!(Object.prototype.toString.call(notifyNewEntityOwner) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyNewEntityOwner EXPECTED TYPE: Boolean", null, null);
				}
				this.notifyNewEntityOwner = notifyNewEntityOwner;
				this.keyModified.set("notify_new_entity_owner", 1);

			}

			/**
			 * The method to get the moveAttachmentsTo
			 * @returns {MoveAttachmentsTo} An instance of MoveAttachmentsTo
			 */
			getMoveAttachmentsTo()	{
				return this.moveAttachmentsTo;

			}

			/**
			 * The method to set the value to moveAttachmentsTo
			 * @param {MoveAttachmentsTo} moveAttachmentsTo An instance of MoveAttachmentsTo
			 */
			setMoveAttachmentsTo(moveAttachmentsTo)	{
				if((moveAttachmentsTo != null) && (!(moveAttachmentsTo instanceof ZCRM.ConvertLead.Model.MoveAttachmentsTo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moveAttachmentsTo EXPECTED TYPE: MoveAttachmentsTo", null, null);
				}
				this.moveAttachmentsTo = moveAttachmentsTo;
				this.keyModified.set("move_attachments_to", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {Record} An instance of Record
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {Record} accounts An instance of Record
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(accounts instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: Record", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

			}

			/**
			 * The method to get the contacts
			 * @returns {Record} An instance of Record
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {Record} contacts An instance of Record
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(contacts instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: Record", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the assignTo
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getAssignTo()	{
				return this.assignTo;

			}

			/**
			 * The method to set the value to assignTo
			 * @param {MinifiedUser} assignTo An instance of MinifiedUser
			 */
			setAssignTo(assignTo)	{
				if((assignTo != null) && (!(assignTo instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignTo EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.assignTo = assignTo;
				this.keyModified.set("assign_to", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {Record} An instance of Record
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {Record} deals An instance of Record
			 */
			setDeals(deals)	{
				if((deals != null) && (!(deals instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Record", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

			}

			/**
			 * The method to get the addToExistingRecord
			 * @returns {Choice} An instance of Choice
			 */
			getAddToExistingRecord()	{
				return this.addToExistingRecord;

			}

			/**
			 * The method to set the value to addToExistingRecord
			 * @param {Choice} addToExistingRecord An instance of Choice
			 */
			setAddToExistingRecord(addToExistingRecord)	{
				if((addToExistingRecord != null) && (!(addToExistingRecord instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addToExistingRecord EXPECTED TYPE: Choice", null, null);
				}
				this.addToExistingRecord = addToExistingRecord;
				this.keyModified.set("add_to_existing_record", 1);

			}

			/**
			 * The method to get the carryOverTags
			 * @returns {CarryOverTags} An instance of CarryOverTags
			 */
			getCarryOverTags()	{
				return this.carryOverTags;

			}

			/**
			 * The method to set the value to carryOverTags
			 * @param {CarryOverTags} carryOverTags An instance of CarryOverTags
			 */
			setCarryOverTags(carryOverTags)	{
				if((carryOverTags != null) && (!(carryOverTags instanceof ZCRM.ConvertLead.Model.CarryOverTags))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: carryOverTags EXPECTED TYPE: CarryOverTags", null, null);
				}
				this.carryOverTags = carryOverTags;
				this.keyModified.set("carry_over_tags", 1);

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

				this.data=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

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

		MoveAttachmentsTo : class{
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

				this.data=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

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

		CarryOverTags : class{
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
		}
	},
	Operations : class {


		/**
		 * Creates an instance of ConvertLeadOperations with the given parameters
		 * @param {Long} leadId A BigInt
		 */
		constructor(leadId){
			if((!(Object.prototype.toString.call(leadId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: leadId EXPECTED TYPE: BigInt", null, null);
			}
						this.leadId = leadId;

		}

		/**
		 * The method to convert lead
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async convertLead(request){
			if((request != null) && (!(request instanceof ZCRM.ConvertLead.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Leads/");
			apiPath = apiPath.concat(this.leadId.toString());
			apiPath = apiPath.concat("/actions/convert");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName("Deals");
			await Utility.getFields("Deals", handlerInstance);
			return handlerInstance.apiCall("ConvertLead.Model.ActionHandler", "application/json");

		}

	},

}