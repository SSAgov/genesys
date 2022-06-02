Add Conditional Logic
=====================

This tutorial will show you how to add conditional logic (useful for branching and toggling cont
Think of Conditional Logic as having an "if-then" relationship: **if** the conditions are met, **then** do something.

Let's start with a simple example. Let's ask the user if they live in the United States, and if they answer 'No', then display an informational notice.

To ask the question, we will use a HTML Radio List:

````
<label>Do you live in the United States?</label>
<input type="radio" name="residency" value="yes">Yes<br />
<input type="radio" name="residency" value="no">No
````

If the user answers **no**, then we want to display the following message:

`````
<p>Sorry, this application only supports U.S. residents.</p>
`````

Now, to tie the answer No to the message, modify the `input` element associated with No to this:

`````
<input type="radio" property="residency" name="residency" value="no">No
`````

Notice, we added the `property="residency"` attribute and value to the element. Conditional Logic in Genesys requires a `property` attribute on any item you want to use in a conditional expression. (If you are using UEF Snippets to build your prototype, there is no need to add the `property` attribute--it's already built-in.)

Finally, wrap the message paragraph to use the `property` value:

`````
<div mv-if="residency = no">
    <p>Sorry, this application only supports U.S. residents.</p>
</div>
`````

Notice we just wrapped the message in a generic `DIV` element and attached the Genesys Conditional Logic attribute (`mv-if`) to it. That's it.

For more information on the underlying Mavo open-source library from MIT we are using here, see http://mavo.io/docs/expressions#conditionals-if-and-the-mv-if-attribute.

------

Adding Interactions with Natural Language
-----------------------------------------

Genesys supports specifying simple interactions using natural language statements, via the open-source UILang library (http://uilang.com/).

To get started, include the `uilang.js` file in the HEAD of your page, using the `gns-add-uilang` snippet. Next, add a `<code>` block at the bottom of your page, like this:

```
<code>
    your UILang interaction instructions go here
</code>
```

Finally, write UILang interaction instructions within that `code` block, such as:

```
clicking on "#confirm" adds class "show" on "#success"
```

Putting it all together, you should have something like this as an example:

```
<code>
    clicking on "#confirm" adds class "show" on "#success" 
</code>
```

Again, the UILang page at http://uilang.com/ has many more examples of the natural language syntax.
