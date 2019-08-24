jQuery.sap.declare("demo.alp.ALPDemo.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
sap.ui.define(["sap/ui/generic/app/AppComponent"], function (AppComponent) {
	return AppComponent.extend("demo.alp.ALPDemo.Component", {
		metadata: {
			"manifest": "json"
		}
	});
});