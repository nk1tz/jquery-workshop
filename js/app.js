$(document).ready(function() {

    //Find annoucement divs
    var announcements = jQuery("div.announcement");

    //For every announcement, add button functionality
    announcements.each(function() {

        // Create the button two buttons
        var xButton = jQuery("<button class='xButton'>X</button>");
        var seeButton = jQuery("<button class='seeButton'>Click here to see announcement</button>");

        var currentDiv = jQuery(this);

        // Make click event handler on the newly generated button
        xButton.on('click', function() {

            // Hide the paragraphs in the Div who's button was just clicked!
            currentDiv.find("p").hide('slow');

            // Change button content
            jQuery(this).hide();
            seeButton.show();
        });

        // Make click event handler on the 'see announcement' button
        seeButton.on('click', function() {

            // UNHIDE the paragraphs in the Div who's button was just clicked!
            currentDiv.find("p").show('slow');

            // Change button content back to xButton
            jQuery(this).hide();
            xButton.show();
        });

        currentDiv.append(xButton);
        currentDiv.append(seeButton.hide());
    });

});