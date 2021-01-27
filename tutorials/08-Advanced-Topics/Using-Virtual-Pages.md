Using Virtual Pages
===================

Someetimes it may be advantageous to construct your prototypes within a single HTML file. This can be useful for showing multiple iterations of a single page design or for simulating a web application.

Genesys include support for Virtual Pages, which can help you accomplish this.

To create a prototype with virtual pages
----------------------------------------

1. Use one of the built-in Genesys page templates (type `!!` to see them) or start a new HTML document by typing <code>html:5</code> and pressing Tab.
2. In the <code>BODY</code>, type <code>gns-virtual-page</code> to add a new Virtual Page.
3. Type a unique ID value, which will be used to navigate between your virtual pages.
4. Use link, tab, or button elements (either plain HTML or those in your design system) to connect to your virtual pages.
