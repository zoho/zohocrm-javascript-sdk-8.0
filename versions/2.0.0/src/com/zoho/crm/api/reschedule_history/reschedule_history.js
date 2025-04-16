ZCRM.RescheduleHistory = {
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

		AppointmentName : class{
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
				this.page=null;
				this.previousPageToken=null;
				this.pageTokenExpiry=null;
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
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getPageTokenExpiry()	{
				return this.pageTokenExpiry;

			}

			/**
			 * The method to set the value to pageTokenExpiry
			 * @param {OffsetDateTime} pageTokenExpiry An instance of OffsetDateTime
			 */
			setPageTokenExpiry(pageTokenExpiry)	{
				if((pageTokenExpiry != null) && (!(pageTokenExpiry instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pageTokenExpiry EXPECTED TYPE: Date", null, null);
				}
				this.pageTokenExpiry = pageTokenExpiry;
				this.keyModified.set("page_token_expiry", 1);

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

		RescheduleHistory : class{
			constructor(){

				this.currencySymbol=null;
				this.rescheduledTo=null;
				this.reviewProcess=null;
				this.rescheduleReason=null;
				this.sharingPermission=null;
				this.name=null;
				this.modifiedBy=null;
				this.review=null;
				this.rescheduledBy=null;
				this.state=null;
				this.canvasId=null;
				this.processFlow=null;
				this.id=null;
				this.rescheduledTime=null;
				this.ziaVisions=null;
				this.approved=null;
				this.modifiedTime=null;
				this.approval=null;
				this.createdTime=null;
				this.rescheduledFrom=null;
				this.appointmentName=null;
				this.editable=null;
				this.orchestration=null;
				this.inMerge=null;
				this.createdBy=null;
				this.approvalState=null;
				this.rescheduleNote=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the currencySymbol
			 * @returns {String} A String representing the currencySymbol
			 */
			getCurrencySymbol()	{
				return this.currencySymbol;

			}

			/**
			 * The method to set the value to currencySymbol
			 * @param {String} currencySymbol A String
			 */
			setCurrencySymbol(currencySymbol)	{
				if((currencySymbol != null) && (!(Object.prototype.toString.call(currencySymbol) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencySymbol EXPECTED TYPE: String", null, null);
				}
				this.currencySymbol = currencySymbol;
				this.keyModified.set("$currency_symbol", 1);

			}

			/**
			 * The method to get the rescheduledTo
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getRescheduledTo()	{
				return this.rescheduledTo;

			}

			/**
			 * The method to set the value to rescheduledTo
			 * @param {OffsetDateTime} rescheduledTo An instance of OffsetDateTime
			 */
			setRescheduledTo(rescheduledTo)	{
				if((rescheduledTo != null) && (!(rescheduledTo instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledTo EXPECTED TYPE: Date", null, null);
				}
				this.rescheduledTo = rescheduledTo;
				this.keyModified.set("Rescheduled_To", 1);

			}

			/**
			 * The method to get the reviewProcess
			 * @returns {Boolean} A Boolean representing the reviewProcess
			 */
			getReviewProcess()	{
				return this.reviewProcess;

			}

			/**
			 * The method to set the value to reviewProcess
			 * @param {Boolean} reviewProcess A Boolean
			 */
			setReviewProcess(reviewProcess)	{
				if((reviewProcess != null) && (!(Object.prototype.toString.call(reviewProcess) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reviewProcess EXPECTED TYPE: Boolean", null, null);
				}
				this.reviewProcess = reviewProcess;
				this.keyModified.set("$review_process", 1);

			}

			/**
			 * The method to get the rescheduleReason
			 * @returns {String} A String representing the rescheduleReason
			 */
			getRescheduleReason()	{
				return this.rescheduleReason;

			}

			/**
			 * The method to set the value to rescheduleReason
			 * @param {String} rescheduleReason A String
			 */
			setRescheduleReason(rescheduleReason)	{
				if((rescheduleReason != null) && (!(Object.prototype.toString.call(rescheduleReason) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduleReason EXPECTED TYPE: String", null, null);
				}
				this.rescheduleReason = rescheduleReason;
				this.keyModified.set("Reschedule_Reason", 1);

			}

			/**
			 * The method to get the sharingPermission
			 * @returns {String} A String representing the sharingPermission
			 */
			getSharingPermission()	{
				return this.sharingPermission;

			}

			/**
			 * The method to set the value to sharingPermission
			 * @param {String} sharingPermission A String
			 */
			setSharingPermission(sharingPermission)	{
				if((sharingPermission != null) && (!(Object.prototype.toString.call(sharingPermission) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharingPermission EXPECTED TYPE: String", null, null);
				}
				this.sharingPermission = sharingPermission;
				this.keyModified.set("$sharing_permission", 1);

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
				this.keyModified.set("Name", 1);

			}

			/**
			 * The method to get the modifiedBy
			 * @returns {User} An instance of User
			 */
			getModifiedBy()	{
				return this.modifiedBy;

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {User} modifiedBy An instance of User
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.RescheduleHistory.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
				}
				this.modifiedBy = modifiedBy;
				this.keyModified.set("Modified_By", 1);

			}

			/**
			 * The method to get the review
			 * @returns {Boolean} A Boolean representing the review
			 */
			getReview()	{
				return this.review;

			}

			/**
			 * The method to set the value to review
			 * @param {Boolean} review A Boolean
			 */
			setReview(review)	{
				if((review != null) && (!(Object.prototype.toString.call(review) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: review EXPECTED TYPE: Boolean", null, null);
				}
				this.review = review;
				this.keyModified.set("$review", 1);

			}

			/**
			 * The method to get the rescheduledBy
			 * @returns {User} An instance of User
			 */
			getRescheduledBy()	{
				return this.rescheduledBy;

			}

			/**
			 * The method to set the value to rescheduledBy
			 * @param {User} rescheduledBy An instance of User
			 */
			setRescheduledBy(rescheduledBy)	{
				if((rescheduledBy != null) && (!(rescheduledBy instanceof ZCRM.RescheduleHistory.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledBy EXPECTED TYPE: User", null, null);
				}
				this.rescheduledBy = rescheduledBy;
				this.keyModified.set("Rescheduled_By", 1);

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
				this.keyModified.set("$state", 1);

			}

			/**
			 * The method to get the canvasId
			 * @returns {String} A String representing the canvasId
			 */
			getCanvasId()	{
				return this.canvasId;

			}

			/**
			 * The method to set the value to canvasId
			 * @param {String} canvasId A String
			 */
			setCanvasId(canvasId)	{
				if((canvasId != null) && (!(Object.prototype.toString.call(canvasId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: canvasId EXPECTED TYPE: String", null, null);
				}
				this.canvasId = canvasId;
				this.keyModified.set("$canvas_id", 1);

			}

			/**
			 * The method to get the processFlow
			 * @returns {Boolean} A Boolean representing the processFlow
			 */
			getProcessFlow()	{
				return this.processFlow;

			}

			/**
			 * The method to set the value to processFlow
			 * @param {Boolean} processFlow A Boolean
			 */
			setProcessFlow(processFlow)	{
				if((processFlow != null) && (!(Object.prototype.toString.call(processFlow) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processFlow EXPECTED TYPE: Boolean", null, null);
				}
				this.processFlow = processFlow;
				this.keyModified.set("$process_flow", 1);

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
			 * The method to get the rescheduledTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getRescheduledTime()	{
				return this.rescheduledTime;

			}

			/**
			 * The method to set the value to rescheduledTime
			 * @param {OffsetDateTime} rescheduledTime An instance of OffsetDateTime
			 */
			setRescheduledTime(rescheduledTime)	{
				if((rescheduledTime != null) && (!(rescheduledTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledTime EXPECTED TYPE: Date", null, null);
				}
				this.rescheduledTime = rescheduledTime;
				this.keyModified.set("Rescheduled_Time", 1);

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
			 * The method to get the approved
			 * @returns {Boolean} A Boolean representing the approved
			 */
			getApproved()	{
				return this.approved;

			}

			/**
			 * The method to set the value to approved
			 * @param {Boolean} approved A Boolean
			 */
			setApproved(approved)	{
				if((approved != null) && (!(Object.prototype.toString.call(approved) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approved EXPECTED TYPE: Boolean", null, null);
				}
				this.approved = approved;
				this.keyModified.set("$approved", 1);

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
				this.keyModified.set("Modified_Time", 1);

			}

			/**
			 * The method to get the approval
			 * @returns {Approval} An instance of Approval
			 */
			getApproval()	{
				return this.approval;

			}

			/**
			 * The method to set the value to approval
			 * @param {Approval} approval An instance of Approval
			 */
			setApproval(approval)	{
				if((approval != null) && (!(approval instanceof ZCRM.RescheduleHistory.Model.Approval))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approval EXPECTED TYPE: Approval", null, null);
				}
				this.approval = approval;
				this.keyModified.set("$approval", 1);

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
				this.keyModified.set("Created_Time", 1);

			}

			/**
			 * The method to get the rescheduledFrom
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getRescheduledFrom()	{
				return this.rescheduledFrom;

			}

			/**
			 * The method to set the value to rescheduledFrom
			 * @param {OffsetDateTime} rescheduledFrom An instance of OffsetDateTime
			 */
			setRescheduledFrom(rescheduledFrom)	{
				if((rescheduledFrom != null) && (!(rescheduledFrom instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduledFrom EXPECTED TYPE: Date", null, null);
				}
				this.rescheduledFrom = rescheduledFrom;
				this.keyModified.set("Rescheduled_From", 1);

			}

			/**
			 * The method to get the appointmentName
			 * @returns {AppointmentName} An instance of AppointmentName
			 */
			getAppointmentName()	{
				return this.appointmentName;

			}

			/**
			 * The method to set the value to appointmentName
			 * @param {AppointmentName} appointmentName An instance of AppointmentName
			 */
			setAppointmentName(appointmentName)	{
				if((appointmentName != null) && (!(appointmentName instanceof ZCRM.RescheduleHistory.Model.AppointmentName))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: appointmentName EXPECTED TYPE: AppointmentName", null, null);
				}
				this.appointmentName = appointmentName;
				this.keyModified.set("Appointment_Name", 1);

			}

			/**
			 * The method to get the editable
			 * @returns {Boolean} A Boolean representing the editable
			 */
			getEditable()	{
				return this.editable;

			}

			/**
			 * The method to set the value to editable
			 * @param {Boolean} editable A Boolean
			 */
			setEditable(editable)	{
				if((editable != null) && (!(Object.prototype.toString.call(editable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editable EXPECTED TYPE: Boolean", null, null);
				}
				this.editable = editable;
				this.keyModified.set("$editable", 1);

			}

			/**
			 * The method to get the orchestration
			 * @returns {Boolean} A Boolean representing the orchestration
			 */
			getOrchestration()	{
				return this.orchestration;

			}

			/**
			 * The method to set the value to orchestration
			 * @param {Boolean} orchestration A Boolean
			 */
			setOrchestration(orchestration)	{
				if((orchestration != null) && (!(Object.prototype.toString.call(orchestration) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orchestration EXPECTED TYPE: Boolean", null, null);
				}
				this.orchestration = orchestration;
				this.keyModified.set("$orchestration", 1);

			}

			/**
			 * The method to get the inMerge
			 * @returns {Boolean} A Boolean representing the inMerge
			 */
			getInMerge()	{
				return this.inMerge;

			}

			/**
			 * The method to set the value to inMerge
			 * @param {Boolean} inMerge A Boolean
			 */
			setInMerge(inMerge)	{
				if((inMerge != null) && (!(Object.prototype.toString.call(inMerge) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inMerge EXPECTED TYPE: Boolean", null, null);
				}
				this.inMerge = inMerge;
				this.keyModified.set("$in_merge", 1);

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
				if((createdBy != null) && (!(createdBy instanceof ZCRM.RescheduleHistory.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("Created_By", 1);

			}

			/**
			 * The method to get the approvalState
			 * @returns {String} A String representing the approvalState
			 */
			getApprovalState()	{
				return this.approvalState;

			}

			/**
			 * The method to set the value to approvalState
			 * @param {String} approvalState A String
			 */
			setApprovalState(approvalState)	{
				if((approvalState != null) && (!(Object.prototype.toString.call(approvalState) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approvalState EXPECTED TYPE: String", null, null);
				}
				this.approvalState = approvalState;
				this.keyModified.set("$approval_state", 1);

			}

			/**
			 * The method to get the rescheduleNote
			 * @returns {String} A String representing the rescheduleNote
			 */
			getRescheduleNote()	{
				return this.rescheduleNote;

			}

			/**
			 * The method to set the value to rescheduleNote
			 * @param {String} rescheduleNote A String
			 */
			setRescheduleNote(rescheduleNote)	{
				if((rescheduleNote != null) && (!(Object.prototype.toString.call(rescheduleNote) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rescheduleNote EXPECTED TYPE: String", null, null);
				}
				this.rescheduleNote = rescheduleNote;
				this.keyModified.set("Reschedule_Note", 1);

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

		Approval : class{
			constructor(){

				this.delegate=null;
				this.approve=null;
				this.reject=null;
				this.resubmit=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the delegate
			 * @returns {Boolean} A Boolean representing the delegate
			 */
			getDelegate()	{
				return this.delegate;

			}

			/**
			 * The method to set the value to delegate
			 * @param {Boolean} delegate A Boolean
			 */
			setDelegate(delegate)	{
				if((delegate != null) && (!(Object.prototype.toString.call(delegate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delegate EXPECTED TYPE: Boolean", null, null);
				}
				this.delegate = delegate;
				this.keyModified.set("delegate", 1);

			}

			/**
			 * The method to get the approve
			 * @returns {Boolean} A Boolean representing the approve
			 */
			getApprove()	{
				return this.approve;

			}

			/**
			 * The method to set the value to approve
			 * @param {Boolean} approve A Boolean
			 */
			setApprove(approve)	{
				if((approve != null) && (!(Object.prototype.toString.call(approve) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approve EXPECTED TYPE: Boolean", null, null);
				}
				this.approve = approve;
				this.keyModified.set("approve", 1);

			}

			/**
			 * The method to get the reject
			 * @returns {Boolean} A Boolean representing the reject
			 */
			getReject()	{
				return this.reject;

			}

			/**
			 * The method to set the value to reject
			 * @param {Boolean} reject A Boolean
			 */
			setReject(reject)	{
				if((reject != null) && (!(Object.prototype.toString.call(reject) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reject EXPECTED TYPE: Boolean", null, null);
				}
				this.reject = reject;
				this.keyModified.set("reject", 1);

			}

			/**
			 * The method to get the resubmit
			 * @returns {Boolean} A Boolean representing the resubmit
			 */
			getResubmit()	{
				return this.resubmit;

			}

			/**
			 * The method to set the value to resubmit
			 * @param {Boolean} resubmit A Boolean
			 */
			setResubmit(resubmit)	{
				if((resubmit != null) && (!(Object.prototype.toString.call(resubmit) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resubmit EXPECTED TYPE: Boolean", null, null);
				}
				this.resubmit = resubmit;
				this.keyModified.set("resubmit", 1);

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

		User : class{
			constructor(){

				this.name=null;
				this.id=null;
				this.email=null;
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

		BodyWrapper : class{
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

		SuccessResponse : class{
			constructor(){

				this.code=null;
				this.details=null;
				this.message=null;
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
				if((info != null) && (!(info instanceof ZCRM.RescheduleHistory.Model.Info))){
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
		 * The method to add appointments rescheduled history
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async addAppointmentsRescheduledHistory(request){
			if((request != null) && (!(request instanceof ZCRM.RescheduleHistory.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Appointments_Rescheduled_History__s");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("RescheduleHistory.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update appointments rescheduled history
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateAppointmentsRescheduledHistory(request){
			if((request != null) && (!(request instanceof ZCRM.RescheduleHistory.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Appointments_Rescheduled_History__s");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("RescheduleHistory.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get appointments rescheduled history
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getAppointmentsRescheduledHistory(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Appointments_Rescheduled_History__s");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("RescheduleHistory.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update appointment rescheduled history
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateAppointmentRescheduledHistory(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.RescheduleHistory.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Appointments_Rescheduled_History__s/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("RescheduleHistory.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get appointment rescheduled history
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getAppointmentRescheduledHistory(id, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Appointments_Rescheduled_History__s/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("RescheduleHistory.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to delete appointments rescheduled history
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteAppointmentsRescheduledHistory(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/Appointments_Rescheduled_History__s/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("RescheduleHistory.Model.ActionHandler", "application/json");

		}
	},

}