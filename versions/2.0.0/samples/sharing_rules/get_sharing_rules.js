class GetSharingRules{
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
		await GetSharingRules.getSharingRules("Leads");
    }

    static async getSharingRules(moduleAPIName) {
        const sharingRulesOperations = new ZCRM.SharingRule.Operations(moduleAPIName);
        const paramInstance = new ParameterMap();
        await paramInstance.add(ZCRM.SharingRule.Model.GetSharingRulesParam.PAGE, 1);
        await paramInstance.add(ZCRM.SharingRule.Model.GetSharingRulesParam.PER_PAGE, 5);
        const response = await sharingRulesOperations.getSharingRules(paramInstance);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZCRM.SharingRule.Model.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const sharingRules = responseWrapper.getSharingRules();

                sharingRules.forEach(sharingRule => {
                    const module = sharingRule.getModule();
                    if (module) {
                        console.log("SharingRules Module APIName:", module.getAPIName());
                        console.log("SharingRules Module Name:", module.getName());
                        console.log("SharingRules Module Id:", module.getId());
                    }
                    console.log("SharingRules SuperiorsAllowed:", sharingRule.getSuperiorsAllowed());
                    console.log("SharingRules Type:", sharingRule.getType().getValue());

                    const sharedTo = sharingRule.getSharedTo();
                    if (sharedTo) {
                        const resource = sharedTo.getResource();
                        if (resource) {
                            console.log("SharingRules SharedTo Resource Name:", resource.getName());
                            console.log("SharingRules SharedTo Resource Id:", resource.getId());
                        }
                        console.log("SharingRules SharedTo Type:", sharedTo.getType());
                        console.log("SharingRules SharedTo Subordinates:", sharedTo.getSubordinates());
                    }
                    const sharedFrom = sharingRule.getSharedFrom();
                    if (sharedFrom) {
                        const resource = sharedFrom.getResource();
                        if (resource) {
                            console.log("SharingRules SharedFrom Resource Name:", resource.getName());
                            console.log("SharingRules SharedFrom Resource Id:", resource.getId());
                        }
                        console.log("SharingRules SharedFrom Type:", sharedFrom.getType());
                        console.log("SharingRules SharedFrom Subordinates:", sharedFrom.getSubordinates());
                    }

                    console.log("SharingRules PermissionType:", sharingRule.getPermissionType().getValue());
                    console.log("SharingRules Name:", sharingRule.getName());
                    console.log("SharingRules Id:", sharingRule.getId());
                    console.log("SharingRules Status:", sharingRule.getStatus().getValue());
                    console.log("SharingRules MatchLimitExceeded:", sharingRule.getMatchLimitExceeded());
                });
                const info = responseWrapper.getInfo();
                if (info) {
                    console.log("SharingRules Info PerPage:", info.getPerPage());
                    console.log("SharingRules Info Count:", info.getCount());
                    console.log("SharingRules Info Page:", info.getPage());
                    console.log("SharingRules Info MoreRecords:", info.getMoreRecords());
                }
            } else if (responseHandler instanceof ZCRM.SharingRule.Model.APIException) {
                const exception = responseHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage());
            }
        }
    }
}