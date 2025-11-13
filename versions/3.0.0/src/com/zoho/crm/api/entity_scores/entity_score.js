ZCRM.EntityScore = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		Entity : class{
			constructor(){

				this.name=null;
				this.id=null;
				this.module=null;
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
			 * The method to get the module
			 * @returns {Module} An instance of Module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {Module} module An instance of Module
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.EntityScore.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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

		EntityScores : class{
			constructor(){

				this.entity=null;
				this.positiveScore=null;
				this.touchPointScore=null;
				this.score=null;
				this.negativeScore=null;
				this.touchPointNegativeScore=null;
				this.scoringRule=null;
				this.fieldStates=null;
				this.id=null;
				this.ziaVisions=null;
				this.touchPointPositiveScore=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the entity
			 * @returns {Entity} An instance of Entity
			 */
			getEntity()	{
				return this.entity;

			}

			/**
			 * The method to set the value to entity
			 * @param {Entity} entity An instance of Entity
			 */
			setEntity(entity)	{
				if((entity != null) && (!(entity instanceof ZCRM.EntityScore.Model.Entity))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: entity EXPECTED TYPE: Entity", null, null);
				}
				this.entity = entity;
				this.keyModified.set("Entity", 1);

			}

			/**
			 * The method to get the positiveScore
			 * @returns {Integer} An Integer representing the positiveScore
			 */
			getPositiveScore()	{
				return this.positiveScore;

			}

			/**
			 * The method to set the value to positiveScore
			 * @param {Integer} positiveScore An Integer
			 */
			setPositiveScore(positiveScore)	{
				if((positiveScore != null) && (!(Object.prototype.toString.call(positiveScore) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: positiveScore EXPECTED TYPE: Integer", null, null);
				}
				this.positiveScore = positiveScore;
				this.keyModified.set("Positive_Score", 1);

			}

			/**
			 * The method to get the touchPointScore
			 * @returns {Integer} An Integer representing the touchPointScore
			 */
			getTouchPointScore()	{
				return this.touchPointScore;

			}

			/**
			 * The method to set the value to touchPointScore
			 * @param {Integer} touchPointScore An Integer
			 */
			setTouchPointScore(touchPointScore)	{
				if((touchPointScore != null) && (!(Object.prototype.toString.call(touchPointScore) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: touchPointScore EXPECTED TYPE: Integer", null, null);
				}
				this.touchPointScore = touchPointScore;
				this.keyModified.set("Touch_Point_Score", 1);

			}

			/**
			 * The method to get the score
			 * @returns {Integer} An Integer representing the score
			 */
			getScore()	{
				return this.score;

			}

			/**
			 * The method to set the value to score
			 * @param {Integer} score An Integer
			 */
			setScore(score)	{
				if((score != null) && (!(Object.prototype.toString.call(score) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: score EXPECTED TYPE: Integer", null, null);
				}
				this.score = score;
				this.keyModified.set("Score", 1);

			}

			/**
			 * The method to get the negativeScore
			 * @returns {Integer} An Integer representing the negativeScore
			 */
			getNegativeScore()	{
				return this.negativeScore;

			}

			/**
			 * The method to set the value to negativeScore
			 * @param {Integer} negativeScore An Integer
			 */
			setNegativeScore(negativeScore)	{
				if((negativeScore != null) && (!(Object.prototype.toString.call(negativeScore) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: negativeScore EXPECTED TYPE: Integer", null, null);
				}
				this.negativeScore = negativeScore;
				this.keyModified.set("Negative_Score", 1);

			}

			/**
			 * The method to get the touchPointNegativeScore
			 * @returns {Integer} An Integer representing the touchPointNegativeScore
			 */
			getTouchPointNegativeScore()	{
				return this.touchPointNegativeScore;

			}

			/**
			 * The method to set the value to touchPointNegativeScore
			 * @param {Integer} touchPointNegativeScore An Integer
			 */
			setTouchPointNegativeScore(touchPointNegativeScore)	{
				if((touchPointNegativeScore != null) && (!(Object.prototype.toString.call(touchPointNegativeScore) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: touchPointNegativeScore EXPECTED TYPE: Integer", null, null);
				}
				this.touchPointNegativeScore = touchPointNegativeScore;
				this.keyModified.set("Touch_Point_Negative_Score", 1);

			}

			/**
			 * The method to get the scoringRule
			 * @returns {ScoringRule} An instance of ScoringRule
			 */
			getScoringRule()	{
				return this.scoringRule;

			}

			/**
			 * The method to set the value to scoringRule
			 * @param {ScoringRule} scoringRule An instance of ScoringRule
			 */
			setScoringRule(scoringRule)	{
				if((scoringRule != null) && (!(scoringRule instanceof ZCRM.EntityScore.Model.ScoringRule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scoringRule EXPECTED TYPE: ScoringRule", null, null);
				}
				this.scoringRule = scoringRule;
				this.keyModified.set("Scoring_Rule", 1);

			}

			/**
			 * The method to get the fieldStates
			 * @returns {List} An Array representing the fieldStates
			 */
			getFieldStates()	{
				return this.fieldStates;

			}

			/**
			 * The method to set the value to fieldStates
			 * @param {List} fieldStates An Array
			 */
			setFieldStates(fieldStates)	{
				if((fieldStates != null) && (!(Object.prototype.toString.call(fieldStates) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldStates EXPECTED TYPE: Array", null, null);
				}
				this.fieldStates = fieldStates;
				this.keyModified.set("$field_states", 1);

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
			 * The method to get the ziaVisions
			 * @returns {Boolean} A Boolean representing the ziaVisions
			 */
			getZiaVisions()	{
				return this.ziaVisions;

			}

			/**
			 * The method to set the value to ziaVisions
			 * @param {Boolean} ziaVisions A Boolean
			 */
			setZiaVisions(ziaVisions)	{
				if((ziaVisions != null) && (!(Object.prototype.toString.call(ziaVisions) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaVisions EXPECTED TYPE: Boolean", null, null);
				}
				this.ziaVisions = ziaVisions;
				this.keyModified.set("$zia_visions", 1);

			}

			/**
			 * The method to get the touchPointPositiveScore
			 * @returns {Integer} An Integer representing the touchPointPositiveScore
			 */
			getTouchPointPositiveScore()	{
				return this.touchPointPositiveScore;

			}

			/**
			 * The method to set the value to touchPointPositiveScore
			 * @param {Integer} touchPointPositiveScore An Integer
			 */
			setTouchPointPositiveScore(touchPointPositiveScore)	{
				if((touchPointPositiveScore != null) && (!(Object.prototype.toString.call(touchPointPositiveScore) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: touchPointPositiveScore EXPECTED TYPE: Integer", null, null);
				}
				this.touchPointPositiveScore = touchPointPositiveScore;
				this.keyModified.set("Touch_Point_Positive_Score", 1);

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

		ScoringRule : class{
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

		Info : class{
			constructor(){

				this.perPage=null;
				this.nextPageToken=null;
				this.count=null;
				this.sortBy=null;
				this.page=null;
				this.previousPageToken=null;
				this.pageTokenExpiry=null;
				this.sortOrder=null;
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
			 * @returns {String} A String representing the pageTokenExpiry
			 */
			getPageTokenExpiry()	{
				return this.pageTokenExpiry;

			}

			/**
			 * The method to set the value to pageTokenExpiry
			 * @param {String} pageTokenExpiry A String
			 */
			setPageTokenExpiry(pageTokenExpiry)	{
				if((pageTokenExpiry != null) && (!(Object.prototype.toString.call(pageTokenExpiry) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pageTokenExpiry EXPECTED TYPE: String", null, null);
				}
				this.pageTokenExpiry = pageTokenExpiry;
				this.keyModified.set("page_token_expiry", 1);

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
				if((info != null) && (!(info instanceof ZCRM.EntityScore.Model.Info))){
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

		Module : class{
			constructor(){

				this.apiName=null;
				this.id=null;
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
		 * Creates an instance of EntityScoresOperations with the given parameters
		 * @param {String} fields A String
		 * @param {String} cvid A String
		 */
		constructor(fields=null, cvid=null){
			if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: String", null, null);
			}
			if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: String", null, null);
			}
						this.fields = fields;
						this.cvid = cvid;

		}

		/**
		 * The method to get entity score
		 * @param {Long} recordId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEntityScore(recordId){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Entity_Scores__s/");
			apiPath = apiPath.concat(recordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("fields", "EntityScore.Model.GetEntityScoreParam"), this.fields);
			await handlerInstance.addParam(new Param("cvid", "EntityScore.Model.GetEntityScoreParam"), this.cvid);
			return handlerInstance.apiCall("EntityScore.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get entity scores
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getEntityScores(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Entity_Scores__s");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("fields", "EntityScore.Model.GetEntityScoresParam"), this.fields);
			await handlerInstance.addParam(new Param("cvid", "EntityScore.Model.GetEntityScoresParam"), this.cvid);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("EntityScore.Model.ResponseHandler", "application/json");

		}

	},

}