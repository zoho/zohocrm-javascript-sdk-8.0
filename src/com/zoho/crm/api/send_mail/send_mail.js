ZCRM.SendMail = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		Template : class{
			constructor(){

			}


		},

		Cc : class{
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

		From : class{
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

		DataSubjectRequest : class{
			constructor(){

				this.id=null;
				this.type=null;
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

		InventoryTemplate : class{
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

		InventoryDetails : class{
			constructor(){

				this.inventoryTemplate=null;
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
				if((inventoryTemplate != null) && (!(inventoryTemplate instanceof ZCRM.SendMail.Model.InventoryTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryTemplate EXPECTED TYPE: InventoryTemplate", null, null);
				}
				this.inventoryTemplate = inventoryTemplate;
				this.keyModified.set("inventory_template", 1);

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

		Attachment : class{
			constructor(){

				this.id=null;
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

		LinkedRecord : class{
			constructor(){

				this.module=null;
				this.name=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the module
			 * @returns {LinkedModule} An instance of LinkedModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {LinkedModule} module An instance of LinkedModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.SendMail.Model.LinkedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: LinkedModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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

		Data : class{
			constructor(){

				this.from=null;
				this.to=null;
				this.cc=null;
				this.bcc=null;
				this.replyTo=null;
				this.orgEmail=null;
				this.scheduledTime=null;
				this.mailFormat=null;
				this.consentEmail=null;
				this.content=null;
				this.subject=null;
				this.inReplyTo=null;
				this.template=null;
				this.inventoryDetails=null;
				this.dataSubjectRequest=null;
				this.attachments=null;
				this.linkedRecord=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the from
			 * @returns {From} An instance of From
			 */
			getFrom()	{
				return this.from;

			}

			/**
			 * The method to set the value to from
			 * @param {From} from An instance of From
			 */
			setFrom(from)	{
				if((from != null) && (!(from instanceof ZCRM.SendMail.Model.From))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: From", null, null);
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
			 * The method to get the replyTo
			 * @returns {To} An instance of To
			 */
			getReplyTo()	{
				return this.replyTo;

			}

			/**
			 * The method to set the value to replyTo
			 * @param {To} replyTo An instance of To
			 */
			setReplyTo(replyTo)	{
				if((replyTo != null) && (!(replyTo instanceof ZCRM.SendMail.Model.To))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: To", null, null);
				}
				this.replyTo = replyTo;
				this.keyModified.set("reply_to", 1);

			}

			/**
			 * The method to get the orgEmail
			 * @returns {Boolean} A Boolean representing the orgEmail
			 */
			getOrgEmail()	{
				return this.orgEmail;

			}

			/**
			 * The method to set the value to orgEmail
			 * @param {Boolean} orgEmail A Boolean
			 */
			setOrgEmail(orgEmail)	{
				if((orgEmail != null) && (!(Object.prototype.toString.call(orgEmail) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgEmail EXPECTED TYPE: Boolean", null, null);
				}
				this.orgEmail = orgEmail;
				this.keyModified.set("org_email", 1);

			}

			/**
			 * The method to get the scheduledTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getScheduledTime()	{
				return this.scheduledTime;

			}

			/**
			 * The method to set the value to scheduledTime
			 * @param {OffsetDateTime} scheduledTime An instance of OffsetDateTime
			 */
			setScheduledTime(scheduledTime)	{
				if((scheduledTime != null) && (!(scheduledTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduledTime EXPECTED TYPE: Date", null, null);
				}
				this.scheduledTime = scheduledTime;
				this.keyModified.set("scheduled_time", 1);

			}

			/**
			 * The method to get the mailFormat
			 * @returns {Choice} An instance of Choice
			 */
			getMailFormat()	{
				return this.mailFormat;

			}

			/**
			 * The method to set the value to mailFormat
			 * @param {Choice} mailFormat An instance of Choice
			 */
			setMailFormat(mailFormat)	{
				if((mailFormat != null) && (!(mailFormat instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailFormat EXPECTED TYPE: Choice", null, null);
				}
				this.mailFormat = mailFormat;
				this.keyModified.set("mail_format", 1);

			}

			/**
			 * The method to get the consentEmail
			 * @returns {Boolean} A Boolean representing the consentEmail
			 */
			getConsentEmail()	{
				return this.consentEmail;

			}

			/**
			 * The method to set the value to consentEmail
			 * @param {Boolean} consentEmail A Boolean
			 */
			setConsentEmail(consentEmail)	{
				if((consentEmail != null) && (!(Object.prototype.toString.call(consentEmail) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentEmail EXPECTED TYPE: Boolean", null, null);
				}
				this.consentEmail = consentEmail;
				this.keyModified.set("consent_email", 1);

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
			 * The method to get the inReplyTo
			 * @returns {InReplyTo} An instance of InReplyTo
			 */
			getInReplyTo()	{
				return this.inReplyTo;

			}

			/**
			 * The method to set the value to inReplyTo
			 * @param {InReplyTo} inReplyTo An instance of InReplyTo
			 */
			setInReplyTo(inReplyTo)	{
				if((inReplyTo != null) && (!(inReplyTo instanceof ZCRM.SendMail.Model.InReplyTo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inReplyTo EXPECTED TYPE: InReplyTo", null, null);
				}
				this.inReplyTo = inReplyTo;
				this.keyModified.set("in_reply_to", 1);

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
				if((inventoryDetails != null) && (!(inventoryDetails instanceof ZCRM.SendMail.Model.InventoryDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryDetails EXPECTED TYPE: InventoryDetails", null, null);
				}
				this.inventoryDetails = inventoryDetails;
				this.keyModified.set("inventory_details", 1);

			}

			/**
			 * The method to get the dataSubjectRequest
			 * @returns {DataSubjectRequest} An instance of DataSubjectRequest
			 */
			getDataSubjectRequest()	{
				return this.dataSubjectRequest;

			}

			/**
			 * The method to set the value to dataSubjectRequest
			 * @param {DataSubjectRequest} dataSubjectRequest An instance of DataSubjectRequest
			 */
			setDataSubjectRequest(dataSubjectRequest)	{
				if((dataSubjectRequest != null) && (!(dataSubjectRequest instanceof ZCRM.SendMail.Model.DataSubjectRequest))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataSubjectRequest EXPECTED TYPE: DataSubjectRequest", null, null);
				}
				this.dataSubjectRequest = dataSubjectRequest;
				this.keyModified.set("data_subject_request", 1);

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
			 * The method to get the linkedRecord
			 * @returns {LinkedRecord} An instance of LinkedRecord
			 */
			getLinkedRecord()	{
				return this.linkedRecord;

			}

			/**
			 * The method to set the value to linkedRecord
			 * @param {LinkedRecord} linkedRecord An instance of LinkedRecord
			 */
			setLinkedRecord(linkedRecord)	{
				if((linkedRecord != null) && (!(linkedRecord instanceof ZCRM.SendMail.Model.LinkedRecord))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkedRecord EXPECTED TYPE: LinkedRecord", null, null);
				}
				this.linkedRecord = linkedRecord;
				this.keyModified.set("linked_record", 1);

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

		Owner : class{
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

		InReplyTo : class{
			constructor(){

				this.messageId=null;
				this.owner=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the messageId
			 * @returns {String} A String representing the messageId
			 */
			getMessageId()	{
				return this.messageId;

			}

			/**
			 * The method to set the value to messageId
			 * @param {String} messageId A String
			 */
			setMessageId(messageId)	{
				if((messageId != null) && (!(Object.prototype.toString.call(messageId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: messageId EXPECTED TYPE: String", null, null);
				}
				this.messageId = messageId;
				this.keyModified.set("message_id", 1);

			}

			/**
			 * The method to get the owner
			 * @returns {Owner} An instance of Owner
			 */
			getOwner()	{
				return this.owner;

			}

			/**
			 * The method to set the value to owner
			 * @param {Owner} owner An instance of Owner
			 */
			setOwner(owner)	{
				if((owner != null) && (!(owner instanceof ZCRM.SendMail.Model.Owner))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: Owner", null, null);
				}
				this.owner = owner;
				this.keyModified.set("owner", 1);

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

		BlockedEmailAddress : class{
			constructor(){

				this.email=null;
				this.reason=null;
				this.keyModified=new Map();
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
			 * The method to get the reason
			 * @returns {String} A String representing the reason
			 */
			getReason()	{
				return this.reason;

			}

			/**
			 * The method to set the value to reason
			 * @param {String} reason A String
			 */
			setReason(reason)	{
				if((reason != null) && (!(Object.prototype.toString.call(reason) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reason EXPECTED TYPE: String", null, null);
				}
				this.reason = reason;
				this.keyModified.set("reason", 1);

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

		LinkedModule : class{
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
		}
	},
	Operations : class {


		/**
		 * Creates an instance of SendMailOperations with the given parameters
		 * @param {Long} id A BigInt
		 * @param {String} modulename A String
		 */
		constructor(id, modulename){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(modulename) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modulename EXPECTED TYPE: String", null, null);
			}
						this.id = id;
						this.modulename = modulename;

		}

		/**
		 * The method to send mail
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async sendMail(request){
			if((request != null) && (!(request instanceof ZCRM.SendMail.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.modulename.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.id.toString());
			apiPath = apiPath.concat("/actions/send_mail");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("SendMail.Model.ActionHandler", "application/json");

		}

	},

}