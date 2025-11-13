ZCRM.BusinessHour = {
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

		Features : class{
			constructor(){

				this.name=null;
				this.resources=null;
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
			 * The method to get the resources
			 * @returns {List} An Array representing the resources
			 */
			getResources()	{
				return this.resources;

			}

			/**
			 * The method to set the value to resources
			 * @param {List} resources An Array
			 */
			setResources(resources)	{
				if((resources != null) && (!(Object.prototype.toString.call(resources) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resources EXPECTED TYPE: Array", null, null);
				}
				this.resources = resources;
				this.keyModified.set("resources", 1);

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

		BusinessHours : class{
			constructor(){

				this.weekStartsOn=null;
				this.type=null;
				this.id=null;
				this.businessDays=null;
				this.sameAsEveryday=null;
				this.dailyTiming=null;
				this.customTiming=null;
				this.timezone=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the weekStartsOn
			 * @returns {Choice} An instance of Choice
			 */
			getWeekStartsOn()	{
				return this.weekStartsOn;

			}

			/**
			 * The method to set the value to weekStartsOn
			 * @param {Choice} weekStartsOn An instance of Choice
			 */
			setWeekStartsOn(weekStartsOn)	{
				if((weekStartsOn != null) && (!(weekStartsOn instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: weekStartsOn EXPECTED TYPE: Choice", null, null);
				}
				this.weekStartsOn = weekStartsOn;
				this.keyModified.set("week_starts_on", 1);

			}

			/**
			 * The method to get the type
			 * @returns {Choice} An instance of Choice
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {Choice} type An instance of Choice
			 */
			setType(type)	{
				if((type != null) && (!(type instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

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
			 * The method to get the businessDays
			 * @returns {List} An Array representing the businessDays
			 */
			getBusinessDays()	{
				return this.businessDays;

			}

			/**
			 * The method to set the value to businessDays
			 * @param {List} businessDays An Array
			 */
			setBusinessDays(businessDays)	{
				if((businessDays != null) && (!(Object.prototype.toString.call(businessDays) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessDays EXPECTED TYPE: Array", null, null);
				}
				this.businessDays = businessDays;
				this.keyModified.set("business_days", 1);

			}

			/**
			 * The method to get the sameAsEveryday
			 * @returns {Boolean} A Boolean representing the sameAsEveryday
			 */
			getSameAsEveryday()	{
				return this.sameAsEveryday;

			}

			/**
			 * The method to set the value to sameAsEveryday
			 * @param {Boolean} sameAsEveryday A Boolean
			 */
			setSameAsEveryday(sameAsEveryday)	{
				if((sameAsEveryday != null) && (!(Object.prototype.toString.call(sameAsEveryday) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sameAsEveryday EXPECTED TYPE: Boolean", null, null);
				}
				this.sameAsEveryday = sameAsEveryday;
				this.keyModified.set("same_as_everyday", 1);

			}

			/**
			 * The method to get the dailyTiming
			 * @returns {List} An Array representing the dailyTiming
			 */
			getDailyTiming()	{
				return this.dailyTiming;

			}

			/**
			 * The method to set the value to dailyTiming
			 * @param {List} dailyTiming An Array
			 */
			setDailyTiming(dailyTiming)	{
				if((dailyTiming != null) && (!(Object.prototype.toString.call(dailyTiming) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dailyTiming EXPECTED TYPE: Array", null, null);
				}
				this.dailyTiming = dailyTiming;
				this.keyModified.set("daily_timing", 1);

			}

			/**
			 * The method to get the customTiming
			 * @returns {List} An Array representing the customTiming
			 */
			getCustomTiming()	{
				return this.customTiming;

			}

			/**
			 * The method to set the value to customTiming
			 * @param {List} customTiming An Array
			 */
			setCustomTiming(customTiming)	{
				if((customTiming != null) && (!(Object.prototype.toString.call(customTiming) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customTiming EXPECTED TYPE: Array", null, null);
				}
				this.customTiming = customTiming;
				this.keyModified.set("custom_timing", 1);

			}

			/**
			 * The method to get the timezone
			 * @returns {String} A String representing the timezone
			 */
			getTimezone()	{
				return this.timezone;

			}

			/**
			 * The method to set the value to timezone
			 * @param {String} timezone A String
			 */
			setTimezone(timezone)	{
				if((timezone != null) && (!(Object.prototype.toString.call(timezone) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timezone EXPECTED TYPE: String", null, null);
				}
				this.timezone = timezone;
				this.keyModified.set("timezone", 1);

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

				this.businessHours=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the businessHours
			 * @returns {BusinessHours} An instance of BusinessHours
			 */
			getBusinessHours()	{
				return this.businessHours;

			}

			/**
			 * The method to set the value to businessHours
			 * @param {BusinessHours} businessHours An instance of BusinessHours
			 */
			setBusinessHours(businessHours)	{
				if((businessHours != null) && (!(businessHours instanceof ZCRM.BusinessHour.Model.BusinessHours))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessHours EXPECTED TYPE: BusinessHours", null, null);
				}
				this.businessHours = businessHours;
				this.keyModified.set("business_hours", 1);

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

				this.businessHours=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the businessHours
			 * @returns {BusinessHours} An instance of BusinessHours
			 */
			getBusinessHours()	{
				return this.businessHours;

			}

			/**
			 * The method to set the value to businessHours
			 * @param {BusinessHours} businessHours An instance of BusinessHours
			 */
			setBusinessHours(businessHours)	{
				if((businessHours != null) && (!(businessHours instanceof ZCRM.BusinessHour.Model.BusinessHours))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessHours EXPECTED TYPE: BusinessHours", null, null);
				}
				this.businessHours = businessHours;
				this.keyModified.set("business_hours", 1);

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

		Resources : class{
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

		BreakHoursCustomTiming : class{
			constructor(){

				this.days=null;
				this.businessTiming=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the days
			 * @returns {Choice} An instance of Choice
			 */
			getDays()	{
				return this.days;

			}

			/**
			 * The method to set the value to days
			 * @param {Choice} days An instance of Choice
			 */
			setDays(days)	{
				if((days != null) && (!(days instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: Choice", null, null);
				}
				this.days = days;
				this.keyModified.set("days", 1);

			}

			/**
			 * The method to get the businessTiming
			 * @returns {List} An Array representing the businessTiming
			 */
			getBusinessTiming()	{
				return this.businessTiming;

			}

			/**
			 * The method to set the value to businessTiming
			 * @param {List} businessTiming An Array
			 */
			setBusinessTiming(businessTiming)	{
				if((businessTiming != null) && (!(Object.prototype.toString.call(businessTiming) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessTiming EXPECTED TYPE: Array", null, null);
				}
				this.businessTiming = businessTiming;
				this.keyModified.set("business_timing", 1);

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

				this.businessHours=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the businessHours
			 * @returns {ActionResponse} An instance of ActionResponse
			 */
			getBusinessHours()	{
				return this.businessHours;

			}

			/**
			 * The method to set the value to businessHours
			 * @param {ActionResponse} businessHours An instance of ActionResponse
			 */
			setBusinessHours(businessHours)	{
				this.businessHours = businessHours;
				this.keyModified.set("business_hours", 1);

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
		 * Creates an instance of BusinessHoursOperations with the given parameters
		 * @param {String} xCrmOrg A String
		 */
		constructor(xCrmOrg=null){
			if((xCrmOrg != null) && (!(Object.prototype.toString.call(xCrmOrg) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xCrmOrg EXPECTED TYPE: String", null, null);
			}
						this.xCrmOrg = xCrmOrg;

		}

		/**
		 * The method to create business hours
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createBusinessHours(request){
			if((request != null) && (!(request instanceof ZCRM.BusinessHour.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "BusinessHour.Model.CreateBusinessHoursHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("BusinessHour.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update business hours
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateBusinessHours(request){
			if((request != null) && (!(request instanceof ZCRM.BusinessHour.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "BusinessHour.Model.UpdateBusinessHoursHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("BusinessHour.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get business hours
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getBusinessHours(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "BusinessHour.Model.GetBusinessHoursHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("BusinessHour.Model.ResponseHandler", "application/json");

		}

	},

}