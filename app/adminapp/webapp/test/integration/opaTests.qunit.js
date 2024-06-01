sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dip/test/ui/adminapp/test/integration/FirstJourney',
		'dip/test/ui/adminapp/test/integration/pages/MaintenanceItemList',
		'dip/test/ui/adminapp/test/integration/pages/MaintenanceItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, MaintenanceItemList, MaintenanceItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dip/test/ui/adminapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMaintenanceItemList: MaintenanceItemList,
					onTheMaintenanceItemObjectPage: MaintenanceItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);