class GetRelatedLists {
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
		await GetRelatedLists.getRelatedLists("Leads");
	}

	static async getRelatedLists(moduleAPIName) {
		var relatedListArray = [];
		let paramInstance = new ParameterMap();
		await paramInstance.add(ZCRM.RelatedList.Model.GetRelatedListsParam.MODULE, moduleAPIName);
		var response = await new ZCRM.RelatedList.Operations().getRelatedLists(paramInstance).catch((err) => { throw err; });
		if (response != null) {
			if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {
				return relatedListArray;
			}
			let responseObject = await response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZCRM.RelatedList.Model.ResponseWrapper) {
					let relatedLists = await responseObject.getRelatedLists();
					relatedLists.forEach(relatedList => {
						console.log("RelatedList SequenceNumber: " + relatedList.getSequenceNumber());
						console.log("RelatedList DisplayLabel: " + relatedList.getDisplayLabel());
						console.log("RelatedList APIName: " + relatedList.getAPIName());
						console.log("RelatedList Module: " + relatedList.getModule());
						console.log("RelatedList Name: " + relatedList.getName());
						console.log("RelatedList Action: " + relatedList.getAction());
						console.log("RelatedList ID: " + relatedList.getId());
						console.log("RelatedList Href: " + relatedList.getHref());
						console.log("RelatedList Type: " + relatedList.getType());
						console.log("RelatedList Connectedmodule: " + relatedList.getConnectedmodule());
						console.log("RelatedList Linkingmodule: " + relatedList.getLinkingmodule());
					});
				}
				else if (responseObject instanceof ZCRM.RelatedList.Model.APIException) {
					console.log("Status: " + responseObject.getStatus().getValue());
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
			}
			else {
				console.log("Status Code: " + response.getStatusCode());
			}
		}
	}
}