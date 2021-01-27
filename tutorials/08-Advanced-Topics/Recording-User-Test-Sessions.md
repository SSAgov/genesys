Recording User Test Sessions
============================

An easy, flexible, and practical way to record and save user test sessions, including user interactions (text input, mouse clicks) is to use the 
[Kantu Browser Automation](https://chrome.google.com/webstore/detail/kantu-browser-automation/gcbalfbdmfieckjlnblleoemohcganoc) extension for Chrome.

This open-source, Selenium-based extension provides a straightforward interface for recording, saving, exporting, and playing back user test sessions. And since the user interactions are saved as text-based objects, the file sizes are very small.

**Note:** This method requires the desktop version of Chrome. Mobile Chrome does not support the use of browser extensions. Additionally, this method does not work with Axure-generated prototypes, due to Axure's dynamic caching of fields.

**Configuring Kantu**

Once installed, you'll need to configure Kantu one time for optimal use in recording test sessions.

1. Right-click the Kantu icon in Chrome.
2. Select **Manage extensions**.
3. Select *Allow access to file URLs*.
4. Click the Kantu icon in Chrome.
5. Select the Settings (gear) icon in the upper left of the window.
6. In the Replay/Record settings, uncheck the *Record notifications* option.

**To record a user test session:**

1. Open the first page of your test prototype in Chrome.
2. Click the Kantu extension icon.
3. Select the **Test Case** button.
4. Click **Record**.
5. When finished with the user test session, click **Stop Record**.
6. Click **Save...** and provide a name for the user test session. 

It's useful to provide the test facilitator's initials as part of the name for the user test session (ex: *CRC-User-1*, *CRC-User-2*). This will make it easy to combine all test session data from various test facilitators into an external analysis tool.

All user test session data is saved to the browser's local storage, so you'll need to export all of the data for all user tests to a more permanent storage location (network drive, cloud drive, etc.) so the sessions can be shared with others.

**To export all user test sessions:**

1. Click the Test Cases gear icon (beside the **Test Case** button).
2. Select **Export All (JSON)**. This will download a file named *all_test_cases.zip* to your browser's Download folder.
3. Rename *all_test_cases.zip* to suffix it with the test facilitator's initials (ex: *all_test_cases-CRC.zip*). Again, this makes it easy to combine all test session data from various test facilitators into an external analysis tool.

**To play back user test sessions:**

1. Click the Kantu icon in Chrome.
2. In the Test Cases section, click the Settings (gear) icon.
3. Select **Import JSON**.
4. Select a Test Case item and then the **Play Macro** button.

**To analyze user test sessions**

1. Open your exported user test session JSON file.
2. Copy the file contents and paste them into the online [JSON to CSV Converter](https://hreftools.com/json-to-csv).
3. Select **Convert**.
4. Select all of the **Output CSV** text and paste it into a new text file.
5. You can import this CSV file into Microsoft Excel or any other data analysis tool.

Screen Recording of User Sessions with Video
--------------------------------------------

You can record user sessions with video, using the [Nimbus Screenshot & Video Recorder](https://chrome.google.com/webstore/detail/nimbus-screenshot-screen/bpconcjcammlapcogcnnelfmaeghhagj?utm_source=chrome-ntp-icon) extension for Chrome. This will allow you to save a screen recording of the user session in the compressed WebM video format for later playback.

