ZCRM.Layout = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		Layouts : class{
			constructor(){

				this.displayType=null;
				this.apiName=null;
				this.hasMoreProfiles=null;
				this.createdTime=null;
				this.modifiedTime=null;
				this.visible=null;
				this.source=null;
				this.id=null;
				this.name=null;
				this.displayLabel=null;
				this.mode=null;
				this.subformProperties=null;
				this.status=null;
				this.showBusinessCard=null;
				this.generatedType=null;
				this.createdFor=null;
				this.convertMapping=null;
				this.modifiedBy=null;
				this.profiles=null;
				this.createdBy=null;
				this.sections=null;
				this.actionsAllowed=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the displayType
			 * @returns {Integer} An Integer representing the displayType
			 */
			getDisplayType()	{
				return this.displayType;

			}

			/**
			 * The method to set the value to displayType
			 * @param {Integer} displayType An Integer
			 */
			setDisplayType(displayType)	{
				if((displayType != null) && (!(Object.prototype.toString.call(displayType) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayType EXPECTED TYPE: Integer", null, null);
				}
				this.displayType = displayType;
				this.keyModified.set("display_type", 1);

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
			 * The method to get the hasMoreProfiles
			 * @returns {Boolean} A Boolean representing the hasMoreProfiles
			 */
			getHasMoreProfiles()	{
				return this.hasMoreProfiles;

			}

			/**
			 * The method to set the value to hasMoreProfiles
			 * @param {Boolean} hasMoreProfiles A Boolean
			 */
			setHasMoreProfiles(hasMoreProfiles)	{
				if((hasMoreProfiles != null) && (!(Object.prototype.toString.call(hasMoreProfiles) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasMoreProfiles EXPECTED TYPE: Boolean", null, null);
				}
				this.hasMoreProfiles = hasMoreProfiles;
				this.keyModified.set("has_more_profiles", 1);

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
			 * The method to get the visible
			 * @returns {Boolean} A Boolean representing the visible
			 */
			getVisible()	{
				return this.visible;

			}

			/**
			 * The method to set the value to visible
			 * @param {Boolean} visible A Boolean
			 */
			setVisible(visible)	{
				if((visible != null) && (!(Object.prototype.toString.call(visible) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visible EXPECTED TYPE: Boolean", null, null);
				}
				this.visible = visible;
				this.keyModified.set("visible", 1);

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
			 * The method to get the mode
			 * @returns {String} A String representing the mode
			 */
			getMode()	{
				return this.mode;

			}

			/**
			 * The method to set the value to mode
			 * @param {String} mode A String
			 */
			setMode(mode)	{
				if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: String", null, null);
				}
				this.mode = mode;
				this.keyModified.set("mode", 1);

			}

			/**
			 * The method to get the subformProperties
			 * @returns {SubformProperty} An instance of SubformProperty
			 */
			getSubformProperties()	{
				return this.subformProperties;

			}

			/**
			 * The method to set the value to subformProperties
			 * @param {SubformProperty} subformProperties An instance of SubformProperty
			 */
			setSubformProperties(subformProperties)	{
				if((subformProperties != null) && (!(subformProperties instanceof ZCRM.Layout.Model.SubformProperty))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subformProperties EXPECTED TYPE: SubformProperty", null, null);
				}
				this.subformProperties = subformProperties;
				this.keyModified.set("subform_properties", 1);

			}

			/**
			 * The method to get the status
			 * @returns {String} A String representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {String} status A String
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to get the showBusinessCard
			 * @returns {Boolean} A Boolean representing the showBusinessCard
			 */
			getShowBusinessCard()	{
				return this.showBusinessCard;

			}

			/**
			 * The method to set the value to showBusinessCard
			 * @param {Boolean} showBusinessCard A Boolean
			 */
			setShowBusinessCard(showBusinessCard)	{
				if((showBusinessCard != null) && (!(Object.prototype.toString.call(showBusinessCard) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showBusinessCard EXPECTED TYPE: Boolean", null, null);
				}
				this.showBusinessCard = showBusinessCard;
				this.keyModified.set("show_business_card", 1);

			}

			/**
			 * The method to get the generatedType
			 * @returns {String} A String representing the generatedType
			 */
			getGeneratedType()	{
				return this.generatedType;

			}

			/**
			 * The method to set the value to generatedType
			 * @param {String} generatedType A String
			 */
			setGeneratedType(generatedType)	{
				if((generatedType != null) && (!(Object.prototype.toString.call(generatedType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: String", null, null);
				}
				this.generatedType = generatedType;
				this.keyModified.set("generated_type", 1);

			}

			/**
			 * The method to get the createdFor
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getCreatedFor()	{
				return this.createdFor;

			}

			/**
			 * The method to set the value to createdFor
			 * @param {MinifiedUser} createdFor An instance of MinifiedUser
			 */
			setCreatedFor(createdFor)	{
				if((createdFor != null) && (!(createdFor instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdFor EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.createdFor = createdFor;
				this.keyModified.set("created_for", 1);

			}

			/**
			 * The method to get the convertMapping
			 * @returns {ConvertMapping} An instance of ConvertMapping
			 */
			getConvertMapping()	{
				return this.convertMapping;

			}

			/**
			 * The method to set the value to convertMapping
			 * @param {ConvertMapping} convertMapping An instance of ConvertMapping
			 */
			setConvertMapping(convertMapping)	{
				if((convertMapping != null) && (!(convertMapping instanceof ZCRM.Layout.Model.ConvertMapping))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: ConvertMapping", null, null);
				}
				this.convertMapping = convertMapping;
				this.keyModified.set("convert_mapping", 1);

			}

			/**
			 * The method to get the modifiedBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getModifiedBy()	{
				return this.modifiedBy;

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.modifiedBy = modifiedBy;
				this.keyModified.set("modified_by", 1);

			}

			/**
			 * The method to get the profiles
			 * @returns {List} An Array representing the profiles
			 */
			getProfiles()	{
				return this.profiles;

			}

			/**
			 * The method to set the value to profiles
			 * @param {List} profiles An Array
			 */
			setProfiles(profiles)	{
				if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
				}
				this.profiles = profiles;
				this.keyModified.set("profiles", 1);

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
			 * The method to get the sections
			 * @returns {List} An Array representing the sections
			 */
			getSections()	{
				return this.sections;

			}

			/**
			 * The method to set the value to sections
			 * @param {List} sections An Array
			 */
			setSections(sections)	{
				if((sections != null) && (!(Object.prototype.toString.call(sections) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sections EXPECTED TYPE: Array", null, null);
				}
				this.sections = sections;
				this.keyModified.set("sections", 1);

			}

			/**
			 * The method to get the actionsAllowed
			 * @returns {ActionsAllowed} An instance of ActionsAllowed
			 */
			getActionsAllowed()	{
				return this.actionsAllowed;

			}

			/**
			 * The method to set the value to actionsAllowed
			 * @param {ActionsAllowed} actionsAllowed An instance of ActionsAllowed
			 */
			setActionsAllowed(actionsAllowed)	{
				if((actionsAllowed != null) && (!(actionsAllowed instanceof ZCRM.Layout.Model.ActionsAllowed))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionsAllowed EXPECTED TYPE: ActionsAllowed", null, null);
				}
				this.actionsAllowed = actionsAllowed;
				this.keyModified.set("actions_allowed", 1);

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

		ActionsAllowed : class{
			constructor(){

				this.edit=null;
				this.rename=null;
				this.clone=null;
				this.downgrade=null;
				this.delete1=null;
				this.deactivate=null;
				this.setLayoutPermissions=null;
				this.keyModified=new Map();
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
			 * The method to get the rename
			 * @returns {Boolean} A Boolean representing the rename
			 */
			getRename()	{
				return this.rename;

			}

			/**
			 * The method to set the value to rename
			 * @param {Boolean} rename A Boolean
			 */
			setRename(rename)	{
				if((rename != null) && (!(Object.prototype.toString.call(rename) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rename EXPECTED TYPE: Boolean", null, null);
				}
				this.rename = rename;
				this.keyModified.set("rename", 1);

			}

			/**
			 * The method to get the clone
			 * @returns {Boolean} A Boolean representing the clone
			 */
			getClone()	{
				return this.clone;

			}

			/**
			 * The method to set the value to clone
			 * @param {Boolean} clone A Boolean
			 */
			setClone(clone)	{
				if((clone != null) && (!(Object.prototype.toString.call(clone) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: clone EXPECTED TYPE: Boolean", null, null);
				}
				this.clone = clone;
				this.keyModified.set("clone", 1);

			}

			/**
			 * The method to get the downgrade
			 * @returns {Boolean} A Boolean representing the downgrade
			 */
			getDowngrade()	{
				return this.downgrade;

			}

			/**
			 * The method to set the value to downgrade
			 * @param {Boolean} downgrade A Boolean
			 */
			setDowngrade(downgrade)	{
				if((downgrade != null) && (!(Object.prototype.toString.call(downgrade) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downgrade EXPECTED TYPE: Boolean", null, null);
				}
				this.downgrade = downgrade;
				this.keyModified.set("downgrade", 1);

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
			 * The method to get the deactivate
			 * @returns {Boolean} A Boolean representing the deactivate
			 */
			getDeactivate()	{
				return this.deactivate;

			}

			/**
			 * The method to set the value to deactivate
			 * @param {Boolean} deactivate A Boolean
			 */
			setDeactivate(deactivate)	{
				if((deactivate != null) && (!(Object.prototype.toString.call(deactivate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deactivate EXPECTED TYPE: Boolean", null, null);
				}
				this.deactivate = deactivate;
				this.keyModified.set("deactivate", 1);

			}

			/**
			 * The method to get the setLayoutPermissions
			 * @returns {Boolean} A Boolean representing the setLayoutPermissions
			 */
			getSetLayoutPermissions()	{
				return this.setLayoutPermissions;

			}

			/**
			 * The method to set the value to setLayoutPermissions
			 * @param {Boolean} setLayoutPermissions A Boolean
			 */
			setSetLayoutPermissions(setLayoutPermissions)	{
				if((setLayoutPermissions != null) && (!(Object.prototype.toString.call(setLayoutPermissions) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: setLayoutPermissions EXPECTED TYPE: Boolean", null, null);
				}
				this.setLayoutPermissions = setLayoutPermissions;
				this.keyModified.set("set_layout_permissions", 1);

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

		ConvertMapping : class{
			constructor(){

				this.contacts=null;
				this.deals=null;
				this.accounts=null;
				this.invoices=null;
				this.salesorders=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the contacts
			 * @returns {MinifiedLayout} An instance of MinifiedLayout
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {MinifiedLayout} contacts An instance of MinifiedLayout
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(contacts instanceof ZCRM.Layout.Model.MinifiedLayout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: MinifiedLayout", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {DealLayoutMapping} An instance of DealLayoutMapping
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {DealLayoutMapping} deals An instance of DealLayoutMapping
			 */
			setDeals(deals)	{
				if((deals != null) && (!(deals instanceof ZCRM.Layout.Model.DealLayoutMapping))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: DealLayoutMapping", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {MinifiedLayout} An instance of MinifiedLayout
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {MinifiedLayout} accounts An instance of MinifiedLayout
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(accounts instanceof ZCRM.Layout.Model.MinifiedLayout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: MinifiedLayout", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

			}

			/**
			 * The method to get the invoices
			 * @returns {MinifiedLayout} An instance of MinifiedLayout
			 */
			getInvoices()	{
				return this.invoices;

			}

			/**
			 * The method to set the value to invoices
			 * @param {MinifiedLayout} invoices An instance of MinifiedLayout
			 */
			setInvoices(invoices)	{
				if((invoices != null) && (!(invoices instanceof ZCRM.Layout.Model.MinifiedLayout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: invoices EXPECTED TYPE: MinifiedLayout", null, null);
				}
				this.invoices = invoices;
				this.keyModified.set("Invoices", 1);

			}

			/**
			 * The method to get the salesorders
			 * @returns {MinifiedLayout} An instance of MinifiedLayout
			 */
			getSalesorders()	{
				return this.salesorders;

			}

			/**
			 * The method to set the value to salesorders
			 * @param {MinifiedLayout} salesorders An instance of MinifiedLayout
			 */
			setSalesorders(salesorders)	{
				if((salesorders != null) && (!(salesorders instanceof ZCRM.Layout.Model.MinifiedLayout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: salesorders EXPECTED TYPE: MinifiedLayout", null, null);
				}
				this.salesorders = salesorders;
				this.keyModified.set("SalesOrders", 1);

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

				this.layouts=null;
				this.keyModified=new Map();
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

				this.layouts=null;
				this.keyModified=new Map();
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

		StaticValues : class{
			constructor(){

				this.sequenceNumber=null;
				this.id=null;
				this.value=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the sequenceNumber
			 * @returns {Integer} An Integer representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {Integer} sequenceNumber An Integer
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

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

		DefaultAssignmentView : class{
			constructor(){

				this.name=null;
				this.id=null;
				this.type=null;
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

		DealField : class{
			constructor(){

				this.apiName=null;
				this.fieldLabel=null;
				this.id=null;
				this.required=null;
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
			 * The method to get the fieldLabel
			 * @returns {String} A String representing the fieldLabel
			 */
			getFieldLabel()	{
				return this.fieldLabel;

			}

			/**
			 * The method to set the value to fieldLabel
			 * @param {String} fieldLabel A String
			 */
			setFieldLabel(fieldLabel)	{
				if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
				}
				this.fieldLabel = fieldLabel;
				this.keyModified.set("field_label", 1);

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
			 * The method to get the required
			 * @returns {Boolean} A Boolean representing the required
			 */
			getRequired()	{
				return this.required;

			}

			/**
			 * The method to set the value to required
			 * @param {Boolean} required A Boolean
			 */
			setRequired(required)	{
				if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
				}
				this.required = required;
				this.keyModified.set("required", 1);

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

		SubformProperty : class{
			constructor(){

				this.pinnedColumn=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the pinnedColumn
			 * @returns {Boolean} A Boolean representing the pinnedColumn
			 */
			getPinnedColumn()	{
				return this.pinnedColumn;

			}

			/**
			 * The method to set the value to pinnedColumn
			 * @param {Boolean} pinnedColumn A Boolean
			 */
			setPinnedColumn(pinnedColumn)	{
				if((pinnedColumn != null) && (!(Object.prototype.toString.call(pinnedColumn) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pinnedColumn EXPECTED TYPE: Boolean", null, null);
				}
				this.pinnedColumn = pinnedColumn;
				this.keyModified.set("pinned_column", 1);

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

		DefaultView : class{
			constructor(){

				this.name=null;
				this.id=null;
				this.type=null;
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

		Delete1 : class{
			constructor(){

				this.permanent=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the permanent
			 * @returns {Boolean} A Boolean representing the permanent
			 */
			getPermanent()	{
				return this.permanent;

			}

			/**
			 * The method to set the value to permanent
			 * @param {Boolean} permanent A Boolean
			 */
			setPermanent(permanent)	{
				if((permanent != null) && (!(Object.prototype.toString.call(permanent) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permanent EXPECTED TYPE: Boolean", null, null);
				}
				this.permanent = permanent;
				this.keyModified.set("permanent", 1);

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

		Tooltip : class{
			constructor(){

				this.name=null;
				this.value=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the name
			 * @returns {Choice} An instance of Choice
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {Choice} name An instance of Choice
			 */
			setName(name)	{
				if((name != null) && (!(name instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: Choice", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

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

		SuccessResponse : class{
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

		Profiles : class{
			constructor(){

				this.default1=null;
				this.name=null;
				this.id=null;
				this.defaultview=null;
				this.defaultassignmentview=null;
				this.keyModified=new Map();
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
			 * @returns {DefaultView} An instance of DefaultView
			 */
			getDefaultview()	{
				return this.defaultview;

			}

			/**
			 * The method to set the value to defaultview
			 * @param {DefaultView} defaultview An instance of DefaultView
			 */
			setDefaultview(defaultview)	{
				if((defaultview != null) && (!(defaultview instanceof ZCRM.Layout.Model.DefaultView))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultview EXPECTED TYPE: DefaultView", null, null);
				}
				this.defaultview = defaultview;
				this.keyModified.set("_default_view", 1);

			}

			/**
			 * The method to get the defaultassignmentview
			 * @returns {DefaultAssignmentView} An instance of DefaultAssignmentView
			 */
			getDefaultassignmentview()	{
				return this.defaultassignmentview;

			}

			/**
			 * The method to set the value to defaultassignmentview
			 * @param {DefaultAssignmentView} defaultassignmentview An instance of DefaultAssignmentView
			 */
			setDefaultassignmentview(defaultassignmentview)	{
				if((defaultassignmentview != null) && (!(defaultassignmentview instanceof ZCRM.Layout.Model.DefaultAssignmentView))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultassignmentview EXPECTED TYPE: DefaultAssignmentView", null, null);
				}
				this.defaultassignmentview = defaultassignmentview;
				this.keyModified.set("_default_assignment_view", 1);

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

		SectionSubformField : class{
			constructor(){

				this.module=null;
				this.id=null;
				this.layout=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the module
			 * @returns {String} A String representing the module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {String} module A String
			 */
			setModule(module)	{
				if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
			 * The method to get the layout
			 * @returns {MinifiedLayout} An instance of MinifiedLayout
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {MinifiedLayout} layout An instance of MinifiedLayout
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Layout.Model.MinifiedLayout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: MinifiedLayout", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

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

		MinifiedLayout : class{
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

		Sections : class{
			constructor(){

				this.displayLabel=null;
				this.sequenceNumber=null;
				this.issubformsection=null;
				this.tabTraversal=null;
				this.apiName=null;
				this.columnCount=null;
				this.name=null;
				this.generatedType=null;
				this.id=null;
				this.type=null;
				this.fields=null;
				this.properties=null;
				this.delete1=null;
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
			 * The method to get the sequenceNumber
			 * @returns {Integer} An Integer representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {Integer} sequenceNumber An Integer
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

			}

			/**
			 * The method to get the issubformsection
			 * @returns {Boolean} A Boolean representing the issubformsection
			 */
			getIssubformsection()	{
				return this.issubformsection;

			}

			/**
			 * The method to set the value to issubformsection
			 * @param {Boolean} issubformsection A Boolean
			 */
			setIssubformsection(issubformsection)	{
				if((issubformsection != null) && (!(Object.prototype.toString.call(issubformsection) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: issubformsection EXPECTED TYPE: Boolean", null, null);
				}
				this.issubformsection = issubformsection;
				this.keyModified.set("isSubformSection", 1);

			}

			/**
			 * The method to get the tabTraversal
			 * @returns {String} A String representing the tabTraversal
			 */
			getTabTraversal()	{
				return this.tabTraversal;

			}

			/**
			 * The method to set the value to tabTraversal
			 * @param {String} tabTraversal A String
			 */
			setTabTraversal(tabTraversal)	{
				if((tabTraversal != null) && (!(Object.prototype.toString.call(tabTraversal) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tabTraversal EXPECTED TYPE: String", null, null);
				}
				this.tabTraversal = tabTraversal;
				this.keyModified.set("tab_traversal", 1);

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
			 * The method to get the columnCount
			 * @returns {Integer} An Integer representing the columnCount
			 */
			getColumnCount()	{
				return this.columnCount;

			}

			/**
			 * The method to set the value to columnCount
			 * @param {Integer} columnCount An Integer
			 */
			setColumnCount(columnCount)	{
				if((columnCount != null) && (!(Object.prototype.toString.call(columnCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnCount EXPECTED TYPE: Integer", null, null);
				}
				this.columnCount = columnCount;
				this.keyModified.set("column_count", 1);

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
			 * The method to get the generatedType
			 * @returns {String} A String representing the generatedType
			 */
			getGeneratedType()	{
				return this.generatedType;

			}

			/**
			 * The method to set the value to generatedType
			 * @param {String} generatedType A String
			 */
			setGeneratedType(generatedType)	{
				if((generatedType != null) && (!(Object.prototype.toString.call(generatedType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: String", null, null);
				}
				this.generatedType = generatedType;
				this.keyModified.set("generated_type", 1);

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
			 * The method to get the properties
			 * @returns {Properties} An instance of Properties
			 */
			getProperties()	{
				return this.properties;

			}

			/**
			 * The method to set the value to properties
			 * @param {Properties} properties An instance of Properties
			 */
			setProperties(properties)	{
				if((properties != null) && (!(properties instanceof ZCRM.Layout.Model.Properties))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Properties", null, null);
				}
				this.properties = properties;
				this.keyModified.set("properties", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {Delete1} An instance of Delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {Delete1} delete1 An instance of Delete1
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(delete1 instanceof ZCRM.Layout.Model.Delete1))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Delete1", null, null);
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

		Properties : class{
			constructor(){

				this.reorderRows=null;
				this.maximumRows=null;
				this.tooltip=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the reorderRows
			 * @returns {Boolean} A Boolean representing the reorderRows
			 */
			getReorderRows()	{
				return this.reorderRows;

			}

			/**
			 * The method to set the value to reorderRows
			 * @param {Boolean} reorderRows A Boolean
			 */
			setReorderRows(reorderRows)	{
				if((reorderRows != null) && (!(Object.prototype.toString.call(reorderRows) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reorderRows EXPECTED TYPE: Boolean", null, null);
				}
				this.reorderRows = reorderRows;
				this.keyModified.set("reorder_rows", 1);

			}

			/**
			 * The method to get the maximumRows
			 * @returns {Integer} An Integer representing the maximumRows
			 */
			getMaximumRows()	{
				return this.maximumRows;

			}

			/**
			 * The method to set the value to maximumRows
			 * @param {Integer} maximumRows An Integer
			 */
			setMaximumRows(maximumRows)	{
				if((maximumRows != null) && (!(Object.prototype.toString.call(maximumRows) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maximumRows EXPECTED TYPE: Integer", null, null);
				}
				this.maximumRows = maximumRows;
				this.keyModified.set("maximum_rows", 1);

			}

			/**
			 * The method to get the tooltip
			 * @returns {Tooltip} An instance of Tooltip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {Tooltip} tooltip An instance of Tooltip
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(tooltip instanceof ZCRM.Layout.Model.Tooltip))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: Tooltip", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

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

				this.layouts=null;
				this.keyModified=new Map();
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
		 * The method to get layouts
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getLayouts(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/layouts");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Layout.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get layout
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getLayout(id, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/layouts/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Layout.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update custom layout
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateCustomLayout(id, request, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Layout.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/layouts/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Layout.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete custom layout
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteCustomLayout(id, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/layouts/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Layout.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to activate custom layout
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async activateCustomLayout(id, request, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Layout.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/layouts/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/activate");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Layout.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to deactivate custom layout
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deactivateCustomLayout(id, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/layouts/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/activate");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Layout.Model.ActionHandler", "application/json");

		}
	},

}