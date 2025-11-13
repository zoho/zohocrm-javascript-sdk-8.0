ZCRM.EmailTemplate = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		Attachment : class{
			constructor(){

				this.size=null;
				this.fileName=null;
				this.fileId=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the size
			 * @returns {Long} A BigInt representing the size
			 */
			getSize()	{
				return this.size;

			}

			/**
			 * The method to set the value to size
			 * @param {Long} size A BigInt
			 */
			setSize(size)	{
				if((size != null) && (!(Object.prototype.toString.call(size) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: BigInt", null, null);
				}
				this.size = size;
				this.keyModified.set("size", 1);

			}

			/**
			 * The method to get the fileName
			 * @returns {String} A String representing the fileName
			 */
			getFileName()	{
				return this.fileName;

			}

			/**
			 * The method to set the value to fileName
			 * @param {String} fileName A String
			 */
			setFileName(fileName)	{
				if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
				}
				this.fileName = fileName;
				this.keyModified.set("file_name", 1);

			}

			/**
			 * The method to get the fileId
			 * @returns {String} A String representing the fileId
			 */
			getFileId()	{
				return this.fileId;

			}

			/**
			 * The method to set the value to fileId
			 * @param {String} fileId A String
			 */
			setFileId(fileId)	{
				if((fileId != null) && (!(Object.prototype.toString.call(fileId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileId EXPECTED TYPE: String", null, null);
				}
				this.fileId = fileId;
				this.keyModified.set("file_id", 1);

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

		LastVersionStatistics : class{
			constructor(){

				this.tracked=null;
				this.delivered=null;
				this.opened=null;
				this.bounced=null;
				this.sent=null;
				this.clicked=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the tracked
			 * @returns {Integer} An Integer representing the tracked
			 */
			getTracked()	{
				return this.tracked;

			}

			/**
			 * The method to set the value to tracked
			 * @param {Integer} tracked An Integer
			 */
			setTracked(tracked)	{
				if((tracked != null) && (!(Object.prototype.toString.call(tracked) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tracked EXPECTED TYPE: Integer", null, null);
				}
				this.tracked = tracked;
				this.keyModified.set("tracked", 1);

			}

			/**
			 * The method to get the delivered
			 * @returns {Integer} An Integer representing the delivered
			 */
			getDelivered()	{
				return this.delivered;

			}

			/**
			 * The method to set the value to delivered
			 * @param {Integer} delivered An Integer
			 */
			setDelivered(delivered)	{
				if((delivered != null) && (!(Object.prototype.toString.call(delivered) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delivered EXPECTED TYPE: Integer", null, null);
				}
				this.delivered = delivered;
				this.keyModified.set("delivered", 1);

			}

			/**
			 * The method to get the opened
			 * @returns {Integer} An Integer representing the opened
			 */
			getOpened()	{
				return this.opened;

			}

			/**
			 * The method to set the value to opened
			 * @param {Integer} opened An Integer
			 */
			setOpened(opened)	{
				if((opened != null) && (!(Object.prototype.toString.call(opened) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: opened EXPECTED TYPE: Integer", null, null);
				}
				this.opened = opened;
				this.keyModified.set("opened", 1);

			}

			/**
			 * The method to get the bounced
			 * @returns {Integer} An Integer representing the bounced
			 */
			getBounced()	{
				return this.bounced;

			}

			/**
			 * The method to set the value to bounced
			 * @param {Integer} bounced An Integer
			 */
			setBounced(bounced)	{
				if((bounced != null) && (!(Object.prototype.toString.call(bounced) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bounced EXPECTED TYPE: Integer", null, null);
				}
				this.bounced = bounced;
				this.keyModified.set("bounced", 1);

			}

			/**
			 * The method to get the sent
			 * @returns {Integer} An Integer representing the sent
			 */
			getSent()	{
				return this.sent;

			}

			/**
			 * The method to set the value to sent
			 * @param {Integer} sent An Integer
			 */
			setSent(sent)	{
				if((sent != null) && (!(Object.prototype.toString.call(sent) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sent EXPECTED TYPE: Integer", null, null);
				}
				this.sent = sent;
				this.keyModified.set("sent", 1);

			}

			/**
			 * The method to get the clicked
			 * @returns {Integer} An Integer representing the clicked
			 */
			getClicked()	{
				return this.clicked;

			}

			/**
			 * The method to set the value to clicked
			 * @param {Integer} clicked An Integer
			 */
			setClicked(clicked)	{
				if((clicked != null) && (!(Object.prototype.toString.call(clicked) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: clicked EXPECTED TYPE: Integer", null, null);
				}
				this.clicked = clicked;
				this.keyModified.set("clicked", 1);

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

				this.emailTemplates=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emailTemplates
			 * @returns {List} An Array representing the emailTemplates
			 */
			getEmailTemplates()	{
				return this.emailTemplates;

			}

			/**
			 * The method to set the value to emailTemplates
			 * @param {List} emailTemplates An Array
			 */
			setEmailTemplates(emailTemplates)	{
				if((emailTemplates != null) && (!(Object.prototype.toString.call(emailTemplates) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailTemplates EXPECTED TYPE: Array", null, null);
				}
				this.emailTemplates = emailTemplates;
				this.keyModified.set("email_templates", 1);

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
				if((info != null) && (!(info instanceof ZCRM.EmailTemplate.Model.Info))){
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

		Info : class{
			constructor(){

				this.perPage=null;
				this.page=null;
				this.count=null;
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
		 * The method to get email templates
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailTemplates(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/email_templates");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("EmailTemplate.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get email template
		 * @param {Long} template A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailTemplate(template){
			if((!(Object.prototype.toString.call(template) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: template EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/email_templates/");
			apiPath = apiPath.concat(template.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("EmailTemplate.Model.ResponseHandler", "application/json");

		}
	},

}