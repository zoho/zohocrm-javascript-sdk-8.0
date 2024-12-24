ZCRM.EmailDraft = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.emaildrafts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emaildrafts
			 * @returns {List} An Array representing the emaildrafts
			 */
			getEmaildrafts()	{
				return this.emaildrafts;

			}

			/**
			 * The method to set the value to emaildrafts
			 * @param {List} emaildrafts An Array
			 */
			setEmaildrafts(emaildrafts)	{
				if((emaildrafts != null) && (!(Object.prototype.toString.call(emaildrafts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emaildrafts EXPECTED TYPE: Array", null, null);
				}
				this.emaildrafts = emaildrafts;
				this.keyModified.set("__email_drafts", 1);

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

		To : class{
			constructor(){

				this.userName=null;
				this.email=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the userName
			 * @returns {String} A String representing the userName
			 */
			getUserName()	{
				return this.userName;

			}

			/**
			 * The method to set the value to userName
			 * @param {String} userName A String
			 */
			setUserName(userName)	{
				if((userName != null) && (!(Object.prototype.toString.call(userName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userName EXPECTED TYPE: String", null, null);
				}
				this.userName = userName;
				this.keyModified.set("user_name", 1);

			}

			/**
			 * The method to get the email
			 * @returns {String} A String representing the email
			 */
			getEmail()	{
				return this.email;

			}

			/**
			 * The method to set the value to email
			 * @param {String} email A String
			 */
			setEmail(email)	{
				if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
				}
				this.email = email;
				this.keyModified.set("email", 1);

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

				this.emaildrafts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emaildrafts
			 * @returns {List} An Array representing the emaildrafts
			 */
			getEmaildrafts()	{
				return this.emaildrafts;

			}

			/**
			 * The method to set the value to emaildrafts
			 * @param {List} emaildrafts An Array
			 */
			setEmaildrafts(emaildrafts)	{
				if((emaildrafts != null) && (!(Object.prototype.toString.call(emaildrafts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emaildrafts EXPECTED TYPE: Array", null, null);
				}
				this.emaildrafts = emaildrafts;
				this.keyModified.set("__email_drafts", 1);

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

		InventoryDetails : class{
			constructor(){

				this.inventoryTemplate=null;
				this.record=null;
				this.paperType=null;
				this.viewType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the inventoryTemplate
			 * @returns {InventoryTemplate} An instance of InventoryTemplate
			 */
			getInventoryTemplate()	{
				return this.inventoryTemplate;

			}

			/**
			 * The method to set the value to inventoryTemplate
			 * @param {InventoryTemplate} inventoryTemplate An instance of InventoryTemplate
			 */
			setInventoryTemplate(inventoryTemplate)	{
				if((inventoryTemplate != null) && (!(inventoryTemplate instanceof ZCRM.EmailDraft.Model.InventoryTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryTemplate EXPECTED TYPE: InventoryTemplate", null, null);
				}
				this.inventoryTemplate = inventoryTemplate;
				this.keyModified.set("inventory_template", 1);

			}

			/**
			 * The method to get the record
			 * @returns {Record} An instance of Record
			 */
			getRecord()	{
				return this.record;

			}

			/**
			 * The method to set the value to record
			 * @param {Record} record An instance of Record
			 */
			setRecord(record)	{
				if((record != null) && (!(record instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: record EXPECTED TYPE: Record", null, null);
				}
				this.record = record;
				this.keyModified.set("record", 1);

			}

			/**
			 * The method to get the paperType
			 * @returns {String} A String representing the paperType
			 */
			getPaperType()	{
				return this.paperType;

			}

			/**
			 * The method to set the value to paperType
			 * @param {String} paperType A String
			 */
			setPaperType(paperType)	{
				if((paperType != null) && (!(Object.prototype.toString.call(paperType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paperType EXPECTED TYPE: String", null, null);
				}
				this.paperType = paperType;
				this.keyModified.set("paper_type", 1);

			}

			/**
			 * The method to get the viewType
			 * @returns {String} A String representing the viewType
			 */
			getViewType()	{
				return this.viewType;

			}

			/**
			 * The method to set the value to viewType
			 * @param {String} viewType A String
			 */
			setViewType(viewType)	{
				if((viewType != null) && (!(Object.prototype.toString.call(viewType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: String", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

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

		InventoryTemplate : class{
			constructor(){

				this.name=null;
				this.id=null;
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

		ScheduleDetails : class{
			constructor(){

				this.time=null;
				this.timezone=null;
				this.source=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the time
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getTime()	{
				return this.time;

			}

			/**
			 * The method to set the value to time
			 * @param {OffsetDateTime} time An instance of OffsetDateTime
			 */
			setTime(time)	{
				if((time != null) && (!(time instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: time EXPECTED TYPE: Date", null, null);
				}
				this.time = time;
				this.keyModified.set("time", 1);

			}

			/**
			 * The method to get the timezone
			 * @returns {TimeZone} An instance of TimeZone
			 */
			getTimezone()	{
				return this.timezone;

			}

			/**
			 * The method to set the value to timezone
			 * @param {TimeZone} timezone An instance of TimeZone
			 */
			setTimezone(timezone)	{
				if((timezone != null) && (!(timezone instanceof TimeZone))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timezone EXPECTED TYPE: TimeZone", null, null);
				}
				this.timezone = timezone;
				this.keyModified.set("timezone", 1);

			}

			/**
			 * The method to get the source
			 * @returns {String} A String representing the source
			 */
			getSource()	{
				return this.source;

			}

			/**
			 * The method to set the value to source
			 * @param {String} source A String
			 */
			setSource(source)	{
				if((source != null) && (!(Object.prototype.toString.call(source) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: source EXPECTED TYPE: String", null, null);
				}
				this.source = source;
				this.keyModified.set("source", 1);

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

		Template : class{
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

		Attachments : class{
			constructor(){

				this.serviceName=null;
				this.fileSize=null;
				this.id=null;
				this.fileName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the serviceName
			 * @returns {String} A String representing the serviceName
			 */
			getServiceName()	{
				return this.serviceName;

			}

			/**
			 * The method to set the value to serviceName
			 * @param {String} serviceName A String
			 */
			setServiceName(serviceName)	{
				if((serviceName != null) && (!(Object.prototype.toString.call(serviceName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: serviceName EXPECTED TYPE: String", null, null);
				}
				this.serviceName = serviceName;
				this.keyModified.set("service_name", 1);

			}

			/**
			 * The method to get the fileSize
			 * @returns {String} A String representing the fileSize
			 */
			getFileSize()	{
				return this.fileSize;

			}

			/**
			 * The method to set the value to fileSize
			 * @param {String} fileSize A String
			 */
			setFileSize(fileSize)	{
				if((fileSize != null) && (!(Object.prototype.toString.call(fileSize) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileSize EXPECTED TYPE: String", null, null);
				}
				this.fileSize = fileSize;
				this.keyModified.set("file_size", 1);

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

		ActionWrapper : class{
			constructor(){

				this.emaildrafts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emaildrafts
			 * @returns {List} An Array representing the emaildrafts
			 */
			getEmaildrafts()	{
				return this.emaildrafts;

			}

			/**
			 * The method to set the value to emaildrafts
			 * @param {List} emaildrafts An Array
			 */
			setEmaildrafts(emaildrafts)	{
				if((emaildrafts != null) && (!(Object.prototype.toString.call(emaildrafts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emaildrafts EXPECTED TYPE: Array", null, null);
				}
				this.emaildrafts = emaildrafts;
				this.keyModified.set("__email_drafts", 1);

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

		EmailDrafts : class{
			constructor(){

				this.id=null;
				this.modifiedTime=null;
				this.createdTime=null;
				this.from=null;
				this.to=null;
				this.replyTo=null;
				this.cc=null;
				this.bcc=null;
				this.template=null;
				this.inventoryDetails=null;
				this.attachments=null;
				this.scheduleDetails=null;
				this.richText=null;
				this.emailOptOut=null;
				this.subject=null;
				this.content=null;
				this.summary=null;
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
			 * @returns {List} An Array representing the to
			 */
			getTo()	{
				return this.to;

			}

			/**
			 * The method to set the value to to
			 * @param {List} to An Array
			 */
			setTo(to)	{
				if((to != null) && (!(Object.prototype.toString.call(to) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: Array", null, null);
				}
				this.to = to;
				this.keyModified.set("to", 1);

			}

			/**
			 * The method to get the replyTo
			 * @returns {String} A String representing the replyTo
			 */
			getReplyTo()	{
				return this.replyTo;

			}

			/**
			 * The method to set the value to replyTo
			 * @param {String} replyTo A String
			 */
			setReplyTo(replyTo)	{
				if((replyTo != null) && (!(Object.prototype.toString.call(replyTo) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: String", null, null);
				}
				this.replyTo = replyTo;
				this.keyModified.set("reply_to", 1);

			}

			/**
			 * The method to get the cc
			 * @returns {List} An Array representing the cc
			 */
			getCc()	{
				return this.cc;

			}

			/**
			 * The method to set the value to cc
			 * @param {List} cc An Array
			 */
			setCc(cc)	{
				if((cc != null) && (!(Object.prototype.toString.call(cc) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cc EXPECTED TYPE: Array", null, null);
				}
				this.cc = cc;
				this.keyModified.set("cc", 1);

			}

			/**
			 * The method to get the bcc
			 * @returns {List} An Array representing the bcc
			 */
			getBcc()	{
				return this.bcc;

			}

			/**
			 * The method to set the value to bcc
			 * @param {List} bcc An Array
			 */
			setBcc(bcc)	{
				if((bcc != null) && (!(Object.prototype.toString.call(bcc) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bcc EXPECTED TYPE: Array", null, null);
				}
				this.bcc = bcc;
				this.keyModified.set("bcc", 1);

			}

			/**
			 * The method to get the template
			 * @returns {Template} An instance of Template
			 */
			getTemplate()	{
				return this.template;

			}

			/**
			 * The method to set the value to template
			 * @param {Template} template An instance of Template
			 */
			setTemplate(template)	{
				if((template != null) && (!(template instanceof ZCRM.EmailDraft.Model.Template))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: template EXPECTED TYPE: Template", null, null);
				}
				this.template = template;
				this.keyModified.set("template", 1);

			}

			/**
			 * The method to get the inventoryDetails
			 * @returns {InventoryDetails} An instance of InventoryDetails
			 */
			getInventoryDetails()	{
				return this.inventoryDetails;

			}

			/**
			 * The method to set the value to inventoryDetails
			 * @param {InventoryDetails} inventoryDetails An instance of InventoryDetails
			 */
			setInventoryDetails(inventoryDetails)	{
				if((inventoryDetails != null) && (!(inventoryDetails instanceof ZCRM.EmailDraft.Model.InventoryDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryDetails EXPECTED TYPE: InventoryDetails", null, null);
				}
				this.inventoryDetails = inventoryDetails;
				this.keyModified.set("inventory_details", 1);

			}

			/**
			 * The method to get the attachments
			 * @returns {List} An Array representing the attachments
			 */
			getAttachments()	{
				return this.attachments;

			}

			/**
			 * The method to set the value to attachments
			 * @param {List} attachments An Array
			 */
			setAttachments(attachments)	{
				if((attachments != null) && (!(Object.prototype.toString.call(attachments) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachments EXPECTED TYPE: Array", null, null);
				}
				this.attachments = attachments;
				this.keyModified.set("attachments", 1);

			}

			/**
			 * The method to get the scheduleDetails
			 * @returns {ScheduleDetails} An instance of ScheduleDetails
			 */
			getScheduleDetails()	{
				return this.scheduleDetails;

			}

			/**
			 * The method to set the value to scheduleDetails
			 * @param {ScheduleDetails} scheduleDetails An instance of ScheduleDetails
			 */
			setScheduleDetails(scheduleDetails)	{
				if((scheduleDetails != null) && (!(scheduleDetails instanceof ZCRM.EmailDraft.Model.ScheduleDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduleDetails EXPECTED TYPE: ScheduleDetails", null, null);
				}
				this.scheduleDetails = scheduleDetails;
				this.keyModified.set("schedule_details", 1);

			}

			/**
			 * The method to get the richText
			 * @returns {Boolean} A Boolean representing the richText
			 */
			getRichText()	{
				return this.richText;

			}

			/**
			 * The method to set the value to richText
			 * @param {Boolean} richText A Boolean
			 */
			setRichText(richText)	{
				if((richText != null) && (!(Object.prototype.toString.call(richText) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: richText EXPECTED TYPE: Boolean", null, null);
				}
				this.richText = richText;
				this.keyModified.set("rich_text", 1);

			}

			/**
			 * The method to get the emailOptOut
			 * @returns {Boolean} A Boolean representing the emailOptOut
			 */
			getEmailOptOut()	{
				return this.emailOptOut;

			}

			/**
			 * The method to set the value to emailOptOut
			 * @param {Boolean} emailOptOut A Boolean
			 */
			setEmailOptOut(emailOptOut)	{
				if((emailOptOut != null) && (!(Object.prototype.toString.call(emailOptOut) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailOptOut EXPECTED TYPE: Boolean", null, null);
				}
				this.emailOptOut = emailOptOut;
				this.keyModified.set("email_opt_out", 1);

			}

			/**
			 * The method to get the subject
			 * @returns {String} A String representing the subject
			 */
			getSubject()	{
				return this.subject;

			}

			/**
			 * The method to set the value to subject
			 * @param {String} subject A String
			 */
			setSubject(subject)	{
				if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
				}
				this.subject = subject;
				this.keyModified.set("subject", 1);

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
			 * The method to get the summary
			 * @returns {String} A String representing the summary
			 */
			getSummary()	{
				return this.summary;

			}

			/**
			 * The method to set the value to summary
			 * @param {String} summary A String
			 */
			setSummary(summary)	{
				if((summary != null) && (!(Object.prototype.toString.call(summary) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: summary EXPECTED TYPE: String", null, null);
				}
				this.summary = summary;
				this.keyModified.set("summary", 1);

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