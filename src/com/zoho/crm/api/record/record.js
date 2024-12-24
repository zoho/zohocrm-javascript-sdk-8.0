ZCRM.Record = {
	Model : {
		DownloadHandler : class{
			constructor(){

			}


		},

		MassUpdateResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		CountHandler : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		FileHandler : class{
			constructor(){

			}


		},

		MassUpdateActionResponse : class{
			constructor(){

			}


		},

		MassUpdateResponse : class{
			constructor(){

			}


		},

		DeletedRecordsHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		MassUpdateActionHandler : class{
			constructor(){

			}


		},

		FileDetails : class{
			constructor(){

				this.createdTimeS=null;
				this.fileNameS=null;
				this.modifiedTimeS=null;
				this.createdByS=null;
				this.sizeS=null;
				this.id=null;
				this.ownerS=null;
				this.modifiedByS=null;
				this.fileIdS=null;
				this.delete1=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the createdTimeS
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTimeS()	{
				return this.createdTimeS;

			}

			/**
			 * The method to set the value to createdTimeS
			 * @param {OffsetDateTime} createdTimeS An instance of OffsetDateTime
			 */
			setCreatedTimeS(createdTimeS)	{
				if((createdTimeS != null) && (!(createdTimeS instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTimeS EXPECTED TYPE: Date", null, null);
				}
				this.createdTimeS = createdTimeS;
				this.keyModified.set("Created_Time__s", 1);

			}

			/**
			 * The method to get the fileNameS
			 * @returns {String} A String representing the fileNameS
			 */
			getFileNameS()	{
				return this.fileNameS;

			}

			/**
			 * The method to set the value to fileNameS
			 * @param {String} fileNameS A String
			 */
			setFileNameS(fileNameS)	{
				if((fileNameS != null) && (!(Object.prototype.toString.call(fileNameS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileNameS EXPECTED TYPE: String", null, null);
				}
				this.fileNameS = fileNameS;
				this.keyModified.set("File_Name__s", 1);

			}

			/**
			 * The method to get the modifiedTimeS
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTimeS()	{
				return this.modifiedTimeS;

			}

			/**
			 * The method to set the value to modifiedTimeS
			 * @param {OffsetDateTime} modifiedTimeS An instance of OffsetDateTime
			 */
			setModifiedTimeS(modifiedTimeS)	{
				if((modifiedTimeS != null) && (!(modifiedTimeS instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTimeS EXPECTED TYPE: Date", null, null);
				}
				this.modifiedTimeS = modifiedTimeS;
				this.keyModified.set("Modified_Time__s", 1);

			}

			/**
			 * The method to get the createdByS
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getCreatedByS()	{
				return this.createdByS;

			}

			/**
			 * The method to set the value to createdByS
			 * @param {MinifiedUser} createdByS An instance of MinifiedUser
			 */
			setCreatedByS(createdByS)	{
				if((createdByS != null) && (!(createdByS instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdByS EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.createdByS = createdByS;
				this.keyModified.set("Created_By__s", 1);

			}

			/**
			 * The method to get the sizeS
			 * @returns {String} A String representing the sizeS
			 */
			getSizeS()	{
				return this.sizeS;

			}

			/**
			 * The method to set the value to sizeS
			 * @param {String} sizeS A String
			 */
			setSizeS(sizeS)	{
				if((sizeS != null) && (!(Object.prototype.toString.call(sizeS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sizeS EXPECTED TYPE: String", null, null);
				}
				this.sizeS = sizeS;
				this.keyModified.set("Size__s", 1);

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
			 * The method to get the ownerS
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getOwnerS()	{
				return this.ownerS;

			}

			/**
			 * The method to set the value to ownerS
			 * @param {MinifiedUser} ownerS An instance of MinifiedUser
			 */
			setOwnerS(ownerS)	{
				if((ownerS != null) && (!(ownerS instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ownerS EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.ownerS = ownerS;
				this.keyModified.set("Owner__s", 1);

			}

			/**
			 * The method to get the modifiedByS
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getModifiedByS()	{
				return this.modifiedByS;

			}

			/**
			 * The method to set the value to modifiedByS
			 * @param {MinifiedUser} modifiedByS An instance of MinifiedUser
			 */
			setModifiedByS(modifiedByS)	{
				if((modifiedByS != null) && (!(modifiedByS instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedByS EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.modifiedByS = modifiedByS;
				this.keyModified.set("Modified_By__s", 1);

			}

			/**
			 * The method to get the fileIdS
			 * @returns {String} A String representing the fileIdS
			 */
			getFileIdS()	{
				return this.fileIdS;

			}

			/**
			 * The method to set the value to fileIdS
			 * @param {String} fileIdS A String
			 */
			setFileIdS(fileIdS)	{
				if((fileIdS != null) && (!(Object.prototype.toString.call(fileIdS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileIdS EXPECTED TYPE: String", null, null);
				}
				this.fileIdS = fileIdS;
				this.keyModified.set("File_Id__s", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {String} A String representing the delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {String} delete1 A String
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
				}
				this.delete1 = delete1;
				this.keyModified.set("_delete", 1);

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

		MultiSelectLookup : class{
			constructor(){

				this.id=null;
				this.fieldname=null;
				this.hasMore=null;
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
			 * The method to get the fieldname
			 * @returns {Map} A Map representing the fieldname
			 */
			getFieldname()	{
				return this.fieldname;

			}

			/**
			 * The method to set the value to fieldname
			 * @param {Map} fieldname A Map
			 */
			setFieldname(fieldname)	{
				if((fieldname != null) && (!(Object.prototype.toString.call(fieldname) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldname EXPECTED TYPE: Map", null, null);
				}
				this.fieldname = fieldname;
				this.keyModified.set("fieldName", 1);

			}

			/**
			 * The method to get the hasMore
			 * @returns {Map} A Map representing the hasMore
			 */
			getHasMore()	{
				return this.hasMore;

			}

			/**
			 * The method to set the value to hasMore
			 * @param {Map} hasMore A Map
			 */
			setHasMore(hasMore)	{
				if((hasMore != null) && (!(Object.prototype.toString.call(hasMore) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasMore EXPECTED TYPE: Map", null, null);
				}
				this.hasMore = hasMore;
				this.keyModified.set("$has_more", 1);

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

		Tax : class{
			constructor(){

				this.id=null;
				this.value=null;
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

		DeletedRecord : class{
			constructor(){

				this.deletedBy=null;
				this.id=null;
				this.displayName=null;
				this.type=null;
				this.createdBy=null;
				this.deletedTime=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the deletedBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getDeletedBy()	{
				return this.deletedBy;

			}

			/**
			 * The method to set the value to deletedBy
			 * @param {MinifiedUser} deletedBy An instance of MinifiedUser
			 */
			setDeletedBy(deletedBy)	{
				if((deletedBy != null) && (!(deletedBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletedBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.deletedBy = deletedBy;
				this.keyModified.set("deleted_by", 1);

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
			 * The method to get the displayName
			 * @returns {String} A String representing the displayName
			 */
			getDisplayName()	{
				return this.displayName;

			}

			/**
			 * The method to set the value to displayName
			 * @param {String} displayName A String
			 */
			setDisplayName(displayName)	{
				if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
				}
				this.displayName = displayName;
				this.keyModified.set("display_name", 1);

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
			 * The method to get the createdBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getCreatedBy()	{
				return this.createdBy;

			}

			/**
			 * The method to set the value to createdBy
			 * @param {MinifiedUser} createdBy An instance of MinifiedUser
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

			}

			/**
			 * The method to get the deletedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getDeletedTime()	{
				return this.deletedTime;

			}

			/**
			 * The method to set the value to deletedTime
			 * @param {OffsetDateTime} deletedTime An instance of OffsetDateTime
			 */
			setDeletedTime(deletedTime)	{
				if((deletedTime != null) && (!(deletedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletedTime EXPECTED TYPE: Date", null, null);
				}
				this.deletedTime = deletedTime;
				this.keyModified.set("deleted_time", 1);

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

		RecurringActivity : class{
			constructor(){

				this.rrule=null;
				this.exdate=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the rrule
			 * @returns {String} A String representing the rrule
			 */
			getRrule()	{
				return this.rrule;

			}

			/**
			 * The method to set the value to rrule
			 * @param {String} rrule A String
			 */
			setRrule(rrule)	{
				if((rrule != null) && (!(Object.prototype.toString.call(rrule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rrule EXPECTED TYPE: String", null, null);
				}
				this.rrule = rrule;
				this.keyModified.set("RRULE", 1);

			}

			/**
			 * The method to get the exdate
			 * @returns {String} A String representing the exdate
			 */
			getExdate()	{
				return this.exdate;

			}

			/**
			 * The method to set the value to exdate
			 * @param {String} exdate A String
			 */
			setExdate(exdate)	{
				if((exdate != null) && (!(Object.prototype.toString.call(exdate) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exdate EXPECTED TYPE: String", null, null);
				}
				this.exdate = exdate;
				this.keyModified.set("EXDATE", 1);

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

		MassUpdateTerritory : class{
			constructor(){

				this.id=null;
				this.includeChild=null;
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
			 * The method to get the includeChild
			 * @returns {Boolean} A Boolean representing the includeChild
			 */
			getIncludeChild()	{
				return this.includeChild;

			}

			/**
			 * The method to set the value to includeChild
			 * @param {Boolean} includeChild A Boolean
			 */
			setIncludeChild(includeChild)	{
				if((includeChild != null) && (!(Object.prototype.toString.call(includeChild) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: includeChild EXPECTED TYPE: Boolean", null, null);
				}
				this.includeChild = includeChild;
				this.keyModified.set("include_child", 1);

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

		MassUpdateResponseWrapper : class{
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

		Widget : class{
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

		ResponseWrapper : class{
			constructor(){

				this.data=null;
				this.info=null;
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
				if((info != null) && (!(info instanceof ZCRM.Record.Model.Info))){
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

		Reminder : class{
			constructor(){

				this.period=null;
				this.unit=null;
				this.time=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the period
			 * @returns {String} A String representing the period
			 */
			getPeriod()	{
				return this.period;

			}

			/**
			 * The method to set the value to period
			 * @param {String} period A String
			 */
			setPeriod(period)	{
				if((period != null) && (!(Object.prototype.toString.call(period) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: period EXPECTED TYPE: String", null, null);
				}
				this.period = period;
				this.keyModified.set("period", 1);

			}

			/**
			 * The method to get the unit
			 * @returns {Integer} An Integer representing the unit
			 */
			getUnit()	{
				return this.unit;

			}

			/**
			 * The method to set the value to unit
			 * @param {Integer} unit An Integer
			 */
			setUnit(unit)	{
				if((unit != null) && (!(Object.prototype.toString.call(unit) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unit EXPECTED TYPE: Integer", null, null);
				}
				this.unit = unit;
				this.keyModified.set("unit", 1);

			}

			/**
			 * The method to get the time
			 * @returns {String} A String representing the time
			 */
			getTime()	{
				return this.time;

			}

			/**
			 * The method to set the value to time
			 * @param {String} time A String
			 */
			setTime(time)	{
				if((time != null) && (!(Object.prototype.toString.call(time) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: time EXPECTED TYPE: String", null, null);
				}
				this.time = time;
				this.keyModified.set("time", 1);

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

		CountWrapper : class{
			constructor(){

				this.count=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the count
			 * @returns {Long} A BigInt representing the count
			 */
			getCount()	{
				return this.count;

			}

			/**
			 * The method to set the value to count
			 * @param {Long} count A BigInt
			 */
			setCount(count)	{
				if((count != null) && (!(Object.prototype.toString.call(count) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: BigInt", null, null);
				}
				this.count = count;
				this.keyModified.set("count", 1);

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

		Options : class{
			constructor(){

			}



		},

		RecordLockLockSourceS : class{


		},

		UsersTimeFormat : class{


		},

		UsersDateFormat : class{


		},

		UsersDecimalSeparator : class{


		},

		UsersNumberSeparator : class{


		},

		UsersNameFormatS : class{


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

		LineTax : class{
			constructor(){

				this.percentage=null;
				this.name=null;
				this.id=null;
				this.value=null;
				this.displayName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the percentage
			 * @returns {Double} A Float representing the percentage
			 */
			getPercentage()	{
				return this.percentage;

			}

			/**
			 * The method to set the value to percentage
			 * @param {Double} percentage A Float
			 */
			setPercentage(percentage)	{
				if((percentage != null) && (!(Object.prototype.toString.call(percentage) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: percentage EXPECTED TYPE: Float", null, null);
				}
				this.percentage = percentage;
				this.keyModified.set("percentage", 1);

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
			 * The method to get the value
			 * @returns {Double} A Float representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Double} value A Float
			 */
			setValue(value)	{
				if((value != null) && (!(Object.prototype.toString.call(value) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: Float", null, null);
				}
				this.value = value;
				this.keyModified.set("value", 1);

			}

			/**
			 * The method to get the displayName
			 * @returns {String} A String representing the displayName
			 */
			getDisplayName()	{
				return this.displayName;

			}

			/**
			 * The method to set the value to displayName
			 * @param {String} displayName A String
			 */
			setDisplayName(displayName)	{
				if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
				}
				this.displayName = displayName;
				this.keyModified.set("display_name", 1);

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

		Territory : class{
			constructor(){

				this.assigned=null;
				this.name=null;
				this.id=null;
				this.assignedTime=null;
				this.assignedBy=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the assigned
			 * @returns {String} A String representing the assigned
			 */
			getAssigned()	{
				return this.assigned;

			}

			/**
			 * The method to set the value to assigned
			 * @param {String} assigned A String
			 */
			setAssigned(assigned)	{
				if((assigned != null) && (!(Object.prototype.toString.call(assigned) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assigned EXPECTED TYPE: String", null, null);
				}
				this.assigned = assigned;
				this.keyModified.set("$assigned", 1);

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
				this.keyModified.set("Name", 1);

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
			 * The method to get the assignedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getAssignedTime()	{
				return this.assignedTime;

			}

			/**
			 * The method to set the value to assignedTime
			 * @param {OffsetDateTime} assignedTime An instance of OffsetDateTime
			 */
			setAssignedTime(assignedTime)	{
				if((assignedTime != null) && (!(assignedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignedTime EXPECTED TYPE: Date", null, null);
				}
				this.assignedTime = assignedTime;
				this.keyModified.set("$assigned_time", 1);

			}

			/**
			 * The method to get the assignedBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getAssignedBy()	{
				return this.assignedBy;

			}

			/**
			 * The method to set the value to assignedBy
			 * @param {MinifiedUser} assignedBy An instance of MinifiedUser
			 */
			setAssignedBy(assignedBy)	{
				if((assignedBy != null) && (!(assignedBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignedBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.assignedBy = assignedBy;
				this.keyModified.set("$assigned_by", 1);

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
				this.groupOperator=null;
				this.group=null;
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
			 * @returns {String} A String representing the field
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {String} field A String
			 */
			setField(field)	{
				if((field != null) && (!(Object.prototype.toString.call(field) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: String", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

			}

			/**
			 * The method to get the value
			 * @returns {Object} An Object representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Object} value An Object
			 */
			setValue(value)	{
				this.value = value;
				this.keyModified.set("value", 1);

			}

			/**
			 * The method to get the groupOperator
			 * @returns {Choice} An instance of Choice
			 */
			getGroupOperator()	{
				return this.groupOperator;

			}

			/**
			 * The method to set the value to groupOperator
			 * @param {Choice} groupOperator An instance of Choice
			 */
			setGroupOperator(groupOperator)	{
				if((groupOperator != null) && (!(groupOperator instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groupOperator EXPECTED TYPE: Choice", null, null);
				}
				this.groupOperator = groupOperator;
				this.keyModified.set("group_operator", 1);

			}

			/**
			 * The method to get the group
			 * @returns {List} An Array representing the group
			 */
			getGroup()	{
				return this.group;

			}

			/**
			 * The method to set the value to group
			 * @param {List} group An Array
			 */
			setGroup(group)	{
				if((group != null) && (!(Object.prototype.toString.call(group) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: group EXPECTED TYPE: Array", null, null);
				}
				this.group = group;
				this.keyModified.set("group", 1);

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

		MassUpdate : class{
			constructor(){

				this.status=null;
				this.failedCount=null;
				this.updatedCount=null;
				this.notUpdatedCount=null;
				this.totalCount=null;
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
				this.keyModified.set("Status", 1);

			}

			/**
			 * The method to get the failedCount
			 * @returns {Integer} An Integer representing the failedCount
			 */
			getFailedCount()	{
				return this.failedCount;

			}

			/**
			 * The method to set the value to failedCount
			 * @param {Integer} failedCount An Integer
			 */
			setFailedCount(failedCount)	{
				if((failedCount != null) && (!(Object.prototype.toString.call(failedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedCount EXPECTED TYPE: Integer", null, null);
				}
				this.failedCount = failedCount;
				this.keyModified.set("Failed_Count", 1);

			}

			/**
			 * The method to get the updatedCount
			 * @returns {Integer} An Integer representing the updatedCount
			 */
			getUpdatedCount()	{
				return this.updatedCount;

			}

			/**
			 * The method to set the value to updatedCount
			 * @param {Integer} updatedCount An Integer
			 */
			setUpdatedCount(updatedCount)	{
				if((updatedCount != null) && (!(Object.prototype.toString.call(updatedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: updatedCount EXPECTED TYPE: Integer", null, null);
				}
				this.updatedCount = updatedCount;
				this.keyModified.set("Updated_Count", 1);

			}

			/**
			 * The method to get the notUpdatedCount
			 * @returns {Integer} An Integer representing the notUpdatedCount
			 */
			getNotUpdatedCount()	{
				return this.notUpdatedCount;

			}

			/**
			 * The method to set the value to notUpdatedCount
			 * @param {Integer} notUpdatedCount An Integer
			 */
			setNotUpdatedCount(notUpdatedCount)	{
				if((notUpdatedCount != null) && (!(Object.prototype.toString.call(notUpdatedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notUpdatedCount EXPECTED TYPE: Integer", null, null);
				}
				this.notUpdatedCount = notUpdatedCount;
				this.keyModified.set("Not_Updated_Count", 1);

			}

			/**
			 * The method to get the totalCount
			 * @returns {Integer} An Integer representing the totalCount
			 */
			getTotalCount()	{
				return this.totalCount;

			}

			/**
			 * The method to set the value to totalCount
			 * @param {Integer} totalCount An Integer
			 */
			setTotalCount(totalCount)	{
				if((totalCount != null) && (!(Object.prototype.toString.call(totalCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalCount EXPECTED TYPE: Integer", null, null);
				}
				this.totalCount = totalCount;
				this.keyModified.set("Total_Count", 1);

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

				this.call=null;
				this.perPage=null;
				this.nextPageToken=null;
				this.count=null;
				this.page=null;
				this.previousPageToken=null;
				this.pageTokenExpiry=null;
				this.email=null;
				this.moreRecords=null;
				this.sortBy=null;
				this.sortOrder=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the call
			 * @returns {Boolean} A Boolean representing the call
			 */
			getCall()	{
				return this.call;

			}

			/**
			 * The method to set the value to call
			 * @param {Boolean} call A Boolean
			 */
			setCall(call)	{
				if((call != null) && (!(Object.prototype.toString.call(call) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: call EXPECTED TYPE: Boolean", null, null);
				}
				this.call = call;
				this.keyModified.set("call", 1);

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
			 * The method to get the nextPageToken
			 * @returns {String} A String representing the nextPageToken
			 */
			getNextPageToken()	{
				return this.nextPageToken;

			}

			/**
			 * The method to set the value to nextPageToken
			 * @param {String} nextPageToken A String
			 */
			setNextPageToken(nextPageToken)	{
				if((nextPageToken != null) && (!(Object.prototype.toString.call(nextPageToken) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextPageToken EXPECTED TYPE: String", null, null);
				}
				this.nextPageToken = nextPageToken;
				this.keyModified.set("next_page_token", 1);

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
			 * The method to get the previousPageToken
			 * @returns {String} A String representing the previousPageToken
			 */
			getPreviousPageToken()	{
				return this.previousPageToken;

			}

			/**
			 * The method to set the value to previousPageToken
			 * @param {String} previousPageToken A String
			 */
			setPreviousPageToken(previousPageToken)	{
				if((previousPageToken != null) && (!(Object.prototype.toString.call(previousPageToken) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previousPageToken EXPECTED TYPE: String", null, null);
				}
				this.previousPageToken = previousPageToken;
				this.keyModified.set("previous_page_token", 1);

			}

			/**
			 * The method to get the pageTokenExpiry
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getPageTokenExpiry()	{
				return this.pageTokenExpiry;

			}

			/**
			 * The method to set the value to pageTokenExpiry
			 * @param {OffsetDateTime} pageTokenExpiry An instance of OffsetDateTime
			 */
			setPageTokenExpiry(pageTokenExpiry)	{
				if((pageTokenExpiry != null) && (!(pageTokenExpiry instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pageTokenExpiry EXPECTED TYPE: Date", null, null);
				}
				this.pageTokenExpiry = pageTokenExpiry;
				this.keyModified.set("page_token_expiry", 1);

			}

			/**
			 * The method to get the email
			 * @returns {Boolean} A Boolean representing the email
			 */
			getEmail()	{
				return this.email;

			}

			/**
			 * The method to set the value to email
			 * @param {Boolean} email A Boolean
			 */
			setEmail(email)	{
				if((email != null) && (!(Object.prototype.toString.call(email) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: Boolean", null, null);
				}
				this.email = email;
				this.keyModified.set("email", 1);

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
			 * The method to get the sortBy
			 * @returns {String} A String representing the sortBy
			 */
			getSortBy()	{
				return this.sortBy;

			}

			/**
			 * The method to set the value to sortBy
			 * @param {String} sortBy A String
			 */
			setSortBy(sortBy)	{
				if((sortBy != null) && (!(Object.prototype.toString.call(sortBy) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortBy EXPECTED TYPE: String", null, null);
				}
				this.sortBy = sortBy;
				this.keyModified.set("sort_by", 1);

			}

			/**
			 * The method to get the sortOrder
			 * @returns {String} A String representing the sortOrder
			 */
			getSortOrder()	{
				return this.sortOrder;

			}

			/**
			 * The method to set the value to sortOrder
			 * @param {String} sortOrder A String
			 */
			setSortOrder(sortOrder)	{
				if((sortOrder != null) && (!(Object.prototype.toString.call(sortOrder) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrder EXPECTED TYPE: String", null, null);
				}
				this.sortOrder = sortOrder;
				this.keyModified.set("sort_order", 1);

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

		Record : class{
			constructor(){

				this.keyValues=new Map();
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.getKeyValue("id");

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.addKeyValue("id", id);

			}

			/**
			 * The method to get the createdBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getCreatedBy()	{
				return this.getKeyValue("Created_By");

			}

			/**
			 * The method to set the value to createdBy
			 * @param {MinifiedUser} createdBy An instance of MinifiedUser
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.addKeyValue("Created_By", createdBy);

			}

			/**
			 * The method to get the createdTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTime()	{
				return this.getKeyValue("Created_Time");

			}

			/**
			 * The method to set the value to createdTime
			 * @param {OffsetDateTime} createdTime An instance of OffsetDateTime
			 */
			setCreatedTime(createdTime)	{
				if((createdTime != null) && (!(createdTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
				}
				this.addKeyValue("Created_Time", createdTime);

			}

			/**
			 * The method to get the modifiedBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getModifiedBy()	{
				return this.getKeyValue("Modified_By");

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.addKeyValue("Modified_By", modifiedBy);

			}

			/**
			 * The method to get the modifiedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTime()	{
				return this.getKeyValue("Modified_Time");

			}

			/**
			 * The method to set the value to modifiedTime
			 * @param {OffsetDateTime} modifiedTime An instance of OffsetDateTime
			 */
			setModifiedTime(modifiedTime)	{
				if((modifiedTime != null) && (!(modifiedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
				}
				this.addKeyValue("Modified_Time", modifiedTime);

			}

			/**
			 * The method to get the tag
			 * @returns {List} An Array representing the tag
			 */
			getTag()	{
				return this.getKeyValue("Tag");

			}

			/**
			 * The method to set the value to tag
			 * @param {List} tag An Array
			 */
			setTag(tag)	{
				if((tag != null) && (!(Object.prototype.toString.call(tag) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tag EXPECTED TYPE: Array", null, null);
				}
				this.addKeyValue("Tag", tag);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.getKeyValue("name");

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("name", name);

			}

			/**
			 * The method to add field value
			 * @param {Field} field An instance of Field
			 * @param {*} value An object
			 */
			addFieldValue(field, value)	{
				if((field != null) && (!(field instanceof ZCRM.Record.Model.Field))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
				}
				this.addKeyValue(field.getAPIName(), value);

			}

			/**
			 * The method to add key value
			 * @param {String} apiName A String
			 * @param {Object} value An Object
			 */
			addKeyValue(apiName, value)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.keyValues.set(apiName, value);
				this.keyModified.set(apiName, 1);

			}

			/**
			 * The method to get key value
			 * @param {String} apiName A String
			 * @returns {Object} An Object representing the keyValue
			 */
			getKeyValue(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				if(this.keyValues.has(apiName)){
					return this.keyValues.get(apiName);
				}
				return null;

			}

			/**
			 * The method to get key values
			 * @returns {HashMap} A Map representing the keyValues
			 */
			getKeyValues()	{
				return this.keyValues;

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

		RemindAt : class{
			constructor(){

				this.alarm=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the alarm
			 * @returns {String} A String representing the alarm
			 */
			getAlarm()	{
				return this.alarm;

			}

			/**
			 * The method to set the value to alarm
			 * @param {String} alarm A String
			 */
			setAlarm(alarm)	{
				if((alarm != null) && (!(Object.prototype.toString.call(alarm) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alarm EXPECTED TYPE: String", null, null);
				}
				this.alarm = alarm;
				this.keyModified.set("ALARM", 1);

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

		MassUpdateSuccessResponse : class{
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

		Comment : class{
			constructor(){

				this.commentedBy=null;
				this.commentedTime=null;
				this.commentContent=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the commentedBy
			 * @returns {String} A String representing the commentedBy
			 */
			getCommentedBy()	{
				return this.commentedBy;

			}

			/**
			 * The method to set the value to commentedBy
			 * @param {String} commentedBy A String
			 */
			setCommentedBy(commentedBy)	{
				if((commentedBy != null) && (!(Object.prototype.toString.call(commentedBy) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: commentedBy EXPECTED TYPE: String", null, null);
				}
				this.commentedBy = commentedBy;
				this.keyModified.set("commented_by", 1);

			}

			/**
			 * The method to get the commentedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCommentedTime()	{
				return this.commentedTime;

			}

			/**
			 * The method to set the value to commentedTime
			 * @param {OffsetDateTime} commentedTime An instance of OffsetDateTime
			 */
			setCommentedTime(commentedTime)	{
				if((commentedTime != null) && (!(commentedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: commentedTime EXPECTED TYPE: Date", null, null);
				}
				this.commentedTime = commentedTime;
				this.keyModified.set("commented_time", 1);

			}

			/**
			 * The method to get the commentContent
			 * @returns {String} A String representing the commentContent
			 */
			getCommentContent()	{
				return this.commentContent;

			}

			/**
			 * The method to set the value to commentContent
			 * @param {String} commentContent A String
			 */
			setCommentContent(commentContent)	{
				if((commentContent != null) && (!(Object.prototype.toString.call(commentContent) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: commentContent EXPECTED TYPE: String", null, null);
				}
				this.commentContent = commentContent;
				this.keyModified.set("comment_content", 1);

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

		TimeRange : class{
			constructor(){

				this.from=null;
				this.to=null;
				this.keyModified=new Map();
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
				this.keyModified.set("From", 1);

			}

			/**
			 * The method to get the to
			 * @returns {String} A String representing the to
			 */
			getTo()	{
				return this.to;

			}

			/**
			 * The method to set the value to to
			 * @param {String} to A String
			 */
			setTo(to)	{
				if((to != null) && (!(Object.prototype.toString.call(to) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: String", null, null);
				}
				this.to = to;
				this.keyModified.set("To", 1);

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

		DeletedRecordsWrapper : class{
			constructor(){

				this.data=null;
				this.info=null;
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
				if((info != null) && (!(info instanceof ZCRM.Record.Model.Info))){
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

		Field : class{


			/**
			 * Creates an instance of Field with the given parameters
			 * @param {String} apiName A String
			 */
			constructor(apiName){
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
								this.apiName = apiName;

			}

			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

			}

		},

		DuplicateRecord : class{
			constructor(){

				this.owner=null;
				this.module=null;
				this.id=null;
				this.keyModified=new Map();
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
				this.keyModified.set("Owner", 1);

			}

			/**
			 * The method to get the module
			 * @returns {MinifiedModule} An instance of MinifiedModule
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {MinifiedModule} module An instance of MinifiedModule
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Module.Model.MinifiedModule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: MinifiedModule", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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

		SuccessResponse : class{
			constructor(){

				this.status=null;
				this.code=null;
				this.duplicateField=null;
				this.action=null;
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
			 * The method to get the duplicateField
			 * @returns {String} A String representing the duplicateField
			 */
			getDuplicateField()	{
				return this.duplicateField;

			}

			/**
			 * The method to set the value to duplicateField
			 * @param {String} duplicateField A String
			 */
			setDuplicateField(duplicateField)	{
				if((duplicateField != null) && (!(Object.prototype.toString.call(duplicateField) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: duplicateField EXPECTED TYPE: String", null, null);
				}
				this.duplicateField = duplicateField;
				this.keyModified.set("duplicate_field", 1);

			}

			/**
			 * The method to get the action
			 * @returns {Choice} An instance of Choice
			 */
			getAction()	{
				return this.action;

			}

			/**
			 * The method to set the value to action
			 * @param {Choice} action An instance of Choice
			 */
			setAction(action)	{
				if((action != null) && (!(action instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: Choice", null, null);
				}
				this.action = action;
				this.keyModified.set("action", 1);

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

		BodyWrapper : class{
			constructor(){

				this.data=null;
				this.trigger=null;
				this.process=null;
				this.duplicateCheckFields=null;
				this.wfTrigger=null;
				this.larId=null;
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
			 * The method to get the trigger
			 * @returns {List} An Array representing the trigger
			 */
			getTrigger()	{
				return this.trigger;

			}

			/**
			 * The method to set the value to trigger
			 * @param {List} trigger An Array
			 */
			setTrigger(trigger)	{
				if((trigger != null) && (!(Object.prototype.toString.call(trigger) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trigger EXPECTED TYPE: Array", null, null);
				}
				this.trigger = trigger;
				this.keyModified.set("trigger", 1);

			}

			/**
			 * The method to get the process
			 * @returns {List} An Array representing the process
			 */
			getProcess()	{
				return this.process;

			}

			/**
			 * The method to set the value to process
			 * @param {List} process An Array
			 */
			setProcess(process)	{
				if((process != null) && (!(Object.prototype.toString.call(process) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: process EXPECTED TYPE: Array", null, null);
				}
				this.process = process;
				this.keyModified.set("process", 1);

			}

			/**
			 * The method to get the duplicateCheckFields
			 * @returns {List} An Array representing the duplicateCheckFields
			 */
			getDuplicateCheckFields()	{
				return this.duplicateCheckFields;

			}

			/**
			 * The method to set the value to duplicateCheckFields
			 * @param {List} duplicateCheckFields An Array
			 */
			setDuplicateCheckFields(duplicateCheckFields)	{
				if((duplicateCheckFields != null) && (!(Object.prototype.toString.call(duplicateCheckFields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: duplicateCheckFields EXPECTED TYPE: Array", null, null);
				}
				this.duplicateCheckFields = duplicateCheckFields;
				this.keyModified.set("duplicate_check_fields", 1);

			}

			/**
			 * The method to get the wfTrigger
			 * @returns {String} A String representing the wfTrigger
			 */
			getWfTrigger()	{
				return this.wfTrigger;

			}

			/**
			 * The method to set the value to wfTrigger
			 * @param {String} wfTrigger A String
			 */
			setWfTrigger(wfTrigger)	{
				if((wfTrigger != null) && (!(Object.prototype.toString.call(wfTrigger) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wfTrigger EXPECTED TYPE: String", null, null);
				}
				this.wfTrigger = wfTrigger;
				this.keyModified.set("wf_trigger", 1);

			}

			/**
			 * The method to get the larId
			 * @returns {String} A String representing the larId
			 */
			getLarId()	{
				return this.larId;

			}

			/**
			 * The method to set the value to larId
			 * @param {String} larId A String
			 */
			setLarId(larId)	{
				if((larId != null) && (!(Object.prototype.toString.call(larId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: larId EXPECTED TYPE: String", null, null);
				}
				this.larId = larId;
				this.keyModified.set("lar_id", 1);

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

		MassUpdateBodyWrapper : class{
			constructor(){

				this.data=null;
				this.cvid=null;
				this.ids=null;
				this.territory=null;
				this.overWrite=null;
				this.criteria=null;
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
			 * The method to get the cvid
			 * @returns {String} A String representing the cvid
			 */
			getCvid()	{
				return this.cvid;

			}

			/**
			 * The method to set the value to cvid
			 * @param {String} cvid A String
			 */
			setCvid(cvid)	{
				if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: String", null, null);
				}
				this.cvid = cvid;
				this.keyModified.set("cvid", 1);

			}

			/**
			 * The method to get the ids
			 * @returns {List} An Array representing the ids
			 */
			getIds()	{
				return this.ids;

			}

			/**
			 * The method to set the value to ids
			 * @param {List} ids An Array
			 */
			setIds(ids)	{
				if((ids != null) && (!(Object.prototype.toString.call(ids) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ids EXPECTED TYPE: Array", null, null);
				}
				this.ids = ids;
				this.keyModified.set("ids", 1);

			}

			/**
			 * The method to get the territory
			 * @returns {MassUpdateTerritory} An instance of MassUpdateTerritory
			 */
			getTerritory()	{
				return this.territory;

			}

			/**
			 * The method to set the value to territory
			 * @param {MassUpdateTerritory} territory An instance of MassUpdateTerritory
			 */
			setTerritory(territory)	{
				if((territory != null) && (!(territory instanceof ZCRM.Record.Model.MassUpdateTerritory))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: MassUpdateTerritory", null, null);
				}
				this.territory = territory;
				this.keyModified.set("territory", 1);

			}

			/**
			 * The method to get the overWrite
			 * @returns {Boolean} A Boolean representing the overWrite
			 */
			getOverWrite()	{
				return this.overWrite;

			}

			/**
			 * The method to set the value to overWrite
			 * @param {Boolean} overWrite A Boolean
			 */
			setOverWrite(overWrite)	{
				if((overWrite != null) && (!(Object.prototype.toString.call(overWrite) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overWrite EXPECTED TYPE: Boolean", null, null);
				}
				this.overWrite = overWrite;
				this.keyModified.set("over_write", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {List} An Array representing the criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {List} criteria An Array
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(Object.prototype.toString.call(criteria) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Array", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

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

		MassUpdateActionWrapper : class{
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

		MultiSelectPicklist : class{
			constructor(){

				this.id=null;
				this.fieldname=null;
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
			 * The method to get the fieldname
			 * @returns {Map} A Map representing the fieldname
			 */
			getFieldname()	{
				return this.fieldname;

			}

			/**
			 * The method to set the value to fieldname
			 * @param {Map} fieldname A Map
			 */
			setFieldname(fieldname)	{
				if((fieldname != null) && (!(Object.prototype.toString.call(fieldname) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldname EXPECTED TYPE: Map", null, null);
				}
				this.fieldname = fieldname;
				this.keyModified.set("fieldName", 1);

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

		Wizard : class{
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

		ImageUpload : class{
			constructor(){

				this.previewIdS=null;
				this.fileNameS=null;
				this.descriptionS=null;
				this.sizeS=null;
				this.id=null;
				this.sequenceNumberS=null;
				this.stateS=null;
				this.fileIdS=null;
				this.delete1=null;
				this.createdTimeS=null;
				this.modifiedTimeS=null;
				this.createdByS=null;
				this.ownerS=null;
				this.modifiedByS=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the previewIdS
			 * @returns {String} A String representing the previewIdS
			 */
			getPreviewIdS()	{
				return this.previewIdS;

			}

			/**
			 * The method to set the value to previewIdS
			 * @param {String} previewIdS A String
			 */
			setPreviewIdS(previewIdS)	{
				if((previewIdS != null) && (!(Object.prototype.toString.call(previewIdS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previewIdS EXPECTED TYPE: String", null, null);
				}
				this.previewIdS = previewIdS;
				this.keyModified.set("Preview_Id__s", 1);

			}

			/**
			 * The method to get the fileNameS
			 * @returns {String} A String representing the fileNameS
			 */
			getFileNameS()	{
				return this.fileNameS;

			}

			/**
			 * The method to set the value to fileNameS
			 * @param {String} fileNameS A String
			 */
			setFileNameS(fileNameS)	{
				if((fileNameS != null) && (!(Object.prototype.toString.call(fileNameS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileNameS EXPECTED TYPE: String", null, null);
				}
				this.fileNameS = fileNameS;
				this.keyModified.set("File_Name__s", 1);

			}

			/**
			 * The method to get the descriptionS
			 * @returns {String} A String representing the descriptionS
			 */
			getDescriptionS()	{
				return this.descriptionS;

			}

			/**
			 * The method to set the value to descriptionS
			 * @param {String} descriptionS A String
			 */
			setDescriptionS(descriptionS)	{
				if((descriptionS != null) && (!(Object.prototype.toString.call(descriptionS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: descriptionS EXPECTED TYPE: String", null, null);
				}
				this.descriptionS = descriptionS;
				this.keyModified.set("Description__s", 1);

			}

			/**
			 * The method to get the sizeS
			 * @returns {String} A String representing the sizeS
			 */
			getSizeS()	{
				return this.sizeS;

			}

			/**
			 * The method to set the value to sizeS
			 * @param {String} sizeS A String
			 */
			setSizeS(sizeS)	{
				if((sizeS != null) && (!(Object.prototype.toString.call(sizeS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sizeS EXPECTED TYPE: String", null, null);
				}
				this.sizeS = sizeS;
				this.keyModified.set("Size__s", 1);

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
			 * The method to get the sequenceNumberS
			 * @returns {Long} A BigInt representing the sequenceNumberS
			 */
			getSequenceNumberS()	{
				return this.sequenceNumberS;

			}

			/**
			 * The method to set the value to sequenceNumberS
			 * @param {Long} sequenceNumberS A BigInt
			 */
			setSequenceNumberS(sequenceNumberS)	{
				if((sequenceNumberS != null) && (!(Object.prototype.toString.call(sequenceNumberS) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumberS EXPECTED TYPE: BigInt", null, null);
				}
				this.sequenceNumberS = sequenceNumberS;
				this.keyModified.set("Sequence_Number__s", 1);

			}

			/**
			 * The method to get the stateS
			 * @returns {String} A String representing the stateS
			 */
			getStateS()	{
				return this.stateS;

			}

			/**
			 * The method to set the value to stateS
			 * @param {String} stateS A String
			 */
			setStateS(stateS)	{
				if((stateS != null) && (!(Object.prototype.toString.call(stateS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: stateS EXPECTED TYPE: String", null, null);
				}
				this.stateS = stateS;
				this.keyModified.set("State__s", 1);

			}

			/**
			 * The method to get the fileIdS
			 * @returns {String} A String representing the fileIdS
			 */
			getFileIdS()	{
				return this.fileIdS;

			}

			/**
			 * The method to set the value to fileIdS
			 * @param {String} fileIdS A String
			 */
			setFileIdS(fileIdS)	{
				if((fileIdS != null) && (!(Object.prototype.toString.call(fileIdS) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileIdS EXPECTED TYPE: String", null, null);
				}
				this.fileIdS = fileIdS;
				this.keyModified.set("File_Id__s", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {String} A String representing the delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {String} delete1 A String
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
				}
				this.delete1 = delete1;
				this.keyModified.set("_delete", 1);

			}

			/**
			 * The method to get the createdTimeS
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTimeS()	{
				return this.createdTimeS;

			}

			/**
			 * The method to set the value to createdTimeS
			 * @param {OffsetDateTime} createdTimeS An instance of OffsetDateTime
			 */
			setCreatedTimeS(createdTimeS)	{
				if((createdTimeS != null) && (!(createdTimeS instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTimeS EXPECTED TYPE: Date", null, null);
				}
				this.createdTimeS = createdTimeS;
				this.keyModified.set("Created_Time__s", 1);

			}

			/**
			 * The method to get the modifiedTimeS
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTimeS()	{
				return this.modifiedTimeS;

			}

			/**
			 * The method to set the value to modifiedTimeS
			 * @param {OffsetDateTime} modifiedTimeS An instance of OffsetDateTime
			 */
			setModifiedTimeS(modifiedTimeS)	{
				if((modifiedTimeS != null) && (!(modifiedTimeS instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTimeS EXPECTED TYPE: Date", null, null);
				}
				this.modifiedTimeS = modifiedTimeS;
				this.keyModified.set("Modified_Time__s", 1);

			}

			/**
			 * The method to get the createdByS
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getCreatedByS()	{
				return this.createdByS;

			}

			/**
			 * The method to set the value to createdByS
			 * @param {MinifiedUser} createdByS An instance of MinifiedUser
			 */
			setCreatedByS(createdByS)	{
				if((createdByS != null) && (!(createdByS instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdByS EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.createdByS = createdByS;
				this.keyModified.set("Created_By__s", 1);

			}

			/**
			 * The method to get the ownerS
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getOwnerS()	{
				return this.ownerS;

			}

			/**
			 * The method to set the value to ownerS
			 * @param {MinifiedUser} ownerS An instance of MinifiedUser
			 */
			setOwnerS(ownerS)	{
				if((ownerS != null) && (!(ownerS instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ownerS EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.ownerS = ownerS;
				this.keyModified.set("Owner__s", 1);

			}

			/**
			 * The method to get the modifiedByS
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getModifiedByS()	{
				return this.modifiedByS;

			}

			/**
			 * The method to set the value to modifiedByS
			 * @param {MinifiedUser} modifiedByS An instance of MinifiedUser
			 */
			setModifiedByS(modifiedByS)	{
				if((modifiedByS != null) && (!(modifiedByS instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedByS EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.modifiedByS = modifiedByS;
				this.keyModified.set("Modified_By__s", 1);

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
		 * Creates an instance of RecordOperations with the given parameters
		 * @param {String} moduleAPIName A String
		 */
		constructor(moduleAPIName){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get record
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRecord(id, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update record
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRecord(id, request, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete record
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRecord(id, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRecords(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create records
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createRecords(request, headerInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update records
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRecords(request, headerInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRecords(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to upsert records
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async upsertRecords(request, headerInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/upsert");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get deleted records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getDeletedRecords(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/deleted");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.DeletedRecordsHandler", "application/json");

		}

		/**
		 * The method to search records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async searchRecords(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/search");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get photo
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getPhoto(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.DownloadHandler", "application/x-download");

		}

		/**
		 * The method to upload photo
		 * @param {Long} id A BigInt
		 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async uploadPhoto(id, request, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.FileBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("multipart/form-data");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			await Utility.verifyPhotoSupport(this.moduleAPIName);
			return handlerInstance.apiCall("Record.Model.FileHandler", "application/json");

		}

		/**
		 * The method to delete photo
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deletePhoto(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.FileHandler", "application/json");

		}

		/**
		 * The method to mass update records
		 * @param {MassUpdateBodyWrapper} request An instance of MassUpdateBodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async massUpdateRecords(request){
			if((request != null) && (!(request instanceof ZCRM.Record.Model.MassUpdateBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MassUpdateBodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/mass_update");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.MassUpdateActionHandler", "application/json");

		}

		/**
		 * The method to get mass update status
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getMassUpdateStatus(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/mass_update");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.MassUpdateResponseHandler", "application/json");

		}

		/**
		 * The method to assign territories to multiple records
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async assignTerritoriesToMultipleRecords(request){
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/assign_territories");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to assign territory to record
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async assignTerritoryToRecord(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/assign_territories");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to remove territories from multiple records
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async removeTerritoriesFromMultipleRecords(request){
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/remove_territories");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to remove territories from record
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async removeTerritoriesFromRecord(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/remove_territories");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to record count
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async recordCount(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/count");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Record.Model.CountHandler", "application/json");

		}

		/**
		 * The method to get record using external id
		 * @param {String} externalFieldValue A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRecordUsingExternalId(externalFieldValue, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalFieldValue.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update record using external id
		 * @param {String} externalFieldValue A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRecordUsingExternalId(externalFieldValue, request, headerInstance=null){
			if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalFieldValue.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setHeader(headerInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete record using external id
		 * @param {String} externalFieldValue A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRecordUsingExternalId(externalFieldValue, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalFieldValue.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get full data for rich text
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getFullDataForRichText(id, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/fetch_full_data");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get rich text records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRichTextRecords(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/fetch_full_data");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to clone record
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async cloneRecord(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/clone");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setModuleAPIName(this.moduleAPIName);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

	},

}