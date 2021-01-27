Using UEF Snippets
==================

This tutorial will show you how to use the `UEF Snippets Extension` for VS Code, in order to create prototypes rapidly. Snippets allow for the automatic substitution of code when you type in pre-defined phrases.

Note that this same process works with any of the other design systems that are supported by Genesys via the `Design in the Browser Extension`.

Getting Started
---------------

First, let's start a new UEF page in our editor.

Select `File > New File`, then `Select the Language Mode` in the lower right of the screen, setting it to `HTML`.

Then, on your blank page, type `!!uef`. This will allow you to select which UEF Page Template to insert.

Your initial UEF page is now ready to go.

To use a snippet, position your cursor in the editor in the position you want the snippet inserted, and simply start typing the snippet trigger name. As you type a recognized snippet into the editor, a list will appear. You can finish typing or you can select early by pressing TAB, ENTER, or clicking on the listed item you want.

**Example**

Let's insert a UEF Button with the `uef-button` snippet.

Place your cursor within your page (using a UEF Page Template) where you want the button to appear. Type `uef-button` and press ENTER. You should see the following code appear:

````html
<!-- START: Primary/Secondary Button ====================================================== -->
<input type="submit" class="uef-btn uef-btn-primary" value="Button Name" name="btnName" id="btnName">
<!-- END: Primary/Secondary Button ====================================================== -->
````

There are a couple things to note here.

First, notice that all UEF Snippets include a START and END comment declaration. This allows you to clearly see where UEF components begin and end within the code, making it easy to modify or remove things.

Second, when the snippet is first inserted on the page, you'll notice that the first thing you can customize within the snippet is highlighted.

Generally, the editor should automatically guide you through the process of what you need to customize. You can type (or select from a list of options) in the selected fields, then press TAB to move to the next editable fields.

Using our `uef-button` snippet example, here's what you should notice:

1. The editor should select `uef-btn-primary` in the class sub-element. A dropdown will appear, allowing you to select either a Primary or Secondary button type. Press TAB to move to the next field.
2. The editor should select `Button Name` in the value sub-element. This is the text that the button displays. Let's type `Update` for our text. Press TAB to move on.
3. The editor should select *part* of `btnName` in both the name and id sub-elements. As you type here, the editor will replace both fields with the same value simultaneously.

Note: If you select something else in the editor, automatic tabbing between fields will stop because the editor assumes that you're now working on something else.

Help! My Editor Just Did Something Weird!
------------------------------------------

The editor may automatically substitute code if you type in something that the editor recognizes or resembles a command. If you notice this, just select **Edit** > **Undo** to Undo that operation.
