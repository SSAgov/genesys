$.fn.postitall.globals = {
    prefix          : '#PIApostit_',//Id note prefixe
    filter          : 'domain',     //Options: domain, page, all
    savable         : false,        //Save postit in storage
    randomColor     : false,        //Random color in new postits
    toolbar         : true,         //Show or hide toolbar
    autoHideToolBar : true,         //Animation effect on hover over postit showing/hiding toolbar options
    removable       : true,         //Set removable feature on or off
    askOnDelete     : true,         //Confirmation before note removal
    draggable       : true,         //Set draggable feature on or off
    resizable       : true,         //Set resizable feature on or off
    editable        : true,         //Set contenteditable and enable changing note content
    changeoptions   : false,        //Set options feature on or off
    blocked         : true,         //Postit can not be modified
    minimized       : true,         //true = minimized, false = maximixed
    expand          : true,         //Expand note
    fixed           : true,         //Allow to fix the note in page
    addNew          : true,         //Create a new postit
    showInfo        : false,        //Show info icon
    pasteHtml       : true,         //Allow paste html in contenteditor
    htmlEditor      : true,         //Html editor (trumbowyg)
    autoPosition    : true,         //Automatic reposition of the notes when user resizes the screen
    addArrow        : 'back'        //Add an arrow to notes : none, front, back, all
};

$.fn.postitall.defaults = {
    //Note properties
    id              : "",                       //Note id
    created         : Date.now(),               //Creation date
    domain          : window.location.origin,   //Domain in the url
    page            : window.location.pathname, //Page in the url
    osname          : navigator.appVersion,     //Browser informtion & OS name
    content         : '',                       //Content of the note (text or html)
    position        : 'absolute',               //Position absolute or fixed
    posX            : '10px',                   //x coordinate (from left)
    posY            : '10px',                   //y coordinate (from top)
    right           : '',                       //x coordinate (from right). This property invalidate posX
    height          : 200,                      //Note total height
    width           : 160,                      //Note total width
    minHeight       : 210,                      //Note resizable min-width
    minWidth        : 170,                      //Note resizable min-height
    oldPosition     : {},                       //Position when minimized/collapsed (internal use)
    //Config note style
    style : {
        tresd           : true,                 //General style in 3d format
        backgroundcolor : '#FFFA3C',            //Background color in new postits when randomColor = false
        textcolor       : '#000   ',            //Text color
        textshadow      : false,                //Shadow in the text
        fontfamily      : 'verdana',            //Default font
        fontsize        : 'small',              //Default font size
        arrow           : 'none',               //Default arrow : none, top, right, bottom, left
    },
    //Enable / Disable features
    features : $.fn.postitall.globals,          //By default, copy of global defaults
    //Note flags
    flags : {
        blocked         : false,                //If true, the note cannot be edited
        minimized       : true,                //true = Collapsed note / false = maximixed
        expand          : false,                //true = Expanded note / false = normal
        fixed           : false,                //Set position fixed
        highlight       : false,                //Higlight note
    },
    //Attach the note to al html element
    attachedTo : {
        element         : '',                   //Where to attach
        position        : 'right',              //Position relative to elemente : top, right, bottom or left
        fixed           : true,                 //Fix note to element when resize screen
        arrow           : true,                 //Show an arrow in the inverse position
    },
    // Callbacks / Event Handlers
    onCreated: function(id, options, obj) { return undefined; },    //Triggered after note creation
    onChange: function (id) { return undefined; },                  //Triggered on each change
    onSelect: function (id) { return undefined; },                  //Triggered when note is clicked, dragged or resized
    onDblClick: function (id) { return undefined; },                //Triggered on double click
    onRelease: function (id) { return undefined; },                 //Triggered on the end of dragging and resizing of a note
    onDelete: function (id) { return undefined; }                   //Triggered when a note is deleted
};