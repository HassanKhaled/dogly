# Chrome Extensions starter kit

**for start coding right now, no need for copy and paste existing code**

Thers are a set of basic folders that can help you start to code your idea right away,
we have an images folder which contains all images and icons related to you applications.

we have popup folder which contains the popup that the user will encounter when clicking
on the extension icon.

we have also the scripts folder which contains all the Js files that used in the extension.

in root of the application we have a set of basic files like the manifest.json, this file
is the most important file in the extension, as it contains basic info and description
and icons and persmission that the extension uses.

# manifest file

this file is a json file, which contians the basic info of the extension, it is formated as json file.

```
{
  "name": "Temp Extensions",
  "description": "Template Chrome Extension",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "manifest_version": 3,
  "background": {
    "service_worker": "service-worker.js"
  },
  "icons": {
    "16": "images/icon16.png",
    "32": "images/icon32.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png"
  },
  "content_scripts": [
    {
      "js": ["scripts/content.js"],
      "matches": ["https://*/*"]
    }
  ],
  "action": {
    "default_icon": {
      "16": "images/icon16.png",
      "32": "images/icon32.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
  }
}

```

## name attribute

this is shows the name of the extension in the `chrome` store and on the tab in the broswer.

```
"name": "Temp Extensions"

```

## description attribute

you write the simple descprtion of the extension and its job and function in short and precise manner.

```

"description": "Template Chrome Extension"


```

## version attribute

in this section you define the section of the `extension` of your app.

```
"version": "1.0",

```

## manifest version

this enable the `chrome api` to present you with the right amount of control and apis. the higher
the number the more advance and more control you have in your hands

```
"manifest_version": 3

```

## icons attributes

in this section you define teh baisc four icons that you need to add to your extension, you have the
following sizes:

- 16
- 32
- 48
- 128

```

 "icons": {
    "16": "images/icon16.png",
    "32": "images/icon32.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png"
  }

```

![16 pixels image](/images/icon16.png)

![32 pixels image](/images/icon32.png)

![48 pixels image](/images/icon48.png)

![128 pixels image](/images/icon128.png)

## content scripts atrributes

```
"content_scripts": [
    {
      "js": ["scripts/content.js"],
      "matches": ["https://*/*"]
    }
  ]

```

### js

it is `JS` to be executed on the page

```
"js": ["scripts/content.js"]
```

### matches

this is the path that the `JS` to be exectued in

```
  "matches": ["https://*/*"]
```

# action

you can specify if your extension will show on `popup` or just an icon

```
  "action": {
    "default_icon": {
      "16": "images/icon16.png",
      "32": "images/icon32.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
  }

```

## default_icon

in this case it will be just an `icon extension` to be started or stopped

```
 "default_icon": {
      "16": "images/icon16.png",
      "32": "images/icon32.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }

```

# popup folder

this folder contains all data related to the `popup` that the user will see in case of clicking the extension icon, this folder contains style, html and js files that will be executed in event of click

- popup.js
- popup.css
- popup.html

# images folder

contains the `images` that will be used in the extension mainly icons and splash screen

# background script

this is the behind the scene workers which monitors the situation and acts if a specifc action have happened

```
const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});


chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON';

        chrome.action.setBadgeTextColor({ color: 'white' });

        if (nextState == 'ON') {
            chrome.action.setBadgeBackgroundColor({ color: 'green' });
        } else {
            chrome.action.setBadgeBackgroundColor({ color: 'red' });
        }

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });
    }
});

```

## Badge text

this is small label that appears on the top of the 'extension' icon.

## onInstalled

this event is intiliazed when the extension is installed on the computer

## setBadgeText

is reponsible for setting the text that appears on top of the extension

```
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

```

## text attibute

this is the text that you are wishing to present on top of the `extension` when insalled

## what does it do ?

simply put it is intilized when the user install the `chrome extension`, a label will appear on top of the `extension` icon

```

const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON';

        chrome.action.setBadgeTextColor({ color: 'white' });

        if (nextState == 'ON') {
            chrome.action.setBadgeBackgroundColor({ color: 'green' });
        } else {
            chrome.action.setBadgeBackgroundColor({ color: 'red' });
        }

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });
    }
});


```

## extensions & webstore

we define where the `extension` will work, websitewise

## toggling on and off label

this is responsible for changing the label between on and off

```

const nextState = prevState === 'ON' ? 'OFF' : 'ON';

```

# Content script

it is the code which enables `extension` interact with web page, and this interaction can be change specific aspect of the page or even change it entire

```

const image = document.getElementByTagName('img');

```

the previous code snippet interact with the img tags in the page.

you can specify the content in the 'content_scripts' in the 'manifest' file.

# adding UI

you can add `UI` by using `popup` which is small window showen when clicking on the `extension` icon which enable the developer to first debug and check if everything is working correctly.

```
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Chrome Extension Starter Kit</h1>
  </body>
</html>


```

'action' section of the 'manifest' connects the popup with the 'extension' icon click event

# Advance Chrome Apis

## alarms API

it enable the develoer to schedule a specific code to run on time table or to run in some time in the future

```
"permissions": [
    "alarms"
  ]

```

## audio API

it enable the chromeOs device to connect and to control any connect audio device

> [!NOTE]
> only works on ChromeOS, does not work on the Chrome browser

## background

## bookmarks

## browsingData

## Tabs API

it is simply a tab manager which enalbe you to do the following:

- open new tabs
- change tab content
- enable interaction with tabs

it can help you to oepn multiple tabs all at once
do not forget to set `premission` in the `manifest` file

```

"permissions": ["tabs"]


```

## Storage API

enables your to interact with the local storage, it gives you teh abliity to store and retrive user preferences of color or setting

```

"permissions": ["storage"]

```

## Content Setting API

allows the developer to set rules of handling specific type of content like images and or even 'JS'

```

"permissions": ["contentSettings"]

```

can be used to create focus extention or reduce distractions

## WebRequest API

enables to check and monitor web reqeust and gives you the ablitiy to change them.

```
webRequest

 "permissions": ["webRequest"]

```

gives you the abliity block and ads by analysis of the webs requests

## Notification API

gives you the ablitiy to use notifiaction popups

```
"permissions": ["notifications"]
```

ideal for creating reminders

# References

[^1][Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/get-started)
[^2][Daily.dev Chrome Extension Documentation](https://daily.dev/blog/writing-extensions-for-chrome-a-developers-guide)
