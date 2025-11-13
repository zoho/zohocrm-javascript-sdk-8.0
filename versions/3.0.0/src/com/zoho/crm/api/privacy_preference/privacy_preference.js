ZCRM.PrivacyPreference = {
	Model : {
		Wrapper : class{
			constructor(){

				this.privacypreference=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the privacypreference
			 * @returns {List} An Array representing the privacypreference
			 */
			getPrivacypreference()	{
				return this.privacypreference;

			}

			/**
			 * The method to set the value to privacypreference
			 * @param {List} privacypreference An Array
			 */
			setPrivacypreference(privacypreference)	{
				if((privacypreference != null) && (!(Object.prototype.toString.call(privacypreference) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacypreference EXPECTED TYPE: Array", null, null);
				}
				this.privacypreference = privacypreference;
				this.keyModified.set("privacyPreference", 1);

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

		Preference : class{
			constructor(){

				this.consentModules=null;
				this.restrictTptFields=null;
				this.excludeAPIZoho=null;
				this.awaitingPeriod=null;
				this.consentMailSend=null;
				this.excludeExportFields=null;
				this.limitActions=null;
				this.excludeExport=null;
				this.restrictZohoInteg=null;
				this.excludeAPIZohoFields=null;
				this.durationTiming=null;
				this.dataProcessingDuration=null;
				this.restrictTptServices=null;
				this.excludeAPITptFields=null;
				this.restrictZohoIntegServices=null;
				this.privacySettingStatus=null;
				this.doubleOptIn=null;
				this.restrictZohoIntegFields=null;
				this.excludeAPITpt=null;
				this.blockList=null;
				this.restrictTpt=null;
				this.actionsWhileAwaiting=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the consentModules
			 * @returns {String} A String representing the consentModules
			 */
			getConsentModules()	{
				return this.consentModules;

			}

			/**
			 * The method to set the value to consentModules
			 * @param {String} consentModules A String
			 */
			setConsentModules(consentModules)	{
				if((consentModules != null) && (!(Object.prototype.toString.call(consentModules) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentModules EXPECTED TYPE: String", null, null);
				}
				this.consentModules = consentModules;
				this.keyModified.set("consent_modules", 1);

			}

			/**
			 * The method to get the restrictTptFields
			 * @returns {String} A String representing the restrictTptFields
			 */
			getRestrictTptFields()	{
				return this.restrictTptFields;

			}

			/**
			 * The method to set the value to restrictTptFields
			 * @param {String} restrictTptFields A String
			 */
			setRestrictTptFields(restrictTptFields)	{
				if((restrictTptFields != null) && (!(Object.prototype.toString.call(restrictTptFields) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictTptFields EXPECTED TYPE: String", null, null);
				}
				this.restrictTptFields = restrictTptFields;
				this.keyModified.set("restrict_tpt_fields", 1);

			}

			/**
			 * The method to get the excludeapiZoho
			 * @returns {String} A String representing the excludeAPIZoho
			 */
			getExcludeAPIZoho()	{
				return this.excludeAPIZoho;

			}

			/**
			 * The method to set the value to excludeapiZoho
			 * @param {String} excludeAPIZoho A String
			 */
			setExcludeAPIZoho(excludeAPIZoho)	{
				if((excludeAPIZoho != null) && (!(Object.prototype.toString.call(excludeAPIZoho) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPIZoho EXPECTED TYPE: String", null, null);
				}
				this.excludeAPIZoho = excludeAPIZoho;
				this.keyModified.set("exclude_api_zoho", 1);

			}

			/**
			 * The method to get the awaitingPeriod
			 * @returns {String} A String representing the awaitingPeriod
			 */
			getAwaitingPeriod()	{
				return this.awaitingPeriod;

			}

			/**
			 * The method to set the value to awaitingPeriod
			 * @param {String} awaitingPeriod A String
			 */
			setAwaitingPeriod(awaitingPeriod)	{
				if((awaitingPeriod != null) && (!(Object.prototype.toString.call(awaitingPeriod) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: awaitingPeriod EXPECTED TYPE: String", null, null);
				}
				this.awaitingPeriod = awaitingPeriod;
				this.keyModified.set("awaiting_period", 1);

			}

			/**
			 * The method to get the consentMailSend
			 * @returns {String} A String representing the consentMailSend
			 */
			getConsentMailSend()	{
				return this.consentMailSend;

			}

			/**
			 * The method to set the value to consentMailSend
			 * @param {String} consentMailSend A String
			 */
			setConsentMailSend(consentMailSend)	{
				if((consentMailSend != null) && (!(Object.prototype.toString.call(consentMailSend) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentMailSend EXPECTED TYPE: String", null, null);
				}
				this.consentMailSend = consentMailSend;
				this.keyModified.set("consent_mail_send", 1);

			}

			/**
			 * The method to get the excludeExportFields
			 * @returns {String} A String representing the excludeExportFields
			 */
			getExcludeExportFields()	{
				return this.excludeExportFields;

			}

			/**
			 * The method to set the value to excludeExportFields
			 * @param {String} excludeExportFields A String
			 */
			setExcludeExportFields(excludeExportFields)	{
				if((excludeExportFields != null) && (!(Object.prototype.toString.call(excludeExportFields) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeExportFields EXPECTED TYPE: String", null, null);
				}
				this.excludeExportFields = excludeExportFields;
				this.keyModified.set("exclude_export_fields", 1);

			}

			/**
			 * The method to get the limitActions
			 * @returns {String} A String representing the limitActions
			 */
			getLimitActions()	{
				return this.limitActions;

			}

			/**
			 * The method to set the value to limitActions
			 * @param {String} limitActions A String
			 */
			setLimitActions(limitActions)	{
				if((limitActions != null) && (!(Object.prototype.toString.call(limitActions) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: limitActions EXPECTED TYPE: String", null, null);
				}
				this.limitActions = limitActions;
				this.keyModified.set("limit_actions", 1);

			}

			/**
			 * The method to get the excludeExport
			 * @returns {String} A String representing the excludeExport
			 */
			getExcludeExport()	{
				return this.excludeExport;

			}

			/**
			 * The method to set the value to excludeExport
			 * @param {String} excludeExport A String
			 */
			setExcludeExport(excludeExport)	{
				if((excludeExport != null) && (!(Object.prototype.toString.call(excludeExport) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeExport EXPECTED TYPE: String", null, null);
				}
				this.excludeExport = excludeExport;
				this.keyModified.set("exclude_export", 1);

			}

			/**
			 * The method to get the restrictZohoInteg
			 * @returns {String} A String representing the restrictZohoInteg
			 */
			getRestrictZohoInteg()	{
				return this.restrictZohoInteg;

			}

			/**
			 * The method to set the value to restrictZohoInteg
			 * @param {String} restrictZohoInteg A String
			 */
			setRestrictZohoInteg(restrictZohoInteg)	{
				if((restrictZohoInteg != null) && (!(Object.prototype.toString.call(restrictZohoInteg) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictZohoInteg EXPECTED TYPE: String", null, null);
				}
				this.restrictZohoInteg = restrictZohoInteg;
				this.keyModified.set("restrict_zoho_integ", 1);

			}

			/**
			 * The method to get the excludeapiZohoFields
			 * @returns {String} A String representing the excludeAPIZohoFields
			 */
			getExcludeAPIZohoFields()	{
				return this.excludeAPIZohoFields;

			}

			/**
			 * The method to set the value to excludeapiZohoFields
			 * @param {String} excludeAPIZohoFields A String
			 */
			setExcludeAPIZohoFields(excludeAPIZohoFields)	{
				if((excludeAPIZohoFields != null) && (!(Object.prototype.toString.call(excludeAPIZohoFields) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPIZohoFields EXPECTED TYPE: String", null, null);
				}
				this.excludeAPIZohoFields = excludeAPIZohoFields;
				this.keyModified.set("exclude_api_zoho_fields", 1);

			}

			/**
			 * The method to get the durationTiming
			 * @returns {String} A String representing the durationTiming
			 */
			getDurationTiming()	{
				return this.durationTiming;

			}

			/**
			 * The method to set the value to durationTiming
			 * @param {String} durationTiming A String
			 */
			setDurationTiming(durationTiming)	{
				if((durationTiming != null) && (!(Object.prototype.toString.call(durationTiming) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: durationTiming EXPECTED TYPE: String", null, null);
				}
				this.durationTiming = durationTiming;
				this.keyModified.set("duration_timing", 1);

			}

			/**
			 * The method to get the dataProcessingDuration
			 * @returns {String} A String representing the dataProcessingDuration
			 */
			getDataProcessingDuration()	{
				return this.dataProcessingDuration;

			}

			/**
			 * The method to set the value to dataProcessingDuration
			 * @param {String} dataProcessingDuration A String
			 */
			setDataProcessingDuration(dataProcessingDuration)	{
				if((dataProcessingDuration != null) && (!(Object.prototype.toString.call(dataProcessingDuration) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataProcessingDuration EXPECTED TYPE: String", null, null);
				}
				this.dataProcessingDuration = dataProcessingDuration;
				this.keyModified.set("data_processing_duration", 1);

			}

			/**
			 * The method to get the restrictTptServices
			 * @returns {String} A String representing the restrictTptServices
			 */
			getRestrictTptServices()	{
				return this.restrictTptServices;

			}

			/**
			 * The method to set the value to restrictTptServices
			 * @param {String} restrictTptServices A String
			 */
			setRestrictTptServices(restrictTptServices)	{
				if((restrictTptServices != null) && (!(Object.prototype.toString.call(restrictTptServices) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictTptServices EXPECTED TYPE: String", null, null);
				}
				this.restrictTptServices = restrictTptServices;
				this.keyModified.set("restrict_tpt_services", 1);

			}

			/**
			 * The method to get the excludeapiTptFields
			 * @returns {String} A String representing the excludeAPITptFields
			 */
			getExcludeAPITptFields()	{
				return this.excludeAPITptFields;

			}

			/**
			 * The method to set the value to excludeapiTptFields
			 * @param {String} excludeAPITptFields A String
			 */
			setExcludeAPITptFields(excludeAPITptFields)	{
				if((excludeAPITptFields != null) && (!(Object.prototype.toString.call(excludeAPITptFields) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPITptFields EXPECTED TYPE: String", null, null);
				}
				this.excludeAPITptFields = excludeAPITptFields;
				this.keyModified.set("exclude_api_tpt_fields", 1);

			}

			/**
			 * The method to get the restrictZohoIntegServices
			 * @returns {String} A String representing the restrictZohoIntegServices
			 */
			getRestrictZohoIntegServices()	{
				return this.restrictZohoIntegServices;

			}

			/**
			 * The method to set the value to restrictZohoIntegServices
			 * @param {String} restrictZohoIntegServices A String
			 */
			setRestrictZohoIntegServices(restrictZohoIntegServices)	{
				if((restrictZohoIntegServices != null) && (!(Object.prototype.toString.call(restrictZohoIntegServices) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictZohoIntegServices EXPECTED TYPE: String", null, null);
				}
				this.restrictZohoIntegServices = restrictZohoIntegServices;
				this.keyModified.set("restrict_zoho_integ_services", 1);

			}

			/**
			 * The method to get the privacySettingStatus
			 * @returns {String} A String representing the privacySettingStatus
			 */
			getPrivacySettingStatus()	{
				return this.privacySettingStatus;

			}

			/**
			 * The method to set the value to privacySettingStatus
			 * @param {String} privacySettingStatus A String
			 */
			setPrivacySettingStatus(privacySettingStatus)	{
				if((privacySettingStatus != null) && (!(Object.prototype.toString.call(privacySettingStatus) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacySettingStatus EXPECTED TYPE: String", null, null);
				}
				this.privacySettingStatus = privacySettingStatus;
				this.keyModified.set("privacy_setting_status", 1);

			}

			/**
			 * The method to get the doubleOptIn
			 * @returns {String} A String representing the doubleOptIn
			 */
			getDoubleOptIn()	{
				return this.doubleOptIn;

			}

			/**
			 * The method to set the value to doubleOptIn
			 * @param {String} doubleOptIn A String
			 */
			setDoubleOptIn(doubleOptIn)	{
				if((doubleOptIn != null) && (!(Object.prototype.toString.call(doubleOptIn) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doubleOptIn EXPECTED TYPE: String", null, null);
				}
				this.doubleOptIn = doubleOptIn;
				this.keyModified.set("double_opt_in", 1);

			}

			/**
			 * The method to get the restrictZohoIntegFields
			 * @returns {String} A String representing the restrictZohoIntegFields
			 */
			getRestrictZohoIntegFields()	{
				return this.restrictZohoIntegFields;

			}

			/**
			 * The method to set the value to restrictZohoIntegFields
			 * @param {String} restrictZohoIntegFields A String
			 */
			setRestrictZohoIntegFields(restrictZohoIntegFields)	{
				if((restrictZohoIntegFields != null) && (!(Object.prototype.toString.call(restrictZohoIntegFields) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictZohoIntegFields EXPECTED TYPE: String", null, null);
				}
				this.restrictZohoIntegFields = restrictZohoIntegFields;
				this.keyModified.set("restrict_zoho_integ_fields", 1);

			}

			/**
			 * The method to get the excludeapiTpt
			 * @returns {String} A String representing the excludeAPITpt
			 */
			getExcludeAPITpt()	{
				return this.excludeAPITpt;

			}

			/**
			 * The method to set the value to excludeapiTpt
			 * @param {String} excludeAPITpt A String
			 */
			setExcludeAPITpt(excludeAPITpt)	{
				if((excludeAPITpt != null) && (!(Object.prototype.toString.call(excludeAPITpt) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPITpt EXPECTED TYPE: String", null, null);
				}
				this.excludeAPITpt = excludeAPITpt;
				this.keyModified.set("exclude_api_tpt", 1);

			}

			/**
			 * The method to get the blockList
			 * @returns {String} A String representing the blockList
			 */
			getBlockList()	{
				return this.blockList;

			}

			/**
			 * The method to set the value to blockList
			 * @param {String} blockList A String
			 */
			setBlockList(blockList)	{
				if((blockList != null) && (!(Object.prototype.toString.call(blockList) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blockList EXPECTED TYPE: String", null, null);
				}
				this.blockList = blockList;
				this.keyModified.set("block_list", 1);

			}

			/**
			 * The method to get the restrictTpt
			 * @returns {String} A String representing the restrictTpt
			 */
			getRestrictTpt()	{
				return this.restrictTpt;

			}

			/**
			 * The method to set the value to restrictTpt
			 * @param {String} restrictTpt A String
			 */
			setRestrictTpt(restrictTpt)	{
				if((restrictTpt != null) && (!(Object.prototype.toString.call(restrictTpt) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictTpt EXPECTED TYPE: String", null, null);
				}
				this.restrictTpt = restrictTpt;
				this.keyModified.set("restrict_tpt", 1);

			}

			/**
			 * The method to get the actionsWhileAwaiting
			 * @returns {String} A String representing the actionsWhileAwaiting
			 */
			getActionsWhileAwaiting()	{
				return this.actionsWhileAwaiting;

			}

			/**
			 * The method to set the value to actionsWhileAwaiting
			 * @param {String} actionsWhileAwaiting A String
			 */
			setActionsWhileAwaiting(actionsWhileAwaiting)	{
				if((actionsWhileAwaiting != null) && (!(Object.prototype.toString.call(actionsWhileAwaiting) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionsWhileAwaiting EXPECTED TYPE: String", null, null);
				}
				this.actionsWhileAwaiting = actionsWhileAwaiting;
				this.keyModified.set("actions_while_awaiting", 1);

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

		Config : class{
			constructor(){

				this.tpt=null;
				this.section=null;
				this.zohoInteg=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the tpt
			 * @returns {List} An Array representing the tpt
			 */
			getTpt()	{
				return this.tpt;

			}

			/**
			 * The method to set the value to tpt
			 * @param {List} tpt An Array
			 */
			setTpt(tpt)	{
				if((tpt != null) && (!(Object.prototype.toString.call(tpt) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tpt EXPECTED TYPE: Array", null, null);
				}
				this.tpt = tpt;
				this.keyModified.set("tpt", 1);

			}

			/**
			 * The method to get the section
			 * @returns {List} An Array representing the section
			 */
			getSection()	{
				return this.section;

			}

			/**
			 * The method to set the value to section
			 * @param {List} section An Array
			 */
			setSection(section)	{
				if((section != null) && (!(Object.prototype.toString.call(section) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: section EXPECTED TYPE: Array", null, null);
				}
				this.section = section;
				this.keyModified.set("section", 1);

			}

			/**
			 * The method to get the zohoInteg
			 * @returns {List} An Array representing the zohoInteg
			 */
			getZohoInteg()	{
				return this.zohoInteg;

			}

			/**
			 * The method to set the value to zohoInteg
			 * @param {List} zohoInteg An Array
			 */
			setZohoInteg(zohoInteg)	{
				if((zohoInteg != null) && (!(Object.prototype.toString.call(zohoInteg) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zohoInteg EXPECTED TYPE: Array", null, null);
				}
				this.zohoInteg = zohoInteg;
				this.keyModified.set("zoho_integ", 1);

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

		Tpt : class{
			constructor(){

				this.isenabled=null;
				this.name=null;
				this.issupported=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the isenabled
			 * @returns {String} A String representing the isenabled
			 */
			getIsenabled()	{
				return this.isenabled;

			}

			/**
			 * The method to set the value to isenabled
			 * @param {String} isenabled A String
			 */
			setIsenabled(isenabled)	{
				if((isenabled != null) && (!(Object.prototype.toString.call(isenabled) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isenabled EXPECTED TYPE: String", null, null);
				}
				this.isenabled = isenabled;
				this.keyModified.set("isEnabled", 1);

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
			 * The method to get the issupported
			 * @returns {String} A String representing the issupported
			 */
			getIssupported()	{
				return this.issupported;

			}

			/**
			 * The method to set the value to issupported
			 * @param {String} issupported A String
			 */
			setIssupported(issupported)	{
				if((issupported != null) && (!(Object.prototype.toString.call(issupported) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: issupported EXPECTED TYPE: String", null, null);
				}
				this.issupported = issupported;
				this.keyModified.set("isSupported", 1);

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

		PrivacyPreference : class{
			constructor(){

				this.preference=null;
				this.config=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the preference
			 * @returns {Preference} An instance of Preference
			 */
			getPreference()	{
				return this.preference;

			}

			/**
			 * The method to set the value to preference
			 * @param {Preference} preference An instance of Preference
			 */
			setPreference(preference)	{
				if((preference != null) && (!(preference instanceof ZCRM.PrivacyPreference.Model.Preference))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: preference EXPECTED TYPE: Preference", null, null);
				}
				this.preference = preference;
				this.keyModified.set("preference", 1);

			}

			/**
			 * The method to get the config
			 * @returns {Config} An instance of Config
			 */
			getConfig()	{
				return this.config;

			}

			/**
			 * The method to set the value to config
			 * @param {Config} config An instance of Config
			 */
			setConfig(config)	{
				if((config != null) && (!(config instanceof ZCRM.PrivacyPreference.Model.Config))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: config EXPECTED TYPE: Config", null, null);
				}
				this.config = config;
				this.keyModified.set("config", 1);

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

		Section : class{
			constructor(){

				this.name=null;
				this.tooltip=null;
				this.showType=null;
				this.title=null;
				this.options=null;
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
			 * The method to get the tooltip
			 * @returns {String} A String representing the tooltip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {String} tooltip A String
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(Object.prototype.toString.call(tooltip) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: String", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

			}

			/**
			 * The method to get the showType
			 * @returns {String} A String representing the showType
			 */
			getShowType()	{
				return this.showType;

			}

			/**
			 * The method to set the value to showType
			 * @param {String} showType A String
			 */
			setShowType(showType)	{
				if((showType != null) && (!(Object.prototype.toString.call(showType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showType EXPECTED TYPE: String", null, null);
				}
				this.showType = showType;
				this.keyModified.set("show_type", 1);

			}

			/**
			 * The method to get the title
			 * @returns {String} A String representing the title
			 */
			getTitle()	{
				return this.title;

			}

			/**
			 * The method to set the value to title
			 * @param {String} title A String
			 */
			setTitle(title)	{
				if((title != null) && (!(Object.prototype.toString.call(title) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: title EXPECTED TYPE: String", null, null);
				}
				this.title = title;
				this.keyModified.set("title", 1);

			}

			/**
			 * The method to get the options
			 * @returns {List} An Array representing the options
			 */
			getOptions()	{
				return this.options;

			}

			/**
			 * The method to set the value to options
			 * @param {List} options An Array
			 */
			setOptions(options)	{
				if((options != null) && (!(Object.prototype.toString.call(options) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: options EXPECTED TYPE: Array", null, null);
				}
				this.options = options;
				this.keyModified.set("options", 1);

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

		Option : class{
			constructor(){

				this.name=null;
				this.tooltip=null;
				this.type=null;
				this.suboptions=null;
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
			 * The method to get the tooltip
			 * @returns {String} A String representing the tooltip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {String} tooltip A String
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(Object.prototype.toString.call(tooltip) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: String", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

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
			 * The method to get the suboptions
			 * @returns {List} An Array representing the suboptions
			 */
			getSuboptions()	{
				return this.suboptions;

			}

			/**
			 * The method to set the value to suboptions
			 * @param {List} suboptions An Array
			 */
			setSuboptions(suboptions)	{
				if((suboptions != null) && (!(Object.prototype.toString.call(suboptions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: suboptions EXPECTED TYPE: Array", null, null);
				}
				this.suboptions = suboptions;
				this.keyModified.set("suboptions", 1);

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