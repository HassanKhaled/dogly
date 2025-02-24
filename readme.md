# Chrome Extensions starter kit

** for start coding right now, no need for copy and paste existing code **

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

this is shows the name of the extension in the chorome store and on the tab in the broswer.

```
"name": "Temp Extensions"

```

## description attribute

you write the simple descprtion of the extension and its job and function in short and precise manner.

```

"description": "Template Chrome Extension"


```

## version attribute

in this section you define the section of the extension of your app.

```
"version": "1.0",

```

## manifest version

this enable the chrome api to present you with the right amount of control and apis. the higher
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

it is JS to be executed on the page

```
"js": ["scripts/content.js"]
```

### matches

this is the path that the js to be exectued in

```
  "matches": ["https://*/*"]
```

# action

you can specify if your extension will show on popup or just an icon

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

in this case it will be just an icon extension to be started or stopped

```
 "default_icon": {
      "16": "images/icon16.png",
      "32": "images/icon32.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }

```
