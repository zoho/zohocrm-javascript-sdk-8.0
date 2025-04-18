/**
 * The abstract class represents the properties of Zoho CRM Environment.
 */
var Environment = class {
    /**
     * Creates an instance of Environment with the given parameters.
     * @param {*} url A String containing the Zoho CRM API URL.
     * @param {*} accountsUrl A String containing the accounts URL.
     * @param {*} fileUploadUrl A String containing the file Upload URL.
    */
    constructor(url, accountsUrl, fileUploadUrl) {
        this.url = url;

        this.accountsUrl = accountsUrl;

        this.fileUploadUrl = fileUploadUrl;
    }

    /**
     * This method to get Zoho CRM API URL.
     * @returns {String} A String representing the Zoho CRM API URL.
     */
    getUrl() {
        return this.url;
    }

    /**
     * This method to get Zoho CRM Accounts URL.
     * @returns {String} A String representing the accounts URL.
     */
    getAccountsUrl() {
        return this.accountsUrl;
    }

    /**
     * This method to get Zoho CRM File Upload URL.
     * @returns {String} A String representing the File Upload URL.
     */
    getFileUploadUrl() {
        return this.fileUploadUrl;
    }
}

/**
 * The abstract class represents the properties of Zoho CRM DataCenter.
 */
var DataCenter = {
    /**
     * This class represents the properties of Zoho CRM in AU Domain.
     */
    AU: {
        /**
         * This Environment class instance represents the Zoho CRM Production Environment in AU Domain.
         */
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.com.au", DataCenter.AU.getIAMUrl(), DataCenter.AU.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Sandbox Environment in AU Domain.
         */
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.com.au", DataCenter.AU.getIAMUrl(), DataCenter.AU.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Developer Environment in AU Domain.
         */
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.com.au", DataCenter.AU.getIAMUrl(), DataCenter.AU.getFileUploadUrl());
        },

        /**
         * This method to get accounts URL. URL to be used when calling an OAuth accounts.
         * @returns {String} A String representing the accounts URL.
         */
        getIAMUrl() {
            return "https://accounts.zoho.com.au/oauth/v2/auth";
        },

        /**
         * The method to get File Upload URL.
         * @returns {String} A String representing the accounts URL.
         */
        getFileUploadUrl() {
            return "https://content.zohoapis.com.au";
        }
    },

    /**
     * This class represents the properties of Zoho CRM in CN Domain.
     */
    CN: {
        /**
         * This Environment class instance represents the Zoho CRM Production Environment in CN Domain.
         */
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.com.cn", DataCenter.CN.getIAMUrl(), DataCenter.CN.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Sandbox Environment in CN Domain.
         */
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.com.cn", DataCenter.CN.getIAMUrl(), DataCenter.CN.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Developer Environment in CN Domain.
         */
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.com.cn", DataCenter.CN.getIAMUrl(), DataCenter.CN.getFileUploadUrl());
        },

        /**
         * This method to get accounts URL. URL to be used when calling an OAuth accounts.
         * @returns {String} A String representing the accounts URL.
         */
        getIAMUrl() {
            return "https://accounts.zoho.com.cn/oauth/v2/auth";
        },

        /**
         * The method to get File Upload URL.
         * @returns {String} A String representing the accounts URL.
         */
        getFileUploadUrl() {
            return "https://content.zohoapis.com.cn";
        }
    },

    /**
     * This class represents the properties of Zoho CRM in EU Domain.
     */
    EU: {
        /**
         * This Environment class instance represents the Zoho CRM Production Environment in EU Domain.
         */
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.eu", DataCenter.EU.getIAMUrl(), DataCenter.EU.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Sandbox Environment in EU Domain.
         */
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.eu", DataCenter.EU.getIAMUrl(), DataCenter.EU.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Developer Environment in EU Domain.
         */
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.eu", DataCenter.EU.getIAMUrl(), DataCenter.EU.getFileUploadUrl());
        },

        /**
         * This method to get accounts URL. URL to be used when calling an OAuth accounts.
         * @returns {String} A String representing the accounts URL.
         */
        getIAMUrl() {
            return "https://accounts.zoho.eu/oauth/v2/auth";
        },

        /**
         * The method to get File Upload URL.
         * @returns {String} A String representing the accounts URL.
         */
        getFileUploadUrl() {
            return "https://content.zohoapis.eu";
        }
    },

    /**
     * This class represents the properties of Zoho CRM in IN Domain.
     */
    IN: {
        /**
         * This Environment class instance represents the Zoho CRM Production Environment in IN Domain.
         */
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.in", DataCenter.IN.getIAMUrl(), DataCenter.IN.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Sandbox Environment in IN Domain.
         */
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.in", DataCenter.IN.getIAMUrl(), DataCenter.IN.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Developer Environment in IN Domain.
         */
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.in", DataCenter.IN.getIAMUrl(), DataCenter.IN.getFileUploadUrl());
        },

        /**
         * This method to get accounts URL. URL to be used when calling an OAuth accounts.
         * @returns {String} A String representing the accounts URL.
         */
        getIAMUrl() {
            return "https://accounts.zoho.in/oauth/v2/auth";
        },

        /**
         * The method to get File Upload URL.
         * @returns {String} A String representing the accounts URL.
         */
        getFileUploadUrl() {
            return "https://content.zohoapis.in";
        }
    },

    /**
     * This class represents the properties of Zoho CRM in US Domain.
     */
    US: {
        /**
         * This Environment class instance represents the Zoho CRM Production Environment in US Domain.
         */
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.com", DataCenter.US.getIAMUrl(), DataCenter.US.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Sandbox Environment in US Domain.
         */
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.com", DataCenter.US.getIAMUrl(), DataCenter.US.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Developer Environment in US Domain.
         */
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.com", DataCenter.US.getIAMUrl(), DataCenter.US.getFileUploadUrl());
        },

        /**
         * This method to get accounts URL. URL to be used when calling an OAuth accounts.
         * @returns {String} A String representing the accounts URL.
         */
        getIAMUrl() {
            return "https://accounts.zoho.com/oauth/v2/auth";
        },

        /**
         * The method to get File Upload URL.
         * @returns {String} A String representing the accounts URL.
         */
        getFileUploadUrl() {
            return "https://content.zohoapis.com";
        }
    },

    /**
     * This class represents the properties of Zoho CRM in Japan Domain.
     */
    JP: {
        /**
         * This Environment class instance represents the Zoho CRM Production Environment in Japan Domain.
         */
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.jp", DataCenter.JP.getIAMUrl(), DataCenter.JP.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Sandbox Environment in Japan Domain.
         */
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.jp", DataCenter.JP.getIAMUrl(), DataCenter.JP.getFileUploadUrl());
        },

        /**
         * This Environment class instance represents the Zoho CRM Developer Environment in Japan Domain.
         */
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.jp", DataCenter.JP.getIAMUrl(), DataCenter.JP.getFileUploadUrl());
        },

        /**
         * This method to get accounts URL. URL to be used when calling an OAuth accounts.
         * @returns {String} A String representing the accounts URL.
         */
        getIAMUrl() {
            return "https://accounts.zoho.jp/oauth/v2/auth";
        },

        /**
         * The method to get File Upload URL.
         * @returns {String} A String representing the accounts URL.
         */
        getFileUploadUrl() {
            return "https://content.zohoapis.jp";
        }
    },

    CA: {
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.ca", DataCenter.CA.getIAMUrl(), DataCenter.CA.getFileUploadUrl());
        },
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.ca", DataCenter.CA.getIAMUrl(), DataCenter.CA.getFileUploadUrl());
        },
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.ca", DataCenter.CA.getIAMUrl(), DataCenter.CA.getFileUploadUrl());
        },
        getIAMUrl() {
            return "https://accounts.zohocloud.ca/oauth/v2/auth";
        },
        getFileUploadUrl() {
            return "https://upload.zohocloud.ca";
        }
    },

    SA: {
        PRODUCTION: function () {
            return new Environment("https://www.zohoapis.sa", DataCenter.SA.getIAMUrl(), DataCenter.CA.getFileUploadUrl());
        },
        SANDBOX: function () {
            return new Environment("https://sandbox.zohoapis.sa", DataCenter.JP.getIAMUrl(), DataCenter.JP.getFileUploadUrl());
        },
        DEVELOPER: function () {
            return new Environment("https://developer.zohoapis.sa", DataCenter.JP.getIAMUrl(), DataCenter.JP.getFileUploadUrl());
        },
        getIAMUrl() {
            return "https://accounts.zoho.sa/oauth/v2/auth";
        },
        getFileUploadUrl() {
            return "https://files.zoho.sa";
        }
    },

    get : function(config) {
        if (Constants.US_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.US.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.US.DEVELOPER();
            }
            return DataCenter.US.PRODUCTION();
        }
        else if (Constants.JP_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.JP.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.JP.DEVELOPER();
            }
            return DataCenter.JP.PRODUCTION();
        }
        else if (Constants.IN_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.IN.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)){
                return DataCenter.IN.DEVELOPER();
            }
            return DataCenter.IN.PRODUCTION();
        }
        else if (Constants.EU_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.EU.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.EU.DEVELOPER();
            }
            return DataCenter.EU.PRODUCTION();
        }
        else if (Constants.CN_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.CN.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.CN.DEVELOPER();
            }
            return DataCenter.CN.PRODUCTION();
        }
        else if (Constants.AU_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.AU.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.AU.DEVELOPER();
            }
            return DataCenter.AU.PRODUCTION();
        }
        else if (Constants.CA_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.CA.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.CA.DEVELOPER();
            }
            return DataCenter.CA.PRODUCTION();
        }
        else if (Constants.SA_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return DataCenter.SA.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return DataCenter.SA.DEVELOPER();
            }
            return DataCenter.SA.PRODUCTION();
        }
        return null;
    }
}