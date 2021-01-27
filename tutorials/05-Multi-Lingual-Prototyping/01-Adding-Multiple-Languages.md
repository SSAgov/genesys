Adding Multiple Languages to Prototypes
=======================================

This tutorial will help you add multiple languages to your prototype.  Once you load your prototype and display the Genesys toolbar, you will be able to toggle between languages for the text elements that you choose to modify.  Let's get started.

In order to tell the page which text elements you want to change and which languages you want, you need to add the `data-lang` attribute to those elements.  This attribute tells the page that you want to change a text element to another language.  You would then append that attribute with a language code.  For example, if you want to make the text Spanish, the attribute would be written: `data-lang-es`.

Please note that Genesys currently supports English, Spanish and Russian.  The codes for each of these languages are listed below.  More languages can be supported on an as-needed basis.

Language | Attribute
-------- | ---------
English | data-lang-en
Spanish | data-lang-es
Russian | data-lang-ru

Examples
--------

Let's say that you need the `h1` element in your prototype to toggle between English and Spanish.  You would write this:

`<h1 data-lang-en="Project" data-lang-es="Proyecto"></h1>`

In the above example, you have an `h1` tag followed by the `data-lang` attribute.  The first attribute is the English value: `data-lang-en="Project"`.  This is what is displayed on the page by default.  It is followed by the Spanish version of the same text: `data-lang-es="Proyecto"` and this is what will be displayed by the browser when you toggle the language to Spanish.

If you choose not to add a language code to the `data-lang` attribute, it will default to English.

To add Russian and include all three languages, simply add a third `data-lang` attribute for Russian:

`<h1 data-lang-en="Project" data-lang-es="Proyecto" data-lang-ru="проект"></h1>`

Defaulting to Another Language
------------------------------

If you need your prototype to default to another language such as Spanish on page load, you would follow the same procedure as above, but you would also need to declare that Spanish should be the default language.  At the top of your Genesys prototype, find the `HTML` tag and change `lang="en"` to the code for your language, in this case `es` for Spanish.

This will load all of your Spanish language text first by default and then the Genesys toolbar will allow you to cycle through the other languages as needed.

Viewing Prototypes in Different Languages
-----------------------------------------

Once your are ready to view the different languages, open your prototype and press the tilde `~` key to show the Genesys toolbar.  Click the English button in the Genesys toolbar at the top of the page to toggle through the languages.  Remember that only the elements you marked with an alternate language will change.
