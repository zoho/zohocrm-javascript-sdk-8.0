ZCRM.MailMerge = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		DownloadResponseHandler : class{
			constructor(){

			}


		},

		SignActionHandler : class{
			constructor(){

			}


		},

		SignActionResponse : class{
			constructor(){

			}


		},

		SignActionWrapper : class{
			constructor(){

				this.signMailMerge=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the signMailMerge
			 * @returns {List} An Array representing the signMailMerge
			 */
			getSignMailMerge()	{
				return this.signMailMerge;

			}

			/**
			 * The method to set the value to signMailMerge
			 * @param {List} signMailMerge An Array
			 */
			setSignMailMerge(signMailMerge)	{
				if((signMailMerge != null) && (!(Object.prototype.toString.call(signMailMerge) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signMailMerge EXPECTED TYPE: Array", null, null);
				}
				this.signMailMerge = signMailMerge;
				this.keyModified.set("sign_mail_merge", 1);

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

		SignMailMerge : class{
			constructor(){

				this.mailMergeTemplate=null;
				this.signInOrder=null;
				this.fileName=null;
				this.signers=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the mailMergeTemplate
			 * @returns {MailMergeTemplate} An instance of MailMergeTemplate
			 */
			getMailMergeTemplate()	{
				return this.mailMergeTemplate;

			}

			/**
			 * The method to set the value to mailMergeTemplate
			 * @param {MailMergeTemplate} mailMergeTemplate An instance of MailMergeTemplate
			 */
			setMailMergeTemplate(mailMergeTemplate)	{
				if((mailMergeTemplate != null) && (!(mailMergeTemplate instanceof ZCRM.MailMerge.Model.MailMergeTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailMergeTemplate EXPECTED TYPE: MailMergeTemplate", null, null);
				}
				this.mailMergeTemplate = mailMergeTemplate;
				this.keyModified.set("mail_merge_template", 1);

			}

			/**
			 * The method to get the signInOrder
			 * @returns {Boolean} A Boolean representing the signInOrder
			 */
			getSignInOrder()	{
				return this.signInOrder;

			}

			/**
			 * The method to set the value to signInOrder
			 * @param {Boolean} signInOrder A Boolean
			 */
			setSignInOrder(signInOrder)	{
				if((signInOrder != null) && (!(Object.prototype.toString.call(signInOrder) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signInOrder EXPECTED TYPE: Boolean", null, null);
				}
				this.signInOrder = signInOrder;
				this.keyModified.set("sign_in_order", 1);

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
			 * The method to get the signers
			 * @returns {List} An Array representing the signers
			 */
			getSigners()	{
				return this.signers;

			}

			/**
			 * The method to set the value to signers
			 * @param {List} signers An Array
			 */
			setSigners(signers)	{
				if((signers != null) && (!(Object.prototype.toString.call(signers) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signers EXPECTED TYPE: Array", null, null);
				}
				this.signers = signers;
				this.keyModified.set("signers", 1);

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

		Address : class{
			constructor(){

				this.type=null;
				this.value=null;
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

		Signers : class{
			constructor(){

				this.recipientName=null;
				this.actionType=null;
				this.recipient=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the recipientName
			 * @returns {String} A String representing the recipientName
			 */
			getRecipientName()	{
				return this.recipientName;

			}

			/**
			 * The method to set the value to recipientName
			 * @param {String} recipientName A String
			 */
			setRecipientName(recipientName)	{
				if((recipientName != null) && (!(Object.prototype.toString.call(recipientName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recipientName EXPECTED TYPE: String", null, null);
				}
				this.recipientName = recipientName;
				this.keyModified.set("recipient_name", 1);

			}

			/**
			 * The method to get the actionType
			 * @returns {Choice} An instance of Choice
			 */
			getActionType()	{
				return this.actionType;

			}

			/**
			 * The method to set the value to actionType
			 * @param {Choice} actionType An instance of Choice
			 */
			setActionType(actionType)	{
				if((actionType != null) && (!(actionType instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionType EXPECTED TYPE: Choice", null, null);
				}
				this.actionType = actionType;
				this.keyModified.set("action_type", 1);

			}

			/**
			 * The method to get the recipient
			 * @returns {Address} An instance of Address
			 */
			getRecipient()	{
				return this.recipient;

			}

			/**
			 * The method to set the value to recipient
			 * @param {Address} recipient An instance of Address
			 */
			setRecipient(recipient)	{
				if((recipient != null) && (!(recipient instanceof ZCRM.MailMerge.Model.Address))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recipient EXPECTED TYPE: Address", null, null);
				}
				this.recipient = recipient;
				this.keyModified.set("recipient", 1);

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

		MailMergeTemplate : class{
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
				this.status=null;
				this.message=null;
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

		DownloadMailMergeWrapper : class{
			constructor(){

				this.downloadMailMerge=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the downloadMailMerge
			 * @returns {List} An Array representing the downloadMailMerge
			 */
			getDownloadMailMerge()	{
				return this.downloadMailMerge;

			}

			/**
			 * The method to set the value to downloadMailMerge
			 * @param {List} downloadMailMerge An Array
			 */
			setDownloadMailMerge(downloadMailMerge)	{
				if((downloadMailMerge != null) && (!(Object.prototype.toString.call(downloadMailMerge) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadMailMerge EXPECTED TYPE: Array", null, null);
				}
				this.downloadMailMerge = downloadMailMerge;
				this.keyModified.set("download_mail_merge", 1);

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

				this.sendMailMerge=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the sendMailMerge
			 * @returns {List} An Array representing the sendMailMerge
			 */
			getSendMailMerge()	{
				return this.sendMailMerge;

			}

			/**
			 * The method to set the value to sendMailMerge
			 * @param {List} sendMailMerge An Array
			 */
			setSendMailMerge(sendMailMerge)	{
				if((sendMailMerge != null) && (!(Object.prototype.toString.call(sendMailMerge) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sendMailMerge EXPECTED TYPE: Array", null, null);
				}
				this.sendMailMerge = sendMailMerge;
				this.keyModified.set("send_mail_merge", 1);

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

		DownloadMailMerge : class{
			constructor(){

				this.mailMergeTemplate=null;
				this.outputFormat=null;
				this.fileName=null;
				this.password=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the mailMergeTemplate
			 * @returns {MailMergeTemplate} An instance of MailMergeTemplate
			 */
			getMailMergeTemplate()	{
				return this.mailMergeTemplate;

			}

			/**
			 * The method to set the value to mailMergeTemplate
			 * @param {MailMergeTemplate} mailMergeTemplate An instance of MailMergeTemplate
			 */
			setMailMergeTemplate(mailMergeTemplate)	{
				if((mailMergeTemplate != null) && (!(mailMergeTemplate instanceof ZCRM.MailMerge.Model.MailMergeTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailMergeTemplate EXPECTED TYPE: MailMergeTemplate", null, null);
				}
				this.mailMergeTemplate = mailMergeTemplate;
				this.keyModified.set("mail_merge_template", 1);

			}

			/**
			 * The method to get the outputFormat
			 * @returns {Choice} An instance of Choice
			 */
			getOutputFormat()	{
				return this.outputFormat;

			}

			/**
			 * The method to set the value to outputFormat
			 * @param {Choice} outputFormat An instance of Choice
			 */
			setOutputFormat(outputFormat)	{
				if((outputFormat != null) && (!(outputFormat instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: outputFormat EXPECTED TYPE: Choice", null, null);
				}
				this.outputFormat = outputFormat;
				this.keyModified.set("output_format", 1);

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
			 * The method to get the password
			 * @returns {String} A String representing the password
			 */
			getPassword()	{
				return this.password;

			}

			/**
			 * The method to set the value to password
			 * @param {String} password A String
			 */
			setPassword(password)	{
				if((password != null) && (!(Object.prototype.toString.call(password) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: password EXPECTED TYPE: String", null, null);
				}
				this.password = password;
				this.keyModified.set("password", 1);

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

		FileBodyWrapper : class{
			constructor(){

				this.file=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the file
			 * @returns {StreamWrapper} An instance of StreamWrapper
			 */
			getFile()	{
				return this.file;

			}

			/**
			 * The method to set the value to file
			 * @param {StreamWrapper} file An instance of StreamWrapper
			 */
			setFile(file)	{
				if((file != null) && (!(file instanceof StreamWrapper.Model.StreamWrapper))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: file EXPECTED TYPE: StreamWrapper", null, null);
				}
				this.file = file;
				this.keyModified.set("file", 1);

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

		MailMerge : class{
			constructor(){

				this.mailMergeTemplate=null;
				this.fromAddress=null;
				this.toAddress=null;
				this.ccEmail=null;
				this.bccEmail=null;
				this.subject=null;
				this.message=null;
				this.type=null;
				this.attachmentName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the mailMergeTemplate
			 * @returns {MailMergeTemplate} An instance of MailMergeTemplate
			 */
			getMailMergeTemplate()	{
				return this.mailMergeTemplate;

			}

			/**
			 * The method to set the value to mailMergeTemplate
			 * @param {MailMergeTemplate} mailMergeTemplate An instance of MailMergeTemplate
			 */
			setMailMergeTemplate(mailMergeTemplate)	{
				if((mailMergeTemplate != null) && (!(mailMergeTemplate instanceof ZCRM.MailMerge.Model.MailMergeTemplate))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailMergeTemplate EXPECTED TYPE: MailMergeTemplate", null, null);
				}
				this.mailMergeTemplate = mailMergeTemplate;
				this.keyModified.set("mail_merge_template", 1);

			}

			/**
			 * The method to get the fromAddress
			 * @returns {Address} An instance of Address
			 */
			getFromAddress()	{
				return this.fromAddress;

			}

			/**
			 * The method to set the value to fromAddress
			 * @param {Address} fromAddress An instance of Address
			 */
			setFromAddress(fromAddress)	{
				if((fromAddress != null) && (!(fromAddress instanceof ZCRM.MailMerge.Model.Address))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: Address", null, null);
				}
				this.fromAddress = fromAddress;
				this.keyModified.set("from_address", 1);

			}

			/**
			 * The method to get the toAddress
			 * @returns {List} An Array representing the toAddress
			 */
			getToAddress()	{
				return this.toAddress;

			}

			/**
			 * The method to set the value to toAddress
			 * @param {List} toAddress An Array
			 */
			setToAddress(toAddress)	{
				if((toAddress != null) && (!(Object.prototype.toString.call(toAddress) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: toAddress EXPECTED TYPE: Array", null, null);
				}
				this.toAddress = toAddress;
				this.keyModified.set("to_address", 1);

			}

			/**
			 * The method to get the ccEmail
			 * @returns {List} An Array representing the ccEmail
			 */
			getCcEmail()	{
				return this.ccEmail;

			}

			/**
			 * The method to set the value to ccEmail
			 * @param {List} ccEmail An Array
			 */
			setCcEmail(ccEmail)	{
				if((ccEmail != null) && (!(Object.prototype.toString.call(ccEmail) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ccEmail EXPECTED TYPE: Array", null, null);
				}
				this.ccEmail = ccEmail;
				this.keyModified.set("cc_email", 1);

			}

			/**
			 * The method to get the bccEmail
			 * @returns {List} An Array representing the bccEmail
			 */
			getBccEmail()	{
				return this.bccEmail;

			}

			/**
			 * The method to set the value to bccEmail
			 * @param {List} bccEmail An Array
			 */
			setBccEmail(bccEmail)	{
				if((bccEmail != null) && (!(Object.prototype.toString.call(bccEmail) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bccEmail EXPECTED TYPE: Array", null, null);
				}
				this.bccEmail = bccEmail;
				this.keyModified.set("bcc_email", 1);

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
			 * The method to get the attachmentName
			 * @returns {String} A String representing the attachmentName
			 */
			getAttachmentName()	{
				return this.attachmentName;

			}

			/**
			 * The method to set the value to attachmentName
			 * @param {String} attachmentName A String
			 */
			setAttachmentName(attachmentName)	{
				if((attachmentName != null) && (!(Object.prototype.toString.call(attachmentName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachmentName EXPECTED TYPE: String", null, null);
				}
				this.attachmentName = attachmentName;
				this.keyModified.set("attachment_name", 1);

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

		SignMailMergeWrapper : class{
			constructor(){

				this.signMailMerge=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the signMailMerge
			 * @returns {List} An Array representing the signMailMerge
			 */
			getSignMailMerge()	{
				return this.signMailMerge;

			}

			/**
			 * The method to set the value to signMailMerge
			 * @param {List} signMailMerge An Array
			 */
			setSignMailMerge(signMailMerge)	{
				if((signMailMerge != null) && (!(Object.prototype.toString.call(signMailMerge) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signMailMerge EXPECTED TYPE: Array", null, null);
				}
				this.signMailMerge = signMailMerge;
				this.keyModified.set("sign_mail_merge", 1);

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

		MailMergeWrapper : class{
			constructor(){

				this.sendMailMerge=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the sendMailMerge
			 * @returns {List} An Array representing the sendMailMerge
			 */
			getSendMailMerge()	{
				return this.sendMailMerge;

			}

			/**
			 * The method to set the value to sendMailMerge
			 * @param {List} sendMailMerge An Array
			 */
			setSendMailMerge(sendMailMerge)	{
				if((sendMailMerge != null) && (!(Object.prototype.toString.call(sendMailMerge) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sendMailMerge EXPECTED TYPE: Array", null, null);
				}
				this.sendMailMerge = sendMailMerge;
				this.keyModified.set("send_mail_merge", 1);

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
		 * Creates an instance of MailMergeOperations with the given parameters
		 * @param {String} module A String
		 * @param {String} id A String
		 */
		constructor(module, id){
			if((!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(id) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
			}
						this.module = module;
						this.id = id;

		}

		/**
		 * The method to send mail merge
		 * @param {MailMergeWrapper} request An instance of MailMergeWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async sendMailMerge(request){
			if((request != null) && (!(request instanceof ZCRM.MailMerge.Model.MailMergeWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MailMergeWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.module.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.id.toString());
			apiPath = apiPath.concat("/actions/send_mail_merge");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("MailMerge.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to download mail merge
		 * @param {DownloadMailMergeWrapper} request An instance of DownloadMailMergeWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async downloadMailMerge(request){
			if((request != null) && (!(request instanceof ZCRM.MailMerge.Model.DownloadMailMergeWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: DownloadMailMergeWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.module.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.id.toString());
			apiPath = apiPath.concat("/actions/download_mail_merge");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("MailMerge.Model.DownloadResponseHandler", "application/json");

		}

		/**
		 * The method to sign mail merge
		 * @param {SignMailMergeWrapper} request An instance of SignMailMergeWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async signMailMerge(request){
			if((request != null) && (!(request instanceof ZCRM.MailMerge.Model.SignMailMergeWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: SignMailMergeWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.module.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.id.toString());
			apiPath = apiPath.concat("/actions/sign_mail_merge");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("MailMerge.Model.SignActionHandler", "application/json");

		}

	},

}