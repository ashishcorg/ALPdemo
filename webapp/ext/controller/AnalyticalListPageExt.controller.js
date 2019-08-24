sap.ui.controller("demo.alp.ALPDemo.ext.controller.AnalyticalListPageExt", {



	onBeforeRebindVisualFilterExtension: function (sEntityType, sDimension, sMeasure, oContext) {
		switch (sDimension) {
		case "Product":
			oContext.groupId = "Group1";
			break;
		case "Currency":
			oContext.groupId = "Group3";
			break;
		case "Product1":
			oContext.groupId = "Group2";
			break;
		default:
			oContext.groupId = "default";
		}
	},
	onInitSmartFilterBarExtension: function (oEvent) {
		var oSmartFilterBar = oEvent.getSource();
		oSmartFilterBar.getControlByKey("pricerange").attachSelectionChange(function (oChangeEvent) {
			alert(oChangeEvent.getParameter("selectedItem").getText() + " selected");
		}, this);
	},
	onClickActionSEPMRA_C_PD_ProductSalesData1: function (oEvent) {
		alert("SEPMRA_C_PD_ProductSalesData1 is clicked");
	},
	onClickActionSEPMRA_C_PD_ProductSalesData2: function (oEvent) {
		alert("SEPMRA_C_PD_ProductSalesData2 is clicked");
	},
	onClickActionSEPMRA_C_PD_ProductSalesData3: function (oEvent) {
		alert("SEPMRA_C_PD_ProductSalesData3 is clicked");
	},
	/*
	 * Content of the custom field shall be stored in the app state, so that it can be restored later again e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	getCustomAppStateDataExtension: function (oCustomAppData) {

		var oCustomField1 = this.oView.byId("customFilterComboBox");
		if (oCustomField1) {
			oCustomAppData.SampleFilterFieldID = oCustomField1.getValue();
		}
		return oCustomAppData;

	},
	/*
	 * In order to restore content of the custom field in the filterbar e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	restoreCustomAppStateDataExtension: function (oCustomAppData) {

		if (oCustomAppData.SampleFilterFieldID !== undefined) {
			if (this.oView.byId("customFilterComboBox")) {
				this.oView.byId("SampleFilterFieldID").setSelectedKey(oCustomAppData.SampleFilterFieldID);
			}
		}

	},

	onBeforeRebindChartExtension: function (oEvent) {
		alert("onBeforeRebindChartExtension called!");
	},
	onBeforeRebindTableExtension: function (oEvent) {
		alert("onBeforeRebindTableExtension called!");
	},
	onBeforeRebindFilterableKPIExtension: function (oSelectionVariant, sEntityType, sKPIId) {
		if (sKPIId ===
			"demo.alp.ALPDemo::sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage::SEPMRA_C_PD_ProductSalesData--template::KPITag::kpi::KPIRevenue1"
		) {
			oSelectionVariant.addSelectOption("Item", "I", "EQ", "item 1", null);
		}
	},
	onClearFilterExtension: function (oEvent) {
		if (this.byId("customFilterComboBox")) {
			this.byId("customFilterComboBox").setSelectedKey(null);
		}
	}
});