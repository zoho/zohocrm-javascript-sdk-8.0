ZCRM.Wizard = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		Segment : class{
			constructor(){

				this.sequenceNumber=null;
				this.displayLabel=null;
				this.columnCount=null;
				this.id=null;
				this.type=null;
				this.fields=null;
				this.buttons=null;
				this.elements=null;
				this.keyModified=new Map();
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
			 * The method to get the displayLabel
			 * @returns {String} A String representing the displayLabel
			 */
			getDisplayLabel()	{
				return this.displayLabel;

			}

			/**
			 * The method to set the value to displayLabel
			 * @param {String} displayLabel A String
			 */
			setDisplayLabel(displayLabel)	{
				if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
				}
				this.displayLabel = displayLabel;
				this.keyModified.set("display_label", 1);

			}

			/**
			 * The method to get the columnCount
			 * @returns {Integer} An Integer representing the columnCount
			 */
			getColumnCount()	{
				return this.columnCount;

			}

			/**
			 * The method to set the value to columnCount
			 * @param {Integer} columnCount An Integer
			 */
			setColumnCount(columnCount)	{
				if((columnCount != null) && (!(Object.prototype.toString.call(columnCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnCount EXPECTED TYPE: Integer", null, null);
				}
				this.columnCount = columnCount;
				this.keyModified.set("column_count", 1);

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
			 * The method to get the fields
			 * @returns {List} An Array representing the fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {List} fields An Array
			 */
			setFields(fields)	{
				if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

			}

			/**
			 * The method to get the buttons
			 * @returns {List} An Array representing the buttons
			 */
			getButtons()	{
				return this.buttons;

			}

			/**
			 * The method to set the value to buttons
			 * @param {List} buttons An Array
			 */
			setButtons(buttons)	{
				if((buttons != null) && (!(Object.prototype.toString.call(buttons) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: buttons EXPECTED TYPE: Array", null, null);
				}
				this.buttons = buttons;
				this.keyModified.set("buttons", 1);

			}

			/**
			 * The method to get the elements
			 * @returns {List} An Array representing the elements
			 */
			getElements()	{
				return this.elements;

			}

			/**
			 * The method to set the value to elements
			 * @param {List} elements An Array
			 */
			setElements(elements)	{
				if((elements != null) && (!(Object.prototype.toString.call(elements) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: elements EXPECTED TYPE: Array", null, null);
				}
				this.elements = elements;
				this.keyModified.set("elements", 1);

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

		ButtonBackground : class{
			constructor(){

				this.buttonBackground=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the buttonBackground
			 * @returns {List} An Array representing the buttonBackground
			 */
			getButtonBackground()	{
				return this.buttonBackground;

			}

			/**
			 * The method to set the value to buttonBackground
			 * @param {List} buttonBackground An Array
			 */
			setButtonBackground(buttonBackground)	{
				if((buttonBackground != null) && (!(Object.prototype.toString.call(buttonBackground) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: buttonBackground EXPECTED TYPE: Array", null, null);
				}
				this.buttonBackground = buttonBackground;
				this.keyModified.set("button_background", 1);

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
				this.status=null;
				this.message=null;
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

		Node : class{
			constructor(){

				this.posY=null;
				this.posX=null;
				this.startNode=null;
				this.screen=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the posY
			 * @returns {Integer} An Integer representing the posY
			 */
			getPosY()	{
				return this.posY;

			}

			/**
			 * The method to set the value to posY
			 * @param {Integer} posY An Integer
			 */
			setPosY(posY)	{
				if((posY != null) && (!(Object.prototype.toString.call(posY) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: posY EXPECTED TYPE: Integer", null, null);
				}
				this.posY = posY;
				this.keyModified.set("pos_y", 1);

			}

			/**
			 * The method to get the posX
			 * @returns {Integer} An Integer representing the posX
			 */
			getPosX()	{
				return this.posX;

			}

			/**
			 * The method to set the value to posX
			 * @param {Integer} posX An Integer
			 */
			setPosX(posX)	{
				if((posX != null) && (!(Object.prototype.toString.call(posX) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: posX EXPECTED TYPE: Integer", null, null);
				}
				this.posX = posX;
				this.keyModified.set("pos_x", 1);

			}

			/**
			 * The method to get the startNode
			 * @returns {Boolean} A Boolean representing the startNode
			 */
			getStartNode()	{
				return this.startNode;

			}

			/**
			 * The method to set the value to startNode
			 * @param {Boolean} startNode A Boolean
			 */
			setStartNode(startNode)	{
				if((startNode != null) && (!(Object.prototype.toString.call(startNode) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startNode EXPECTED TYPE: Boolean", null, null);
				}
				this.startNode = startNode;
				this.keyModified.set("start_node", 1);

			}

			/**
			 * The method to get the screen
			 * @returns {Screen} An instance of Screen
			 */
			getScreen()	{
				return this.screen;

			}

			/**
			 * The method to set the value to screen
			 * @param {Screen} screen An instance of Screen
			 */
			setScreen(screen)	{
				if((screen != null) && (!(screen instanceof ZCRM.Wizard.Model.Screen))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: screen EXPECTED TYPE: Screen", null, null);
				}
				this.screen = screen;
				this.keyModified.set("screen", 1);

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

		Container : class{
			constructor(){

				this.id=null;
				this.layout=null;
				this.chartData=null;
				this.screens=null;
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
			 * The method to get the layout
			 * @returns {Layouts} An instance of Layouts
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layouts} layout An instance of Layouts
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Layout.Model.Layouts))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layouts", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

			}

			/**
			 * The method to get the chartData
			 * @returns {ChartData} An instance of ChartData
			 */
			getChartData()	{
				return this.chartData;

			}

			/**
			 * The method to set the value to chartData
			 * @param {ChartData} chartData An instance of ChartData
			 */
			setChartData(chartData)	{
				if((chartData != null) && (!(chartData instanceof ZCRM.Wizard.Model.ChartData))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chartData EXPECTED TYPE: ChartData", null, null);
				}
				this.chartData = chartData;
				this.keyModified.set("chart_data", 1);

			}

			/**
			 * The method to get the screens
			 * @returns {List} An Array representing the screens
			 */
			getScreens()	{
				return this.screens;

			}

			/**
			 * The method to set the value to screens
			 * @param {List} screens An Array
			 */
			setScreens(screens)	{
				if((screens != null) && (!(Object.prototype.toString.call(screens) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: screens EXPECTED TYPE: Array", null, null);
				}
				this.screens = screens;
				this.keyModified.set("screens", 1);

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

		Message : class{
			constructor(){

				this.title=null;
				this.content=null;
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
			 * The method to get the content
			 * @returns {String} A String representing the content
			 */
			getContent()	{
				return this.content;

			}

			/**
			 * The method to set the value to content
			 * @param {String} content A String
			 */
			setContent(content)	{
				if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
				}
				this.content = content;
				this.keyModified.set("content", 1);

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

		Wizard : class{
			constructor(){

				this.createdTime=null;
				this.modifiedTime=null;
				this.module=null;
				this.name=null;
				this.modifiedBy=null;
				this.profiles=null;
				this.active=null;
				this.containers=null;
				this.id=null;
				this.createdBy=null;
				this.portalUserTypes=null;
				this.exemptedPortalUserTypes=null;
				this.parentWizard=null;
				this.draft=null;
				this.keyModified=new Map();
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
				this.keyModified.set("created_time", 1);

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
				this.keyModified.set("modified_time", 1);

			}

			/**
			 * The method to get the module
			 * @returns {Modules} An instance of Modules
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {Modules} module An instance of Modules
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Module.Model.Modules))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Modules", null, null);
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
			 * The method to get the modifiedBy
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getModifiedBy()	{
				return this.modifiedBy;

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.modifiedBy = modifiedBy;
				this.keyModified.set("modified_by", 1);

			}

			/**
			 * The method to get the profiles
			 * @returns {List} An Array representing the profiles
			 */
			getProfiles()	{
				return this.profiles;

			}

			/**
			 * The method to set the value to profiles
			 * @param {List} profiles An Array
			 */
			setProfiles(profiles)	{
				if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
				}
				this.profiles = profiles;
				this.keyModified.set("profiles", 1);

			}

			/**
			 * The method to get the active
			 * @returns {Boolean} A Boolean representing the active
			 */
			getActive()	{
				return this.active;

			}

			/**
			 * The method to set the value to active
			 * @param {Boolean} active A Boolean
			 */
			setActive(active)	{
				if((active != null) && (!(Object.prototype.toString.call(active) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: active EXPECTED TYPE: Boolean", null, null);
				}
				this.active = active;
				this.keyModified.set("active", 1);

			}

			/**
			 * The method to get the containers
			 * @returns {List} An Array representing the containers
			 */
			getContainers()	{
				return this.containers;

			}

			/**
			 * The method to set the value to containers
			 * @param {List} containers An Array
			 */
			setContainers(containers)	{
				if((containers != null) && (!(Object.prototype.toString.call(containers) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: containers EXPECTED TYPE: Array", null, null);
				}
				this.containers = containers;
				this.keyModified.set("containers", 1);

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
			 * @returns {MinifiedUser} An instance of MinifiedUser
			 */
			getCreatedBy()	{
				return this.createdBy;

			}

			/**
			 * The method to set the value to createdBy
			 * @param {MinifiedUser} createdBy An instance of MinifiedUser
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.User.Model.MinifiedUser))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

			}

			/**
			 * The method to get the portalUserTypes
			 * @returns {List} An Array representing the portalUserTypes
			 */
			getPortalUserTypes()	{
				return this.portalUserTypes;

			}

			/**
			 * The method to set the value to portalUserTypes
			 * @param {List} portalUserTypes An Array
			 */
			setPortalUserTypes(portalUserTypes)	{
				if((portalUserTypes != null) && (!(Object.prototype.toString.call(portalUserTypes) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portalUserTypes EXPECTED TYPE: Array", null, null);
				}
				this.portalUserTypes = portalUserTypes;
				this.keyModified.set("portal_user_types", 1);

			}

			/**
			 * The method to get the exemptedPortalUserTypes
			 * @returns {List} An Array representing the exemptedPortalUserTypes
			 */
			getExemptedPortalUserTypes()	{
				return this.exemptedPortalUserTypes;

			}

			/**
			 * The method to set the value to exemptedPortalUserTypes
			 * @param {List} exemptedPortalUserTypes An Array
			 */
			setExemptedPortalUserTypes(exemptedPortalUserTypes)	{
				if((exemptedPortalUserTypes != null) && (!(Object.prototype.toString.call(exemptedPortalUserTypes) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exemptedPortalUserTypes EXPECTED TYPE: Array", null, null);
				}
				this.exemptedPortalUserTypes = exemptedPortalUserTypes;
				this.keyModified.set("exempted_portal_user_types", 1);

			}

			/**
			 * The method to get the parentWizard
			 * @returns {Wizard} An instance of Wizard
			 */
			getParentWizard()	{
				return this.parentWizard;

			}

			/**
			 * The method to set the value to parentWizard
			 * @param {Wizard} parentWizard An instance of Wizard
			 */
			setParentWizard(parentWizard)	{
				if((parentWizard != null) && (!(parentWizard instanceof ZCRM.Wizard.Model.Wizard))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentWizard EXPECTED TYPE: Wizard", null, null);
				}
				this.parentWizard = parentWizard;
				this.keyModified.set("parent_wizard", 1);

			}

			/**
			 * The method to get the draft
			 * @returns {Boolean} A Boolean representing the draft
			 */
			getDraft()	{
				return this.draft;

			}

			/**
			 * The method to set the value to draft
			 * @param {Boolean} draft A Boolean
			 */
			setDraft(draft)	{
				if((draft != null) && (!(Object.prototype.toString.call(draft) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: draft EXPECTED TYPE: Boolean", null, null);
				}
				this.draft = draft;
				this.keyModified.set("draft", 1);

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

		Actions : class{
			constructor(){

				this.id=null;
				this.type=null;
				this.segment=null;
				this.fields=null;
				this.field=null;
				this.value=null;
				this.exemptedProfiles=null;
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
			 * The method to get the segment
			 * @returns {Segment} An instance of Segment
			 */
			getSegment()	{
				return this.segment;

			}

			/**
			 * The method to set the value to segment
			 * @param {Segment} segment An instance of Segment
			 */
			setSegment(segment)	{
				if((segment != null) && (!(segment instanceof ZCRM.Wizard.Model.Segment))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: segment EXPECTED TYPE: Segment", null, null);
				}
				this.segment = segment;
				this.keyModified.set("segment", 1);

			}

			/**
			 * The method to get the fields
			 * @returns {Fields} An instance of Fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {Fields} fields An instance of Fields
			 */
			setFields(fields)	{
				if((fields != null) && (!(fields instanceof ZCRM.Field.Model.Fields))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Fields", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

			}

			/**
			 * The method to get the field
			 * @returns {Fields} An instance of Fields
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {Fields} field An instance of Fields
			 */
			setField(field)	{
				if((field != null) && (!(field instanceof ZCRM.Field.Model.Fields))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Fields", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

			}

			/**
			 * The method to get the value
			 * @returns {Object} An Object representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Object} value An Object
			 */
			setValue(value)	{
				this.value = value;
				this.keyModified.set("value", 1);

			}

			/**
			 * The method to get the exemptedProfiles
			 * @returns {List} An Array representing the exemptedProfiles
			 */
			getExemptedProfiles()	{
				return this.exemptedProfiles;

			}

			/**
			 * The method to set the value to exemptedProfiles
			 * @param {List} exemptedProfiles An Array
			 */
			setExemptedProfiles(exemptedProfiles)	{
				if((exemptedProfiles != null) && (!(Object.prototype.toString.call(exemptedProfiles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exemptedProfiles EXPECTED TYPE: Array", null, null);
				}
				this.exemptedProfiles = exemptedProfiles;
				this.keyModified.set("exempted_profiles", 1);

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

		ConditionalRules : class{
			constructor(){

				this.queryId=null;
				this.executeOn=null;
				this.criteria=null;
				this.actions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the queryId
			 * @returns {Long} A BigInt representing the queryId
			 */
			getQueryId()	{
				return this.queryId;

			}

			/**
			 * The method to set the value to queryId
			 * @param {Long} queryId A BigInt
			 */
			setQueryId(queryId)	{
				if((queryId != null) && (!(Object.prototype.toString.call(queryId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: queryId EXPECTED TYPE: BigInt", null, null);
				}
				this.queryId = queryId;
				this.keyModified.set("query_id", 1);

			}

			/**
			 * The method to get the executeOn
			 * @returns {Choice} An instance of Choice
			 */
			getExecuteOn()	{
				return this.executeOn;

			}

			/**
			 * The method to set the value to executeOn
			 * @param {Choice} executeOn An instance of Choice
			 */
			setExecuteOn(executeOn)	{
				if((executeOn != null) && (!(executeOn instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executeOn EXPECTED TYPE: Choice", null, null);
				}
				this.executeOn = executeOn;
				this.keyModified.set("execute_on", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Criteria} An instance of Criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Criteria} criteria An instance of Criteria
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(criteria instanceof ZCRM.Wizard.Model.Criteria))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

			}

			/**
			 * The method to get the actions
			 * @returns {List} An Array representing the actions
			 */
			getActions()	{
				return this.actions;

			}

			/**
			 * The method to set the value to actions
			 * @param {List} actions An Array
			 */
			setActions(actions)	{
				if((actions != null) && (!(Object.prototype.toString.call(actions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actions EXPECTED TYPE: Array", null, null);
				}
				this.actions = actions;
				this.keyModified.set("actions", 1);

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

		Resource : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.keyModified=new Map();
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

		ResponseWrapper : class{
			constructor(){

				this.wizards=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the wizards
			 * @returns {List} An Array representing the wizards
			 */
			getWizards()	{
				return this.wizards;

			}

			/**
			 * The method to set the value to wizards
			 * @param {List} wizards An Array
			 */
			setWizards(wizards)	{
				if((wizards != null) && (!(Object.prototype.toString.call(wizards) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wizards EXPECTED TYPE: Array", null, null);
				}
				this.wizards = wizards;
				this.keyModified.set("wizards", 1);

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

		Button : class{
			constructor(){

				this.id=null;
				this.sequenceNumber=null;
				this.displayLabel=null;
				this.criteria=null;
				this.targetScreen=null;
				this.type=null;
				this.message=null;
				this.color=null;
				this.shape=null;
				this.backgroundColor=null;
				this.visibility=null;
				this.resource=null;
				this.transition=null;
				this.category=null;
				this.referenceId=null;
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
			 * The method to get the displayLabel
			 * @returns {String} A String representing the displayLabel
			 */
			getDisplayLabel()	{
				return this.displayLabel;

			}

			/**
			 * The method to set the value to displayLabel
			 * @param {String} displayLabel A String
			 */
			setDisplayLabel(displayLabel)	{
				if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
				}
				this.displayLabel = displayLabel;
				this.keyModified.set("display_label", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Criteria} An instance of Criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Criteria} criteria An instance of Criteria
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(criteria instanceof ZCRM.Wizard.Model.Criteria))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

			}

			/**
			 * The method to get the targetScreen
			 * @returns {Screen} An instance of Screen
			 */
			getTargetScreen()	{
				return this.targetScreen;

			}

			/**
			 * The method to set the value to targetScreen
			 * @param {Screen} targetScreen An instance of Screen
			 */
			setTargetScreen(targetScreen)	{
				if((targetScreen != null) && (!(targetScreen instanceof ZCRM.Wizard.Model.Screen))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: targetScreen EXPECTED TYPE: Screen", null, null);
				}
				this.targetScreen = targetScreen;
				this.keyModified.set("target_screen", 1);

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
			 * The method to get the message
			 * @returns {Message} An instance of Message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {Message} message An instance of Message
			 */
			setMessage(message)	{
				if((message != null) && (!(message instanceof ZCRM.Wizard.Model.Message))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Message", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the color
			 * @returns {String} A String representing the color
			 */
			getColor()	{
				return this.color;

			}

			/**
			 * The method to set the value to color
			 * @param {String} color A String
			 */
			setColor(color)	{
				if((color != null) && (!(Object.prototype.toString.call(color) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: color EXPECTED TYPE: String", null, null);
				}
				this.color = color;
				this.keyModified.set("color", 1);

			}

			/**
			 * The method to get the shape
			 * @returns {String} A String representing the shape
			 */
			getShape()	{
				return this.shape;

			}

			/**
			 * The method to set the value to shape
			 * @param {String} shape A String
			 */
			setShape(shape)	{
				if((shape != null) && (!(Object.prototype.toString.call(shape) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shape EXPECTED TYPE: String", null, null);
				}
				this.shape = shape;
				this.keyModified.set("shape", 1);

			}

			/**
			 * The method to get the backgroundColor
			 * @returns {String} A String representing the backgroundColor
			 */
			getBackgroundColor()	{
				return this.backgroundColor;

			}

			/**
			 * The method to set the value to backgroundColor
			 * @param {String} backgroundColor A String
			 */
			setBackgroundColor(backgroundColor)	{
				if((backgroundColor != null) && (!(Object.prototype.toString.call(backgroundColor) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: backgroundColor EXPECTED TYPE: String", null, null);
				}
				this.backgroundColor = backgroundColor;
				this.keyModified.set("background_color", 1);

			}

			/**
			 * The method to get the visibility
			 * @returns {String} A String representing the visibility
			 */
			getVisibility()	{
				return this.visibility;

			}

			/**
			 * The method to set the value to visibility
			 * @param {String} visibility A String
			 */
			setVisibility(visibility)	{
				if((visibility != null) && (!(Object.prototype.toString.call(visibility) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visibility EXPECTED TYPE: String", null, null);
				}
				this.visibility = visibility;
				this.keyModified.set("visibility", 1);

			}

			/**
			 * The method to get the resource
			 * @returns {Object} An Object representing the resource
			 */
			getResource()	{
				return this.resource;

			}

			/**
			 * The method to set the value to resource
			 * @param {Object} resource An Object
			 */
			setResource(resource)	{
				this.resource = resource;
				this.keyModified.set("resource", 1);

			}

			/**
			 * The method to get the transition
			 * @returns {Transition} An instance of Transition
			 */
			getTransition()	{
				return this.transition;

			}

			/**
			 * The method to set the value to transition
			 * @param {Transition} transition An instance of Transition
			 */
			setTransition(transition)	{
				if((transition != null) && (!(transition instanceof ZCRM.Wizard.Model.Transition))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transition EXPECTED TYPE: Transition", null, null);
				}
				this.transition = transition;
				this.keyModified.set("transition", 1);

			}

			/**
			 * The method to get the category
			 * @returns {String} A String representing the category
			 */
			getCategory()	{
				return this.category;

			}

			/**
			 * The method to set the value to category
			 * @param {String} category A String
			 */
			setCategory(category)	{
				if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
				}
				this.category = category;
				this.keyModified.set("category", 1);

			}

			/**
			 * The method to get the referenceId
			 * @returns {String} A String representing the referenceId
			 */
			getReferenceId()	{
				return this.referenceId;

			}

			/**
			 * The method to set the value to referenceId
			 * @param {String} referenceId A String
			 */
			setReferenceId(referenceId)	{
				if((referenceId != null) && (!(Object.prototype.toString.call(referenceId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: referenceId EXPECTED TYPE: String", null, null);
				}
				this.referenceId = referenceId;
				this.keyModified.set("reference_id", 1);

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

		Element : class{
			constructor(){

				this.type=null;
				this.resource=null;
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
			 * The method to get the resource
			 * @returns {Resource} An instance of Resource
			 */
			getResource()	{
				return this.resource;

			}

			/**
			 * The method to set the value to resource
			 * @param {Resource} resource An instance of Resource
			 */
			setResource(resource)	{
				if((resource != null) && (!(resource instanceof ZCRM.Wizard.Model.Resource))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resource EXPECTED TYPE: Resource", null, null);
				}
				this.resource = resource;
				this.keyModified.set("resource", 1);

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

		ExemptedPortalUserType : class{
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

		Connection : class{
			constructor(){

				this.sourceButton=null;
				this.targetScreen=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the sourceButton
			 * @returns {Button} An instance of Button
			 */
			getSourceButton()	{
				return this.sourceButton;

			}

			/**
			 * The method to set the value to sourceButton
			 * @param {Button} sourceButton An instance of Button
			 */
			setSourceButton(sourceButton)	{
				if((sourceButton != null) && (!(sourceButton instanceof ZCRM.Wizard.Model.Button))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sourceButton EXPECTED TYPE: Button", null, null);
				}
				this.sourceButton = sourceButton;
				this.keyModified.set("source_button", 1);

			}

			/**
			 * The method to get the targetScreen
			 * @returns {Screen} An instance of Screen
			 */
			getTargetScreen()	{
				return this.targetScreen;

			}

			/**
			 * The method to set the value to targetScreen
			 * @param {Screen} targetScreen An instance of Screen
			 */
			setTargetScreen(targetScreen)	{
				if((targetScreen != null) && (!(targetScreen instanceof ZCRM.Wizard.Model.Screen))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: targetScreen EXPECTED TYPE: Screen", null, null);
				}
				this.targetScreen = targetScreen;
				this.keyModified.set("target_screen", 1);

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

		ChartData : class{
			constructor(){

				this.nodes=null;
				this.connections=null;
				this.colorPalette=null;
				this.canvasWidth=null;
				this.canvasHeight=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the nodes
			 * @returns {List} An Array representing the nodes
			 */
			getNodes()	{
				return this.nodes;

			}

			/**
			 * The method to set the value to nodes
			 * @param {List} nodes An Array
			 */
			setNodes(nodes)	{
				if((nodes != null) && (!(Object.prototype.toString.call(nodes) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nodes EXPECTED TYPE: Array", null, null);
				}
				this.nodes = nodes;
				this.keyModified.set("nodes", 1);

			}

			/**
			 * The method to get the connections
			 * @returns {List} An Array representing the connections
			 */
			getConnections()	{
				return this.connections;

			}

			/**
			 * The method to set the value to connections
			 * @param {List} connections An Array
			 */
			setConnections(connections)	{
				if((connections != null) && (!(Object.prototype.toString.call(connections) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connections EXPECTED TYPE: Array", null, null);
				}
				this.connections = connections;
				this.keyModified.set("connections", 1);

			}

			/**
			 * The method to get the colorPalette
			 * @returns {ButtonBackground} An instance of ButtonBackground
			 */
			getColorPalette()	{
				return this.colorPalette;

			}

			/**
			 * The method to set the value to colorPalette
			 * @param {ButtonBackground} colorPalette An instance of ButtonBackground
			 */
			setColorPalette(colorPalette)	{
				if((colorPalette != null) && (!(colorPalette instanceof ZCRM.Wizard.Model.ButtonBackground))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: colorPalette EXPECTED TYPE: ButtonBackground", null, null);
				}
				this.colorPalette = colorPalette;
				this.keyModified.set("color_palette", 1);

			}

			/**
			 * The method to get the canvasWidth
			 * @returns {Integer} An Integer representing the canvasWidth
			 */
			getCanvasWidth()	{
				return this.canvasWidth;

			}

			/**
			 * The method to set the value to canvasWidth
			 * @param {Integer} canvasWidth An Integer
			 */
			setCanvasWidth(canvasWidth)	{
				if((canvasWidth != null) && (!(Object.prototype.toString.call(canvasWidth) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: canvasWidth EXPECTED TYPE: Integer", null, null);
				}
				this.canvasWidth = canvasWidth;
				this.keyModified.set("canvas_width", 1);

			}

			/**
			 * The method to get the canvasHeight
			 * @returns {Integer} An Integer representing the canvasHeight
			 */
			getCanvasHeight()	{
				return this.canvasHeight;

			}

			/**
			 * The method to set the value to canvasHeight
			 * @param {Integer} canvasHeight An Integer
			 */
			setCanvasHeight(canvasHeight)	{
				if((canvasHeight != null) && (!(Object.prototype.toString.call(canvasHeight) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: canvasHeight EXPECTED TYPE: Integer", null, null);
				}
				this.canvasHeight = canvasHeight;
				this.keyModified.set("canvas_height", 1);

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

		PortalUserType : class{
			constructor(){

				this.id=null;
				this.layout=null;
				this.chartData=null;
				this.screens=null;
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
			 * The method to get the layout
			 * @returns {Layouts} An instance of Layouts
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layouts} layout An instance of Layouts
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Layout.Model.Layouts))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layouts", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

			}

			/**
			 * The method to get the chartData
			 * @returns {ChartData} An instance of ChartData
			 */
			getChartData()	{
				return this.chartData;

			}

			/**
			 * The method to set the value to chartData
			 * @param {ChartData} chartData An instance of ChartData
			 */
			setChartData(chartData)	{
				if((chartData != null) && (!(chartData instanceof ZCRM.Wizard.Model.ChartData))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chartData EXPECTED TYPE: ChartData", null, null);
				}
				this.chartData = chartData;
				this.keyModified.set("chart_data", 1);

			}

			/**
			 * The method to get the screens
			 * @returns {List} An Array representing the screens
			 */
			getScreens()	{
				return this.screens;

			}

			/**
			 * The method to set the value to screens
			 * @param {List} screens An Array
			 */
			setScreens(screens)	{
				if((screens != null) && (!(Object.prototype.toString.call(screens) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: screens EXPECTED TYPE: Array", null, null);
				}
				this.screens = screens;
				this.keyModified.set("screens", 1);

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

		Criteria : class{
			constructor(){

				this.comparator=null;
				this.field=null;
				this.value=null;
				this.groupOperator=null;
				this.group=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the comparator
			 * @returns {String} A String representing the comparator
			 */
			getComparator()	{
				return this.comparator;

			}

			/**
			 * The method to set the value to comparator
			 * @param {String} comparator A String
			 */
			setComparator(comparator)	{
				if((comparator != null) && (!(Object.prototype.toString.call(comparator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: String", null, null);
				}
				this.comparator = comparator;
				this.keyModified.set("comparator", 1);

			}

			/**
			 * The method to get the field
			 * @returns {Field} An instance of Field
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {Field} field An instance of Field
			 */
			setField(field)	{
				if((field != null) && (!(field instanceof ZCRM.Wizard.Model.Field))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

			}

			/**
			 * The method to get the value
			 * @returns {Object} An Object representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Object} value An Object
			 */
			setValue(value)	{
				this.value = value;
				this.keyModified.set("value", 1);

			}

			/**
			 * The method to get the groupOperator
			 * @returns {String} A String representing the groupOperator
			 */
			getGroupOperator()	{
				return this.groupOperator;

			}

			/**
			 * The method to set the value to groupOperator
			 * @param {String} groupOperator A String
			 */
			setGroupOperator(groupOperator)	{
				if((groupOperator != null) && (!(Object.prototype.toString.call(groupOperator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groupOperator EXPECTED TYPE: String", null, null);
				}
				this.groupOperator = groupOperator;
				this.keyModified.set("group_operator", 1);

			}

			/**
			 * The method to get the group
			 * @returns {List} An Array representing the group
			 */
			getGroup()	{
				return this.group;

			}

			/**
			 * The method to set the value to group
			 * @param {List} group An Array
			 */
			setGroup(group)	{
				if((group != null) && (!(Object.prototype.toString.call(group) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: group EXPECTED TYPE: Array", null, null);
				}
				this.group = group;
				this.keyModified.set("group", 1);

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

		Transition : class{
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

		Screen : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
				this.id=null;
				this.referenceId=null;
				this.conditionalRules=null;
				this.segments=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the displayLabel
			 * @returns {String} A String representing the displayLabel
			 */
			getDisplayLabel()	{
				return this.displayLabel;

			}

			/**
			 * The method to set the value to displayLabel
			 * @param {String} displayLabel A String
			 */
			setDisplayLabel(displayLabel)	{
				if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
				}
				this.displayLabel = displayLabel;
				this.keyModified.set("display_label", 1);

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
			 * The method to get the referenceId
			 * @returns {String} A String representing the referenceId
			 */
			getReferenceId()	{
				return this.referenceId;

			}

			/**
			 * The method to set the value to referenceId
			 * @param {String} referenceId A String
			 */
			setReferenceId(referenceId)	{
				if((referenceId != null) && (!(Object.prototype.toString.call(referenceId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: referenceId EXPECTED TYPE: String", null, null);
				}
				this.referenceId = referenceId;
				this.keyModified.set("reference_id", 1);

			}

			/**
			 * The method to get the conditionalRules
			 * @returns {List} An Array representing the conditionalRules
			 */
			getConditionalRules()	{
				return this.conditionalRules;

			}

			/**
			 * The method to set the value to conditionalRules
			 * @param {List} conditionalRules An Array
			 */
			setConditionalRules(conditionalRules)	{
				if((conditionalRules != null) && (!(Object.prototype.toString.call(conditionalRules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: conditionalRules EXPECTED TYPE: Array", null, null);
				}
				this.conditionalRules = conditionalRules;
				this.keyModified.set("conditional_rules", 1);

			}

			/**
			 * The method to get the segments
			 * @returns {List} An Array representing the segments
			 */
			getSegments()	{
				return this.segments;

			}

			/**
			 * The method to set the value to segments
			 * @param {List} segments An Array
			 */
			setSegments(segments)	{
				if((segments != null) && (!(Object.prototype.toString.call(segments) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: segments EXPECTED TYPE: Array", null, null);
				}
				this.segments = segments;
				this.keyModified.set("segments", 1);

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

		Field : class{
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
		constructor(){

		}

		/**
		 * The method to get wizards
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWizards(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/wizards");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Wizard.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get wizard by id
		 * @param {String} wizardId A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWizardById(wizardId, paramInstance=null){
			if((!(Object.prototype.toString.call(wizardId) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wizardId EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/wizards/");
			apiPath = apiPath.concat(wizardId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Wizard.Model.ResponseHandler", "application/json");

		}
	},

}