ZCRM.IscSignature = {
	Model : {
		Signature : class{
			constructor(){

				this.iscSignature=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the iscSignature
			 * @returns {Object} An Object representing the iscSignature
			 */
			getIscSignature()	{
				return this.iscSignature;

			}

			/**
			 * The method to set the value to iscSignature
			 * @param {Object} iscSignature An Object
			 */
			setIscSignature(iscSignature)	{
				this.iscSignature = iscSignature;
				this.keyModified.set("isc_signature", 1);

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


}