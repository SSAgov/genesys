Using Master Page Components
============================
Genesys supports the ability to easily include Master Page Components in your prototypes.

You can define a Master Page Component and include it in your prototype page using our HTML Includes functionality.

To get started with this, first you'll need to insert the following code in your page's HEAD section:

`````
<script type="module" src="https://unpkg.com/html-include-element"></script>
`````

Now, you are ready to include a resuable, master page component anywhere on your page.

For example, if you have a Navigational component that you want to insert on multiple pages, define that component in a separate HTML file. We'll use the name `navigation.html` here.

To include this Navigational component on one of your pages, follow this syntax:

`````
<html-include src="navigation.html"></htmml-include>
`````
The contents of the navigation.html file will be inserted in place of the DIV element.

To speed this up and save typing, you can just use our Genesys snippet `gns-include`.

**Tip**: You may want to create a subdirectory in your project called <code>includes</code> that contains all of your reusable Master Page Components. That keeps your page components separate from your actual prototype pages.
