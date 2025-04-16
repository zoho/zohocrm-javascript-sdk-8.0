class ExecuteFunctionUsingParameters {
    static async call() {
		let environment = DataCenter.US.PRODUCTION();
		let token = new OAuthBuilder()
			.clientId("1000.xxxxx")
			.scope("ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL,ZohoCRM.templates.email.READ,ZohoCRM.templates.inventory.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.send_mail.all.CREATE,ZohoCRM.settings.wizards.READ,ZohoCRM.settings.pipeline.READ,ZohoSearch.securesearch.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.functions.execute.READ,ZohoCRM.functions.execute.CREATE,ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL,ZohoCRM.templates.email.READ,ZohoCRM.templates.inventory.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.send_mail.all.CREATE,ZohoCRM.settings.wizards.READ,ZohoCRM.settings.pipeline.READ,ZohoSearch.securesearch.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.functions.execute.READ,ZohoCRM.functions.execute.CREATE,ZohoCRM.modules.Leads.READ,ZohoCRM.settings.scoring_rules.ALL,ZohoCRM.settings.users_unavailability.ALL,ZohoCRM.change_owner.CREATE,ZohoCRM.modules.entity_scores.READ,ZohoCRM.settings.map_dependency.READ,ZohoCRM.settings.map_dependency.CREATE,ZohoCRM.settings.map_dependency.UPDATE,ZohoCRM.settings.map_dependency.DELETE,ZohoCRM.change_owner.READ,ZohoCRM.mass_convert.leads.CREATE,ZohoCRM.mass_convert.leads.READ,ZohoCRM.mass_delete.Leads.READ,ZohoCRM.mass_delete.Leads.DELETE,ZohoCRM.settings.clientportal.ALL,ZohoCRM.bulk.backup.ALL,ZohoCRM.settings.fiscal_year.UPDATE,ZohoCRM.settings.fiscal_year.READ,ZohoCRM.modules.appointments_rescheduled_history.ALL,ZohoFiles.files.ALL,ZohoCRM.bulk.backup.ALL,ZohoCRM.digest.CREATE,ZohoCRM.features.READ,ZohoCRM.settings.webforms.ALL,ZohoCRM.settings.global_picklist.ALL,ZohoCRM.settings.unsubscribe.ALL,ZohoCRM.apis.READ,ZohoCRM.settings.audit_logs.CREATE,ZohoCRM.settings.audit_logs.READ,ZohoCRM.settings.duplicate_check_preference.ALL,ZohoCRM.settings.cadences.ALL,ZohoCRM.mass_convert.Quotes.READ,ZohoCRM.mass_convert.SalesOrders.READ,ZohoCRM.mass_convert.SalesOrders.CREATE,ZohoCRM.mass_convert.Quotes.CREATE,ZohoCRM.settings.recycle_bin.DELETE,ZohoCRM.settings.recycle_bin.READ,ZohoCRM.Zia.enrichment.ALL,ZohoCRM.settings.data_sharing.ALL,ZohoCRM.signals.ALL")
			.redirectURL("http://127.0.0.1:5500/redirect.html")
			.build();
		(await new InitializeBuilder())
			.environment(environment)
			.token(token)
			.initialize();

		await ExecuteFunctionUsingParameters.executeFunctionUsingParameters();
	}

    static async executeFunctionUsingParameters() {
        let functionName = "get_record_lead";
        let authType = "oauth";
        let param = new Map();
        param.set("1221", "2111221");
        param.set("15221", "21113221");
        param.set("12421", "211341221");

        let arg = new Map();
        arg.set("12223322", "iuubnf");

        let arguments1 = new Map();
        arguments1.set("Zoho", arg);

        let functionOperations = new ZCRM.Function.Operations(functionName, authType, arguments1);

        let paramInstance = new ParameterMap();

        await paramInstance.add(new Param("JS", "[object Map]"), param); 

        let response = await functionOperations.executeFunctionUsingParameters(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            
            if (responseObject != null) {
                if (responseObject instanceof ZCRM.Function.Model.SuccessResponse) {
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                else if (responseObject instanceof ZCRM.Function.Model.APIException) {
                    if (responseObject.getCode() != null) {
                        console.log("Code: " + responseObject.getCode().getValue());
                    }
                    console.log("Details");
                    if (responseObject.getDetails() != null) {
                        let details = responseObject.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}