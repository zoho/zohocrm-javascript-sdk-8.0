ZCRM.EmailRelatedRecord = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		Attachments : class{
			constructor(){

				this.size=null;
				this.name=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the size
			 * @returns {String} A String representing the size
			 */
			getSize()	{
				return this.size;

			}

			/**
			 * The method to set the value to size
			 * @param {String} size A String
			 */
			setSize(size)	{
				if((size != null) && (!(Object.prototype.toString.call(size) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: String", null, null);
				}
				this.size = size;
				this.keyModified.set("size", 1);

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

		UserDetails : class{
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

		ResponseWrapper : class{
			constructor(){

				this.emails=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emails
			 * @returns {List} An Array representing the emails
			 */
			getEmails()	{
				return this.emails;

			}

			/**
			 * The method to set the value to emails
			 * @param {List} emails An Array
			 */
			setEmails(emails)	{
				if((emails != null) && (!(Object.prototype.toString.call(emails) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emails EXPECTED TYPE: Array", null, null);
				}
				this.emails = emails;
				this.keyModified.set("Emails", 1);

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
				if((info != null) && (!(info instanceof ZCRM.EmailRelatedRecord.Model.Info))){
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

		Criteria : class{
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
				if((field != null) && (!(field instanceof ZCRM.EmailRelatedRecord.Model.Field))){
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

		Info : class{
			constructor(){

				this.count=null;
				this.nextIndex=null;
				this.prevIndex=null;
				this.perPage=null;
				this.moreRecords=null;
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
			 * The method to get the nextIndex
			 * @returns {String} A String representing the nextIndex
			 */
			getNextIndex()	{
				return this.nextIndex;

			}

			/**
			 * The method to set the value to nextIndex
			 * @param {String} nextIndex A String
			 */
			setNextIndex(nextIndex)	{
				if((nextIndex != null) && (!(Object.prototype.toString.call(nextIndex) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextIndex EXPECTED TYPE: String", null, null);
				}
				this.nextIndex = nextIndex;
				this.keyModified.set("next_index", 1);

			}

			/**
			 * The method to get the prevIndex
			 * @returns {String} A String representing the prevIndex
			 */
			getPrevIndex()	{
				return this.prevIndex;

			}

			/**
			 * The method to set the value to prevIndex
			 * @param {String} prevIndex A String
			 */
			setPrevIndex(prevIndex)	{
				if((prevIndex != null) && (!(Object.prototype.toString.call(prevIndex) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prevIndex EXPECTED TYPE: String", null, null);
				}
				this.prevIndex = prevIndex;
				this.keyModified.set("prev_index", 1);

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
		},

		LinkedRecord : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.module=null;
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
			 * The method to get the module
			 * @returns {Module} An instance of Module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {Module} module An instance of Module
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.EmailRelatedRecord.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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

		Email : class{
			constructor(){

				this.attachments=null;
				this.threadId=null;
				this.cc=null;
				this.summary=null;
				this.owner=null;
				this.read=null;
				this.content=null;
				this.sent=null;
				this.subject=null;
				this.activityInfo=null;
				this.intent=null;
				this.sentimentInfo=null;
				this.messageId=null;
				this.source=null;
				this.linkedRecord=null;
				this.sentTime=null;
				this.emotion=null;
				this.from=null;
				this.to=null;
				this.time=null;
				this.status=null;
				this.hasAttachment=null;
				this.hasThreadAttachment=null;
				this.editable=null;
				this.mailFormat=null;
				this.replyTo=null;
				this.keyModified=new Map();
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
			 * The method to get the threadId
			 * @returns {String} A String representing the threadId
			 */
			getThreadId()	{
				return this.threadId;

			}

			/**
			 * The method to set the value to threadId
			 * @param {String} threadId A String
			 */
			setThreadId(threadId)	{
				if((threadId != null) && (!(Object.prototype.toString.call(threadId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: threadId EXPECTED TYPE: String", null, null);
				}
				this.threadId = threadId;
				this.keyModified.set("thread_id", 1);

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
			 * The method to get the owner
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getOwner()	{
				return this.owner;

			}

			/**
			 * The method to set the value to owner
			 * @param {MinifiedUser} owner An instance of MinifiedUser
			 */
			setOwner(owner)	{
				if((owner != null) && (!(owner instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.owner = owner;
				this.keyModified.set("owner", 1);

			}

			/**
			 * The method to get the read
			 * @returns {Boolean} A Boolean representing the read
			 */
			getRead()	{
				return this.read;

			}

			/**
			 * The method to set the value to read
			 * @param {Boolean} read A Boolean
			 */
			setRead(read)	{
				if((read != null) && (!(Object.prototype.toString.call(read) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: read EXPECTED TYPE: Boolean", null, null);
				}
				this.read = read;
				this.keyModified.set("read", 1);

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
			 * The method to get the sent
			 * @returns {Boolean} A Boolean representing the sent
			 */
			getSent()	{
				return this.sent;

			}

			/**
			 * The method to set the value to sent
			 * @param {Boolean} sent A Boolean
			 */
			setSent(sent)	{
				if((sent != null) && (!(Object.prototype.toString.call(sent) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sent EXPECTED TYPE: Boolean", null, null);
				}
				this.sent = sent;
				this.keyModified.set("sent", 1);

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
			 * The method to get the activityInfo
			 * @returns {Object} An Object representing the activityInfo
			 */
			getActivityInfo()	{
				return this.activityInfo;

			}

			/**
			 * The method to set the value to activityInfo
			 * @param {Object} activityInfo An Object
			 */
			setActivityInfo(activityInfo)	{
				this.activityInfo = activityInfo;
				this.keyModified.set("activity_info", 1);

			}

			/**
			 * The method to get the intent
			 * @returns {Choice} An instance of Choice
			 */
			getIntent()	{
				return this.intent;

			}

			/**
			 * The method to set the value to intent
			 * @param {Choice} intent An instance of Choice
			 */
			setIntent(intent)	{
				if((intent != null) && (!(intent instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: intent EXPECTED TYPE: Choice", null, null);
				}
				this.intent = intent;
				this.keyModified.set("intent", 1);

			}

			/**
			 * The method to get the sentimentInfo
			 * @returns {Choice} An instance of Choice
			 */
			getSentimentInfo()	{
				return this.sentimentInfo;

			}

			/**
			 * The method to set the value to sentimentInfo
			 * @param {Choice} sentimentInfo An instance of Choice
			 */
			setSentimentInfo(sentimentInfo)	{
				if((sentimentInfo != null) && (!(sentimentInfo instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sentimentInfo EXPECTED TYPE: Choice", null, null);
				}
				this.sentimentInfo = sentimentInfo;
				this.keyModified.set("sentiment_info", 1);

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
				if((linkedRecord != null) && (!(linkedRecord instanceof ZCRM.EmailRelatedRecord.Model.LinkedRecord))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkedRecord EXPECTED TYPE: LinkedRecord", null, null);
				}
				this.linkedRecord = linkedRecord;
				this.keyModified.set("linked_record", 1);

			}

			/**
			 * The method to get the sentTime
			 * @returns {String} A String representing the sentTime
			 */
			getSentTime()	{
				return this.sentTime;

			}

			/**
			 * The method to set the value to sentTime
			 * @param {String} sentTime A String
			 */
			setSentTime(sentTime)	{
				if((sentTime != null) && (!(Object.prototype.toString.call(sentTime) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sentTime EXPECTED TYPE: String", null, null);
				}
				this.sentTime = sentTime;
				this.keyModified.set("sent_time", 1);

			}

			/**
			 * The method to get the emotion
			 * @returns {String} A String representing the emotion
			 */
			getEmotion()	{
				return this.emotion;

			}

			/**
			 * The method to set the value to emotion
			 * @param {String} emotion A String
			 */
			setEmotion(emotion)	{
				if((emotion != null) && (!(Object.prototype.toString.call(emotion) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emotion EXPECTED TYPE: String", null, null);
				}
				this.emotion = emotion;
				this.keyModified.set("emotion", 1);

			}

			/**
			 * The method to get the from
			 * @returns {UserDetails} An instance of UserDetails
			 */
			getFrom()	{
				return this.from;

			}

			/**
			 * The method to set the value to from
			 * @param {UserDetails} from An instance of UserDetails
			 */
			setFrom(from)	{
				if((from != null) && (!(from instanceof ZCRM.EmailRelatedRecord.Model.UserDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: UserDetails", null, null);
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
			 * The method to get the status
			 * @returns {List} An Array representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {List} status An Array
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Array", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to get the hasAttachment
			 * @returns {Boolean} A Boolean representing the hasAttachment
			 */
			getHasAttachment()	{
				return this.hasAttachment;

			}

			/**
			 * The method to set the value to hasAttachment
			 * @param {Boolean} hasAttachment A Boolean
			 */
			setHasAttachment(hasAttachment)	{
				if((hasAttachment != null) && (!(Object.prototype.toString.call(hasAttachment) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasAttachment EXPECTED TYPE: Boolean", null, null);
				}
				this.hasAttachment = hasAttachment;
				this.keyModified.set("has_attachment", 1);

			}

			/**
			 * The method to get the hasThreadAttachment
			 * @returns {Boolean} A Boolean representing the hasThreadAttachment
			 */
			getHasThreadAttachment()	{
				return this.hasThreadAttachment;

			}

			/**
			 * The method to set the value to hasThreadAttachment
			 * @param {Boolean} hasThreadAttachment A Boolean
			 */
			setHasThreadAttachment(hasThreadAttachment)	{
				if((hasThreadAttachment != null) && (!(Object.prototype.toString.call(hasThreadAttachment) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasThreadAttachment EXPECTED TYPE: Boolean", null, null);
				}
				this.hasThreadAttachment = hasThreadAttachment;
				this.keyModified.set("has_thread_attachment", 1);

			}

			/**
			 * The method to get the editable
			 * @returns {Boolean} A Boolean representing the editable
			 */
			getEditable()	{
				return this.editable;

			}

			/**
			 * The method to set the value to editable
			 * @param {Boolean} editable A Boolean
			 */
			setEditable(editable)	{
				if((editable != null) && (!(Object.prototype.toString.call(editable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editable EXPECTED TYPE: Boolean", null, null);
				}
				this.editable = editable;
				this.keyModified.set("editable", 1);

			}

			/**
			 * The method to get the mailFormat
			 * @returns {String} A String representing the mailFormat
			 */
			getMailFormat()	{
				return this.mailFormat;

			}

			/**
			 * The method to set the value to mailFormat
			 * @param {String} mailFormat A String
			 */
			setMailFormat(mailFormat)	{
				if((mailFormat != null) && (!(Object.prototype.toString.call(mailFormat) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailFormat EXPECTED TYPE: String", null, null);
				}
				this.mailFormat = mailFormat;
				this.keyModified.set("mail_format", 1);

			}

			/**
			 * The method to get the replyTo
			 * @returns {UserDetails} An instance of UserDetails
			 */
			getReplyTo()	{
				return this.replyTo;

			}

			/**
			 * The method to set the value to replyTo
			 * @param {UserDetails} replyTo An instance of UserDetails
			 */
			setReplyTo(replyTo)	{
				if((replyTo != null) && (!(replyTo instanceof ZCRM.EmailRelatedRecord.Model.UserDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: UserDetails", null, null);
				}
				this.replyTo = replyTo;
				this.keyModified.set("reply_to", 1);

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

		Status : class{
			constructor(){

				this.firstOpen=null;
				this.count=null;
				this.type=null;
				this.lastOpen=null;
				this.bouncedTime=null;
				this.bouncedReason=null;
				this.category=null;
				this.subCategory=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the firstOpen
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getFirstOpen()	{
				return this.firstOpen;

			}

			/**
			 * The method to set the value to firstOpen
			 * @param {OffsetDateTime} firstOpen An instance of OffsetDateTime
			 */
			setFirstOpen(firstOpen)	{
				if((firstOpen != null) && (!(firstOpen instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstOpen EXPECTED TYPE: Date", null, null);
				}
				this.firstOpen = firstOpen;
				this.keyModified.set("first_open", 1);

			}

			/**
			 * The method to get the count
			 * @returns {String} A String representing the count
			 */
			getCount()	{
				return this.count;

			}

			/**
			 * The method to set the value to count
			 * @param {String} count A String
			 */
			setCount(count)	{
				if((count != null) && (!(Object.prototype.toString.call(count) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: String", null, null);
				}
				this.count = count;
				this.keyModified.set("count", 1);

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
			 * The method to get the lastOpen
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getLastOpen()	{
				return this.lastOpen;

			}

			/**
			 * The method to set the value to lastOpen
			 * @param {OffsetDateTime} lastOpen An instance of OffsetDateTime
			 */
			setLastOpen(lastOpen)	{
				if((lastOpen != null) && (!(lastOpen instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastOpen EXPECTED TYPE: Date", null, null);
				}
				this.lastOpen = lastOpen;
				this.keyModified.set("last_open", 1);

			}

			/**
			 * The method to get the bouncedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getBouncedTime()	{
				return this.bouncedTime;

			}

			/**
			 * The method to set the value to bouncedTime
			 * @param {OffsetDateTime} bouncedTime An instance of OffsetDateTime
			 */
			setBouncedTime(bouncedTime)	{
				if((bouncedTime != null) && (!(bouncedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bouncedTime EXPECTED TYPE: Date", null, null);
				}
				this.bouncedTime = bouncedTime;
				this.keyModified.set("bounced_time", 1);

			}

			/**
			 * The method to get the bouncedReason
			 * @returns {String} A String representing the bouncedReason
			 */
			getBouncedReason()	{
				return this.bouncedReason;

			}

			/**
			 * The method to set the value to bouncedReason
			 * @param {String} bouncedReason A String
			 */
			setBouncedReason(bouncedReason)	{
				if((bouncedReason != null) && (!(Object.prototype.toString.call(bouncedReason) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bouncedReason EXPECTED TYPE: String", null, null);
				}
				this.bouncedReason = bouncedReason;
				this.keyModified.set("bounced_reason", 1);

			}

			/**
			 * The method to get the category
			 * @returns {String} A String representing the category
			 */
			getCategory()	{
				return this.category;

			}

			/**
			 * The method to set the value to category
			 * @param {String} category A String
			 */
			setCategory(category)	{
				if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
				}
				this.category = category;
				this.keyModified.set("category", 1);

			}

			/**
			 * The method to get the subCategory
			 * @returns {String} A String representing the subCategory
			 */
			getSubCategory()	{
				return this.subCategory;

			}

			/**
			 * The method to set the value to subCategory
			 * @param {String} subCategory A String
			 */
			setSubCategory(subCategory)	{
				if((subCategory != null) && (!(Object.prototype.toString.call(subCategory) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subCategory EXPECTED TYPE: String", null, null);
				}
				this.subCategory = subCategory;
				this.keyModified.set("sub_category", 1);

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
		 * Creates an instance of EmailRelatedRecordsOperations with the given parameters
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleName A String
		 * @param {String} type A String
		 * @param {Long} ownerId A BigInt
		 */
		constructor(recordId, moduleName, type=null, ownerId=null){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleName EXPECTED TYPE: String", null, null);
			}
			if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
			}
			if((ownerId != null) && (!(Object.prototype.toString.call(ownerId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ownerId EXPECTED TYPE: BigInt", null, null);
			}
						this.recordId = recordId;
						this.moduleName = moduleName;
						this.type = type;
						this.ownerId = ownerId;

		}

		/**
		 * The method to get emails related records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailsRelatedRecords(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/Emails");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("type", "EmailRelatedRecord.Model.GetEmailsRelatedRecordsParam"), this.type);
			await handlerInstance.addParam(new Param("owner_id", "EmailRelatedRecord.Model.GetEmailsRelatedRecordsParam"), this.ownerId);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("EmailRelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get emails related record
		 * @param {String} messageId A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEmailsRelatedRecord(messageId){
			if((!(Object.prototype.toString.call(messageId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: messageId EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/Emails/");
			apiPath = apiPath.concat(messageId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("type", "EmailRelatedRecord.Model.GetEmailsRelatedRecordParam"), this.type);
			await handlerInstance.addParam(new Param("owner_id", "EmailRelatedRecord.Model.GetEmailsRelatedRecordParam"), this.ownerId);
			return handlerInstance.apiCall("EmailRelatedRecord.Model.ResponseHandler", "application/json");

		}

	},

}