Add Tables Quickly
==================

This tutorial will show you how to add HTML tables to your prototype quickly and efficiently.

To quickly add a table to your prototype, the Emmet syntax is your best friend.

Example
-------

Add a table with 5 columns and 10 rows.

````
table>tr*10>td*5
````

After typing the above Emmet command into the editor, press TAB. Here's the result:

````
<table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
````

Aren't you glad you didn't have to type all that?

Creating UEF Tables Quickly
---------------------------

You can use the Emmet command above to quickly create generic HTML tables. If you want to turn those tables into UEF Tables, then wrap your `table` element within a `div` element with the `uef-table` class:

```
<div class="uef-table">
    <table>
    ...
    </table>
</div>
```

Of course, you need to be using one of the UEF Page Templates for this to display correctly.

For more complex tables with sorting, searching, and other features (Single and Multi-Row Action, Pagination), use one of the Genesys UEF Table Snippets:

Trigger | Description
------- | -----------
uef-table | Basic, Single-Row Action, and Paginated Table
uef-table-multi-row | Multi-Row Action Table
uef-table-add-col-header | Add another column header to the table
uef-table-add-col-data | Add another column of data (content) to the table