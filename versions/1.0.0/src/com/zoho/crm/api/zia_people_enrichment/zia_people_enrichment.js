ZCRM.ZiaPeopleEnrichment = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		BodyWrapper : class{
			constructor(){

				this.ziapeopleenrichment=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the ziapeopleenrichment
			 * @returns {List} An Array representing the ziapeopleenrichment
			 */
			getZiapeopleenrichment()	{
				return this.ziapeopleenrichment;

			}

			/**
			 * The method to set the value to ziapeopleenrichment
			 * @param {List} ziapeopleenrichment An Array
			 */
			setZiapeopleenrichment(ziapeopleenrichment)	{
				if((ziapeopleenrichment != null) && (!(Object.prototype.toString.call(ziapeopleenrichment) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziapeopleenrichment EXPECTED TYPE: Array", null, null);
				}
				this.ziapeopleenrichment = ziapeopleenrichment;
				this.keyModified.set("__zia_people_enrichment", 1);

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

				this.ziapeopleenrichment=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the ziapeopleenrichment
			 * @returns {List} An Array representing the ziapeopleenrichment
			 */
			getZiapeopleenrichment()	{
				return this.ziapeopleenrichment;

			}

			/**
			 * The method to set the value to ziapeopleenrichment
			 * @param {List} ziapeopleenrichment An Array
			 */
			setZiapeopleenrichment(ziapeopleenrichment)	{
				if((ziapeopleenrichment != null) && (!(Object.prototype.toString.call(ziapeopleenrichment) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziapeopleenrichment EXPECTED TYPE: Array", null, null);
				}
				this.ziapeopleenrichment = ziapeopleenrichment;
				this.keyModified.set("__zia_people_enrichment", 1);

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
				this.count=null;
				this.page=null;
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

		Social : class{
			constructor(){

				this.twitter=null;
				this.facebook=null;
				this.linkedin=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the twitter
			 * @returns {String} A String representing the twitter
			 */
			getTwitter()	{
				return this.twitter;

			}

			/**
			 * The method to set the value to twitter
			 * @param {String} twitter A String
			 */
			setTwitter(twitter)	{
				if((twitter != null) && (!(Object.prototype.toString.call(twitter) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: twitter EXPECTED TYPE: String", null, null);
				}
				this.twitter = twitter;
				this.keyModified.set("twitter", 1);

			}

			/**
			 * The method to get the facebook
			 * @returns {String} A String representing the facebook
			 */
			getFacebook()	{
				return this.facebook;

			}

			/**
			 * The method to set the value to facebook
			 * @param {String} facebook A String
			 */
			setFacebook(facebook)	{
				if((facebook != null) && (!(Object.prototype.toString.call(facebook) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: facebook EXPECTED TYPE: String", null, null);
				}
				this.facebook = facebook;
				this.keyModified.set("facebook", 1);

			}

			/**
			 * The method to get the linkedin
			 * @returns {String} A String representing the linkedin
			 */
			getLinkedin()	{
				return this.linkedin;

			}

			/**
			 * The method to set the value to linkedin
			 * @param {String} linkedin A String
			 */
			setLinkedin(linkedin)	{
				if((linkedin != null) && (!(Object.prototype.toString.call(linkedin) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkedin EXPECTED TYPE: String", null, null);
				}
				this.linkedin = linkedin;
				this.keyModified.set("linkedin", 1);

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

		Company : class{
			constructor(){

				this.website=null;
				this.name=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the website
			 * @returns {String} A String representing the website
			 */
			getWebsite()	{
				return this.website;

			}

			/**
			 * The method to set the value to website
			 * @param {String} website A String
			 */
			setWebsite(website)	{
				if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
				}
				this.website = website;
				this.keyModified.set("website", 1);

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

		SocialMedia : class{
			constructor(){

				this.mediaType=null;
				this.mediaUrl=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the mediaType
			 * @returns {String} A String representing the mediaType
			 */
			getMediaType()	{
				return this.mediaType;

			}

			/**
			 * The method to set the value to mediaType
			 * @param {String} mediaType A String
			 */
			setMediaType(mediaType)	{
				if((mediaType != null) && (!(Object.prototype.toString.call(mediaType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mediaType EXPECTED TYPE: String", null, null);
				}
				this.mediaType = mediaType;
				this.keyModified.set("media_type", 1);

			}

			/**
			 * The method to get the mediaUrl
			 * @returns {List} An Array representing the mediaUrl
			 */
			getMediaUrl()	{
				return this.mediaUrl;

			}

			/**
			 * The method to set the value to mediaUrl
			 * @param {List} mediaUrl An Array
			 */
			setMediaUrl(mediaUrl)	{
				if((mediaUrl != null) && (!(Object.prototype.toString.call(mediaUrl) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mediaUrl EXPECTED TYPE: Array", null, null);
				}
				this.mediaUrl = mediaUrl;
				this.keyModified.set("media_url", 1);

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

		EnrichBasedOn : class{
			constructor(){

				this.social=null;
				this.name=null;
				this.company=null;
				this.email=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the social
			 * @returns {Social} An instance of Social
			 */
			getSocial()	{
				return this.social;

			}

			/**
			 * The method to set the value to social
			 * @param {Social} social An instance of Social
			 */
			setSocial(social)	{
				if((social != null) && (!(social instanceof ZCRM.ZiaPeopleEnrichment.Model.Social))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: social EXPECTED TYPE: Social", null, null);
				}
				this.social = social;
				this.keyModified.set("social", 1);

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
			 * The method to get the company
			 * @returns {Company} An instance of Company
			 */
			getCompany()	{
				return this.company;

			}

			/**
			 * The method to set the value to company
			 * @param {Company} company An instance of Company
			 */
			setCompany(company)	{
				if((company != null) && (!(company instanceof ZCRM.ZiaPeopleEnrichment.Model.Company))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: company EXPECTED TYPE: Company", null, null);
				}
				this.company = company;
				this.keyModified.set("company", 1);

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

		ZiaPeopleEnrichment : class{
			constructor(){

				this.createdTime=null;
				this.id=null;
				this.createdBy=null;
				this.status=null;
				this.enrichedData=null;
				this.enrichBasedOn=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the createdTime
			 * @returns {String} A String representing the createdTime
			 */
			getCreatedTime()	{
				return this.createdTime;

			}

			/**
			 * The method to set the value to createdTime
			 * @param {String} createdTime A String
			 */
			setCreatedTime(createdTime)	{
				if((createdTime != null) && (!(Object.prototype.toString.call(createdTime) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: String", null, null);
				}
				this.createdTime = createdTime;
				this.keyModified.set("created_time", 1);

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
			 * The method to get the createdBy
			 * @returns {User} An instance of User
			 */
			getCreatedBy()	{
				return this.createdBy;

			}

			/**
			 * The method to set the value to createdBy
			 * @param {User} createdBy An instance of User
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.ZiaPeopleEnrichment.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

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
			 * The method to get the enrichedData
			 * @returns {EnrichedData} An instance of EnrichedData
			 */
			getEnrichedData()	{
				return this.enrichedData;

			}

			/**
			 * The method to set the value to enrichedData
			 * @param {EnrichedData} enrichedData An instance of EnrichedData
			 */
			setEnrichedData(enrichedData)	{
				if((enrichedData != null) && (!(enrichedData instanceof ZCRM.ZiaPeopleEnrichment.Model.EnrichedData))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichedData EXPECTED TYPE: EnrichedData", null, null);
				}
				this.enrichedData = enrichedData;
				this.keyModified.set("enriched_data", 1);

			}

			/**
			 * The method to get the enrichBasedOn
			 * @returns {EnrichBasedOn} An instance of EnrichBasedOn
			 */
			getEnrichBasedOn()	{
				return this.enrichBasedOn;

			}

			/**
			 * The method to set the value to enrichBasedOn
			 * @param {EnrichBasedOn} enrichBasedOn An instance of EnrichBasedOn
			 */
			setEnrichBasedOn(enrichBasedOn)	{
				if((enrichBasedOn != null) && (!(enrichBasedOn instanceof ZCRM.ZiaPeopleEnrichment.Model.EnrichBasedOn))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichBasedOn EXPECTED TYPE: EnrichBasedOn", null, null);
				}
				this.enrichBasedOn = enrichBasedOn;
				this.keyModified.set("enrich_based_on", 1);

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

				this.ziapeopleenrichment=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the ziapeopleenrichment
			 * @returns {List} An Array representing the ziapeopleenrichment
			 */
			getZiapeopleenrichment()	{
				return this.ziapeopleenrichment;

			}

			/**
			 * The method to set the value to ziapeopleenrichment
			 * @param {List} ziapeopleenrichment An Array
			 */
			setZiapeopleenrichment(ziapeopleenrichment)	{
				if((ziapeopleenrichment != null) && (!(Object.prototype.toString.call(ziapeopleenrichment) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziapeopleenrichment EXPECTED TYPE: Array", null, null);
				}
				this.ziapeopleenrichment = ziapeopleenrichment;
				this.keyModified.set("__zia_people_enrichment", 1);

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
				if((info != null) && (!(info instanceof ZCRM.ZiaPeopleEnrichment.Model.Info))){
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

		EmailInfo : class{
			constructor(){

				this.type=null;
				this.email=null;
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

		Industry : class{
			constructor(){

				this.name=null;
				this.description=null;
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
			 * The method to get the description
			 * @returns {String} A String representing the description
			 */
			getDescription()	{
				return this.description;

			}

			/**
			 * The method to set the value to description
			 * @param {String} description A String
			 */
			setDescription(description)	{
				if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
				}
				this.description = description;
				this.keyModified.set("description", 1);

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

		Experience : class{
			constructor(){

				this.endDate=null;
				this.companyName=null;
				this.title=null;
				this.startDate=null;
				this.primary=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the endDate
			 * @returns {String} A String representing the endDate
			 */
			getEndDate()	{
				return this.endDate;

			}

			/**
			 * The method to set the value to endDate
			 * @param {String} endDate A String
			 */
			setEndDate(endDate)	{
				if((endDate != null) && (!(Object.prototype.toString.call(endDate) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: endDate EXPECTED TYPE: String", null, null);
				}
				this.endDate = endDate;
				this.keyModified.set("end_date", 1);

			}

			/**
			 * The method to get the companyName
			 * @returns {String} A String representing the companyName
			 */
			getCompanyName()	{
				return this.companyName;

			}

			/**
			 * The method to set the value to companyName
			 * @param {String} companyName A String
			 */
			setCompanyName(companyName)	{
				if((companyName != null) && (!(Object.prototype.toString.call(companyName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyName EXPECTED TYPE: String", null, null);
				}
				this.companyName = companyName;
				this.keyModified.set("company_name", 1);

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
			 * The method to get the startDate
			 * @returns {String} A String representing the startDate
			 */
			getStartDate()	{
				return this.startDate;

			}

			/**
			 * The method to set the value to startDate
			 * @param {String} startDate A String
			 */
			setStartDate(startDate)	{
				if((startDate != null) && (!(Object.prototype.toString.call(startDate) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startDate EXPECTED TYPE: String", null, null);
				}
				this.startDate = startDate;
				this.keyModified.set("start_date", 1);

			}

			/**
			 * The method to get the primary
			 * @returns {Boolean} A Boolean representing the primary
			 */
			getPrimary()	{
				return this.primary;

			}

			/**
			 * The method to set the value to primary
			 * @param {Boolean} primary A Boolean
			 */
			setPrimary(primary)	{
				if((primary != null) && (!(Object.prototype.toString.call(primary) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primary EXPECTED TYPE: Boolean", null, null);
				}
				this.primary = primary;
				this.keyModified.set("primary", 1);

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

		CompanyInfo : class{
			constructor(){

				this.name=null;
				this.industries=null;
				this.experiences=null;
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
			 * The method to get the industries
			 * @returns {List} An Array representing the industries
			 */
			getIndustries()	{
				return this.industries;

			}

			/**
			 * The method to set the value to industries
			 * @param {List} industries An Array
			 */
			setIndustries(industries)	{
				if((industries != null) && (!(Object.prototype.toString.call(industries) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: industries EXPECTED TYPE: Array", null, null);
				}
				this.industries = industries;
				this.keyModified.set("industries", 1);

			}

			/**
			 * The method to get the experiences
			 * @returns {List} An Array representing the experiences
			 */
			getExperiences()	{
				return this.experiences;

			}

			/**
			 * The method to set the value to experiences
			 * @param {List} experiences An Array
			 */
			setExperiences(experiences)	{
				if((experiences != null) && (!(Object.prototype.toString.call(experiences) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: experiences EXPECTED TYPE: Array", null, null);
				}
				this.experiences = experiences;
				this.keyModified.set("experiences", 1);

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

		EnrichedData : class{
			constructor(){

				this.website=null;
				this.emailInfos=null;
				this.gender=null;
				this.companyInfo=null;
				this.lastName=null;
				this.educations=null;
				this.middleName=null;
				this.skills=null;
				this.otherContacts=null;
				this.addressListInfo=null;
				this.primaryAddressInfo=null;
				this.name=null;
				this.secondaryContact=null;
				this.primaryEmail=null;
				this.designation=null;
				this.id=null;
				this.interests=null;
				this.firstName=null;
				this.primaryContact=null;
				this.socialMedia=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the website
			 * @returns {String} A String representing the website
			 */
			getWebsite()	{
				return this.website;

			}

			/**
			 * The method to set the value to website
			 * @param {String} website A String
			 */
			setWebsite(website)	{
				if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
				}
				this.website = website;
				this.keyModified.set("website", 1);

			}

			/**
			 * The method to get the emailInfos
			 * @returns {List} An Array representing the emailInfos
			 */
			getEmailInfos()	{
				return this.emailInfos;

			}

			/**
			 * The method to set the value to emailInfos
			 * @param {List} emailInfos An Array
			 */
			setEmailInfos(emailInfos)	{
				if((emailInfos != null) && (!(Object.prototype.toString.call(emailInfos) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailInfos EXPECTED TYPE: Array", null, null);
				}
				this.emailInfos = emailInfos;
				this.keyModified.set("email_infos", 1);

			}

			/**
			 * The method to get the gender
			 * @returns {String} A String representing the gender
			 */
			getGender()	{
				return this.gender;

			}

			/**
			 * The method to set the value to gender
			 * @param {String} gender A String
			 */
			setGender(gender)	{
				if((gender != null) && (!(Object.prototype.toString.call(gender) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: gender EXPECTED TYPE: String", null, null);
				}
				this.gender = gender;
				this.keyModified.set("gender", 1);

			}

			/**
			 * The method to get the companyInfo
			 * @returns {CompanyInfo} An instance of CompanyInfo
			 */
			getCompanyInfo()	{
				return this.companyInfo;

			}

			/**
			 * The method to set the value to companyInfo
			 * @param {CompanyInfo} companyInfo An instance of CompanyInfo
			 */
			setCompanyInfo(companyInfo)	{
				if((companyInfo != null) && (!(companyInfo instanceof ZCRM.ZiaPeopleEnrichment.Model.CompanyInfo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyInfo EXPECTED TYPE: CompanyInfo", null, null);
				}
				this.companyInfo = companyInfo;
				this.keyModified.set("company_info", 1);

			}

			/**
			 * The method to get the lastName
			 * @returns {String} A String representing the lastName
			 */
			getLastName()	{
				return this.lastName;

			}

			/**
			 * The method to set the value to lastName
			 * @param {String} lastName A String
			 */
			setLastName(lastName)	{
				if((lastName != null) && (!(Object.prototype.toString.call(lastName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastName EXPECTED TYPE: String", null, null);
				}
				this.lastName = lastName;
				this.keyModified.set("last_name", 1);

			}

			/**
			 * The method to get the educations
			 * @returns {List} An Array representing the educations
			 */
			getEducations()	{
				return this.educations;

			}

			/**
			 * The method to set the value to educations
			 * @param {List} educations An Array
			 */
			setEducations(educations)	{
				if((educations != null) && (!(Object.prototype.toString.call(educations) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: educations EXPECTED TYPE: Array", null, null);
				}
				this.educations = educations;
				this.keyModified.set("educations", 1);

			}

			/**
			 * The method to get the middleName
			 * @returns {String} A String representing the middleName
			 */
			getMiddleName()	{
				return this.middleName;

			}

			/**
			 * The method to set the value to middleName
			 * @param {String} middleName A String
			 */
			setMiddleName(middleName)	{
				if((middleName != null) && (!(Object.prototype.toString.call(middleName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: middleName EXPECTED TYPE: String", null, null);
				}
				this.middleName = middleName;
				this.keyModified.set("middle_name", 1);

			}

			/**
			 * The method to get the skills
			 * @returns {List} An Array representing the skills
			 */
			getSkills()	{
				return this.skills;

			}

			/**
			 * The method to set the value to skills
			 * @param {List} skills An Array
			 */
			setSkills(skills)	{
				if((skills != null) && (!(Object.prototype.toString.call(skills) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: skills EXPECTED TYPE: Array", null, null);
				}
				this.skills = skills;
				this.keyModified.set("skills", 1);

			}

			/**
			 * The method to get the otherContacts
			 * @returns {List} An Array representing the otherContacts
			 */
			getOtherContacts()	{
				return this.otherContacts;

			}

			/**
			 * The method to set the value to otherContacts
			 * @param {List} otherContacts An Array
			 */
			setOtherContacts(otherContacts)	{
				if((otherContacts != null) && (!(Object.prototype.toString.call(otherContacts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: otherContacts EXPECTED TYPE: Array", null, null);
				}
				this.otherContacts = otherContacts;
				this.keyModified.set("other_contacts", 1);

			}

			/**
			 * The method to get the addressListInfo
			 * @returns {List} An Array representing the addressListInfo
			 */
			getAddressListInfo()	{
				return this.addressListInfo;

			}

			/**
			 * The method to set the value to addressListInfo
			 * @param {List} addressListInfo An Array
			 */
			setAddressListInfo(addressListInfo)	{
				if((addressListInfo != null) && (!(Object.prototype.toString.call(addressListInfo) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addressListInfo EXPECTED TYPE: Array", null, null);
				}
				this.addressListInfo = addressListInfo;
				this.keyModified.set("address_list_info", 1);

			}

			/**
			 * The method to get the primaryAddressInfo
			 * @returns {Address} An instance of Address
			 */
			getPrimaryAddressInfo()	{
				return this.primaryAddressInfo;

			}

			/**
			 * The method to set the value to primaryAddressInfo
			 * @param {Address} primaryAddressInfo An instance of Address
			 */
			setPrimaryAddressInfo(primaryAddressInfo)	{
				if((primaryAddressInfo != null) && (!(primaryAddressInfo instanceof ZCRM.ZiaPeopleEnrichment.Model.Address))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryAddressInfo EXPECTED TYPE: Address", null, null);
				}
				this.primaryAddressInfo = primaryAddressInfo;
				this.keyModified.set("primary_address_info", 1);

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
			 * The method to get the secondaryContact
			 * @returns {String} A String representing the secondaryContact
			 */
			getSecondaryContact()	{
				return this.secondaryContact;

			}

			/**
			 * The method to set the value to secondaryContact
			 * @param {String} secondaryContact A String
			 */
			setSecondaryContact(secondaryContact)	{
				if((secondaryContact != null) && (!(Object.prototype.toString.call(secondaryContact) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: secondaryContact EXPECTED TYPE: String", null, null);
				}
				this.secondaryContact = secondaryContact;
				this.keyModified.set("secondary_contact", 1);

			}

			/**
			 * The method to get the primaryEmail
			 * @returns {String} A String representing the primaryEmail
			 */
			getPrimaryEmail()	{
				return this.primaryEmail;

			}

			/**
			 * The method to set the value to primaryEmail
			 * @param {String} primaryEmail A String
			 */
			setPrimaryEmail(primaryEmail)	{
				if((primaryEmail != null) && (!(Object.prototype.toString.call(primaryEmail) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryEmail EXPECTED TYPE: String", null, null);
				}
				this.primaryEmail = primaryEmail;
				this.keyModified.set("primary_email", 1);

			}

			/**
			 * The method to get the designation
			 * @returns {String} A String representing the designation
			 */
			getDesignation()	{
				return this.designation;

			}

			/**
			 * The method to set the value to designation
			 * @param {String} designation A String
			 */
			setDesignation(designation)	{
				if((designation != null) && (!(Object.prototype.toString.call(designation) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: designation EXPECTED TYPE: String", null, null);
				}
				this.designation = designation;
				this.keyModified.set("designation", 1);

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
			 * The method to get the interests
			 * @returns {List} An Array representing the interests
			 */
			getInterests()	{
				return this.interests;

			}

			/**
			 * The method to set the value to interests
			 * @param {List} interests An Array
			 */
			setInterests(interests)	{
				if((interests != null) && (!(Object.prototype.toString.call(interests) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: interests EXPECTED TYPE: Array", null, null);
				}
				this.interests = interests;
				this.keyModified.set("interests", 1);

			}

			/**
			 * The method to get the firstName
			 * @returns {String} A String representing the firstName
			 */
			getFirstName()	{
				return this.firstName;

			}

			/**
			 * The method to set the value to firstName
			 * @param {String} firstName A String
			 */
			setFirstName(firstName)	{
				if((firstName != null) && (!(Object.prototype.toString.call(firstName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstName EXPECTED TYPE: String", null, null);
				}
				this.firstName = firstName;
				this.keyModified.set("first_name", 1);

			}

			/**
			 * The method to get the primaryContact
			 * @returns {String} A String representing the primaryContact
			 */
			getPrimaryContact()	{
				return this.primaryContact;

			}

			/**
			 * The method to set the value to primaryContact
			 * @param {String} primaryContact A String
			 */
			setPrimaryContact(primaryContact)	{
				if((primaryContact != null) && (!(Object.prototype.toString.call(primaryContact) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryContact EXPECTED TYPE: String", null, null);
				}
				this.primaryContact = primaryContact;
				this.keyModified.set("primary_contact", 1);

			}

			/**
			 * The method to get the socialMedia
			 * @returns {List} An Array representing the socialMedia
			 */
			getSocialMedia()	{
				return this.socialMedia;

			}

			/**
			 * The method to set the value to socialMedia
			 * @param {List} socialMedia An Array
			 */
			setSocialMedia(socialMedia)	{
				if((socialMedia != null) && (!(Object.prototype.toString.call(socialMedia) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: socialMedia EXPECTED TYPE: Array", null, null);
				}
				this.socialMedia = socialMedia;
				this.keyModified.set("social_media", 1);

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

				this.continent=null;
				this.country=null;
				this.name=null;
				this.region=null;
				this.primary=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the continent
			 * @returns {String} A String representing the continent
			 */
			getContinent()	{
				return this.continent;

			}

			/**
			 * The method to set the value to continent
			 * @param {String} continent A String
			 */
			setContinent(continent)	{
				if((continent != null) && (!(Object.prototype.toString.call(continent) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: continent EXPECTED TYPE: String", null, null);
				}
				this.continent = continent;
				this.keyModified.set("continent", 1);

			}

			/**
			 * The method to get the country
			 * @returns {String} A String representing the country
			 */
			getCountry()	{
				return this.country;

			}

			/**
			 * The method to set the value to country
			 * @param {String} country A String
			 */
			setCountry(country)	{
				if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
				}
				this.country = country;
				this.keyModified.set("country", 1);

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
			 * The method to get the region
			 * @returns {String} A String representing the region
			 */
			getRegion()	{
				return this.region;

			}

			/**
			 * The method to set the value to region
			 * @param {String} region A String
			 */
			setRegion(region)	{
				if((region != null) && (!(Object.prototype.toString.call(region) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: region EXPECTED TYPE: String", null, null);
				}
				this.region = region;
				this.keyModified.set("region", 1);

			}

			/**
			 * The method to get the primary
			 * @returns {Boolean} A Boolean representing the primary
			 */
			getPrimary()	{
				return this.primary;

			}

			/**
			 * The method to set the value to primary
			 * @param {Boolean} primary A Boolean
			 */
			setPrimary(primary)	{
				if((primary != null) && (!(Object.prototype.toString.call(primary) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primary EXPECTED TYPE: Boolean", null, null);
				}
				this.primary = primary;
				this.keyModified.set("primary", 1);

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
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get zia people enrichments
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getZiaPeopleEnrichments(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__zia_people_enrichment");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("ZiaPeopleEnrichment.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create zia people enrichment
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createZiaPeopleEnrichment(request, paramInstance=null){
			if((request != null) && (!(request instanceof ZCRM.ZiaPeopleEnrichment.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__zia_people_enrichment");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("ZiaPeopleEnrichment.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get zia people enrichment
		 * @param {Long} ziaPeopleEnrichmentId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getZiaPeopleEnrichment(ziaPeopleEnrichmentId){
			if((!(Object.prototype.toString.call(ziaPeopleEnrichmentId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaPeopleEnrichmentId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__zia_people_enrichment/");
			apiPath = apiPath.concat(ziaPeopleEnrichmentId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("ZiaPeopleEnrichment.Model.ResponseHandler", "application/json");

		}
	},

}