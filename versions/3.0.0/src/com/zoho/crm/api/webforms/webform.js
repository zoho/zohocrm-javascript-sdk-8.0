ZCRM.Webform = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

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

		ButtonAttributes : class{
			constructor(){

				this.color=null;
				this.name=null;
				this.keyModified=new Map();
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

		BodyWrapper : class{
			constructor(){

				this.webforms=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the webforms
			 * @returns {List} An Array representing the webforms
			 */
			getWebforms()	{
				return this.webforms;

			}

			/**
			 * The method to set the value to webforms
			 * @param {List} webforms An Array
			 */
			setWebforms(webforms)	{
				if((webforms != null) && (!(Object.prototype.toString.call(webforms) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webforms EXPECTED TYPE: Array", null, null);
				}
				this.webforms = webforms;
				this.keyModified.set("webforms", 1);

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

		Owner : class{
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

				this.webforms=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the webforms
			 * @returns {List} An Array representing the webforms
			 */
			getWebforms()	{
				return this.webforms;

			}

			/**
			 * The method to set the value to webforms
			 * @param {List} webforms An Array
			 */
			setWebforms(webforms)	{
				if((webforms != null) && (!(Object.prototype.toString.call(webforms) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webforms EXPECTED TYPE: Array", null, null);
				}
				this.webforms = webforms;
				this.keyModified.set("webforms", 1);

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

				this.id=null;
				this.type=null;
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

		AssignmentRule : class{
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

		Fields : class{
			constructor(){

				this.layout=null;
				this.help=null;
				this.field=null;
				this.module=null;
				this.secretKey=null;
				this.recaptchaLabel=null;
				this.hidden=null;
				this.siteKey=null;
				this.advanced=null;
				this.apiName=null;
				this.fieldLabel=null;
				this.theme=null;
				this.id=null;
				this.required=null;
				this.fieldName=null;
				this.dateFormat=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the layout
			 * @returns {Layout} An instance of Layout
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layout} layout An instance of Layout
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Webform.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

			}

			/**
			 * The method to get the help
			 * @returns {String} A String representing the help
			 */
			getHelp()	{
				return this.help;

			}

			/**
			 * The method to set the value to help
			 * @param {String} help A String
			 */
			setHelp(help)	{
				if((help != null) && (!(Object.prototype.toString.call(help) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: help EXPECTED TYPE: String", null, null);
				}
				this.help = help;
				this.keyModified.set("help", 1);

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
				if((field != null) && (!(field instanceof ZCRM.Webform.Model.Fields))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Fields", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

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
				if((module != null) && (!(module instanceof ZCRM.Webform.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

			}

			/**
			 * The method to get the secretKey
			 * @returns {String} A String representing the secretKey
			 */
			getSecretKey()	{
				return this.secretKey;

			}

			/**
			 * The method to set the value to secretKey
			 * @param {String} secretKey A String
			 */
			setSecretKey(secretKey)	{
				if((secretKey != null) && (!(Object.prototype.toString.call(secretKey) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: secretKey EXPECTED TYPE: String", null, null);
				}
				this.secretKey = secretKey;
				this.keyModified.set("secret_key", 1);

			}

			/**
			 * The method to get the recaptchaLabel
			 * @returns {String} A String representing the recaptchaLabel
			 */
			getRecaptchaLabel()	{
				return this.recaptchaLabel;

			}

			/**
			 * The method to set the value to recaptchaLabel
			 * @param {String} recaptchaLabel A String
			 */
			setRecaptchaLabel(recaptchaLabel)	{
				if((recaptchaLabel != null) && (!(Object.prototype.toString.call(recaptchaLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recaptchaLabel EXPECTED TYPE: String", null, null);
				}
				this.recaptchaLabel = recaptchaLabel;
				this.keyModified.set("recaptcha_label", 1);

			}

			/**
			 * The method to get the hidden
			 * @returns {Boolean} A Boolean representing the hidden
			 */
			getHidden()	{
				return this.hidden;

			}

			/**
			 * The method to set the value to hidden
			 * @param {Boolean} hidden A Boolean
			 */
			setHidden(hidden)	{
				if((hidden != null) && (!(Object.prototype.toString.call(hidden) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hidden EXPECTED TYPE: Boolean", null, null);
				}
				this.hidden = hidden;
				this.keyModified.set("hidden", 1);

			}

			/**
			 * The method to get the siteKey
			 * @returns {String} A String representing the siteKey
			 */
			getSiteKey()	{
				return this.siteKey;

			}

			/**
			 * The method to set the value to siteKey
			 * @param {String} siteKey A String
			 */
			setSiteKey(siteKey)	{
				if((siteKey != null) && (!(Object.prototype.toString.call(siteKey) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: siteKey EXPECTED TYPE: String", null, null);
				}
				this.siteKey = siteKey;
				this.keyModified.set("site_key", 1);

			}

			/**
			 * The method to get the advanced
			 * @returns {Boolean} A Boolean representing the advanced
			 */
			getAdvanced()	{
				return this.advanced;

			}

			/**
			 * The method to set the value to advanced
			 * @param {Boolean} advanced A Boolean
			 */
			setAdvanced(advanced)	{
				if((advanced != null) && (!(Object.prototype.toString.call(advanced) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: advanced EXPECTED TYPE: Boolean", null, null);
				}
				this.advanced = advanced;
				this.keyModified.set("advanced", 1);

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
			 * The method to get the theme
			 * @returns {String} A String representing the theme
			 */
			getTheme()	{
				return this.theme;

			}

			/**
			 * The method to set the value to theme
			 * @param {String} theme A String
			 */
			setTheme(theme)	{
				if((theme != null) && (!(Object.prototype.toString.call(theme) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: theme EXPECTED TYPE: String", null, null);
				}
				this.theme = theme;
				this.keyModified.set("theme", 1);

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
			 * The method to get the required
			 * @returns {Boolean} A Boolean representing the required
			 */
			getRequired()	{
				return this.required;

			}

			/**
			 * The method to set the value to required
			 * @param {Boolean} required A Boolean
			 */
			setRequired(required)	{
				if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
				}
				this.required = required;
				this.keyModified.set("required", 1);

			}

			/**
			 * The method to get the fieldName
			 * @returns {String} A String representing the fieldName
			 */
			getFieldName()	{
				return this.fieldName;

			}

			/**
			 * The method to set the value to fieldName
			 * @param {String} fieldName A String
			 */
			setFieldName(fieldName)	{
				if((fieldName != null) && (!(Object.prototype.toString.call(fieldName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldName EXPECTED TYPE: String", null, null);
				}
				this.fieldName = fieldName;
				this.keyModified.set("field_name", 1);

			}

			/**
			 * The method to get the dateFormat
			 * @returns {String} A String representing the dateFormat
			 */
			getDateFormat()	{
				return this.dateFormat;

			}

			/**
			 * The method to set the value to dateFormat
			 * @param {String} dateFormat A String
			 */
			setDateFormat(dateFormat)	{
				if((dateFormat != null) && (!(Object.prototype.toString.call(dateFormat) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dateFormat EXPECTED TYPE: String", null, null);
				}
				this.dateFormat = dateFormat;
				this.keyModified.set("date_format", 1);

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

		SpamControll : class{
			constructor(){

				this.status=null;
				this.excludeScore=null;
				this.keyModified=new Map();
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
			 * The method to get the excludeScore
			 * @returns {String} A String representing the excludeScore
			 */
			getExcludeScore()	{
				return this.excludeScore;

			}

			/**
			 * The method to set the value to excludeScore
			 * @param {String} excludeScore A String
			 */
			setExcludeScore(excludeScore)	{
				if((excludeScore != null) && (!(Object.prototype.toString.call(excludeScore) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeScore EXPECTED TYPE: String", null, null);
				}
				this.excludeScore = excludeScore;
				this.keyModified.set("exclude_score", 1);

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

		AutoResponseRule : class{
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

		AnalyticsData : class{
			constructor(){

				this.iframeUrlTrackingCode=null;
				this.urlAnalyticsEnabled=null;
				this.analyticsEnabled=null;
				this.analyticsEnabledTime=null;
				this.trackingCode=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the iframeUrlTrackingCode
			 * @returns {String} A String representing the iframeUrlTrackingCode
			 */
			getIframeUrlTrackingCode()	{
				return this.iframeUrlTrackingCode;

			}

			/**
			 * The method to set the value to iframeUrlTrackingCode
			 * @param {String} iframeUrlTrackingCode A String
			 */
			setIframeUrlTrackingCode(iframeUrlTrackingCode)	{
				if((iframeUrlTrackingCode != null) && (!(Object.prototype.toString.call(iframeUrlTrackingCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: iframeUrlTrackingCode EXPECTED TYPE: String", null, null);
				}
				this.iframeUrlTrackingCode = iframeUrlTrackingCode;
				this.keyModified.set("iframe_url_tracking_code", 1);

			}

			/**
			 * The method to get the urlAnalyticsEnabled
			 * @returns {Boolean} A Boolean representing the urlAnalyticsEnabled
			 */
			getUrlAnalyticsEnabled()	{
				return this.urlAnalyticsEnabled;

			}

			/**
			 * The method to set the value to urlAnalyticsEnabled
			 * @param {Boolean} urlAnalyticsEnabled A Boolean
			 */
			setUrlAnalyticsEnabled(urlAnalyticsEnabled)	{
				if((urlAnalyticsEnabled != null) && (!(Object.prototype.toString.call(urlAnalyticsEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: urlAnalyticsEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.urlAnalyticsEnabled = urlAnalyticsEnabled;
				this.keyModified.set("url_analytics_enabled", 1);

			}

			/**
			 * The method to get the analyticsEnabled
			 * @returns {Boolean} A Boolean representing the analyticsEnabled
			 */
			getAnalyticsEnabled()	{
				return this.analyticsEnabled;

			}

			/**
			 * The method to set the value to analyticsEnabled
			 * @param {Boolean} analyticsEnabled A Boolean
			 */
			setAnalyticsEnabled(analyticsEnabled)	{
				if((analyticsEnabled != null) && (!(Object.prototype.toString.call(analyticsEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analyticsEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.analyticsEnabled = analyticsEnabled;
				this.keyModified.set("analytics_enabled", 1);

			}

			/**
			 * The method to get the analyticsEnabledTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getAnalyticsEnabledTime()	{
				return this.analyticsEnabledTime;

			}

			/**
			 * The method to set the value to analyticsEnabledTime
			 * @param {OffsetDateTime} analyticsEnabledTime An instance of OffsetDateTime
			 */
			setAnalyticsEnabledTime(analyticsEnabledTime)	{
				if((analyticsEnabledTime != null) && (!(analyticsEnabledTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analyticsEnabledTime EXPECTED TYPE: Date", null, null);
				}
				this.analyticsEnabledTime = analyticsEnabledTime;
				this.keyModified.set("analytics_enabled_time", 1);

			}

			/**
			 * The method to get the trackingCode
			 * @returns {String} A String representing the trackingCode
			 */
			getTrackingCode()	{
				return this.trackingCode;

			}

			/**
			 * The method to set the value to trackingCode
			 * @param {String} trackingCode A String
			 */
			setTrackingCode(trackingCode)	{
				if((trackingCode != null) && (!(Object.prototype.toString.call(trackingCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trackingCode EXPECTED TYPE: String", null, null);
				}
				this.trackingCode = trackingCode;
				this.keyModified.set("tracking_code", 1);

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

		Tags : class{
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

		FontAttributes : class{
			constructor(){

				this.size=null;
				this.color=null;
				this.family=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the size
			 * @returns {Integer} An Integer representing the size
			 */
			getSize()	{
				return this.size;

			}

			/**
			 * The method to set the value to size
			 * @param {Integer} size An Integer
			 */
			setSize(size)	{
				if((size != null) && (!(Object.prototype.toString.call(size) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: Integer", null, null);
				}
				this.size = size;
				this.keyModified.set("size", 1);

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
			 * The method to get the family
			 * @returns {String} A String representing the family
			 */
			getFamily()	{
				return this.family;

			}

			/**
			 * The method to set the value to family
			 * @param {String} family A String
			 */
			setFamily(family)	{
				if((family != null) && (!(Object.prototype.toString.call(family) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: family EXPECTED TYPE: String", null, null);
				}
				this.family = family;
				this.keyModified.set("family", 1);

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

		WebForm : class{
			constructor(){

				this.googleSite=null;
				this.encryptedFormId=null;
				this.owner=null;
				this.userType=null;
				this.acknowledgeVisitor=null;
				this.buttonAttributes=null;
				this.encryptedZgid=null;
				this.createdTime=null;
				this.analyticsData=null;
				this.module=null;
				this.encryptedModule=null;
				this.active=null;
				this.adwordEnabled=null;
				this.notifyOwner=null;
				this.createdBy=null;
				this.formAttributes=null;
				this.locationUrl=null;
				this.landingUrl=null;
				this.doubleOptinEnabled=null;
				this.layout=null;
				this.tags=null;
				this.approvalRequest=null;
				this.type=null;
				this.createContact=null;
				this.assignmentRule=null;
				this.name=null;
				this.id=null;
				this.spamControl=null;
				this.fields=null;
				this.formFields=null;
				this.abtesting=null;
				this.visitorTracking=null;
				this.lastSubmittedTime=null;
				this.actionOnSubmit=null;
				this.actionValue=null;
				this.suggestion=null;
				this.embedCode=null;
				this.codeFormats=null;
				this.sourceCode=null;
				this.iframeCode=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the googleSite
			 * @returns {String} A String representing the googleSite
			 */
			getGoogleSite()	{
				return this.googleSite;

			}

			/**
			 * The method to set the value to googleSite
			 * @param {String} googleSite A String
			 */
			setGoogleSite(googleSite)	{
				if((googleSite != null) && (!(Object.prototype.toString.call(googleSite) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: googleSite EXPECTED TYPE: String", null, null);
				}
				this.googleSite = googleSite;
				this.keyModified.set("google_site", 1);

			}

			/**
			 * The method to get the encryptedFormId
			 * @returns {String} A String representing the encryptedFormId
			 */
			getEncryptedFormId()	{
				return this.encryptedFormId;

			}

			/**
			 * The method to set the value to encryptedFormId
			 * @param {String} encryptedFormId A String
			 */
			setEncryptedFormId(encryptedFormId)	{
				if((encryptedFormId != null) && (!(Object.prototype.toString.call(encryptedFormId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encryptedFormId EXPECTED TYPE: String", null, null);
				}
				this.encryptedFormId = encryptedFormId;
				this.keyModified.set("encrypted_form_id", 1);

			}

			/**
			 * The method to get the owner
			 * @returns {Owner} An instance of Owner
			 */
			getOwner()	{
				return this.owner;

			}

			/**
			 * The method to set the value to owner
			 * @param {Owner} owner An instance of Owner
			 */
			setOwner(owner)	{
				if((owner != null) && (!(owner instanceof ZCRM.Webform.Model.Owner))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: Owner", null, null);
				}
				this.owner = owner;
				this.keyModified.set("owner", 1);

			}

			/**
			 * The method to get the userType
			 * @returns {User} An instance of User
			 */
			getUserType()	{
				return this.userType;

			}

			/**
			 * The method to set the value to userType
			 * @param {User} userType An instance of User
			 */
			setUserType(userType)	{
				if((userType != null) && (!(userType instanceof ZCRM.Webform.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userType EXPECTED TYPE: User", null, null);
				}
				this.userType = userType;
				this.keyModified.set("user_type", 1);

			}

			/**
			 * The method to get the acknowledgeVisitor
			 * @returns {AcknowledgeVisitors} An instance of AcknowledgeVisitors
			 */
			getAcknowledgeVisitor()	{
				return this.acknowledgeVisitor;

			}

			/**
			 * The method to set the value to acknowledgeVisitor
			 * @param {AcknowledgeVisitors} acknowledgeVisitor An instance of AcknowledgeVisitors
			 */
			setAcknowledgeVisitor(acknowledgeVisitor)	{
				if((acknowledgeVisitor != null) && (!(acknowledgeVisitor instanceof ZCRM.Webform.Model.AcknowledgeVisitors))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: acknowledgeVisitor EXPECTED TYPE: AcknowledgeVisitors", null, null);
				}
				this.acknowledgeVisitor = acknowledgeVisitor;
				this.keyModified.set("acknowledge_visitor", 1);

			}

			/**
			 * The method to get the buttonAttributes
			 * @returns {List} An Array representing the buttonAttributes
			 */
			getButtonAttributes()	{
				return this.buttonAttributes;

			}

			/**
			 * The method to set the value to buttonAttributes
			 * @param {List} buttonAttributes An Array
			 */
			setButtonAttributes(buttonAttributes)	{
				if((buttonAttributes != null) && (!(Object.prototype.toString.call(buttonAttributes) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: buttonAttributes EXPECTED TYPE: Array", null, null);
				}
				this.buttonAttributes = buttonAttributes;
				this.keyModified.set("button_attributes", 1);

			}

			/**
			 * The method to get the encryptedZgid
			 * @returns {String} A String representing the encryptedZgid
			 */
			getEncryptedZgid()	{
				return this.encryptedZgid;

			}

			/**
			 * The method to set the value to encryptedZgid
			 * @param {String} encryptedZgid A String
			 */
			setEncryptedZgid(encryptedZgid)	{
				if((encryptedZgid != null) && (!(Object.prototype.toString.call(encryptedZgid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encryptedZgid EXPECTED TYPE: String", null, null);
				}
				this.encryptedZgid = encryptedZgid;
				this.keyModified.set("encrypted_zgid", 1);

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
			 * The method to get the analyticsData
			 * @returns {AnalyticsData} An instance of AnalyticsData
			 */
			getAnalyticsData()	{
				return this.analyticsData;

			}

			/**
			 * The method to set the value to analyticsData
			 * @param {AnalyticsData} analyticsData An instance of AnalyticsData
			 */
			setAnalyticsData(analyticsData)	{
				if((analyticsData != null) && (!(analyticsData instanceof ZCRM.Webform.Model.AnalyticsData))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analyticsData EXPECTED TYPE: AnalyticsData", null, null);
				}
				this.analyticsData = analyticsData;
				this.keyModified.set("analytics_data", 1);

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
				if((module != null) && (!(module instanceof ZCRM.Webform.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

			}

			/**
			 * The method to get the encryptedModule
			 * @returns {String} A String representing the encryptedModule
			 */
			getEncryptedModule()	{
				return this.encryptedModule;

			}

			/**
			 * The method to set the value to encryptedModule
			 * @param {String} encryptedModule A String
			 */
			setEncryptedModule(encryptedModule)	{
				if((encryptedModule != null) && (!(Object.prototype.toString.call(encryptedModule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encryptedModule EXPECTED TYPE: String", null, null);
				}
				this.encryptedModule = encryptedModule;
				this.keyModified.set("encrypted_module", 1);

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
			 * The method to get the adwordEnabled
			 * @returns {Boolean} A Boolean representing the adwordEnabled
			 */
			getAdwordEnabled()	{
				return this.adwordEnabled;

			}

			/**
			 * The method to set the value to adwordEnabled
			 * @param {Boolean} adwordEnabled A Boolean
			 */
			setAdwordEnabled(adwordEnabled)	{
				if((adwordEnabled != null) && (!(Object.prototype.toString.call(adwordEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: adwordEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.adwordEnabled = adwordEnabled;
				this.keyModified.set("adword_enabled", 1);

			}

			/**
			 * The method to get the notifyOwner
			 * @returns {Owner} An instance of Owner
			 */
			getNotifyOwner()	{
				return this.notifyOwner;

			}

			/**
			 * The method to set the value to notifyOwner
			 * @param {Owner} notifyOwner An instance of Owner
			 */
			setNotifyOwner(notifyOwner)	{
				if((notifyOwner != null) && (!(notifyOwner instanceof ZCRM.Webform.Model.Owner))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyOwner EXPECTED TYPE: Owner", null, null);
				}
				this.notifyOwner = notifyOwner;
				this.keyModified.set("notify_owner", 1);

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
				if((createdBy != null) && (!(createdBy instanceof ZCRM.Webform.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

			}

			/**
			 * The method to get the formAttributes
			 * @returns {FormAttributes} An instance of FormAttributes
			 */
			getFormAttributes()	{
				return this.formAttributes;

			}

			/**
			 * The method to set the value to formAttributes
			 * @param {FormAttributes} formAttributes An instance of FormAttributes
			 */
			setFormAttributes(formAttributes)	{
				if((formAttributes != null) && (!(formAttributes instanceof ZCRM.Webform.Model.FormAttributes))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formAttributes EXPECTED TYPE: FormAttributes", null, null);
				}
				this.formAttributes = formAttributes;
				this.keyModified.set("form_attributes", 1);

			}

			/**
			 * The method to get the locationUrl
			 * @returns {List} An Array representing the locationUrl
			 */
			getLocationUrl()	{
				return this.locationUrl;

			}

			/**
			 * The method to set the value to locationUrl
			 * @param {List} locationUrl An Array
			 */
			setLocationUrl(locationUrl)	{
				if((locationUrl != null) && (!(Object.prototype.toString.call(locationUrl) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locationUrl EXPECTED TYPE: Array", null, null);
				}
				this.locationUrl = locationUrl;
				this.keyModified.set("location_url", 1);

			}

			/**
			 * The method to get the landingUrl
			 * @returns {String} A String representing the landingUrl
			 */
			getLandingUrl()	{
				return this.landingUrl;

			}

			/**
			 * The method to set the value to landingUrl
			 * @param {String} landingUrl A String
			 */
			setLandingUrl(landingUrl)	{
				if((landingUrl != null) && (!(Object.prototype.toString.call(landingUrl) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: landingUrl EXPECTED TYPE: String", null, null);
				}
				this.landingUrl = landingUrl;
				this.keyModified.set("landing_url", 1);

			}

			/**
			 * The method to get the doubleOptinEnabled
			 * @returns {Boolean} A Boolean representing the doubleOptinEnabled
			 */
			getDoubleOptinEnabled()	{
				return this.doubleOptinEnabled;

			}

			/**
			 * The method to set the value to doubleOptinEnabled
			 * @param {Boolean} doubleOptinEnabled A Boolean
			 */
			setDoubleOptinEnabled(doubleOptinEnabled)	{
				if((doubleOptinEnabled != null) && (!(Object.prototype.toString.call(doubleOptinEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doubleOptinEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.doubleOptinEnabled = doubleOptinEnabled;
				this.keyModified.set("double_optin_enabled", 1);

			}

			/**
			 * The method to get the layout
			 * @returns {Layout} An instance of Layout
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layout} layout An instance of Layout
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Webform.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

			}

			/**
			 * The method to get the tags
			 * @returns {List} An Array representing the tags
			 */
			getTags()	{
				return this.tags;

			}

			/**
			 * The method to set the value to tags
			 * @param {List} tags An Array
			 */
			setTags(tags)	{
				if((tags != null) && (!(Object.prototype.toString.call(tags) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tags EXPECTED TYPE: Array", null, null);
				}
				this.tags = tags;
				this.keyModified.set("tags", 1);

			}

			/**
			 * The method to get the approvalRequest
			 * @returns {Boolean} A Boolean representing the approvalRequest
			 */
			getApprovalRequest()	{
				return this.approvalRequest;

			}

			/**
			 * The method to set the value to approvalRequest
			 * @param {Boolean} approvalRequest A Boolean
			 */
			setApprovalRequest(approvalRequest)	{
				if((approvalRequest != null) && (!(Object.prototype.toString.call(approvalRequest) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approvalRequest EXPECTED TYPE: Boolean", null, null);
				}
				this.approvalRequest = approvalRequest;
				this.keyModified.set("approval_request", 1);

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
			 * The method to get the createContact
			 * @returns {Boolean} A Boolean representing the createContact
			 */
			getCreateContact()	{
				return this.createContact;

			}

			/**
			 * The method to set the value to createContact
			 * @param {Boolean} createContact A Boolean
			 */
			setCreateContact(createContact)	{
				if((createContact != null) && (!(Object.prototype.toString.call(createContact) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createContact EXPECTED TYPE: Boolean", null, null);
				}
				this.createContact = createContact;
				this.keyModified.set("create_contact", 1);

			}

			/**
			 * The method to get the assignmentRule
			 * @returns {AssignmentRule} An instance of AssignmentRule
			 */
			getAssignmentRule()	{
				return this.assignmentRule;

			}

			/**
			 * The method to set the value to assignmentRule
			 * @param {AssignmentRule} assignmentRule An instance of AssignmentRule
			 */
			setAssignmentRule(assignmentRule)	{
				if((assignmentRule != null) && (!(assignmentRule instanceof ZCRM.Webform.Model.AssignmentRule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignmentRule EXPECTED TYPE: AssignmentRule", null, null);
				}
				this.assignmentRule = assignmentRule;
				this.keyModified.set("assignment_rule", 1);

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
			 * The method to get the spamControl
			 * @returns {SpamControll} An instance of SpamControll
			 */
			getSpamControl()	{
				return this.spamControl;

			}

			/**
			 * The method to set the value to spamControl
			 * @param {SpamControll} spamControl An instance of SpamControll
			 */
			setSpamControl(spamControl)	{
				if((spamControl != null) && (!(spamControl instanceof ZCRM.Webform.Model.SpamControll))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: spamControl EXPECTED TYPE: SpamControll", null, null);
				}
				this.spamControl = spamControl;
				this.keyModified.set("spam_control", 1);

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
			 * The method to get the formFields
			 * @returns {List} An Array representing the formFields
			 */
			getFormFields()	{
				return this.formFields;

			}

			/**
			 * The method to set the value to formFields
			 * @param {List} formFields An Array
			 */
			setFormFields(formFields)	{
				if((formFields != null) && (!(Object.prototype.toString.call(formFields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formFields EXPECTED TYPE: Array", null, null);
				}
				this.formFields = formFields;
				this.keyModified.set("form_fields", 1);

			}

			/**
			 * The method to get the abtesting
			 * @returns {List} An Array representing the abtesting
			 */
			getAbtesting()	{
				return this.abtesting;

			}

			/**
			 * The method to set the value to abtesting
			 * @param {List} abtesting An Array
			 */
			setAbtesting(abtesting)	{
				if((abtesting != null) && (!(Object.prototype.toString.call(abtesting) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: abtesting EXPECTED TYPE: Array", null, null);
				}
				this.abtesting = abtesting;
				this.keyModified.set("abtesting", 1);

			}

			/**
			 * The method to get the visitorTracking
			 * @returns {String} A String representing the visitorTracking
			 */
			getVisitorTracking()	{
				return this.visitorTracking;

			}

			/**
			 * The method to set the value to visitorTracking
			 * @param {String} visitorTracking A String
			 */
			setVisitorTracking(visitorTracking)	{
				if((visitorTracking != null) && (!(Object.prototype.toString.call(visitorTracking) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visitorTracking EXPECTED TYPE: String", null, null);
				}
				this.visitorTracking = visitorTracking;
				this.keyModified.set("visitor_tracking", 1);

			}

			/**
			 * The method to get the lastSubmittedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getLastSubmittedTime()	{
				return this.lastSubmittedTime;

			}

			/**
			 * The method to set the value to lastSubmittedTime
			 * @param {OffsetDateTime} lastSubmittedTime An instance of OffsetDateTime
			 */
			setLastSubmittedTime(lastSubmittedTime)	{
				if((lastSubmittedTime != null) && (!(lastSubmittedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastSubmittedTime EXPECTED TYPE: Date", null, null);
				}
				this.lastSubmittedTime = lastSubmittedTime;
				this.keyModified.set("last_submitted_time", 1);

			}

			/**
			 * The method to get the actionOnSubmit
			 * @returns {String} A String representing the actionOnSubmit
			 */
			getActionOnSubmit()	{
				return this.actionOnSubmit;

			}

			/**
			 * The method to set the value to actionOnSubmit
			 * @param {String} actionOnSubmit A String
			 */
			setActionOnSubmit(actionOnSubmit)	{
				if((actionOnSubmit != null) && (!(Object.prototype.toString.call(actionOnSubmit) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionOnSubmit EXPECTED TYPE: String", null, null);
				}
				this.actionOnSubmit = actionOnSubmit;
				this.keyModified.set("action_on_submit", 1);

			}

			/**
			 * The method to get the actionValue
			 * @returns {String} A String representing the actionValue
			 */
			getActionValue()	{
				return this.actionValue;

			}

			/**
			 * The method to set the value to actionValue
			 * @param {String} actionValue A String
			 */
			setActionValue(actionValue)	{
				if((actionValue != null) && (!(Object.prototype.toString.call(actionValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionValue EXPECTED TYPE: String", null, null);
				}
				this.actionValue = actionValue;
				this.keyModified.set("action_value", 1);

			}

			/**
			 * The method to get the suggestion
			 * @returns {Suggestion} An instance of Suggestion
			 */
			getSuggestion()	{
				return this.suggestion;

			}

			/**
			 * The method to set the value to suggestion
			 * @param {Suggestion} suggestion An instance of Suggestion
			 */
			setSuggestion(suggestion)	{
				if((suggestion != null) && (!(suggestion instanceof ZCRM.Webform.Model.Suggestion))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: suggestion EXPECTED TYPE: Suggestion", null, null);
				}
				this.suggestion = suggestion;
				this.keyModified.set("suggestion", 1);

			}

			/**
			 * The method to get the embedCode
			 * @returns {String} A String representing the embedCode
			 */
			getEmbedCode()	{
				return this.embedCode;

			}

			/**
			 * The method to set the value to embedCode
			 * @param {String} embedCode A String
			 */
			setEmbedCode(embedCode)	{
				if((embedCode != null) && (!(Object.prototype.toString.call(embedCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: embedCode EXPECTED TYPE: String", null, null);
				}
				this.embedCode = embedCode;
				this.keyModified.set("embed_code", 1);

			}

			/**
			 * The method to get the codeFormats
			 * @returns {List} An Array representing the codeFormats
			 */
			getCodeFormats()	{
				return this.codeFormats;

			}

			/**
			 * The method to set the value to codeFormats
			 * @param {List} codeFormats An Array
			 */
			setCodeFormats(codeFormats)	{
				if((codeFormats != null) && (!(Object.prototype.toString.call(codeFormats) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: codeFormats EXPECTED TYPE: Array", null, null);
				}
				this.codeFormats = codeFormats;
				this.keyModified.set("code_formats", 1);

			}

			/**
			 * The method to get the sourceCode
			 * @returns {String} A String representing the sourceCode
			 */
			getSourceCode()	{
				return this.sourceCode;

			}

			/**
			 * The method to set the value to sourceCode
			 * @param {String} sourceCode A String
			 */
			setSourceCode(sourceCode)	{
				if((sourceCode != null) && (!(Object.prototype.toString.call(sourceCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sourceCode EXPECTED TYPE: String", null, null);
				}
				this.sourceCode = sourceCode;
				this.keyModified.set("source_code", 1);

			}

			/**
			 * The method to get the iframeCode
			 * @returns {String} A String representing the iframeCode
			 */
			getIframeCode()	{
				return this.iframeCode;

			}

			/**
			 * The method to set the value to iframeCode
			 * @param {String} iframeCode A String
			 */
			setIframeCode(iframeCode)	{
				if((iframeCode != null) && (!(Object.prototype.toString.call(iframeCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: iframeCode EXPECTED TYPE: String", null, null);
				}
				this.iframeCode = iframeCode;
				this.keyModified.set("iframe_code", 1);

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

		Abtesting : class{
			constructor(){

				this.module=null;
				this.name=null;
				this.id=null;
				this.status=null;
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
				if((module != null) && (!(module instanceof ZCRM.Webform.Model.Module))){
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

				this.webforms=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the webforms
			 * @returns {List} An Array representing the webforms
			 */
			getWebforms()	{
				return this.webforms;

			}

			/**
			 * The method to set the value to webforms
			 * @param {List} webforms An Array
			 */
			setWebforms(webforms)	{
				if((webforms != null) && (!(Object.prototype.toString.call(webforms) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webforms EXPECTED TYPE: Array", null, null);
				}
				this.webforms = webforms;
				this.keyModified.set("webforms", 1);

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

		Suggestion : class{
			constructor(){

				this.available=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the available
			 * @returns {Boolean} A Boolean representing the available
			 */
			getAvailable()	{
				return this.available;

			}

			/**
			 * The method to set the value to available
			 * @param {Boolean} available A Boolean
			 */
			setAvailable(available)	{
				if((available != null) && (!(Object.prototype.toString.call(available) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: available EXPECTED TYPE: Boolean", null, null);
				}
				this.available = available;
				this.keyModified.set("available", 1);

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

		Layout : class{
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

		AcknowledgeVisitors : class{
			constructor(){

				this.templateName=null;
				this.templateId=null;
				this.fromAddress=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the templateName
			 * @returns {String} A String representing the templateName
			 */
			getTemplateName()	{
				return this.templateName;

			}

			/**
			 * The method to set the value to templateName
			 * @param {String} templateName A String
			 */
			setTemplateName(templateName)	{
				if((templateName != null) && (!(Object.prototype.toString.call(templateName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: templateName EXPECTED TYPE: String", null, null);
				}
				this.templateName = templateName;
				this.keyModified.set("template_name", 1);

			}

			/**
			 * The method to get the templateId
			 * @returns {Long} A BigInt representing the templateId
			 */
			getTemplateId()	{
				return this.templateId;

			}

			/**
			 * The method to set the value to templateId
			 * @param {Long} templateId A BigInt
			 */
			setTemplateId(templateId)	{
				if((templateId != null) && (!(Object.prototype.toString.call(templateId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: templateId EXPECTED TYPE: BigInt", null, null);
				}
				this.templateId = templateId;
				this.keyModified.set("template_id", 1);

			}

			/**
			 * The method to get the fromAddress
			 * @returns {FromAddress} An instance of FromAddress
			 */
			getFromAddress()	{
				return this.fromAddress;

			}

			/**
			 * The method to set the value to fromAddress
			 * @param {FromAddress} fromAddress An instance of FromAddress
			 */
			setFromAddress(fromAddress)	{
				if((fromAddress != null) && (!(fromAddress instanceof ZCRM.Webform.Model.FromAddress))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: FromAddress", null, null);
				}
				this.fromAddress = fromAddress;
				this.keyModified.set("from_address", 1);

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

				this.id=null;
				this.moduleName=null;
				this.apiName=null;
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
			 * The method to get the moduleName
			 * @returns {String} A String representing the moduleName
			 */
			getModuleName()	{
				return this.moduleName;

			}

			/**
			 * The method to set the value to moduleName
			 * @param {String} moduleName A String
			 */
			setModuleName(moduleName)	{
				if((moduleName != null) && (!(Object.prototype.toString.call(moduleName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleName EXPECTED TYPE: String", null, null);
				}
				this.moduleName = moduleName;
				this.keyModified.set("module_name", 1);

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

		FormAttributes : class{
			constructor(){

				this.color=null;
				this.width=null;
				this.fontAttributes=null;
				this.align=null;
				this.displayFormName=null;
				this.keyModified=new Map();
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
			 * The method to get the width
			 * @returns {Integer} An Integer representing the width
			 */
			getWidth()	{
				return this.width;

			}

			/**
			 * The method to set the value to width
			 * @param {Integer} width An Integer
			 */
			setWidth(width)	{
				if((width != null) && (!(Object.prototype.toString.call(width) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: width EXPECTED TYPE: Integer", null, null);
				}
				this.width = width;
				this.keyModified.set("width", 1);

			}

			/**
			 * The method to get the fontAttributes
			 * @returns {FontAttributes} An instance of FontAttributes
			 */
			getFontAttributes()	{
				return this.fontAttributes;

			}

			/**
			 * The method to set the value to fontAttributes
			 * @param {FontAttributes} fontAttributes An instance of FontAttributes
			 */
			setFontAttributes(fontAttributes)	{
				if((fontAttributes != null) && (!(fontAttributes instanceof ZCRM.Webform.Model.FontAttributes))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontAttributes EXPECTED TYPE: FontAttributes", null, null);
				}
				this.fontAttributes = fontAttributes;
				this.keyModified.set("font_attributes", 1);

			}

			/**
			 * The method to get the align
			 * @returns {String} A String representing the align
			 */
			getAlign()	{
				return this.align;

			}

			/**
			 * The method to set the value to align
			 * @param {String} align A String
			 */
			setAlign(align)	{
				if((align != null) && (!(Object.prototype.toString.call(align) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: align EXPECTED TYPE: String", null, null);
				}
				this.align = align;
				this.keyModified.set("align", 1);

			}

			/**
			 * The method to get the displayFormName
			 * @returns {String} A String representing the displayFormName
			 */
			getDisplayFormName()	{
				return this.displayFormName;

			}

			/**
			 * The method to set the value to displayFormName
			 * @param {String} displayFormName A String
			 */
			setDisplayFormName(displayFormName)	{
				if((displayFormName != null) && (!(Object.prototype.toString.call(displayFormName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayFormName EXPECTED TYPE: String", null, null);
				}
				this.displayFormName = displayFormName;
				this.keyModified.set("display_form_name", 1);

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

		AcknowledgeVisitor : class{
			constructor(){

				this.autoResponseRule=null;
				this.templateId=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the autoResponseRule
			 * @returns {AutoResponseRule} An instance of AutoResponseRule
			 */
			getAutoResponseRule()	{
				return this.autoResponseRule;

			}

			/**
			 * The method to set the value to autoResponseRule
			 * @param {AutoResponseRule} autoResponseRule An instance of AutoResponseRule
			 */
			setAutoResponseRule(autoResponseRule)	{
				if((autoResponseRule != null) && (!(autoResponseRule instanceof ZCRM.Webform.Model.AutoResponseRule))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoResponseRule EXPECTED TYPE: AutoResponseRule", null, null);
				}
				this.autoResponseRule = autoResponseRule;
				this.keyModified.set("auto_response_rule", 1);

			}

			/**
			 * The method to get the templateId
			 * @returns {Long} A BigInt representing the templateId
			 */
			getTemplateId()	{
				return this.templateId;

			}

			/**
			 * The method to set the value to templateId
			 * @param {Long} templateId A BigInt
			 */
			setTemplateId(templateId)	{
				if((templateId != null) && (!(Object.prototype.toString.call(templateId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: templateId EXPECTED TYPE: BigInt", null, null);
				}
				this.templateId = templateId;
				this.keyModified.set("template_id", 1);

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
		 * Creates an instance of WebformsOperations with the given parameters
		 * @param {String} module A String
		 */
		constructor(module=null){
			if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
						this.module = module;

		}

		/**
		 * The method to get web forms
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWebForms(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "Webform.Model.GetWebFormsParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create web forms
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createWebForms(request){
			if((request != null) && (!(request instanceof ZCRM.Webform.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addParam(new Param("module", "Webform.Model.CreateWebFormsParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update web forms
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateWebForms(request){
			if((request != null) && (!(request instanceof ZCRM.Webform.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addParam(new Param("module", "Webform.Model.UpdateWebFormsParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get web form
		 * @param {Long} formId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWebForm(formId){
			if((!(Object.prototype.toString.call(formId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms/");
			apiPath = apiPath.concat(formId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "Webform.Model.GetWebFormParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update web form
		 * @param {Long} formId A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateWebForm(formId, request){
			if((!(Object.prototype.toString.call(formId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formId EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Webform.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms/");
			apiPath = apiPath.concat(formId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await handlerInstance.addParam(new Param("module", "Webform.Model.UpdateWebFormParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete web forms
		 * @param {Long} formId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteWebForms(formId){
			if((!(Object.prototype.toString.call(formId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms/");
			apiPath = apiPath.concat(formId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await handlerInstance.addParam(new Param("module", "Webform.Model.DeleteWebFormsParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get webforms preview
		 * @param {Long} formId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getWebformsPreview(formId){
			if((!(Object.prototype.toString.call(formId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v8/settings/webforms/");
			apiPath = apiPath.concat(formId.toString());
			apiPath = apiPath.concat("/actions/preview");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "Webform.Model.GetWebformsPreviewParam"), this.module);
			return handlerInstance.apiCall("Webform.Model.ResponseHandler", "application/json");

		}

	},

}