ZCRM.Timeline = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		NameIdStructure : class{
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

		FieldHistoryValue : class{
			constructor(){

				this.new1=null;
				this.old=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the new
			 * @returns {String} A String representing the new1
			 */
			getNew()	{
				return this.new1;

			}

			/**
			 * The method to set the value to new
			 * @param {String} new1 A String
			 */
			setNew(new1)	{
				if((new1 != null) && (!(Object.prototype.toString.call(new1) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: new1 EXPECTED TYPE: String", null, null);
				}
				this.new1 = new1;
				this.keyModified.set("new", 1);

			}

			/**
			 * The method to get the old
			 * @returns {String} A String representing the old
			 */
			getOld()	{
				return this.old;

			}

			/**
			 * The method to set the value to old
			 * @param {String} old A String
			 */
			setOld(old)	{
				if((old != null) && (!(Object.prototype.toString.call(old) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: old EXPECTED TYPE: String", null, null);
				}
				this.old = old;
				this.keyModified.set("old", 1);

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

		PicklistDetail : class{
			constructor(){

				this.displayValue=null;
				this.sequenceNumber=null;
				this.colourCode=null;
				this.actualValue=null;
				this.id=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the displayValue
			 * @returns {String} A String representing the displayValue
			 */
			getDisplayValue()	{
				return this.displayValue;

			}

			/**
			 * The method to set the value to displayValue
			 * @param {String} displayValue A String
			 */
			setDisplayValue(displayValue)	{
				if((displayValue != null) && (!(Object.prototype.toString.call(displayValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayValue EXPECTED TYPE: String", null, null);
				}
				this.displayValue = displayValue;
				this.keyModified.set("display_value", 1);

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
			 * The method to get the colourCode
			 * @returns {String} A String representing the colourCode
			 */
			getColourCode()	{
				return this.colourCode;

			}

			/**
			 * The method to set the value to colourCode
			 * @param {String} colourCode A String
			 */
			setColourCode(colourCode)	{
				if((colourCode != null) && (!(Object.prototype.toString.call(colourCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: colourCode EXPECTED TYPE: String", null, null);
				}
				this.colourCode = colourCode;
				this.keyModified.set("colour_code", 1);

			}

			/**
			 * The method to get the actualValue
			 * @returns {String} A String representing the actualValue
			 */
			getActualValue()	{
				return this.actualValue;

			}

			/**
			 * The method to set the value to actualValue
			 * @param {String} actualValue A String
			 */
			setActualValue(actualValue)	{
				if((actualValue != null) && (!(Object.prototype.toString.call(actualValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actualValue EXPECTED TYPE: String", null, null);
				}
				this.actualValue = actualValue;
				this.keyModified.set("actual_value", 1);

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

		AutomationDetail : class{
			constructor(){

				this.type=null;
				this.rule=null;
				this.pathfinder=null;
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
			 * The method to get the rule
			 * @returns {NameIdStructure} An instance of NameIdStructure
			 */
			getRule()	{
				return this.rule;

			}

			/**
			 * The method to set the value to rule
			 * @param {NameIdStructure} rule An instance of NameIdStructure
			 */
			setRule(rule)	{
				if((rule != null) && (!(rule instanceof ZCRM.Timeline.Model.NameIdStructure))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rule EXPECTED TYPE: NameIdStructure", null, null);
				}
				this.rule = rule;
				this.keyModified.set("rule", 1);

			}

			/**
			 * The method to get the pathfinder
			 * @returns {PathFinder} An instance of PathFinder
			 */
			getPathfinder()	{
				return this.pathfinder;

			}

			/**
			 * The method to set the value to pathfinder
			 * @param {PathFinder} pathfinder An instance of PathFinder
			 */
			setPathfinder(pathfinder)	{
				if((pathfinder != null) && (!(pathfinder instanceof ZCRM.Timeline.Model.PathFinder))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pathfinder EXPECTED TYPE: PathFinder", null, null);
				}
				this.pathfinder = pathfinder;
				this.keyModified.set("pathfinder", 1);

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

		PathFinder : class{
			constructor(){

				this.processEntry=null;
				this.processExit=null;
				this.state=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the processEntry
			 * @returns {Boolean} A Boolean representing the processEntry
			 */
			getProcessEntry()	{
				return this.processEntry;

			}

			/**
			 * The method to set the value to processEntry
			 * @param {Boolean} processEntry A Boolean
			 */
			setProcessEntry(processEntry)	{
				if((processEntry != null) && (!(Object.prototype.toString.call(processEntry) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processEntry EXPECTED TYPE: Boolean", null, null);
				}
				this.processEntry = processEntry;
				this.keyModified.set("process_entry", 1);

			}

			/**
			 * The method to get the processExit
			 * @returns {Boolean} A Boolean representing the processExit
			 */
			getProcessExit()	{
				return this.processExit;

			}

			/**
			 * The method to set the value to processExit
			 * @param {Boolean} processExit A Boolean
			 */
			setProcessExit(processExit)	{
				if((processExit != null) && (!(Object.prototype.toString.call(processExit) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processExit EXPECTED TYPE: Boolean", null, null);
				}
				this.processExit = processExit;
				this.keyModified.set("process_exit", 1);

			}

			/**
			 * The method to get the state
			 * @returns {State} An instance of State
			 */
			getState()	{
				return this.state;

			}

			/**
			 * The method to set the value to state
			 * @param {State} state An instance of State
			 */
			setState(state)	{
				if((state != null) && (!(state instanceof ZCRM.Timeline.Model.State))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: State", null, null);
				}
				this.state = state;
				this.keyModified.set("state", 1);

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
				if((module != null) && (!(module instanceof ZCRM.Timeline.Model.Module))){
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

		Info : class{
			constructor(){

				this.perPage=null;
				this.page=null;
				this.count=null;
				this.moreRecords=null;
				this.nextPageToken=null;
				this.previousPageToken=null;
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

		State : class{
			constructor(){

				this.triggerType=null;
				this.name=null;
				this.isLastState=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the triggerType
			 * @returns {String} A String representing the triggerType
			 */
			getTriggerType()	{
				return this.triggerType;

			}

			/**
			 * The method to set the value to triggerType
			 * @param {String} triggerType A String
			 */
			setTriggerType(triggerType)	{
				if((triggerType != null) && (!(Object.prototype.toString.call(triggerType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: triggerType EXPECTED TYPE: String", null, null);
				}
				this.triggerType = triggerType;
				this.keyModified.set("trigger_type", 1);

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
			 * The method to get the isLastState
			 * @returns {Boolean} A Boolean representing the isLastState
			 */
			getIsLastState()	{
				return this.isLastState;

			}

			/**
			 * The method to set the value to isLastState
			 * @param {Boolean} isLastState A Boolean
			 */
			setIsLastState(isLastState)	{
				if((isLastState != null) && (!(Object.prototype.toString.call(isLastState) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isLastState EXPECTED TYPE: Boolean", null, null);
				}
				this.isLastState = isLastState;
				this.keyModified.set("is_last_state", 1);

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

		Timeline : class{
			constructor(){

				this.auditedTime=null;
				this.action=null;
				this.id=null;
				this.source=null;
				this.extension=null;
				this.type=null;
				this.doneBy=null;
				this.relatedRecord=null;
				this.automationDetails=null;
				this.record=null;
				this.fieldHistory=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the auditedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getAuditedTime()	{
				return this.auditedTime;

			}

			/**
			 * The method to set the value to auditedTime
			 * @param {OffsetDateTime} auditedTime An instance of OffsetDateTime
			 */
			setAuditedTime(auditedTime)	{
				if((auditedTime != null) && (!(auditedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: auditedTime EXPECTED TYPE: Date", null, null);
				}
				this.auditedTime = auditedTime;
				this.keyModified.set("audited_time", 1);

			}

			/**
			 * The method to get the action
			 * @returns {String} A String representing the action
			 */
			getAction()	{
				return this.action;

			}

			/**
			 * The method to set the value to action
			 * @param {String} action A String
			 */
			setAction(action)	{
				if((action != null) && (!(Object.prototype.toString.call(action) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: String", null, null);
				}
				this.action = action;
				this.keyModified.set("action", 1);

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
			 * The method to get the extension
			 * @returns {String} A String representing the extension
			 */
			getExtension()	{
				return this.extension;

			}

			/**
			 * The method to set the value to extension
			 * @param {String} extension A String
			 */
			setExtension(extension)	{
				if((extension != null) && (!(Object.prototype.toString.call(extension) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extension EXPECTED TYPE: String", null, null);
				}
				this.extension = extension;
				this.keyModified.set("extension", 1);

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
			 * The method to get the doneBy
			 * @returns {NameIdStructure} An instance of NameIdStructure
			 */
			getDoneBy()	{
				return this.doneBy;

			}

			/**
			 * The method to set the value to doneBy
			 * @param {NameIdStructure} doneBy An instance of NameIdStructure
			 */
			setDoneBy(doneBy)	{
				if((doneBy != null) && (!(doneBy instanceof ZCRM.Timeline.Model.NameIdStructure))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doneBy EXPECTED TYPE: NameIdStructure", null, null);
				}
				this.doneBy = doneBy;
				this.keyModified.set("done_by", 1);

			}

			/**
			 * The method to get the relatedRecord
			 * @returns {RelatedRecord} An instance of RelatedRecord
			 */
			getRelatedRecord()	{
				return this.relatedRecord;

			}

			/**
			 * The method to set the value to relatedRecord
			 * @param {RelatedRecord} relatedRecord An instance of RelatedRecord
			 */
			setRelatedRecord(relatedRecord)	{
				if((relatedRecord != null) && (!(relatedRecord instanceof ZCRM.Timeline.Model.RelatedRecord))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecord EXPECTED TYPE: RelatedRecord", null, null);
				}
				this.relatedRecord = relatedRecord;
				this.keyModified.set("related_record", 1);

			}

			/**
			 * The method to get the automationDetails
			 * @returns {AutomationDetail} An instance of AutomationDetail
			 */
			getAutomationDetails()	{
				return this.automationDetails;

			}

			/**
			 * The method to set the value to automationDetails
			 * @param {AutomationDetail} automationDetails An instance of AutomationDetail
			 */
			setAutomationDetails(automationDetails)	{
				if((automationDetails != null) && (!(automationDetails instanceof ZCRM.Timeline.Model.AutomationDetail))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: automationDetails EXPECTED TYPE: AutomationDetail", null, null);
				}
				this.automationDetails = automationDetails;
				this.keyModified.set("automation_details", 1);

			}

			/**
			 * The method to get the record
			 * @returns {Record} An instance of Record
			 */
			getRecord()	{
				return this.record;

			}

			/**
			 * The method to set the value to record
			 * @param {Record} record An instance of Record
			 */
			setRecord(record)	{
				if((record != null) && (!(record instanceof ZCRM.Timeline.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: record EXPECTED TYPE: Record", null, null);
				}
				this.record = record;
				this.keyModified.set("record", 1);

			}

			/**
			 * The method to get the fieldHistory
			 * @returns {List} An Array representing the fieldHistory
			 */
			getFieldHistory()	{
				return this.fieldHistory;

			}

			/**
			 * The method to set the value to fieldHistory
			 * @param {List} fieldHistory An Array
			 */
			setFieldHistory(fieldHistory)	{
				if((fieldHistory != null) && (!(Object.prototype.toString.call(fieldHistory) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldHistory EXPECTED TYPE: Array", null, null);
				}
				this.fieldHistory = fieldHistory;
				this.keyModified.set("field_history", 1);

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
		},

		RelatedRecord : class{
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
			 * @returns {NameIdStructure} An instance of NameIdStructure
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {NameIdStructure} module An instance of NameIdStructure
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Timeline.Model.NameIdStructure))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: NameIdStructure", null, null);
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

		FieldHistory : class{
			constructor(){

				this.dataType=null;
				this.enableColourCode=null;
				this.pickListValues=null;
				this.fieldLabel=null;
				this.apiName=null;
				this.id=null;
				this.value=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the dataType
			 * @returns {String} A String representing the dataType
			 */
			getDataType()	{
				return this.dataType;

			}

			/**
			 * The method to set the value to dataType
			 * @param {String} dataType A String
			 */
			setDataType(dataType)	{
				if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
				}
				this.dataType = dataType;
				this.keyModified.set("data_type", 1);

			}

			/**
			 * The method to get the enableColourCode
			 * @returns {Boolean} A Boolean representing the enableColourCode
			 */
			getEnableColourCode()	{
				return this.enableColourCode;

			}

			/**
			 * The method to set the value to enableColourCode
			 * @param {Boolean} enableColourCode A Boolean
			 */
			setEnableColourCode(enableColourCode)	{
				if((enableColourCode != null) && (!(Object.prototype.toString.call(enableColourCode) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enableColourCode EXPECTED TYPE: Boolean", null, null);
				}
				this.enableColourCode = enableColourCode;
				this.keyModified.set("enable_colour_code", 1);

			}

			/**
			 * The method to get the pickListValues
			 * @returns {List} An Array representing the pickListValues
			 */
			getPickListValues()	{
				return this.pickListValues;

			}

			/**
			 * The method to set the value to pickListValues
			 * @param {List} pickListValues An Array
			 */
			setPickListValues(pickListValues)	{
				if((pickListValues != null) && (!(Object.prototype.toString.call(pickListValues) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValues EXPECTED TYPE: Array", null, null);
				}
				this.pickListValues = pickListValues;
				this.keyModified.set("pick_list_values", 1);

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
			 * The method to get the value
			 * @returns {FieldHistoryValue} An instance of FieldHistoryValue
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {FieldHistoryValue} value An instance of FieldHistoryValue
			 */
			setValue(value)	{
				if((value != null) && (!(value instanceof ZCRM.Timeline.Model.FieldHistoryValue))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: FieldHistoryValue", null, null);
				}
				this.value = value;
				this.keyModified.set("_value", 1);

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

		ResponseWrapper : class{
			constructor(){

				this.timeline=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the timeline
			 * @returns {List} An Array representing the timeline
			 */
			getTimeline()	{
				return this.timeline;

			}

			/**
			 * The method to set the value to timeline
			 * @param {List} timeline An Array
			 */
			setTimeline(timeline)	{
				if((timeline != null) && (!(Object.prototype.toString.call(timeline) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeline EXPECTED TYPE: Array", null, null);
				}
				this.timeline = timeline;
				this.keyModified.set("__timeline", 1);

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
				if((info != null) && (!(info instanceof ZCRM.Timeline.Model.Info))){
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
		 * The method to get timelines
		 * @param {String} module A String
		 * @param {String} recordId A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getTimelines(module, recordId, paramInstance=null){
			if((!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(recordId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(module.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/__timeline");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Timeline.Model.ResponseHandler", "application/json");

		}
	},

}