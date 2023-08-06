"use strict";
$(document).ready( () =>

// Defining accodion ....
    $("#faqs").accordion({

    // When user clicks the corresponding div is opened...
    event: "click",

    // Adjusting Height as per content... 
    heightStyle: "content",

    // Making collapsible true...
    collapsible: true
})
);