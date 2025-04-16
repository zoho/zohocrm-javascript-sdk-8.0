class CreateRecords {
	static async call() {
		let environment = DataCenter.US.PRODUCTION();
		let token = new OAuthBuilder()
				.clientId("ClientID")
				.scope("ZohoCRM.modules.ALL,ZohoCRM.settings.ALL")
				.redirectURL("http://127.0.0.1:5500/redirect.html")
			  	.build();
		(await new InitializeBuilder())
			.environment(environment)
			.token(token)
			.initialize();
		await CreateRecords.createRecords("Leads");
	}

	static async createRecords(moduleAPIName) {
		let recordOperations = new ZCRM.Record.Operations(moduleAPIName);
		let request = new ZCRM.Record.Model.BodyWrapper();
		let recordsArray = [];
		let record = new ZCRM.Record.Model.Record();
		record.addFieldValue(ZCRM.Record.Model.Field.Leads.LAST_NAME, "JS SDK");
		record.addFieldValue(ZCRM.Record.Model.Field.Leads.FIRST_NAME, "JS");
		record.addFieldValue(ZCRM.Record.Model.Field.Leads.COMPANY, "ZCRM");
		record.addFieldValue(ZCRM.Record.Model.Field.Leads.CITY, "City");
		record.addKeyValue("Custom_field", "Value");
		record.addKeyValue("Custom_field_2", "value");
		record.addKeyValue("Date_1", new Date(2020, 10, 20));
		//Used when GDPR is enabled
		let dataConsent = new ZCRM.Record.Model.Consent();
		dataConsent.setConsentRemarks("Approved.");
		dataConsent.setConsentThrough("Email");
		dataConsent.setContactThroughEmail(true);
		dataConsent.setContactThroughSocial(false);
		record.addKeyValue("Data_Processing_Basis_Details", dataConsent);
		let tagsArray = [];
		let tag = new ZCRM.Tag.Model.Tag();
		tag.setName("Testtask");
		tagsArray.push(tag);
		record.setTag(tagsArray);
		recordsArray.push(record);
		request.setData(recordsArray);
		let trigger = [];
		trigger.push("approval");
		trigger.push("workflow");
		trigger.push("blueprint");
		request.setTrigger(trigger);
		let process = ["review_process"];
		request.setProcess(process);
		let headerInstance = new HeaderMap();
		let response = await recordOperations.createRecords(request, headerInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZCRM.Record.Model.ActionWrapper) {
					let actionResponses = responseObject.getData();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZCRM.Record.Model.SuccessResponse) {
							console.log("Status: " + actionResponse.getStatus().getValue());
							console.log("Code: " + actionResponse.getCode().getValue());
							console.log("Details");
							let details = actionResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
						else if (actionResponse instanceof ZCRM.Record.Model.APIException) {
							console.log("Status: " + actionResponse.getStatus().getValue());
							console.log("Code: " + actionResponse.getCode().getValue());
							console.log("Details");
							let details = actionResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
					});
				}
				else if (responseObject instanceof ZCRM.Record.Model.APIException) {
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
		}
	}
}