ZCRM.ZiaOrgEnrichment = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		BodyWrapper : class{
			constructor(){

				this.ziaorgenrichment=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the ziaorgenrichment
			 * @returns {List} An Array representing the ziaorgenrichment
			 */
			getZiaorgenrichment()	{
				return this.ziaorgenrichment;

			}

			/**
			 * The method to set the value to ziaorgenrichment
			 * @param {List} ziaorgenrichment An Array
			 */
			setZiaorgenrichment(ziaorgenrichment)	{
				if((ziaorgenrichment != null) && (!(Object.prototype.toString.call(ziaorgenrichment) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaorgenrichment EXPECTED TYPE: Array", null, null);
				}
				this.ziaorgenrichment = ziaorgenrichment;
				this.keyModified.set("__zia_org_enrichment", 1);

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

		Address : class{
			constructor(){

				this.country=null;
				this.city=null;
				this.pinCode=null;
				this.state=null;
				this.fillAddress=null;
				this.keyModified=new Map();
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
			 * The method to get the city
			 * @returns {String} A String representing the city
			 */
			getCity()	{
				return this.city;

			}

			/**
			 * The method to set the value to city
			 * @param {String} city A String
			 */
			setCity(city)	{
				if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
				}
				this.city = city;
				this.keyModified.set("city", 1);

			}

			/**
			 * The method to get the pinCode
			 * @returns {String} A String representing the pinCode
			 */
			getPinCode()	{
				return this.pinCode;

			}

			/**
			 * The method to set the value to pinCode
			 * @param {String} pinCode A String
			 */
			setPinCode(pinCode)	{
				if((pinCode != null) && (!(Object.prototype.toString.call(pinCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pinCode EXPECTED TYPE: String", null, null);
				}
				this.pinCode = pinCode;
				this.keyModified.set("pin_code", 1);

			}

			/**
			 * The method to get the state
			 * @returns {String} A String representing the state
			 */
			getState()	{
				return this.state;

			}

			/**
			 * The method to set the value to state
			 * @param {String} state A String
			 */
			setState(state)	{
				if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
				}
				this.state = state;
				this.keyModified.set("state", 1);

			}

			/**
			 * The method to get the fillAddress
			 * @returns {String} A String representing the fillAddress
			 */
			getFillAddress()	{
				return this.fillAddress;

			}

			/**
			 * The method to set the value to fillAddress
			 * @param {String} fillAddress A String
			 */
			setFillAddress(fillAddress)	{
				if((fillAddress != null) && (!(Object.prototype.toString.call(fillAddress) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fillAddress EXPECTED TYPE: String", null, null);
				}
				this.fillAddress = fillAddress;
				this.keyModified.set("fill_address", 1);

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

		ActionWrapper : class{
			constructor(){

				this.ziaorgenrichment=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the ziaorgenrichment
			 * @returns {List} An Array representing the ziaorgenrichment
			 */
			getZiaorgenrichment()	{
				return this.ziaorgenrichment;

			}

			/**
			 * The method to set the value to ziaorgenrichment
			 * @param {List} ziaorgenrichment An Array
			 */
			setZiaorgenrichment(ziaorgenrichment)	{
				if((ziaorgenrichment != null) && (!(Object.prototype.toString.call(ziaorgenrichment) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaorgenrichment EXPECTED TYPE: Array", null, null);
				}
				this.ziaorgenrichment = ziaorgenrichment;
				this.keyModified.set("__zia_org_enrichment", 1);

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

		ZiaOrgEnrichment : class{
			constructor(){

				this.enrichedData=null;
				this.createdTime=null;
				this.id=null;
				this.createdBy=null;
				this.status=null;
				this.enrichBasedOn=null;
				this.keyModified=new Map();
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
				if((enrichedData != null) && (!(enrichedData instanceof ZCRM.ZiaOrgEnrichment.Model.EnrichedData))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichedData EXPECTED TYPE: EnrichedData", null, null);
				}
				this.enrichedData = enrichedData;
				this.keyModified.set("enriched_data", 1);

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
				if((createdBy != null) && (!(createdBy instanceof ZCRM.ZiaOrgEnrichment.Model.User))){
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
				if((enrichBasedOn != null) && (!(enrichBasedOn instanceof ZCRM.ZiaOrgEnrichment.Model.EnrichBasedOn))){
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

		EnrichedData : class{
			constructor(){

				this.orgStatus=null;
				this.description=null;
				this.ceo=null;
				this.secondaryEmail=null;
				this.revenue=null;
				this.yearsInIndustry=null;
				this.otherContacts=null;
				this.technoGraphicData=null;
				this.logo=null;
				this.secondaryContact=null;
				this.id=null;
				this.otherEmails=null;
				this.signIn=null;
				this.website=null;
				this.address=null;
				this.signUp=null;
				this.orgType=null;
				this.headQuarters=null;
				this.noOfEmployees=null;
				this.territoryList=null;
				this.foundingYear=null;
				this.industries=null;
				this.name=null;
				this.primaryEmail=null;
				this.businessModel=null;
				this.primaryContact=null;
				this.socialMedia=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the orgStatus
			 * @returns {String} A String representing the orgStatus
			 */
			getOrgStatus()	{
				return this.orgStatus;

			}

			/**
			 * The method to set the value to orgStatus
			 * @param {String} orgStatus A String
			 */
			setOrgStatus(orgStatus)	{
				if((orgStatus != null) && (!(Object.prototype.toString.call(orgStatus) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgStatus EXPECTED TYPE: String", null, null);
				}
				this.orgStatus = orgStatus;
				this.keyModified.set("org_status", 1);

			}

			/**
			 * The method to get the description
			 * @returns {List} An Array representing the description
			 */
			getDescription()	{
				return this.description;

			}

			/**
			 * The method to set the value to description
			 * @param {List} description An Array
			 */
			setDescription(description)	{
				if((description != null) && (!(Object.prototype.toString.call(description) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: Array", null, null);
				}
				this.description = description;
				this.keyModified.set("description", 1);

			}

			/**
			 * The method to get the ceo
			 * @returns {String} A String representing the ceo
			 */
			getCeo()	{
				return this.ceo;

			}

			/**
			 * The method to set the value to ceo
			 * @param {String} ceo A String
			 */
			setCeo(ceo)	{
				if((ceo != null) && (!(Object.prototype.toString.call(ceo) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ceo EXPECTED TYPE: String", null, null);
				}
				this.ceo = ceo;
				this.keyModified.set("ceo", 1);

			}

			/**
			 * The method to get the secondaryEmail
			 * @returns {String} A String representing the secondaryEmail
			 */
			getSecondaryEmail()	{
				return this.secondaryEmail;

			}

			/**
			 * The method to set the value to secondaryEmail
			 * @param {String} secondaryEmail A String
			 */
			setSecondaryEmail(secondaryEmail)	{
				if((secondaryEmail != null) && (!(Object.prototype.toString.call(secondaryEmail) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: secondaryEmail EXPECTED TYPE: String", null, null);
				}
				this.secondaryEmail = secondaryEmail;
				this.keyModified.set("secondary_email", 1);

			}

			/**
			 * The method to get the revenue
			 * @returns {String} A String representing the revenue
			 */
			getRevenue()	{
				return this.revenue;

			}

			/**
			 * The method to set the value to revenue
			 * @param {String} revenue A String
			 */
			setRevenue(revenue)	{
				if((revenue != null) && (!(Object.prototype.toString.call(revenue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: revenue EXPECTED TYPE: String", null, null);
				}
				this.revenue = revenue;
				this.keyModified.set("revenue", 1);

			}

			/**
			 * The method to get the yearsInIndustry
			 * @returns {String} A String representing the yearsInIndustry
			 */
			getYearsInIndustry()	{
				return this.yearsInIndustry;

			}

			/**
			 * The method to set the value to yearsInIndustry
			 * @param {String} yearsInIndustry A String
			 */
			setYearsInIndustry(yearsInIndustry)	{
				if((yearsInIndustry != null) && (!(Object.prototype.toString.call(yearsInIndustry) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: yearsInIndustry EXPECTED TYPE: String", null, null);
				}
				this.yearsInIndustry = yearsInIndustry;
				this.keyModified.set("years_in_industry", 1);

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
			 * The method to get the technoGraphicData
			 * @returns {String} A String representing the technoGraphicData
			 */
			getTechnoGraphicData()	{
				return this.technoGraphicData;

			}

			/**
			 * The method to set the value to technoGraphicData
			 * @param {String} technoGraphicData A String
			 */
			setTechnoGraphicData(technoGraphicData)	{
				if((technoGraphicData != null) && (!(Object.prototype.toString.call(technoGraphicData) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: technoGraphicData EXPECTED TYPE: String", null, null);
				}
				this.technoGraphicData = technoGraphicData;
				this.keyModified.set("techno_graphic_data", 1);

			}

			/**
			 * The method to get the logo
			 * @returns {String} A String representing the logo
			 */
			getLogo()	{
				return this.logo;

			}

			/**
			 * The method to set the value to logo
			 * @param {String} logo A String
			 */
			setLogo(logo)	{
				if((logo != null) && (!(Object.prototype.toString.call(logo) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: logo EXPECTED TYPE: String", null, null);
				}
				this.logo = logo;
				this.keyModified.set("logo", 1);

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
			 * The method to get the otherEmails
			 * @returns {List} An Array representing the otherEmails
			 */
			getOtherEmails()	{
				return this.otherEmails;

			}

			/**
			 * The method to set the value to otherEmails
			 * @param {List} otherEmails An Array
			 */
			setOtherEmails(otherEmails)	{
				if((otherEmails != null) && (!(Object.prototype.toString.call(otherEmails) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: otherEmails EXPECTED TYPE: Array", null, null);
				}
				this.otherEmails = otherEmails;
				this.keyModified.set("other_emails", 1);

			}

			/**
			 * The method to get the signIn
			 * @returns {String} A String representing the signIn
			 */
			getSignIn()	{
				return this.signIn;

			}

			/**
			 * The method to set the value to signIn
			 * @param {String} signIn A String
			 */
			setSignIn(signIn)	{
				if((signIn != null) && (!(Object.prototype.toString.call(signIn) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signIn EXPECTED TYPE: String", null, null);
				}
				this.signIn = signIn;
				this.keyModified.set("sign_in", 1);

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
			 * The method to get the address
			 * @returns {List} An Array representing the address
			 */
			getAddress()	{
				return this.address;

			}

			/**
			 * The method to set the value to address
			 * @param {List} address An Array
			 */
			setAddress(address)	{
				if((address != null) && (!(Object.prototype.toString.call(address) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: address EXPECTED TYPE: Array", null, null);
				}
				this.address = address;
				this.keyModified.set("address", 1);

			}

			/**
			 * The method to get the signUp
			 * @returns {String} A String representing the signUp
			 */
			getSignUp()	{
				return this.signUp;

			}

			/**
			 * The method to set the value to signUp
			 * @param {String} signUp A String
			 */
			setSignUp(signUp)	{
				if((signUp != null) && (!(Object.prototype.toString.call(signUp) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signUp EXPECTED TYPE: String", null, null);
				}
				this.signUp = signUp;
				this.keyModified.set("sign_up", 1);

			}

			/**
			 * The method to get the orgType
			 * @returns {String} A String representing the orgType
			 */
			getOrgType()	{
				return this.orgType;

			}

			/**
			 * The method to set the value to orgType
			 * @param {String} orgType A String
			 */
			setOrgType(orgType)	{
				if((orgType != null) && (!(Object.prototype.toString.call(orgType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgType EXPECTED TYPE: String", null, null);
				}
				this.orgType = orgType;
				this.keyModified.set("org_type", 1);

			}

			/**
			 * The method to get the headQuarters
			 * @returns {List} An Array representing the headQuarters
			 */
			getHeadQuarters()	{
				return this.headQuarters;

			}

			/**
			 * The method to set the value to headQuarters
			 * @param {List} headQuarters An Array
			 */
			setHeadQuarters(headQuarters)	{
				if((headQuarters != null) && (!(Object.prototype.toString.call(headQuarters) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headQuarters EXPECTED TYPE: Array", null, null);
				}
				this.headQuarters = headQuarters;
				this.keyModified.set("head_quarters", 1);

			}

			/**
			 * The method to get the noOfEmployees
			 * @returns {String} A String representing the noOfEmployees
			 */
			getNoOfEmployees()	{
				return this.noOfEmployees;

			}

			/**
			 * The method to set the value to noOfEmployees
			 * @param {String} noOfEmployees A String
			 */
			setNoOfEmployees(noOfEmployees)	{
				if((noOfEmployees != null) && (!(Object.prototype.toString.call(noOfEmployees) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noOfEmployees EXPECTED TYPE: String", null, null);
				}
				this.noOfEmployees = noOfEmployees;
				this.keyModified.set("no_of_employees", 1);

			}

			/**
			 * The method to get the territoryList
			 * @returns {List} An Array representing the territoryList
			 */
			getTerritoryList()	{
				return this.territoryList;

			}

			/**
			 * The method to set the value to territoryList
			 * @param {List} territoryList An Array
			 */
			setTerritoryList(territoryList)	{
				if((territoryList != null) && (!(Object.prototype.toString.call(territoryList) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territoryList EXPECTED TYPE: Array", null, null);
				}
				this.territoryList = territoryList;
				this.keyModified.set("territory_list", 1);

			}

			/**
			 * The method to get the foundingYear
			 * @returns {String} A String representing the foundingYear
			 */
			getFoundingYear()	{
				return this.foundingYear;

			}

			/**
			 * The method to set the value to foundingYear
			 * @param {String} foundingYear A String
			 */
			setFoundingYear(foundingYear)	{
				if((foundingYear != null) && (!(Object.prototype.toString.call(foundingYear) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: foundingYear EXPECTED TYPE: String", null, null);
				}
				this.foundingYear = foundingYear;
				this.keyModified.set("founding_year", 1);

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
			 * The method to get the businessModel
			 * @returns {List} An Array representing the businessModel
			 */
			getBusinessModel()	{
				return this.businessModel;

			}

			/**
			 * The method to set the value to businessModel
			 * @param {List} businessModel An Array
			 */
			setBusinessModel(businessModel)	{
				if((businessModel != null) && (!(Object.prototype.toString.call(businessModel) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessModel EXPECTED TYPE: Array", null, null);
				}
				this.businessModel = businessModel;
				this.keyModified.set("business_model", 1);

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

		Description : class{
			constructor(){

				this.title=null;
				this.description=null;
				this.keyModified=new Map();
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

		EnrichBasedOn : class{
			constructor(){

				this.name=null;
				this.email=null;
				this.website=null;
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

				this.ziaorgenrichment=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the ziaorgenrichment
			 * @returns {List} An Array representing the ziaorgenrichment
			 */
			getZiaorgenrichment()	{
				return this.ziaorgenrichment;

			}

			/**
			 * The method to set the value to ziaorgenrichment
			 * @param {List} ziaorgenrichment An Array
			 */
			setZiaorgenrichment(ziaorgenrichment)	{
				if((ziaorgenrichment != null) && (!(Object.prototype.toString.call(ziaorgenrichment) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaorgenrichment EXPECTED TYPE: Array", null, null);
				}
				this.ziaorgenrichment = ziaorgenrichment;
				this.keyModified.set("__zia_org_enrichment", 1);

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
				if((info != null) && (!(info instanceof ZCRM.ZiaOrgEnrichment.Model.Info))){
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
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get zia org enrichments
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getZiaOrgEnrichments(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__zia_org_enrichment");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("ZiaOrgEnrichment.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create zia org enrichment
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createZiaOrgEnrichment(request, paramInstance=null){
			if((request != null) && (!(request instanceof ZCRM.ZiaOrgEnrichment.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__zia_org_enrichment");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("ZiaOrgEnrichment.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get zia org enrichment
		 * @param {Long} ziaOrgEnrichmentId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getZiaOrgEnrichment(ziaOrgEnrichmentId){
			if((!(Object.prototype.toString.call(ziaOrgEnrichmentId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaOrgEnrichmentId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/__zia_org_enrichment/");
			apiPath = apiPath.concat(ziaOrgEnrichmentId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("ZiaOrgEnrichment.Model.ResponseHandler", "application/json");

		}
	},

}