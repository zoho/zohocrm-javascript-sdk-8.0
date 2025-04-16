ZCRM.ShiftHour = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		BodyWrapper : class{
			constructor(){

				this.shiftHours=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the shiftHours
			 * @returns {List} An Array representing the shiftHours
			 */
			getShiftHours()	{
				return this.shiftHours;

			}

			/**
			 * The method to set the value to shiftHours
			 * @param {List} shiftHours An Array
			 */
			setShiftHours(shiftHours)	{
				if((shiftHours != null) && (!(Object.prototype.toString.call(shiftHours) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftHours EXPECTED TYPE: Array", null, null);
				}
				this.shiftHours = shiftHours;
				this.keyModified.set("shift_hours", 1);

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

		BreakCustomTiming : class{
			constructor(){

				this.days=null;
				this.breakTiming=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the days
			 * @returns {String} A String representing the days
			 */
			getDays()	{
				return this.days;

			}

			/**
			 * The method to set the value to days
			 * @param {String} days A String
			 */
			setDays(days)	{
				if((days != null) && (!(Object.prototype.toString.call(days) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: String", null, null);
				}
				this.days = days;
				this.keyModified.set("days", 1);

			}

			/**
			 * The method to get the breakTiming
			 * @returns {List} An Array representing the breakTiming
			 */
			getBreakTiming()	{
				return this.breakTiming;

			}

			/**
			 * The method to set the value to breakTiming
			 * @param {List} breakTiming An Array
			 */
			setBreakTiming(breakTiming)	{
				if((breakTiming != null) && (!(Object.prototype.toString.call(breakTiming) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: breakTiming EXPECTED TYPE: Array", null, null);
				}
				this.breakTiming = breakTiming;
				this.keyModified.set("break_timing", 1);

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

		BreakHours : class{
			constructor(){

				this.breakDays=null;
				this.sameAsEveryday=null;
				this.dailyTiming=null;
				this.customTiming=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the breakDays
			 * @returns {List} An Array representing the breakDays
			 */
			getBreakDays()	{
				return this.breakDays;

			}

			/**
			 * The method to set the value to breakDays
			 * @param {List} breakDays An Array
			 */
			setBreakDays(breakDays)	{
				if((breakDays != null) && (!(Object.prototype.toString.call(breakDays) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: breakDays EXPECTED TYPE: Array", null, null);
				}
				this.breakDays = breakDays;
				this.keyModified.set("break_days", 1);

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

		SuccessResponse : class{
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

		ResponseWrapper : class{
			constructor(){

				this.shiftHours=null;
				this.shiftCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the shiftHours
			 * @returns {List} An Array representing the shiftHours
			 */
			getShiftHours()	{
				return this.shiftHours;

			}

			/**
			 * The method to set the value to shiftHours
			 * @param {List} shiftHours An Array
			 */
			setShiftHours(shiftHours)	{
				if((shiftHours != null) && (!(Object.prototype.toString.call(shiftHours) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftHours EXPECTED TYPE: Array", null, null);
				}
				this.shiftHours = shiftHours;
				this.keyModified.set("shift_hours", 1);

			}

			/**
			 * The method to get the shiftCount
			 * @returns {ShiftCount} An instance of ShiftCount
			 */
			getShiftCount()	{
				return this.shiftCount;

			}

			/**
			 * The method to set the value to shiftCount
			 * @param {ShiftCount} shiftCount An instance of ShiftCount
			 */
			setShiftCount(shiftCount)	{
				if((shiftCount != null) && (!(shiftCount instanceof ZCRM.ShiftHour.Model.ShiftCount))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftCount EXPECTED TYPE: ShiftCount", null, null);
				}
				this.shiftCount = shiftCount;
				this.keyModified.set("shift_count", 1);

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

		Role : class{
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

		Holidays : class{
			constructor(){

				this.date=null;
				this.year=null;
				this.name=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the date
			 * @returns {LocalDate} An instance of LocalDate
			 */
			getDate()	{
				return this.date;

			}

			/**
			 * The method to set the value to date
			 * @param {LocalDate} date An instance of LocalDate
			 */
			setDate(date)	{
				if((date != null) && (!(date instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: date EXPECTED TYPE: Date", null, null);
				}
				this.date = date;
				this.keyModified.set("date", 1);

			}

			/**
			 * The method to get the year
			 * @returns {Integer} An Integer representing the year
			 */
			getYear()	{
				return this.year;

			}

			/**
			 * The method to set the value to year
			 * @param {Integer} year An Integer
			 */
			setYear(year)	{
				if((year != null) && (!(Object.prototype.toString.call(year) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: year EXPECTED TYPE: Integer", null, null);
				}
				this.year = year;
				this.keyModified.set("year", 1);

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

		Users : class{
			constructor(){

				this.role=null;
				this.name=null;
				this.id=null;
				this.email=null;
				this.zuid=null;
				this.effectiveFrom=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the role
			 * @returns {Role} An instance of Role
			 */
			getRole()	{
				return this.role;

			}

			/**
			 * The method to set the value to role
			 * @param {Role} role An instance of Role
			 */
			setRole(role)	{
				if((role != null) && (!(role instanceof ZCRM.ShiftHour.Model.Role))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: role EXPECTED TYPE: Role", null, null);
				}
				this.role = role;
				this.keyModified.set("role", 1);

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
			 * The method to get the effectiveFrom
			 * @returns {LocalDate} An instance of LocalDate
			 */
			getEffectiveFrom()	{
				return this.effectiveFrom;

			}

			/**
			 * The method to set the value to effectiveFrom
			 * @param {LocalDate} effectiveFrom An instance of LocalDate
			 */
			setEffectiveFrom(effectiveFrom)	{
				if((effectiveFrom != null) && (!(effectiveFrom instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: effectiveFrom EXPECTED TYPE: Date", null, null);
				}
				this.effectiveFrom = effectiveFrom;
				this.keyModified.set("effective_from", 1);

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

		ShiftHours : class{
			constructor(){

				this.sameAsEveryday=null;
				this.shiftDays=null;
				this.dailyTiming=null;
				this.customTiming=null;
				this.id=null;
				this.breakHours=null;
				this.users=null;
				this.holidays=null;
				this.usersCount=null;
				this.timezone=null;
				this.name=null;
				this.keyModified=new Map();
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
			 * The method to get the shiftDays
			 * @returns {List} An Array representing the shiftDays
			 */
			getShiftDays()	{
				return this.shiftDays;

			}

			/**
			 * The method to set the value to shiftDays
			 * @param {List} shiftDays An Array
			 */
			setShiftDays(shiftDays)	{
				if((shiftDays != null) && (!(Object.prototype.toString.call(shiftDays) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftDays EXPECTED TYPE: Array", null, null);
				}
				this.shiftDays = shiftDays;
				this.keyModified.set("shift_days", 1);

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
			 * The method to get the breakHours
			 * @returns {List} An Array representing the breakHours
			 */
			getBreakHours()	{
				return this.breakHours;

			}

			/**
			 * The method to set the value to breakHours
			 * @param {List} breakHours An Array
			 */
			setBreakHours(breakHours)	{
				if((breakHours != null) && (!(Object.prototype.toString.call(breakHours) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: breakHours EXPECTED TYPE: Array", null, null);
				}
				this.breakHours = breakHours;
				this.keyModified.set("break_hours", 1);

			}

			/**
			 * The method to get the users
			 * @returns {List} An Array representing the users
			 */
			getUsers()	{
				return this.users;

			}

			/**
			 * The method to set the value to users
			 * @param {List} users An Array
			 */
			setUsers(users)	{
				if((users != null) && (!(Object.prototype.toString.call(users) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Array", null, null);
				}
				this.users = users;
				this.keyModified.set("users", 1);

			}

			/**
			 * The method to get the holidays
			 * @returns {List} An Array representing the holidays
			 */
			getHolidays()	{
				return this.holidays;

			}

			/**
			 * The method to set the value to holidays
			 * @param {List} holidays An Array
			 */
			setHolidays(holidays)	{
				if((holidays != null) && (!(Object.prototype.toString.call(holidays) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: holidays EXPECTED TYPE: Array", null, null);
				}
				this.holidays = holidays;
				this.keyModified.set("holidays", 1);

			}

			/**
			 * The method to get the usersCount
			 * @returns {Integer} An Integer representing the usersCount
			 */
			getUsersCount()	{
				return this.usersCount;

			}

			/**
			 * The method to set the value to usersCount
			 * @param {Integer} usersCount An Integer
			 */
			setUsersCount(usersCount)	{
				if((usersCount != null) && (!(Object.prototype.toString.call(usersCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usersCount EXPECTED TYPE: Integer", null, null);
				}
				this.usersCount = usersCount;
				this.keyModified.set("users_count", 1);

			}

			/**
			 * The method to get the timezone
			 * @returns {TimeZone} An instance of TimeZone
			 */
			getTimezone()	{
				return this.timezone;

			}

			/**
			 * The method to set the value to timezone
			 * @param {TimeZone} timezone An instance of TimeZone
			 */
			setTimezone(timezone)	{
				if((timezone != null) && (!(timezone instanceof TimeZone))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timezone EXPECTED TYPE: TimeZone", null, null);
				}
				this.timezone = timezone;
				this.keyModified.set("timezone", 1);

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

		ShiftCount : class{
			constructor(){

				this.totalShiftWithUser=null;
				this.totalShift=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the totalShiftWithUser
			 * @returns {Integer} An Integer representing the totalShiftWithUser
			 */
			getTotalShiftWithUser()	{
				return this.totalShiftWithUser;

			}

			/**
			 * The method to set the value to totalShiftWithUser
			 * @param {Integer} totalShiftWithUser An Integer
			 */
			setTotalShiftWithUser(totalShiftWithUser)	{
				if((totalShiftWithUser != null) && (!(Object.prototype.toString.call(totalShiftWithUser) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalShiftWithUser EXPECTED TYPE: Integer", null, null);
				}
				this.totalShiftWithUser = totalShiftWithUser;
				this.keyModified.set("total_shift_with_user", 1);

			}

			/**
			 * The method to get the totalShift
			 * @returns {Integer} An Integer representing the totalShift
			 */
			getTotalShift()	{
				return this.totalShift;

			}

			/**
			 * The method to set the value to totalShift
			 * @param {Integer} totalShift An Integer
			 */
			setTotalShift(totalShift)	{
				if((totalShift != null) && (!(Object.prototype.toString.call(totalShift) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalShift EXPECTED TYPE: Integer", null, null);
				}
				this.totalShift = totalShift;
				this.keyModified.set("total_shift", 1);

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

		ShiftCustomTiming : class{
			constructor(){

				this.days=null;
				this.shiftTiming=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the days
			 * @returns {String} A String representing the days
			 */
			getDays()	{
				return this.days;

			}

			/**
			 * The method to set the value to days
			 * @param {String} days A String
			 */
			setDays(days)	{
				if((days != null) && (!(Object.prototype.toString.call(days) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: String", null, null);
				}
				this.days = days;
				this.keyModified.set("days", 1);

			}

			/**
			 * The method to get the shiftTiming
			 * @returns {List} An Array representing the shiftTiming
			 */
			getShiftTiming()	{
				return this.shiftTiming;

			}

			/**
			 * The method to set the value to shiftTiming
			 * @param {List} shiftTiming An Array
			 */
			setShiftTiming(shiftTiming)	{
				if((shiftTiming != null) && (!(Object.prototype.toString.call(shiftTiming) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftTiming EXPECTED TYPE: Array", null, null);
				}
				this.shiftTiming = shiftTiming;
				this.keyModified.set("shift_timing", 1);

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

				this.shiftHours=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the shiftHours
			 * @returns {List} An Array representing the shiftHours
			 */
			getShiftHours()	{
				return this.shiftHours;

			}

			/**
			 * The method to set the value to shiftHours
			 * @param {List} shiftHours An Array
			 */
			setShiftHours(shiftHours)	{
				if((shiftHours != null) && (!(Object.prototype.toString.call(shiftHours) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftHours EXPECTED TYPE: Array", null, null);
				}
				this.shiftHours = shiftHours;
				this.keyModified.set("shift_hours", 1);

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

		MandatoryDetails : class{
			constructor(){

				this.apiName=null;
				this.jsonPath=null;
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
			 * The method to get the jsonPath
			 * @returns {String} A String representing the jsonPath
			 */
			getJsonPath()	{
				return this.jsonPath;

			}

			/**
			 * The method to set the value to jsonPath
			 * @param {String} jsonPath A String
			 */
			setJsonPath(jsonPath)	{
				if((jsonPath != null) && (!(Object.prototype.toString.call(jsonPath) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonPath EXPECTED TYPE: String", null, null);
				}
				this.jsonPath = jsonPath;
				this.keyModified.set("json_path", 1);

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
		 * Creates an instance of ShiftHoursOperations with the given parameters
		 * @param {String} xCrmOrg A String
		 */
		constructor(xCrmOrg=null){
			if((xCrmOrg != null) && (!(Object.prototype.toString.call(xCrmOrg) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xCrmOrg EXPECTED TYPE: String", null, null);
			}
						this.xCrmOrg = xCrmOrg;

		}

		/**
		 * The method to get shift hours
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getShiftHours(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "ShiftHour.Model.GetShiftHoursHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("ShiftHour.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create shifts hours
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createShiftsHours(request){
			if((request != null) && (!(request instanceof ZCRM.ShiftHour.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "ShiftHour.Model.CreateShiftsHoursHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("ShiftHour.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update shift hours
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateShiftHours(request){
			if((request != null) && (!(request instanceof ZCRM.ShiftHour.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "ShiftHour.Model.UpdateShiftHoursHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("ShiftHour.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get shift hour
		 * @param {Long} shiftId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getShiftHour(shiftId){
			if((!(Object.prototype.toString.call(shiftId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours/");
			apiPath = apiPath.concat(shiftId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "ShiftHour.Model.GetShiftHourHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("ShiftHour.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update shift hour
		 * @param {Long} shiftId A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateShiftHour(shiftId, request){
			if((!(Object.prototype.toString.call(shiftId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftId EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.ShiftHour.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours/");
			apiPath = apiPath.concat(shiftId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "ShiftHour.Model.UpdateShiftHourHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("ShiftHour.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete shift hour
		 * @param {Long} shiftId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteShiftHour(shiftId){
			if((!(Object.prototype.toString.call(shiftId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours/");
			apiPath = apiPath.concat(shiftId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await handlerInstance.addHeader(new Header("X-CRM-ORG", "ShiftHour.Model.DeleteShiftHourHeader"), this.xCrmOrg);
			return handlerInstance.apiCall("ShiftHour.Model.ActionHandler", "application/json");

		}

	},

}