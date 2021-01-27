Using the Genesys Toolbar
=========================

This tutorial will show you how to use the Genesys Toolbar with your prototypes.

![Genesys Toolbar](screenshots/genesys-toolbar.png "Genesys Toolbar")

Let's go through each of the toolbar commands and options. Note that some toolbar commands may not be available on your prototype page, unless your page makes use of that Genesys feature. For example, if your page doesn't contain any notes, then the **Notes** button will not be shown.

Toolbar Toggle
-----------------------------

Press the \` (back quote) key while in the browser to toggle the toolbar on and off.

Language
--------

Displays the page in alternative languages, if the designer has provided differing languages. For more info on creating prototypes that include multiple language designs, see [Adding Multiple Languages](../05-Multi-Lingual-Prototyping/01-Adding-Multiple-Languages.md).

Hi-Fi/Lo-Fi
------------------

Toggles the page display between High-Fidelity (Hi-Fi) and Low-Fidelity (Lo-Fi).

Walkthru
--------

Activates the visual walk through (if any) that designers have built into the prototype. For more info on adding Walkthroughs to your prototype, see [Adding Notes & Walkthroughs](../08-Advanced-Topics/Creating-Prototype-Walkthroughs.md).

Notes
-----

Toggles the display of any designer notes or annotations. Each note is indicated with a yellow sticky indicator. Select the indicator to view the note. For more info on adding Notes to your prototype, see [Adding Notes & Walkthroughs](04-Adding-Notes-and-Walkthroughs.md).

Inspect
-------

Displays the Page Components Inspector for any design systems currently being used on the prototype page. The Inspector visually identifies each UI component used. Currently, only the UEF design system is supported.

View Objects & Properties
-------------------------

Displays the XRay tool which allows you to click on any page element and get detailed info regarding element info, id, classes, and sizes (margins, padding, borders).

Grid
----
Toggles the Grid Display, showing the underlying layout grid being used on the prototype page. Currently, on UEF-based grids are supported.

Ruler
-----

Displays an interactive ruler, which allows you to measure items on the page.

Resize
-------

Provide a quick way to display the page in a resized browser window, simulating popular device sizes (phones, tablets, etc.)

ANDI Accessibility Inspector
-----------------------------

Displays and analyzes the page for accessibility issues, using the Social Security Administration's ANDI tool.

Redact
------
Toggles the display of any user-entered data on the page with redaction (blurring).

Test
----
Activates automatic UI testing on the prototype page, including text entry, mouse clicks, touch gestures, and page scrolling.

Analytics
---------
Displays the Google Analytics data for the prototype.

Export
------
Exports any persistent data on input forms associated with the same `mv-app` value (on the `BODY` element) to a JSON file. This is useful for collecting and saving user data when testing prototypes.

Import
------
Imports a JSON data file (previously Exported) which automatically fills in your input forms. This is useful if you need to load user answers from a testing session into the prototype, or if you wish to automatically enter the same data again without re-typing it.

Clear
-----
Removes any persistent data that has been entered into the prototype.
