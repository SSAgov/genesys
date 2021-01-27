Create a Flow Diagram
=====================

This tutorial will show you how to create flow diagrams to support your design efforts.

Page Setup
----------

To include flowcharts and other types of diagrams in your project or prototype pages:

1. Use an existing HTML page or create a new one.
2. In the <code>BODY</code>, add the following:

````
<div class="mermaid">
    [INSERT YOUR DIAGRAM STATEMENTS]
</div>
````

Flowcharts
----------

To create a flowcharts, use this type of diagram statement syntax:

````
graph TD
    Start --> Stop
````

Sequence Diagrams
-----------------

To create sequence diagrams, follow this type of diagram statement syntax:

````
sequenceDiagram
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
````

Live Editing
------------

If you have installed the [Mermaid Diagram Previewer](https://marketplace.visualstudio.com/items?itemName=vstirbu.vscode-mermaid-preview) for Visual Studio Code, then you can see your diagrams being drawn as you type the diagram statement syntax.

You can also use the [Mermaid Live Editor](https://mermaidjs.github.io/mermaid-live-editor/#/edit/Z3JhcGggVEQKQVtDaHJpc3RtYXNdIC0tPnxHZXQgbW9uZXl8IEIoR28gc2hvcHBpbmcpCkIgLS0-IEN7TGV0IG1lIHRoaW5rfQpDIC0tPnxPbmV8IERbTGFwdG9wXQpDIC0tPnxUd298IEVbaVBob25lXQpDIC0tPnxUaHJlZXwgRltDYXJdCg) to assemble your diagrams and then paste the code into your web page.

Further References
------------------

- [Mermaid](https://mermaidjs.github.io/)