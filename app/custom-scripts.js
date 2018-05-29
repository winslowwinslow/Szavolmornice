define(["dojo/topic"], function(topic) {
	/*
	* Custom Javascript to be executed while the application is initializing goes here
	*/

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		// Viewport Width
var viewportWidth = $(window).width();
// Custom Legend
var customLegendBtn = $('#customLegendBtn');

// Custom Legend - If screen width is above breakpoint, display legend button
if (viewportWidth > 768) {
   customLegendBtn.show();
} else {
   $('#mobileThemeList .mobileTitleThemes').click(function() {
      customLegendBtn.show(); // show legend button once map is visible below breakpoint
   });
}        
        
// Custom Legend - add display/hide functionality to Legend button
customLegendBtn.click(function () {
   $('#customLegend').toggle(); // hide/show legend when legend button clicked
}); 
	});

	// Tab navigation.  This is fired anytime the tab is selected/changed.
	topic.subscribe("story-tab-navigation", function(index){
		/*
		* Custom Javascript to be executed when a tab is selected goes here
		*/
	});
});
