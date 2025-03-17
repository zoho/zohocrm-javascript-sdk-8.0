class DeleteSharingRule{
	static async call() {
		let environment = DataCenter.US.PRODUCTION();
		let token = new OAuthBuilder()
			.clientId("1000.xxxx")
			.scope("ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL,ZohoCRM.templates.email.READ,ZohoCRM.templates.inventory.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.send_mail.all.CREATE,ZohoCRM.settings.wizards.READ,ZohoCRM.settings.pipeline.READ,ZohoSearch.securesearch.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.functions.execute.READ,ZohoCRM.functions.execute.CREATE,ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL,ZohoCRM.templates.email.READ,ZohoCRM.templates.inventory.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.send_mail.all.CREATE,ZohoCRM.settings.wizards.READ,ZohoCRM.settings.pipeline.READ,ZohoSearch.securesearch.READ,ZohoCRM.settings.pipeline.ALL,ZohoCRM.functions.execute.READ,ZohoCRM.functions.execute.CREATE,ZohoCRM.modules.Leads.READ,ZohoCRM.settings.scoring_rules.ALL,ZohoCRM.settings.users_unavailability.ALL,ZohoCRM.change_owner.CREATE,ZohoCRM.modules.entity_scores.READ,ZohoCRM.settings.map_dependency.READ,ZohoCRM.settings.map_dependency.CREATE,ZohoCRM.settings.map_dependency.UPDATE,ZohoCRM.settings.map_dependency.DELETE,ZohoCRM.change_owner.READ,ZohoCRM.mass_convert.leads.CREATE,ZohoCRM.mass_convert.leads.READ,ZohoCRM.mass_delete.Leads.READ,ZohoCRM.mass_delete.Leads.DELETE,ZohoCRM.settings.clientportal.ALL,ZohoCRM.bulk.backup.ALL,ZohoCRM.settings.fiscal_year.UPDATE,ZohoCRM.settings.fiscal_year.READ,ZohoCRM.modules.appointments_rescheduled_history.ALL,ZohoFiles.files.ALL,ZohoCRM.bulk.backup.ALL,ZohoCRM.digest.CREATE,ZohoCRM.features.READ,ZohoCRM.settings.webforms.ALL,ZohoCRM.settings.global_picklist.ALL,ZohoCRM.settings.unsubscribe.ALL,ZohoCRM.apis.READ,ZohoCRM.settings.audit_logs.CREATE,ZohoCRM.settings.audit_logs.READ,ZohoCRM.settings.duplicate_check_preference.ALL,ZohoCRM.settings.cadences.ALL,ZohoCRM.mass_convert.Quotes.READ,ZohoCRM.mass_convert.SalesOrders.READ,ZohoCRM.mass_convert.SalesOrders.CREATE,ZohoCRM.mass_convert.Quotes.CREATE,ZohoCRM.settings.recycle_bin.DELETE,ZohoCRM.settings.recycle_bin.READ,ZohoCRM.Zia.enrichment.ALL,ZohoCRM.settings.data_sharing.ALL,ZohoCRM.signals.ALL")
			.redirectURL("http://127.0.0.1:5500/redirect.html")
			.build();
		(await new InitializeBuilder())
			.environment(environment)
			.token(token)
			.initialize();
		await DeleteSharingRule.deleteSharingRule(BigInt("347772001"), "Leads");
	}
    static async deleteSharingRule(id, moduleAPIName) {
        const sharingRulesOperations = new ZCRM.SharingRule.Operations(moduleAPIName);
        const response = await sharingRulesOperations.deleteSharingRule(id);
        if (response != null) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZCRM.SharingRule.Model.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getSharingRules();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZCRM.SharingRule.Model.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status:", successResponse.getStatus().getValue());
                        console.log("Code:", successResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(successResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZCRM.SharingRule.Model.APIException) {
                        const exception = actionResponse;
                        console.log("Status:", exception.getStatus().getValue());
                        console.log("Code:", exception.getCode().getValue());
                        console.log("Details:");
                        Object.entries(exception.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", exception.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZCRM.SharingRule.Model.APIException) {
                const exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage().getValue());
            }
        }
    }
}