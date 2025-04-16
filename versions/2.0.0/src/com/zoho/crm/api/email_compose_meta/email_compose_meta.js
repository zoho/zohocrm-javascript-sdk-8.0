ZCRM.EmailComposeMeta = {
	Model : {
		FeaturesAvailable : class{
			constructor(){

				this.zsurveyEnabled=null;
				this.inlineComposeWindow=null;
				this.scheduleMail=null;
				this.emailCloudPicker=null;
				this.formIntegrationEnabled=null;
				this.isprivacyenabled=null;
				this.autoSuggestion=null;
				this.unsubscribeLink=null;
				this.bestTimeToContact=null;
				this.attachTeamdrive=null;
				this.islivedeskenabled=null;
				this.subjectLineSuggestion=null;
				this.emailPreference=null;
				this.attachment=null;
				this.mandateunsublink=null;
				this.oldComposeRevert=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the zsurveyEnabled
			 * @returns {Choice} An instance of Choice
			 */
			getZsurveyEnabled()	{
				return this.zsurveyEnabled;

			}

			/**
			 * The method to set the value to zsurveyEnabled
			 * @param {Choice} zsurveyEnabled An instance of Choice
			 */
			setZsurveyEnabled(zsurveyEnabled)	{
				if((zsurveyEnabled != null) && (!(zsurveyEnabled instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zsurveyEnabled EXPECTED TYPE: Choice", null, null);
				}
				this.zsurveyEnabled = zsurveyEnabled;
				this.keyModified.set("zsurvey_enabled", 1);

			}

			/**
			 * The method to get the inlineComposeWindow
			 * @returns {Choice} An instance of Choice
			 */
			getInlineComposeWindow()	{
				return this.inlineComposeWindow;

			}

			/**
			 * The method to set the value to inlineComposeWindow
			 * @param {Choice} inlineComposeWindow An instance of Choice
			 */
			setInlineComposeWindow(inlineComposeWindow)	{
				if((inlineComposeWindow != null) && (!(inlineComposeWindow instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inlineComposeWindow EXPECTED TYPE: Choice", null, null);
				}
				this.inlineComposeWindow = inlineComposeWindow;
				this.keyModified.set("inline_compose_window", 1);

			}

			/**
			 * The method to get the scheduleMail
			 * @returns {Choice} An instance of Choice
			 */
			getScheduleMail()	{
				return this.scheduleMail;

			}

			/**
			 * The method to set the value to scheduleMail
			 * @param {Choice} scheduleMail An instance of Choice
			 */
			setScheduleMail(scheduleMail)	{
				if((scheduleMail != null) && (!(scheduleMail instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduleMail EXPECTED TYPE: Choice", null, null);
				}
				this.scheduleMail = scheduleMail;
				this.keyModified.set("Schedule_Mail", 1);

			}

			/**
			 * The method to get the emailCloudPicker
			 * @returns {Choice} An instance of Choice
			 */
			getEmailCloudPicker()	{
				return this.emailCloudPicker;

			}

			/**
			 * The method to set the value to emailCloudPicker
			 * @param {Choice} emailCloudPicker An instance of Choice
			 */
			setEmailCloudPicker(emailCloudPicker)	{
				if((emailCloudPicker != null) && (!(emailCloudPicker instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailCloudPicker EXPECTED TYPE: Choice", null, null);
				}
				this.emailCloudPicker = emailCloudPicker;
				this.keyModified.set("EMAIL_CLOUD_PICKER", 1);

			}

			/**
			 * The method to get the formIntegrationEnabled
			 * @returns {Choice} An instance of Choice
			 */
			getFormIntegrationEnabled()	{
				return this.formIntegrationEnabled;

			}

			/**
			 * The method to set the value to formIntegrationEnabled
			 * @param {Choice} formIntegrationEnabled An instance of Choice
			 */
			setFormIntegrationEnabled(formIntegrationEnabled)	{
				if((formIntegrationEnabled != null) && (!(formIntegrationEnabled instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formIntegrationEnabled EXPECTED TYPE: Choice", null, null);
				}
				this.formIntegrationEnabled = formIntegrationEnabled;
				this.keyModified.set("form_integration_enabled", 1);

			}

			/**
			 * The method to get the isprivacyenabled
			 * @returns {Choice} An instance of Choice
			 */
			getIsprivacyenabled()	{
				return this.isprivacyenabled;

			}

			/**
			 * The method to set the value to isprivacyenabled
			 * @param {Choice} isprivacyenabled An instance of Choice
			 */
			setIsprivacyenabled(isprivacyenabled)	{
				if((isprivacyenabled != null) && (!(isprivacyenabled instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isprivacyenabled EXPECTED TYPE: Choice", null, null);
				}
				this.isprivacyenabled = isprivacyenabled;
				this.keyModified.set("isPrivacyEnabled", 1);

			}

			/**
			 * The method to get the autoSuggestion
			 * @returns {Choice} An instance of Choice
			 */
			getAutoSuggestion()	{
				return this.autoSuggestion;

			}

			/**
			 * The method to set the value to autoSuggestion
			 * @param {Choice} autoSuggestion An instance of Choice
			 */
			setAutoSuggestion(autoSuggestion)	{
				if((autoSuggestion != null) && (!(autoSuggestion instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoSuggestion EXPECTED TYPE: Choice", null, null);
				}
				this.autoSuggestion = autoSuggestion;
				this.keyModified.set("auto_suggestion", 1);

			}

			/**
			 * The method to get the unsubscribeLink
			 * @returns {Choice} An instance of Choice
			 */
			getUnsubscribeLink()	{
				return this.unsubscribeLink;

			}

			/**
			 * The method to set the value to unsubscribeLink
			 * @param {Choice} unsubscribeLink An instance of Choice
			 */
			setUnsubscribeLink(unsubscribeLink)	{
				if((unsubscribeLink != null) && (!(unsubscribeLink instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unsubscribeLink EXPECTED TYPE: Choice", null, null);
				}
				this.unsubscribeLink = unsubscribeLink;
				this.keyModified.set("UNSUBSCRIBE_LINK", 1);

			}

			/**
			 * The method to get the bestTimeToContact
			 * @returns {Choice} An instance of Choice
			 */
			getBestTimeToContact()	{
				return this.bestTimeToContact;

			}

			/**
			 * The method to set the value to bestTimeToContact
			 * @param {Choice} bestTimeToContact An instance of Choice
			 */
			setBestTimeToContact(bestTimeToContact)	{
				if((bestTimeToContact != null) && (!(bestTimeToContact instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bestTimeToContact EXPECTED TYPE: Choice", null, null);
				}
				this.bestTimeToContact = bestTimeToContact;
				this.keyModified.set("best_time_to_contact", 1);

			}

			/**
			 * The method to get the attachTeamdrive
			 * @returns {Choice} An instance of Choice
			 */
			getAttachTeamdrive()	{
				return this.attachTeamdrive;

			}

			/**
			 * The method to set the value to attachTeamdrive
			 * @param {Choice} attachTeamdrive An instance of Choice
			 */
			setAttachTeamdrive(attachTeamdrive)	{
				if((attachTeamdrive != null) && (!(attachTeamdrive instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachTeamdrive EXPECTED TYPE: Choice", null, null);
				}
				this.attachTeamdrive = attachTeamdrive;
				this.keyModified.set("attach_teamdrive", 1);

			}

			/**
			 * The method to get the islivedeskenabled
			 * @returns {Choice} An instance of Choice
			 */
			getIslivedeskenabled()	{
				return this.islivedeskenabled;

			}

			/**
			 * The method to set the value to islivedeskenabled
			 * @param {Choice} islivedeskenabled An instance of Choice
			 */
			setIslivedeskenabled(islivedeskenabled)	{
				if((islivedeskenabled != null) && (!(islivedeskenabled instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: islivedeskenabled EXPECTED TYPE: Choice", null, null);
				}
				this.islivedeskenabled = islivedeskenabled;
				this.keyModified.set("isLiveDeskEnabled", 1);

			}

			/**
			 * The method to get the subjectLineSuggestion
			 * @returns {Boolean} A Boolean representing the subjectLineSuggestion
			 */
			getSubjectLineSuggestion()	{
				return this.subjectLineSuggestion;

			}

			/**
			 * The method to set the value to subjectLineSuggestion
			 * @param {Boolean} subjectLineSuggestion A Boolean
			 */
			setSubjectLineSuggestion(subjectLineSuggestion)	{
				if((subjectLineSuggestion != null) && (!(Object.prototype.toString.call(subjectLineSuggestion) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subjectLineSuggestion EXPECTED TYPE: Boolean", null, null);
				}
				this.subjectLineSuggestion = subjectLineSuggestion;
				this.keyModified.set("subject_line_suggestion", 1);

			}

			/**
			 * The method to get the emailPreference
			 * @returns {Boolean} A Boolean representing the emailPreference
			 */
			getEmailPreference()	{
				return this.emailPreference;

			}

			/**
			 * The method to set the value to emailPreference
			 * @param {Boolean} emailPreference A Boolean
			 */
			setEmailPreference(emailPreference)	{
				if((emailPreference != null) && (!(Object.prototype.toString.call(emailPreference) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailPreference EXPECTED TYPE: Boolean", null, null);
				}
				this.emailPreference = emailPreference;
				this.keyModified.set("EMAIL_PREFERENCE", 1);

			}

			/**
			 * The method to get the attachment
			 * @returns {Boolean} A Boolean representing the attachment
			 */
			getAttachment()	{
				return this.attachment;

			}

			/**
			 * The method to set the value to attachment
			 * @param {Boolean} attachment A Boolean
			 */
			setAttachment(attachment)	{
				if((attachment != null) && (!(Object.prototype.toString.call(attachment) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachment EXPECTED TYPE: Boolean", null, null);
				}
				this.attachment = attachment;
				this.keyModified.set("ATTACHMENT", 1);

			}

			/**
			 * The method to get the mandateunsublink
			 * @returns {Boolean} A Boolean representing the mandateunsublink
			 */
			getMandateunsublink()	{
				return this.mandateunsublink;

			}

			/**
			 * The method to set the value to mandateunsublink
			 * @param {Boolean} mandateunsublink A Boolean
			 */
			setMandateunsublink(mandateunsublink)	{
				if((mandateunsublink != null) && (!(Object.prototype.toString.call(mandateunsublink) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandateunsublink EXPECTED TYPE: Boolean", null, null);
				}
				this.mandateunsublink = mandateunsublink;
				this.keyModified.set("mandateUnsubLink", 1);

			}

			/**
			 * The method to get the oldComposeRevert
			 * @returns {Boolean} A Boolean representing the oldComposeRevert
			 */
			getOldComposeRevert()	{
				return this.oldComposeRevert;

			}

			/**
			 * The method to set the value to oldComposeRevert
			 * @param {Boolean} oldComposeRevert A Boolean
			 */
			setOldComposeRevert(oldComposeRevert)	{
				if((oldComposeRevert != null) && (!(Object.prototype.toString.call(oldComposeRevert) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: oldComposeRevert EXPECTED TYPE: Boolean", null, null);
				}
				this.oldComposeRevert = oldComposeRevert;
				this.keyModified.set("OLD_COMPOSE_REVERT", 1);

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

		DataMap : class{
			constructor(){

				this.user=null;
				this.featuresAvailable=null;
				this.fromAddress=null;
				this.relayDomains=null;
				this.mergefieldsdata=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the user
			 * @returns {User} An instance of User
			 */
			getUser()	{
				return this.user;

			}

			/**
			 * The method to set the value to user
			 * @param {User} user An instance of User
			 */
			setUser(user)	{
				if((user != null) && (!(user instanceof ZCRM.EmailComposeMeta.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: User", null, null);
				}
				this.user = user;
				this.keyModified.set("user", 1);

			}

			/**
			 * The method to get the featuresAvailable
			 * @returns {FeaturesAvailable} An instance of FeaturesAvailable
			 */
			getFeaturesAvailable()	{
				return this.featuresAvailable;

			}

			/**
			 * The method to set the value to featuresAvailable
			 * @param {FeaturesAvailable} featuresAvailable An instance of FeaturesAvailable
			 */
			setFeaturesAvailable(featuresAvailable)	{
				if((featuresAvailable != null) && (!(featuresAvailable instanceof ZCRM.EmailComposeMeta.Model.FeaturesAvailable))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featuresAvailable EXPECTED TYPE: FeaturesAvailable", null, null);
				}
				this.featuresAvailable = featuresAvailable;
				this.keyModified.set("features_available", 1);

			}

			/**
			 * The method to get the fromAddress
			 * @returns {List} An Array representing the fromAddress
			 */
			getFromAddress()	{
				return this.fromAddress;

			}

			/**
			 * The method to set the value to fromAddress
			 * @param {List} fromAddress An Array
			 */
			setFromAddress(fromAddress)	{
				if((fromAddress != null) && (!(Object.prototype.toString.call(fromAddress) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: Array", null, null);
				}
				this.fromAddress = fromAddress;
				this.keyModified.set("from_address", 1);

			}

			/**
			 * The method to get the relayDomains
			 * @returns {List} An Array representing the relayDomains
			 */
			getRelayDomains()	{
				return this.relayDomains;

			}

			/**
			 * The method to set the value to relayDomains
			 * @param {List} relayDomains An Array
			 */
			setRelayDomains(relayDomains)	{
				if((relayDomains != null) && (!(Object.prototype.toString.call(relayDomains) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relayDomains EXPECTED TYPE: Array", null, null);
				}
				this.relayDomains = relayDomains;
				this.keyModified.set("relay_domains", 1);

			}

			/**
			 * The method to get the mergefieldsdata
			 * @returns {String} A String representing the mergefieldsdata
			 */
			getMergefieldsdata()	{
				return this.mergefieldsdata;

			}

			/**
			 * The method to set the value to mergefieldsdata
			 * @param {String} mergefieldsdata A String
			 */
			setMergefieldsdata(mergefieldsdata)	{
				if((mergefieldsdata != null) && (!(Object.prototype.toString.call(mergefieldsdata) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergefieldsdata EXPECTED TYPE: String", null, null);
				}
				this.mergefieldsdata = mergefieldsdata;
				this.keyModified.set("mergeFieldsData", 1);

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

		FromAddress : class{
			constructor(){

				this.userName=null;
				this.type=null;
				this.email=null;
				this.id=null;
				this.default1=null;
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
			 * The method to get the default
			 * @returns {Choice} An instance of Choice
			 */
			getDefault()	{
				return this.default1;

			}

			/**
			 * The method to set the value to default
			 * @param {Choice} default1 An instance of Choice
			 */
			setDefault(default1)	{
				if((default1 != null) && (!(default1 instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Choice", null, null);
				}
				this.default1 = default1;
				this.keyModified.set("default", 1);

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

		Signature : class{
			constructor(){

				this.mode=null;
				this.sign=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the mode
			 * @returns {Integer} An Integer representing the mode
			 */
			getMode()	{
				return this.mode;

			}

			/**
			 * The method to set the value to mode
			 * @param {Integer} mode An Integer
			 */
			setMode(mode)	{
				if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: Integer", null, null);
				}
				this.mode = mode;
				this.keyModified.set("mode", 1);

			}

			/**
			 * The method to get the sign
			 * @returns {String} A String representing the sign
			 */
			getSign()	{
				return this.sign;

			}

			/**
			 * The method to set the value to sign
			 * @param {String} sign A String
			 */
			setSign(sign)	{
				if((sign != null) && (!(Object.prototype.toString.call(sign) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sign EXPECTED TYPE: String", null, null);
				}
				this.sign = sign;
				this.keyModified.set("sign", 1);

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

		User : class{
			constructor(){

				this.fullName=null;
				this.email=null;
				this.zuid=null;
				this.zgid=null;
				this.signature=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fullName
			 * @returns {String} A String representing the fullName
			 */
			getFullName()	{
				return this.fullName;

			}

			/**
			 * The method to set the value to fullName
			 * @param {String} fullName A String
			 */
			setFullName(fullName)	{
				if((fullName != null) && (!(Object.prototype.toString.call(fullName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fullName EXPECTED TYPE: String", null, null);
				}
				this.fullName = fullName;
				this.keyModified.set("full_name", 1);

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
			 * The method to get the zuid
			 * @returns {String} A String representing the zuid
			 */
			getZuid()	{
				return this.zuid;

			}

			/**
			 * The method to set the value to zuid
			 * @param {String} zuid A String
			 */
			setZuid(zuid)	{
				if((zuid != null) && (!(Object.prototype.toString.call(zuid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zuid EXPECTED TYPE: String", null, null);
				}
				this.zuid = zuid;
				this.keyModified.set("zuid", 1);

			}

			/**
			 * The method to get the zgid
			 * @returns {String} A String representing the zgid
			 */
			getZgid()	{
				return this.zgid;

			}

			/**
			 * The method to set the value to zgid
			 * @param {String} zgid A String
			 */
			setZgid(zgid)	{
				if((zgid != null) && (!(Object.prototype.toString.call(zgid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zgid EXPECTED TYPE: String", null, null);
				}
				this.zgid = zgid;
				this.keyModified.set("zgid", 1);

			}

			/**
			 * The method to get the signature
			 * @returns {Signature} An instance of Signature
			 */
			getSignature()	{
				return this.signature;

			}

			/**
			 * The method to set the value to signature
			 * @param {Signature} signature An instance of Signature
			 */
			setSignature(signature)	{
				if((signature != null) && (!(signature instanceof ZCRM.EmailComposeMeta.Model.Signature))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signature EXPECTED TYPE: Signature", null, null);
				}
				this.signature = signature;
				this.keyModified.set("signature", 1);

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