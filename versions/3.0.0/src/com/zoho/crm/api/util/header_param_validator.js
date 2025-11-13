/**
 * This class is to validate API headers and parameters.
 */
class HeaderParamValidator {
    async validate(name, className, value) {
        let typeDetail = null;
        if (classDetailMap.hasOwnProperty(className)) {
            typeDetail = await this.getKeyJSONDetails(name, classDetailMap[className]);
        }
        if (typeDetail != null) {
            if (!await this.checkDataType(typeDetail, value)) {
                let type = className != null && className.endsWith("param") ? "PARAMETER" : "HEADER";
                let detailsJO = {};
                detailsJO[type] = name;
                detailsJO[Constants.CLASS_KEY] = className;
                detailsJO[Constants.ACCEPTED_TYPE] = Constants.SPECIAL_TYPES.hasOwnProperty(typeDetail[Constants.TYPE]) ? Constants.SPECIAL_TYPES.get(typeDetail[Constants.TYPE]) : typeDetail[Constants.TYPE];
                throw new SDKException(Constants.TYPE_ERROR, null, detailsJO);
            }
            if(typeDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
                let converter = new JSONConverter(new CommonAPIHandler());
                let type = Object.prototype.toString.call(value);
                if (type == Constants.ARRAY_TYPE) {
                    let jsonArray = new Array();
                    for (let response of value) {
                        jsonArray.push(await converter.formRequest(response, typeDetail[Constants.STRUCTURE_NAME], 0, null));
                    }
                    return JSON.stringify(jsonArray);
                }
                return JSON.stringify(await converter.formRequest(value, typeDetail[Constants.STRUCTURE_NAME], 0, null));
            }
            else if(typeDetail.hasOwnProperty(Constants.TYPE) && typeDetail[Constants.TYPE].toLowerCase() == Constants.CHOICE_NAMESPACE.toLowerCase()) {
                await new Converter(new CommonAPIHandler()).checkChoiceValue1(Constants.CHOICE_NAMESPACE, typeDetail, value);
            }
            return await this.parseData(value);
        }
        className = Object.prototype.toString.call(value);
        if(value instanceof Map || Array.isArray(value)) {
            className = "object";
        }
        return await DataTypeConverter.postConvert(value, className);
    }

    async parseData(value) {
        if (Array.isArray(value)) {
            let jsonArray = new Array();
            if (value.length > 0) {
                for (let request of value) {
                    jsonArray.push(await this.parseData(request));
                }
            }
            return jsonArray;
        } 
        else if (value instanceof Map) {
            let jsonObject = {};
            for (let key of Array.from(value.keys())) {
                jsonObject[key] = await this.parseData(value.get(key)).catch((err) => { throw err; });
            }
            return jsonObject;
        }
        else if (value instanceof Choice)
        {
          return value.getValue();
        }
        else {
          return value;
        }
    }

    async getKeyJSONDetails(name, jsonDetails) {
        let keyArray = Array.from(Object.keys(jsonDetails));
        for (let index = 0; index < keyArray.length; index++) {
            const key = keyArray[index];
            let detail = await jsonDetails[key];
            if (detail.hasOwnProperty(Constants.NAME) && name.toLowerCase() === detail[Constants.NAME].toLowerCase()) {
                return detail;
            }
        }
        return {};
    }

    checkDataType(keyDetail, value) {
        let type = keyDetail[Constants.TYPE];
        let dataType = Constants.SPECIAL_TYPES.has(type) ? Constants.SPECIAL_TYPES.get(type) : type;
        if (dataType !== null && Constants.TYPE_VS_DATATYPE.has(dataType.toLowerCase())) {
            if (type === Constants.INTEGER_NAMESPACE) {
                return Utility.checkInteger(value);
            }
            if (Object.prototype.toString.call(value) !== Constants.TYPE_VS_DATATYPE.get(type.toLowerCase())) {
                return false;
            }
        }
        return true;
    }
}