Create a Click-Through Prototype
================================

This tutorial will show you how to extend your static wireframes into a series of prototype pages that allows users to click-through the system's flow.

What is a 'Click-Through' Prototype?
------------------------------------

Click-through prototypes are a series of static pages or wireframes that navigate to and from pages in your defined page flow. In typical web pages or applications, this is often seen with links or buttons with labels such as 'Next' and 'Previous'.

By stitching together the pages in your system flow, this will help to test product flows early in the design process. It also allows you to put together complicated flows without having to focus on interactivity. This in turn, helps project owners/decision makers to define project scope (Minimum Viable Product), helps developers to better understand the product, and helps end users realize and confirm the overall product flow.

Let's Do This
-------------

There are two methods for navigating between pages in your flow, hyperlinks and buttons, although links are typically used for navigation and buttons for actions. However, since most web applications use buttons for navigation, we'll look at how to create click-through flows with each.

**Using Hyperlinks**

Using links for click-through actions is straightforward, since links are the foundational aspect of the web.

Simply insert an `<a>` link tag for each type of page navigation you want to occur, such as:

`<a href="the-name-of-your-target-page.html">Next</a>`

Replace the `href` value with the name of the page you want to navigate to. That's it. The simplicity of the web.

**Using Buttons**

Setting up a button to navigate to another page takes a little more work, but the Genesys VS Code Extension contains the `gns-button` snippet that simplifies this.

In your HTML page, type `gns-button` and select the `Genesys: Button` entry. This will produce the following HTML:

&lt;button onclick="location.href='#';">Do Something&lt;/button>

Replace the `#` symbol with the name of the page you want to navigate to. That's it.

If you are using a framework (Bootstrap, Material, etc.) for your button, then insert the following code fragment into your `button` element, again replacing the `#` symbol with the name of the page you want to navigate to:

```
onclick="location.href='#';"
```
