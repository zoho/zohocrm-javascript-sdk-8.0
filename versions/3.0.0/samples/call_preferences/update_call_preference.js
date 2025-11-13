class UpdateCallPreference{
    static async call() {
		let environment = DataCenter.US.PRODUCTION();
		let token = new OAuthBuilder()
			.clientId("1000.xxxxxxx")
			.scope("ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL,ZohoCRM.templates.email.READ,ZohoCRM.templates.inventory.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.send_mail.all.CREATE,ZohoCRM.settings.wizards.READ,ZohoCRM.settings.pipeline.READ,ZohoSearch.securesearch.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.functions.execute.READ,ZohoCRM.functions.execute.CREATE,ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL,ZohoCRM.templates.email.READ,ZohoCRM.templates.inventory.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.send_mail.all.CREATE,ZohoCRM.settings.wizards.READ,ZohoCRM.settings.pipeline.READ,ZohoSearch.securesearch.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.functions.execute.READ,ZohoCRM.functions.execute.CREATE")
			.redirectURL("http://127.0.0.1:5500/redirect.html")
			.build();
		(await new InitializeBuilder())
			.environment(environment)
			.token(token)
			.initialize();
		await UpdateCallPreference.updateCallPreference();
	}

    static async updateCallPreference()
    {
        let callPreferencesOperations = new ZCRM.CallPreference.Operations();
        let bodyWrapper = new ZCRM.CallPreference.Model.BodyWrapper();
        let callPreferences = new ZCRM.CallPreference.Model.CallPreferences();
        callPreferences.setShowFromNumber(true);
        callPreferences.setShowToNumber(true);
        await bodyWrapper.setCallPreferences(callPreferences);
        let response = await callPreferencesOperations.updateCallPreference(bodyWrapper);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZCRM.CallPreference.Model.ActionWrapper) {
                const actionResponse = actionHandler.getCallPreferences()
                if (actionResponse instanceof ZCRM.CallPreference.Model.SuccessResponse) {
                    const successResponse = actionResponse;
                    console.log("Status:", successResponse.getStatus().getValue());
                    console.log("Code:", successResponse.getCode().getValue());
                    console.log("Details:");
                    const details = successResponse.getDetails();
                    for (let [key, value] of details.entries()) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message:", successResponse.getMessage());
                } else if (actionResponse instanceof ZCRM.CallPreference.Model.APIException) {
                    const exception = actionResponse;
                    console.log("Status:", exception.getStatus().getValue());
                    console.log("Code:", exception.getCode().getValue());
                    console.log("Details:");
                    const details = exception.getDetails();
                    for (let [key, value] of details.entries()) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message:", exception.getMessage());
                }
            } else if (actionHandler instanceof ZCRM.CallPreference.Model.APIException) {
                const exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                const details = exception.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message:", exception.getMessage());
            }
        }
    }

}