Creating Prototype Walkthroughs
===============================

This tutorial will help you create a step-by-step walkthrough for your prototype.  End users will be able to click through each area of your prototype and see comments or notes.  It's a great way to allow users to move through the prototype on their own if you are unavailable or even as a way to share notes on a page across a team.  Let's get started.

In order to tell the page which elements you want to highlight in your walkthrough, you need to add some attributes to those elements:

1. `data-step` Tells the page which step of the walkthrough you are on, so you would start with `data-step="1"` and increment from there.
2. `data-intro` This is your explanation text for the walkthrough step.

Example
-------

So putting all of this together, let's attach a walkthrough step and note on a `h1` element as an example:

```
<h1 data-step="1"
    data-intro="This panel displays information about the Project that was selected from the Project dropdown menu.">Project
</h1>
```

In the above example, you have an `h1` tag followed by the `data-step` attribute which is listed as 1.  This means that the `h1` element will be the first step of the walkthrough.  The `data-intro` attribute includes information about the element in question that will appear during the walkthrough.

Activating the Walkthrough
--------------------------

Once your are ready to run your walkthrough, open your prototype, display the Genesys Toolbar, and select the Bullhorn icon in the Genesys toolbar at the top of the page.
