# Chrome Extensions starter kit

## for start coding right now, no need for copy and paste existing code

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
