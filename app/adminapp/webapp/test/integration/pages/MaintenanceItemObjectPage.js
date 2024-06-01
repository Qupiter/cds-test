sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'dip.test.ui.adminapp',
            componentId: 'MaintenanceItemObjectPage',
            contextPath: '/MaintenanceItem'
        },
        CustomPageDefinitions
    );
});