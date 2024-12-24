ZCRM.PortalUserType = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		Modules : class{
			constructor(){

				this.id=null;
				this.pluralLabel=null;
				this.sharedType=null;
				this.apiName=null;
				this.filters=null;
				this.fields=null;
				this.layouts=null;
				this.views=null;
				this.permissions=null;
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
			 * The method to get the pluralLabel
			 * @returns {String} A String representing the pluralLabel
			 */
			getPluralLabel()	{
				return this.pluralLabel;

			}

			/**
			 * The method to set the value to pluralLabel
			 * @param {String} pluralLabel A String
			 */
			setPluralLabel(pluralLabel)	{
				if((pluralLabel != null) && (!(Object.prototype.toString.call(pluralLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pluralLabel EXPECTED TYPE: String", null, null);
				}
				this.pluralLabel = pluralLabel;
				this.keyModified.set("plural_label", 1);

			}

			/**
			 * The method to get the sharedType
			 * @returns {String} A String representing the sharedType
			 */
			getSharedType()	{
				return this.sharedType;

			}

			/**
			 * The method to set the value to sharedType
			 * @param {String} sharedType A String
			 */
			setSharedType(sharedType)	{
				if((sharedType != null) && (!(Object.prototype.toString.call(sharedType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedType EXPECTED TYPE: String", null, null);
				}
				this.sharedType = sharedType;
				this.keyModified.set("shared_type", 1);

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
			 * The method to get the filters
			 * @returns {List} An Array representing the filters
			 */
			getFilters()	{
				return this.filters;

			}

			/**
			 * The method to set the value to filters
			 * @param {List} filters An Array
			 */
			setFilters(filters)	{
				if((filters != null) && (!(Object.prototype.toString.call(filters) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: Array", null, null);
				}
				this.filters = filters;
				this.keyModified.set("filters", 1);

			}

			/**
			 * The method to get the fields
			 * @returns {List} An Array representing the fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {List} fields An Array
			 */
			setFields(fields)	{
				if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

			}

			/**
			 * The method to get the layouts
			 * @returns {List} An Array representing the layouts
			 */
			getLayouts()	{
				return this.layouts;

			}

			/**
			 * The method to set the value to layouts
			 * @param {List} layouts An Array
			 */
			setLayouts(layouts)	{
				if((layouts != null) && (!(Object.prototype.toString.call(layouts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Array", null, null);
				}
				this.layouts = layouts;
				this.keyModified.set("layouts", 1);

			}

			/**
			 * The method to get the views
			 * @returns {Views} An instance of Views
			 */
			getViews()	{
				return this.views;

			}

			/**
			 * The method to set the value to views
			 * @param {Views} views An instance of Views
			 */
			setViews(views)	{
				if((views != null) && (!(views instanceof ZCRM.PortalUserType.Model.Views))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: views EXPECTED TYPE: Views", null, null);
				}
				this.views = views;
				this.keyModified.set("views", 1);

			}

			/**
			 * The method to get the permissions
			 * @returns {Permissions} An instance of Permissions
			 */
			getPermissions()	{
				return this.permissions;

			}

			/**
			 * The method to set the value to permissions
			 * @param {Permissions} permissions An instance of Permissions
			 */
			setPermissions(permissions)	{
				if((permissions != null) && (!(permissions instanceof ZCRM.PortalUserType.Model.Permissions))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissions EXPECTED TYPE: Permissions", null, null);
				}
				this.permissions = permissions;
				this.keyModified.set("permissions", 1);

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

		PersonalityModule : class{
			constructor(){

				this.apiName=null;
				this.id=null;
				this.pluralLabel=null;
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
			 * The method to get the pluralLabel
			 * @returns {String} A String representing the pluralLabel
			 */
			getPluralLabel()	{
				return this.pluralLabel;

			}

			/**
			 * The method to set the value to pluralLabel
			 * @param {String} pluralLabel A String
			 */
			setPluralLabel(pluralLabel)	{
				if((pluralLabel != null) && (!(Object.prototype.toString.call(pluralLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pluralLabel EXPECTED TYPE: String", null, null);
				}
				this.pluralLabel = pluralLabel;
				this.keyModified.set("plural_label", 1);

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

				this.userType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the userType
			 * @returns {List} An Array representing the userType
			 */
			getUserType()	{
				return this.userType;

			}

			/**
			 * The method to set the value to userType
			 * @param {List} userType An Array
			 */
			setUserType(userType)	{
				if((userType != null) && (!(Object.prototype.toString.call(userType) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userType EXPECTED TYPE: Array", null, null);
				}
				this.userType = userType;
				this.keyModified.set("user_type", 1);

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

				this.userType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the userType
			 * @returns {List} An Array representing the userType
			 */
			getUserType()	{
				return this.userType;

			}

			/**
			 * The method to set the value to userType
			 * @param {List} userType An Array
			 */
			setUserType(userType)	{
				if((userType != null) && (!(Object.prototype.toString.call(userType) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userType EXPECTED TYPE: Array", null, null);
				}
				this.userType = userType;
				this.keyModified.set("user_type", 1);

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

		Permissions : class{
			constructor(){

				this.view=null;
				this.edit=null;
				this.editSharedRecords=null;
				this.create=null;
				this.delete1=null;
				this.deleteAttachment=null;
				this.createAttachment=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the view
			 * @returns {Boolean} A Boolean representing the view
			 */
			getView()	{
				return this.view;

			}

			/**
			 * The method to set the value to view
			 * @param {Boolean} view A Boolean
			 */
			setView(view)	{
				if((view != null) && (!(Object.prototype.toString.call(view) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: view EXPECTED TYPE: Boolean", null, null);
				}
				this.view = view;
				this.keyModified.set("view", 1);

			}

			/**
			 * The method to get the edit
			 * @returns {Boolean} A Boolean representing the edit
			 */
			getEdit()	{
				return this.edit;

			}

			/**
			 * The method to set the value to edit
			 * @param {Boolean} edit A Boolean
			 */
			setEdit(edit)	{
				if((edit != null) && (!(Object.prototype.toString.call(edit) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: edit EXPECTED TYPE: Boolean", null, null);
				}
				this.edit = edit;
				this.keyModified.set("edit", 1);

			}

			/**
			 * The method to get the editSharedRecords
			 * @returns {Boolean} A Boolean representing the editSharedRecords
			 */
			getEditSharedRecords()	{
				return this.editSharedRecords;

			}

			/**
			 * The method to set the value to editSharedRecords
			 * @param {Boolean} editSharedRecords A Boolean
			 */
			setEditSharedRecords(editSharedRecords)	{
				if((editSharedRecords != null) && (!(Object.prototype.toString.call(editSharedRecords) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editSharedRecords EXPECTED TYPE: Boolean", null, null);
				}
				this.editSharedRecords = editSharedRecords;
				this.keyModified.set("edit_shared_records", 1);

			}

			/**
			 * The method to get the create
			 * @returns {Boolean} A Boolean representing the create
			 */
			getCreate()	{
				return this.create;

			}

			/**
			 * The method to set the value to create
			 * @param {Boolean} create A Boolean
			 */
			setCreate(create)	{
				if((create != null) && (!(Object.prototype.toString.call(create) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: create EXPECTED TYPE: Boolean", null, null);
				}
				this.create = create;
				this.keyModified.set("create", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {Boolean} A Boolean representing the delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {Boolean} delete1 A Boolean
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Boolean", null, null);
				}
				this.delete1 = delete1;
				this.keyModified.set("delete", 1);

			}

			/**
			 * The method to get the deleteAttachment
			 * @returns {Boolean} A Boolean representing the deleteAttachment
			 */
			getDeleteAttachment()	{
				return this.deleteAttachment;

			}

			/**
			 * The method to set the value to deleteAttachment
			 * @param {Boolean} deleteAttachment A Boolean
			 */
			setDeleteAttachment(deleteAttachment)	{
				if((deleteAttachment != null) && (!(Object.prototype.toString.call(deleteAttachment) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deleteAttachment EXPECTED TYPE: Boolean", null, null);
				}
				this.deleteAttachment = deleteAttachment;
				this.keyModified.set("delete_attachment", 1);

			}

			/**
			 * The method to get the createAttachment
			 * @returns {Boolean} A Boolean representing the createAttachment
			 */
			getCreateAttachment()	{
				return this.createAttachment;

			}

			/**
			 * The method to set the value to createAttachment
			 * @param {Boolean} createAttachment A Boolean
			 */
			setCreateAttachment(createAttachment)	{
				if((createAttachment != null) && (!(Object.prototype.toString.call(createAttachment) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createAttachment EXPECTED TYPE: Boolean", null, null);
				}
				this.createAttachment = createAttachment;
				this.keyModified.set("create_attachment", 1);

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

		UserType : class{
			constructor(){

				this.personalityModule=null;
				this.createdTime=null;
				this.modifiedTime=null;
				this.modifiedBy=null;
				this.createdBy=null;
				this.name=null;
				this.active=null;
				this.default1=null;
				this.noOfUsers=null;
				this.id=null;
				this.modules=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the personalityModule
			 * @returns {PersonalityModule} An instance of PersonalityModule
			 */
			getPersonalityModule()	{
				return this.personalityModule;

			}

			/**
			 * The method to set the value to personalityModule
			 * @param {PersonalityModule} personalityModule An instance of PersonalityModule
			 */
			setPersonalityModule(personalityModule)	{
				if((personalityModule != null) && (!(personalityModule instanceof ZCRM.PortalUserType.Model.PersonalityModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityModule EXPECTED TYPE: PersonalityModule", null, null);
				}
				this.personalityModule = personalityModule;
				this.keyModified.set("personality_module", 1);

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
			 * The method to get the modifiedBy
			 * @returns {Owner} An instance of Owner
			 */
			getModifiedBy()	{
				return this.modifiedBy;

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {Owner} modifiedBy An instance of Owner
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.PortalUserType.Model.Owner))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: Owner", null, null);
				}
				this.modifiedBy = modifiedBy;
				this.keyModified.set("modified_by", 1);

			}

			/**
			 * The method to get the createdBy
			 * @returns {Owner} An instance of Owner
			 */
			getCreatedBy()	{
				return this.createdBy;

			}

			/**
			 * The method to set the value to createdBy
			 * @param {Owner} createdBy An instance of Owner
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.PortalUserType.Model.Owner))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: Owner", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

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
			 * The method to get the active
			 * @returns {Boolean} A Boolean representing the active
			 */
			getActive()	{
				return this.active;

			}

			/**
			 * The method to set the value to active
			 * @param {Boolean} active A Boolean
			 */
			setActive(active)	{
				if((active != null) && (!(Object.prototype.toString.call(active) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: active EXPECTED TYPE: Boolean", null, null);
				}
				this.active = active;
				this.keyModified.set("active", 1);

			}

			/**
			 * The method to get the default
			 * @returns {Boolean} A Boolean representing the default1
			 */
			getDefault()	{
				return this.default1;

			}

			/**
			 * The method to set the value to default
			 * @param {Boolean} default1 A Boolean
			 */
			setDefault(default1)	{
				if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
				}
				this.default1 = default1;
				this.keyModified.set("default", 1);

			}

			/**
			 * The method to get the noOfUsers
			 * @returns {Integer} An Integer representing the noOfUsers
			 */
			getNoOfUsers()	{
				return this.noOfUsers;

			}

			/**
			 * The method to set the value to noOfUsers
			 * @param {Integer} noOfUsers An Integer
			 */
			setNoOfUsers(noOfUsers)	{
				if((noOfUsers != null) && (!(Object.prototype.toString.call(noOfUsers) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noOfUsers EXPECTED TYPE: Integer", null, null);
				}
				this.noOfUsers = noOfUsers;
				this.keyModified.set("no_of_users", 1);

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
			 * The method to get the modules
			 * @returns {List} An Array representing the modules
			 */
			getModules()	{
				return this.modules;

			}

			/**
			 * The method to set the value to modules
			 * @param {List} modules An Array
			 */
			setModules(modules)	{
				if((modules != null) && (!(Object.prototype.toString.call(modules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modules EXPECTED TYPE: Array", null, null);
				}
				this.modules = modules;
				this.keyModified.set("modules", 1);

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

				this.userType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the userType
			 * @returns {List} An Array representing the userType
			 */
			getUserType()	{
				return this.userType;

			}

			/**
			 * The method to set the value to userType
			 * @param {List} userType An Array
			 */
			setUserType(userType)	{
				if((userType != null) && (!(Object.prototype.toString.call(userType) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userType EXPECTED TYPE: Array", null, null);
				}
				this.userType = userType;
				this.keyModified.set("user_type", 1);

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

		Views : class{
			constructor(){

				this.displayLabel=null;
				this.name=null;
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

		Filters : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
				this.id=null;
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

		Layouts : class{
			constructor(){

				this.displayLabel=null;
				this.name=null;
				this.id=null;
				this.defaultview=null;
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
			 * The method to get the defaultview
			 * @returns {Views} An instance of Views
			 */
			getDefaultview()	{
				return this.defaultview;

			}

			/**
			 * The method to set the value to defaultview
			 * @param {Views} defaultview An instance of Views
			 */
			setDefaultview(defaultview)	{
				if((defaultview != null) && (!(defaultview instanceof ZCRM.PortalUserType.Model.Views))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultview EXPECTED TYPE: Views", null, null);
				}
				this.defaultview = defaultview;
				this.keyModified.set("_default_view", 1);

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

		Fields : class{
			constructor(){

				this.readOnly=null;
				this.apiName=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the readOnly
			 * @returns {Boolean} A Boolean representing the readOnly
			 */
			getReadOnly()	{
				return this.readOnly;

			}

			/**
			 * The method to set the value to readOnly
			 * @param {Boolean} readOnly A Boolean
			 */
			setReadOnly(readOnly)	{
				if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.readOnly = readOnly;
				this.keyModified.set("read_only", 1);

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
		 * Creates an instance of PortalUserTypeOperations with the given parameters
		 * @param {String} portal A String
		 */
		constructor(portal){
			if((!(Object.prototype.toString.call(portal) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portal EXPECTED TYPE: String", null, null);
			}
						this.portal = portal;

		}

		/**
		 * The method to get user types
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getUserTypes(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/portals/");
			apiPath = apiPath.concat(this.portal.toString());
			apiPath = apiPath.concat("/user_type");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("PortalUserType.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create user type
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createUserType(request){
			if((request != null) && (!(request instanceof ZCRM.PortalUserType.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/portals/");
			apiPath = apiPath.concat(this.portal.toString());
			apiPath = apiPath.concat("/user_type");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("PortalUserType.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get user type
		 * @param {String} userTypeId A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getUserType(userTypeId){
			if((!(Object.prototype.toString.call(userTypeId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userTypeId EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/portals/");
			apiPath = apiPath.concat(this.portal.toString());
			apiPath = apiPath.concat("/user_type/");
			apiPath = apiPath.concat(userTypeId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("PortalUserType.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update user type
		 * @param {String} userTypeId A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateUserType(userTypeId, request){
			if((!(Object.prototype.toString.call(userTypeId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userTypeId EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.PortalUserType.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/portals/");
			apiPath = apiPath.concat(this.portal.toString());
			apiPath = apiPath.concat("/user_type/");
			apiPath = apiPath.concat(userTypeId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("PortalUserType.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete user type
		 * @param {String} userTypeId A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteUserType(userTypeId){
			if((!(Object.prototype.toString.call(userTypeId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userTypeId EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/portals/");
			apiPath = apiPath.concat(this.portal.toString());
			apiPath = apiPath.concat("/user_type/");
			apiPath = apiPath.concat(userTypeId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("PortalUserType.Model.ActionHandler", "application/json");

		}

	},

}