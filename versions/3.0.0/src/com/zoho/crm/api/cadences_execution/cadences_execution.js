ZCRM.CadencesExecution = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		Template : class{
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

		AnalyticsTask : class{
			constructor(){

				this.openTasksCount=null;
				this.failedTasksCount=null;
				this.subject=null;
				this.completedTasksCount=null;
				this.createdTasksCount=null;
				this.tasksCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the openTasksCount
			 * @returns {Integer} An Integer representing the openTasksCount
			 */
			getOpenTasksCount()	{
				return this.openTasksCount;

			}

			/**
			 * The method to set the value to openTasksCount
			 * @param {Integer} openTasksCount An Integer
			 */
			setOpenTasksCount(openTasksCount)	{
				if((openTasksCount != null) && (!(Object.prototype.toString.call(openTasksCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: openTasksCount EXPECTED TYPE: Integer", null, null);
				}
				this.openTasksCount = openTasksCount;
				this.keyModified.set("open_tasks_count", 1);

			}

			/**
			 * The method to get the failedTasksCount
			 * @returns {Integer} An Integer representing the failedTasksCount
			 */
			getFailedTasksCount()	{
				return this.failedTasksCount;

			}

			/**
			 * The method to set the value to failedTasksCount
			 * @param {Integer} failedTasksCount An Integer
			 */
			setFailedTasksCount(failedTasksCount)	{
				if((failedTasksCount != null) && (!(Object.prototype.toString.call(failedTasksCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedTasksCount EXPECTED TYPE: Integer", null, null);
				}
				this.failedTasksCount = failedTasksCount;
				this.keyModified.set("failed_tasks_count", 1);

			}

			/**
			 * The method to get the subject
			 * @returns {String} A String representing the subject
			 */
			getSubject()	{
				return this.subject;

			}

			/**
			 * The method to set the value to subject
			 * @param {String} subject A String
			 */
			setSubject(subject)	{
				if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
				}
				this.subject = subject;
				this.keyModified.set("subject", 1);

			}

			/**
			 * The method to get the completedTasksCount
			 * @returns {Integer} An Integer representing the completedTasksCount
			 */
			getCompletedTasksCount()	{
				return this.completedTasksCount;

			}

			/**
			 * The method to set the value to completedTasksCount
			 * @param {Integer} completedTasksCount An Integer
			 */
			setCompletedTasksCount(completedTasksCount)	{
				if((completedTasksCount != null) && (!(Object.prototype.toString.call(completedTasksCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: completedTasksCount EXPECTED TYPE: Integer", null, null);
				}
				this.completedTasksCount = completedTasksCount;
				this.keyModified.set("completed_tasks_count", 1);

			}

			/**
			 * The method to get the createdTasksCount
			 * @returns {Integer} An Integer representing the createdTasksCount
			 */
			getCreatedTasksCount()	{
				return this.createdTasksCount;

			}

			/**
			 * The method to set the value to createdTasksCount
			 * @param {Integer} createdTasksCount An Integer
			 */
			setCreatedTasksCount(createdTasksCount)	{
				if((createdTasksCount != null) && (!(Object.prototype.toString.call(createdTasksCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTasksCount EXPECTED TYPE: Integer", null, null);
				}
				this.createdTasksCount = createdTasksCount;
				this.keyModified.set("created_tasks_count", 1);

			}

			/**
			 * The method to get the tasksCount
			 * @returns {Integer} An Integer representing the tasksCount
			 */
			getTasksCount()	{
				return this.tasksCount;

			}

			/**
			 * The method to set the value to tasksCount
			 * @param {Integer} tasksCount An Integer
			 */
			setTasksCount(tasksCount)	{
				if((tasksCount != null) && (!(Object.prototype.toString.call(tasksCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tasksCount EXPECTED TYPE: Integer", null, null);
				}
				this.tasksCount = tasksCount;
				this.keyModified.set("tasks_count", 1);

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

		CadencesAnalyticsGet : class{
			constructor(){

				this.module=null;
				this.name=null;
				this.followUps=null;
				this.id=null;
				this.createdBy=null;
				this.keyModified=new Map();
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
				if((module != null) && (!(module instanceof ZCRM.CadencesExecution.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
			 * The method to get the followUps
			 * @returns {List} An Array representing the followUps
			 */
			getFollowUps()	{
				return this.followUps;

			}

			/**
			 * The method to set the value to followUps
			 * @param {List} followUps An Array
			 */
			setFollowUps(followUps)	{
				if((followUps != null) && (!(Object.prototype.toString.call(followUps) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: followUps EXPECTED TYPE: Array", null, null);
				}
				this.followUps = followUps;
				this.keyModified.set("follow_ups", 1);

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
				if((createdBy != null) && (!(createdBy instanceof ZCRM.CadencesExecution.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

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
				this.status=null;
				this.details=null;
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

				this.cadencesIds=null;
				this.ids=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the cadencesIds
			 * @returns {List} An Array representing the cadencesIds
			 */
			getCadencesIds()	{
				return this.cadencesIds;

			}

			/**
			 * The method to set the value to cadencesIds
			 * @param {List} cadencesIds An Array
			 */
			setCadencesIds(cadencesIds)	{
				if((cadencesIds != null) && (!(Object.prototype.toString.call(cadencesIds) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cadencesIds EXPECTED TYPE: Array", null, null);
				}
				this.cadencesIds = cadencesIds;
				this.keyModified.set("cadences_ids", 1);

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

		ParentFollowUp : class{
			constructor(){

				this.id=null;
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

		Analytics : class{
			constructor(){

				this.analytics=null;
				this.parentFollowUp=null;
				this.action=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the analytics
			 * @returns {Map} A Map representing the analytics
			 */
			getAnalytics()	{
				return this.analytics;

			}

			/**
			 * The method to set the value to analytics
			 * @param {Map} analytics A Map
			 */
			setAnalytics(analytics)	{
				if((analytics != null) && (!(Object.prototype.toString.call(analytics) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analytics EXPECTED TYPE: Map", null, null);
				}
				this.analytics = analytics;
				this.keyModified.set("analytics", 1);

			}

			/**
			 * The method to get the parentFollowUp
			 * @returns {ParentFollowUp} An instance of ParentFollowUp
			 */
			getParentFollowUp()	{
				return this.parentFollowUp;

			}

			/**
			 * The method to set the value to parentFollowUp
			 * @param {ParentFollowUp} parentFollowUp An instance of ParentFollowUp
			 */
			setParentFollowUp(parentFollowUp)	{
				if((parentFollowUp != null) && (!(parentFollowUp instanceof ZCRM.CadencesExecution.Model.ParentFollowUp))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentFollowUp EXPECTED TYPE: ParentFollowUp", null, null);
				}
				this.parentFollowUp = parentFollowUp;
				this.keyModified.set("parent_follow_up", 1);

			}

			/**
			 * The method to get the action
			 * @returns {Action} An instance of Action
			 */
			getAction()	{
				return this.action;

			}

			/**
			 * The method to set the value to action
			 * @param {Action} action An instance of Action
			 */
			setAction(action)	{
				if((action != null) && (!(action instanceof ZCRM.CadencesExecution.Model.Action))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: Action", null, null);
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

		AnalyticsAlert : class{
			constructor(){

				this.emailCount=null;
				this.clikedEmailCount=null;
				this.bouncedEmailCount=null;
				this.repliedEmailCount=null;
				this.emailSpamCount=null;
				this.sentEmailCount=null;
				this.unsentEmailCount=null;
				this.openedEmailCount=null;
				this.unsubscribedEmailCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the emailCount
			 * @returns {Integer} An Integer representing the emailCount
			 */
			getEmailCount()	{
				return this.emailCount;

			}

			/**
			 * The method to set the value to emailCount
			 * @param {Integer} emailCount An Integer
			 */
			setEmailCount(emailCount)	{
				if((emailCount != null) && (!(Object.prototype.toString.call(emailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailCount EXPECTED TYPE: Integer", null, null);
				}
				this.emailCount = emailCount;
				this.keyModified.set("email_count", 1);

			}

			/**
			 * The method to get the clikedEmailCount
			 * @returns {Integer} An Integer representing the clikedEmailCount
			 */
			getClikedEmailCount()	{
				return this.clikedEmailCount;

			}

			/**
			 * The method to set the value to clikedEmailCount
			 * @param {Integer} clikedEmailCount An Integer
			 */
			setClikedEmailCount(clikedEmailCount)	{
				if((clikedEmailCount != null) && (!(Object.prototype.toString.call(clikedEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: clikedEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.clikedEmailCount = clikedEmailCount;
				this.keyModified.set("cliked_email_count", 1);

			}

			/**
			 * The method to get the bouncedEmailCount
			 * @returns {Integer} An Integer representing the bouncedEmailCount
			 */
			getBouncedEmailCount()	{
				return this.bouncedEmailCount;

			}

			/**
			 * The method to set the value to bouncedEmailCount
			 * @param {Integer} bouncedEmailCount An Integer
			 */
			setBouncedEmailCount(bouncedEmailCount)	{
				if((bouncedEmailCount != null) && (!(Object.prototype.toString.call(bouncedEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bouncedEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.bouncedEmailCount = bouncedEmailCount;
				this.keyModified.set("bounced_email_count", 1);

			}

			/**
			 * The method to get the repliedEmailCount
			 * @returns {Integer} An Integer representing the repliedEmailCount
			 */
			getRepliedEmailCount()	{
				return this.repliedEmailCount;

			}

			/**
			 * The method to set the value to repliedEmailCount
			 * @param {Integer} repliedEmailCount An Integer
			 */
			setRepliedEmailCount(repliedEmailCount)	{
				if((repliedEmailCount != null) && (!(Object.prototype.toString.call(repliedEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: repliedEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.repliedEmailCount = repliedEmailCount;
				this.keyModified.set("replied_email_count", 1);

			}

			/**
			 * The method to get the emailSpamCount
			 * @returns {Integer} An Integer representing the emailSpamCount
			 */
			getEmailSpamCount()	{
				return this.emailSpamCount;

			}

			/**
			 * The method to set the value to emailSpamCount
			 * @param {Integer} emailSpamCount An Integer
			 */
			setEmailSpamCount(emailSpamCount)	{
				if((emailSpamCount != null) && (!(Object.prototype.toString.call(emailSpamCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailSpamCount EXPECTED TYPE: Integer", null, null);
				}
				this.emailSpamCount = emailSpamCount;
				this.keyModified.set("email_spam_count", 1);

			}

			/**
			 * The method to get the sentEmailCount
			 * @returns {Integer} An Integer representing the sentEmailCount
			 */
			getSentEmailCount()	{
				return this.sentEmailCount;

			}

			/**
			 * The method to set the value to sentEmailCount
			 * @param {Integer} sentEmailCount An Integer
			 */
			setSentEmailCount(sentEmailCount)	{
				if((sentEmailCount != null) && (!(Object.prototype.toString.call(sentEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sentEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.sentEmailCount = sentEmailCount;
				this.keyModified.set("sent_email_count", 1);

			}

			/**
			 * The method to get the unsentEmailCount
			 * @returns {Integer} An Integer representing the unsentEmailCount
			 */
			getUnsentEmailCount()	{
				return this.unsentEmailCount;

			}

			/**
			 * The method to set the value to unsentEmailCount
			 * @param {Integer} unsentEmailCount An Integer
			 */
			setUnsentEmailCount(unsentEmailCount)	{
				if((unsentEmailCount != null) && (!(Object.prototype.toString.call(unsentEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unsentEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.unsentEmailCount = unsentEmailCount;
				this.keyModified.set("unsent_email_count", 1);

			}

			/**
			 * The method to get the openedEmailCount
			 * @returns {Integer} An Integer representing the openedEmailCount
			 */
			getOpenedEmailCount()	{
				return this.openedEmailCount;

			}

			/**
			 * The method to set the value to openedEmailCount
			 * @param {Integer} openedEmailCount An Integer
			 */
			setOpenedEmailCount(openedEmailCount)	{
				if((openedEmailCount != null) && (!(Object.prototype.toString.call(openedEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: openedEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.openedEmailCount = openedEmailCount;
				this.keyModified.set("opened_email_count", 1);

			}

			/**
			 * The method to get the unsubscribedEmailCount
			 * @returns {Integer} An Integer representing the unsubscribedEmailCount
			 */
			getUnsubscribedEmailCount()	{
				return this.unsubscribedEmailCount;

			}

			/**
			 * The method to set the value to unsubscribedEmailCount
			 * @param {Integer} unsubscribedEmailCount An Integer
			 */
			setUnsubscribedEmailCount(unsubscribedEmailCount)	{
				if((unsubscribedEmailCount != null) && (!(Object.prototype.toString.call(unsubscribedEmailCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unsubscribedEmailCount EXPECTED TYPE: Integer", null, null);
				}
				this.unsubscribedEmailCount = unsubscribedEmailCount;
				this.keyModified.set("unsubscribed_email_count", 1);

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

		Action : class{
			constructor(){

				this.details=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the details
			 * @returns {Details} An instance of Details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Details} details An instance of Details
			 */
			setDetails(details)	{
				if((details != null) && (!(details instanceof ZCRM.CadencesExecution.Model.Details))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Details", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

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

		APIException : class{
			constructor(){

				this.details=null;
				this.code=null;
				this.message=null;
				this.status=null;
				this.keyModified=new Map();
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

		Details : class{
			constructor(){

				this.name=null;
				this.template=null;
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
			 * The method to get the template
			 * @returns {Template} An instance of Template
			 */
			getTemplate()	{
				return this.template;

			}

			/**
			 * The method to set the value to template
			 * @param {Template} template An instance of Template
			 */
			setTemplate(template)	{
				if((template != null) && (!(template instanceof ZCRM.CadencesExecution.Model.Template))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: template EXPECTED TYPE: Template", null, null);
				}
				this.template = template;
				this.keyModified.set("template", 1);

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

		Cadence : class{
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

		AnalyticsCall : class{
			constructor(){

				this.createdCallsCount=null;
				this.cancelledCallsCount=null;
				this.failedCallsCount=null;
				this.completedCallsCount=null;
				this.scheduledCallsCount=null;
				this.callsCount=null;
				this.overdueCallsCount=null;
				this.missedCallsCount=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the createdCallsCount
			 * @returns {Integer} An Integer representing the createdCallsCount
			 */
			getCreatedCallsCount()	{
				return this.createdCallsCount;

			}

			/**
			 * The method to set the value to createdCallsCount
			 * @param {Integer} createdCallsCount An Integer
			 */
			setCreatedCallsCount(createdCallsCount)	{
				if((createdCallsCount != null) && (!(Object.prototype.toString.call(createdCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.createdCallsCount = createdCallsCount;
				this.keyModified.set("created_calls_count", 1);

			}

			/**
			 * The method to get the cancelledCallsCount
			 * @returns {Integer} An Integer representing the cancelledCallsCount
			 */
			getCancelledCallsCount()	{
				return this.cancelledCallsCount;

			}

			/**
			 * The method to set the value to cancelledCallsCount
			 * @param {Integer} cancelledCallsCount An Integer
			 */
			setCancelledCallsCount(cancelledCallsCount)	{
				if((cancelledCallsCount != null) && (!(Object.prototype.toString.call(cancelledCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cancelledCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.cancelledCallsCount = cancelledCallsCount;
				this.keyModified.set("cancelled_calls_count", 1);

			}

			/**
			 * The method to get the failedCallsCount
			 * @returns {Integer} An Integer representing the failedCallsCount
			 */
			getFailedCallsCount()	{
				return this.failedCallsCount;

			}

			/**
			 * The method to set the value to failedCallsCount
			 * @param {Integer} failedCallsCount An Integer
			 */
			setFailedCallsCount(failedCallsCount)	{
				if((failedCallsCount != null) && (!(Object.prototype.toString.call(failedCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.failedCallsCount = failedCallsCount;
				this.keyModified.set("failed_calls_count", 1);

			}

			/**
			 * The method to get the completedCallsCount
			 * @returns {Integer} An Integer representing the completedCallsCount
			 */
			getCompletedCallsCount()	{
				return this.completedCallsCount;

			}

			/**
			 * The method to set the value to completedCallsCount
			 * @param {Integer} completedCallsCount An Integer
			 */
			setCompletedCallsCount(completedCallsCount)	{
				if((completedCallsCount != null) && (!(Object.prototype.toString.call(completedCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: completedCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.completedCallsCount = completedCallsCount;
				this.keyModified.set("completed_calls_count", 1);

			}

			/**
			 * The method to get the scheduledCallsCount
			 * @returns {Integer} An Integer representing the scheduledCallsCount
			 */
			getScheduledCallsCount()	{
				return this.scheduledCallsCount;

			}

			/**
			 * The method to set the value to scheduledCallsCount
			 * @param {Integer} scheduledCallsCount An Integer
			 */
			setScheduledCallsCount(scheduledCallsCount)	{
				if((scheduledCallsCount != null) && (!(Object.prototype.toString.call(scheduledCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduledCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.scheduledCallsCount = scheduledCallsCount;
				this.keyModified.set("scheduled_calls_count", 1);

			}

			/**
			 * The method to get the callsCount
			 * @returns {Integer} An Integer representing the callsCount
			 */
			getCallsCount()	{
				return this.callsCount;

			}

			/**
			 * The method to set the value to callsCount
			 * @param {Integer} callsCount An Integer
			 */
			setCallsCount(callsCount)	{
				if((callsCount != null) && (!(Object.prototype.toString.call(callsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callsCount EXPECTED TYPE: Integer", null, null);
				}
				this.callsCount = callsCount;
				this.keyModified.set("calls_count", 1);

			}

			/**
			 * The method to get the overdueCallsCount
			 * @returns {Integer} An Integer representing the overdueCallsCount
			 */
			getOverdueCallsCount()	{
				return this.overdueCallsCount;

			}

			/**
			 * The method to set the value to overdueCallsCount
			 * @param {Integer} overdueCallsCount An Integer
			 */
			setOverdueCallsCount(overdueCallsCount)	{
				if((overdueCallsCount != null) && (!(Object.prototype.toString.call(overdueCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overdueCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.overdueCallsCount = overdueCallsCount;
				this.keyModified.set("overdue_calls_count", 1);

			}

			/**
			 * The method to get the missedCallsCount
			 * @returns {Integer} An Integer representing the missedCallsCount
			 */
			getMissedCallsCount()	{
				return this.missedCallsCount;

			}

			/**
			 * The method to set the value to missedCallsCount
			 * @param {Integer} missedCallsCount An Integer
			 */
			setMissedCallsCount(missedCallsCount)	{
				if((missedCallsCount != null) && (!(Object.prototype.toString.call(missedCallsCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: missedCallsCount EXPECTED TYPE: Integer", null, null);
				}
				this.missedCallsCount = missedCallsCount;
				this.keyModified.set("missed_calls_count", 1);

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
		 * The method to enroll cadences
		 * @param {String} module A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async enrollCadences(module, request){
			if((!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.CadencesExecution.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(module.toString());
			apiPath = apiPath.concat("/actions/enrol_in_cadences");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("CadencesExecution.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to unenroll cadences
		 * @param {String} module A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async unenrollCadences(module, request){
			if((!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.CadencesExecution.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/");
			apiPath = apiPath.concat(module.toString());
			apiPath = apiPath.concat("/actions/unenrol_from_cadences");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("CadencesExecution.Model.ActionHandler", "application/json");

		}
	},

}