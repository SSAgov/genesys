Using Master Page Components
============================
Genesys supports the ability to easily include Master Page Components in your prototypes.

You can define a Master Page Component and include it in your prototype page using our HTML Includes functionality.

For example, if you have a Navigational component that you want to insert on multiple pages, define that component in a separate HTML file. We'll use the name navigation.html here.

To include this Navigational component on one of your pages, follow this syntax:

`````
<div gns-include-html="navigation.html"></div>
`````
The contents of the navigation.html file will be inserted in place of the DIV element.

**Tip**: You may want to create a subdirectory in your project called <code>includes</code> that contains all of your reusable Master Page Components. That keeps your page components separate from your actual prototype pages.
