Using Version Control
=====================

This tutorial will show you how to set up and use version control for your prototypes.

Git
---

Git is a version control system that is part of pretty much every modern development process. We can use Git commands to show the different stages of review that your design must go through before it goes live. Each stage lowers the risk that you will make a decision that conflicts with features built by another team member.

Don't worry--Visual Studio Code lets you point and click to issue these commands.

Branches
--------

Branches allow us to maintain and work on multiple iterations of a design. The first thing you'll want to do after you create your initial design is create a branch for any changes you'll make next. This will allow you to quickly revert to and view any design iteration.

*Creating a Branch*

1. Select the `master` branch name in the lower left of the screen. This will open the Command Palette at the top of the screen.

2. Select `Create new branch...`

3. Give your branch a name. Good branch names might be descriptive of your design iteration (e.g. `updated-nav-design`).

4. Notice that the lower left of the screen now indicates that you are working on your new design branch. To switch to other branches, including your current design, select the branch name.

*Adding Your Changes*

1. When you are ready to add (commit) all of your changes for others to review, select the `Source Control` tab on the left side of the screen. This switches your Explorer view to the `Source Code` view.

2. Select the `+` to the left of the `CHANGES` section. This will `Stage All Changes`.

3. After all changes have been staged, type a descriptive `Message` for what you changed in this design branch, then select the checkmark above the message area.

*Publishing Your Changes*

1. To allow others to see your branch with your design changes, select `...`, and then `Push`.

*Switching Between Branches (Design Iterations)*

1. To switch to other branches, including your current design, select the branch name in the lower left of the screen.

*Merging Design Iterations into the Final Design*

1. Select your design branch.

2. In the `Source Control` view, select `...` at the top of the Explorer, then select `Push to...`, and select `master`.

-----------------------------------------------------------

Further Resources
-----------------

- [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)
- [Exploring HTML Prototypes with Git](https://www.red-gate.com/simple-talk/dotnet/asp-net/exploring-html-prototypes-with-git/)
- [The Basics of Git Explained by Designing a New Car](https://pixelpioneers.co/blog/2017/git-basics-explained-by-designing-a-new-car)