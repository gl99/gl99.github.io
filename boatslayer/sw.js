"use strict";
importScripts("sw-toolbox.js"); 
toolbox.precache(["./index.html","./style.css", ".script.js" ]);
toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 3 });