Adding Realistic Data
=====================

This tutorial will show you how to add fake, but realistic, data to your prototypes.

Creating Prototype Pages with Embedded Fake Data
------------------------------------------------

Ensure you have the `Design in the Browser Extension` for VS Code installed.

1. Place your cursor in the position you want to insert fake data.
2. Select View > Command Palette...
3. Type <code>fake</code> and select an appropriate fake data type (Name, Phone, Data, Address, etc.) from the list presented.
4. Fake data in the format you selected will be automatically entered.

Inserting Fake Data when Viewing Prototype Pages
------------------------------------------------

You can also automatically insert an entire page of fake data when viewing your prototypes. This is extremely useful when running through prototypes for testing or demos. We'll use the `Chrome Form Filler` extension to accomplish this.

1. Open a prototype page in Chrome that contains user input fields.
2. Click the Form Filler extension icon.
3. The form fields will be automatically filled in with appropriate fake data.
4. Each time you click the Form Filler icon on that page, the form will repopulate with new fake data.

Blur (Redact) Fake/Realistic Data
---------------------------------

Sometimes it's useful to blur, redact, or hide fake or realistic data. Genesys provides a useful button on the Genesys Toolbar and several CSS classes that let you accomplish this easily.

CSS Class Name | Result
---------------| ------
gns-blur | Data is blurred
gns-redact | Data is redacted (blacked out)
gns-invisible-ink | Data is not visible (white-out)

You can apply any of these classes to any input element or to the <code>BODY</code> element to affect the entire page at once. Additionally, you can select the **Redact** button on the Genesys Toolbar to enable this as you view your prototypes.