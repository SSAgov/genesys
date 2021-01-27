Adding Analytics
================

This tutorial will show you how to add automatic UX-focused analytic data collection to your prototypes.

Analytics data works best when used as the starting point for a hypothesis, and is combined with other kinds of research data. When it comes to web analytics, the specific tools you use are less important than understanding what kinds of data they collect and how to use that data.

With agile-based projects, your goal is to close that feedback loop for Lean UX as rapidly as you can. By incorporating automatic feedback in your prototypes, you'll go a long way toward reaching that goal.

The `Genesys Extension` for VS Code includes support for automatically adding [Google Analytics](https://analytics.google.com) with the UX-centric [AutoTrack](https://ga-dev-tools.appspot.com/autotrack/) plugin.

Some things we can automatically track with this include:

- Standard page views and navigation paths (Behavior Flow)
- Technology used (mobile or desktop, screen resolution, etc.)
- Scenario goals/objectives via Goal Flows (this allows you to track how well users are completing objectives)
- Events (what actions users are taking)
- Timing (of goals, actions, and micro-interactions)

To add UX analytics to your prototype:

1. In a prototype HTML page, place your cursor just before the ending `</body>` tag.
2. Type <code>gns-add-analytics</code> and select that snippet to insert.
3. Type your Google Analytics ID for your prototype in the highlighted area. If you don't have a Google Analytics ID for your prototype, log in to your Google Analytics account and create one.

----------------------------------------------------------

References
----------
- [5 Ways to Use Google Analytics for Your UX Research](https://www.sitepoint.com/5-ways-use-google-analytics-ux-research/)
- [Improve your UX with Google Analytics](http://www.creativebloq.com/ux/improve-your-ux-google-analytics-31619685)
- [The Google Analytics Setup I Use on Every Site I Build](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/)