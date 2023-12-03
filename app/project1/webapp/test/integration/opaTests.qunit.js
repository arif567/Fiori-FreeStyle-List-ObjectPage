sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'db/project1/test/integration/FirstJourney',
		'db/project1/test/integration/pages/StudentMain'
    ],
    function(JourneyRunner, opaJourney, StudentMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('db/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentMain: StudentMain
                }
            },
            opaJourney.run
        );
    }
);