## App List Manager

App List Manager is a simple browser based tool to manage a single list. Items can be added and removed from the list. Data is contained within the browser local storage so even when the session ends, items will be retained for next time.

## Overview

This repository contains everything for building, running and deploying dev.jonbrownm.com/app-list-manager.

*Latest version running on <http://dev.jonbrownm.com/app-list-manager>*

## Installation
To get the project up and running, and view the project in the browser, complete the following steps:

1. Clone this repo: `git@github.com:jonbrownm/app-list-manager.git`
2. cd `init-project`
3. Install Node.js: <https://nodejs.org/>
4. Install Grunt: `npm install grunt`
5. Install node dependancies: `npm i`
6. Start the development environment: `grunt`
7. Open your browser and visit <http://localhost:8080>

## Development
When developing the project all tasks will need to be running. To do this, run the following task:

* `grunt`

## Deployment
To deploy this to the current production environment, you can deploy a static instance by running the following task:

* `grunt prod`

This will publish the contents of `dist` to <http://dev.jonbrownm.com/app-list-manager>.
This is defined in the package.json and should be set when the project is replicated.

## Foundation

Foundation is available in this project (needs to be added). The imported components can be customised as required. The settings file includes variables that can be customized for each component. The full documentation for Foundation can be found at <https://foundation.zurb.com/sites/docs/>.

## Repository structure
The following information details the structure of the codebase…

```
/
├─ src/
│  │
│  ├─ css/            # CSS
│  │  ├─ components/  # Components (scss)
│  │  ├─ app.scss     # Global (scss)
│  │  └─ app.min.css  # Global app (compiled css)
│  │
│  ├─ js/             # JS
│  │  ├─ components/  # Components (js)
│  │  ├─ app.js       # Global (js)
│  │  └─ app.min.js   # Global app (compiled js)
│  │
│  ├─ index.html      # Main page (html)
│  └─ …               # Additional pages (html)
│
├─ .ftpauth           # FTP authorisation file (ignored by GIT)
├─ .gitignore         # Files and folders not tracked by Git
├─ Gruntfile.js       # Gruntfile config
├─ package-lock.js    # Package lock config
├─ package.json       # Project manifest
└─ README.md          # This file
```
