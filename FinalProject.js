
var date1 = new Date('December 17, 1995 03:24:00');


var date2 = new Date();



document.getElementById("nowdate").innerHTML = date2;


require([
    "dijit/form/Button",
    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
], function(Button, TabContainer, ContentPane){
    var tc = new TabContainer({
            style: {
                height: "200px",
                width: "400px"
            },
            id: "tc"
        }),
        atab = new ContentPane({
            title: "A Tab",
            closable: false,
            id: "atab"
        }),
        myButton = new Button({
            label: "Click Me!",
            id: "myButton"
        });
    atab.addChild(myButton);
    tc.addChild(atab);
    tc.startup();
});
