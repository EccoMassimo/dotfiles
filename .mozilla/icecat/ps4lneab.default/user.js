//Massimo's user.js

//Appearance
user_pref("font.internaluseonly.changed", true);
user_pref("font.name.monospace.x-western", "DejaVu Sans Mono");
user_pref("font.name.sans-serif.x-western", "DejaVu Sans");
user_pref("font.name.serif.x-western", "DejaVu Serif");
user_pref("font.size.fixed.x-western", 14);
user_pref("font.size.variable.x-western", 14);
user_pref("browser.urlbar.placeholderName", "SuccSuccGo");
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);

//Clear history settings
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.firstparty.isolate", false);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.pending", "[{\"id\":\"shutdown\",\"itemsToClear\":[\"cache\",\"history\",\"formdata\",\"downloads\",\"siteSettings\"],\"options\":{}}]");
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("browser.sessionstore.max_tabs_undo", = 0);

//Anti-Botnet
user_pref("privacy.resistFingerprinting", = true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", = true);
user_pref("privacy.trackingprotection.cryptomining.enabled", = true);
user_pref("privacy.trackingprotection.enabled", = true);
user_pref("browser.send_pings", = false);
user_pref("browser.urlbar.speculativeConnect.enabled", = false);
user_pref("dom.event.clipboardevents.enabled", = false);
user_pref("media.eme.enabled", = false);
user_pref("media.gmp-widevinecdm.enabled", = false);
user_pref("media.navigator.enabled", = false);
user_pref("network.cookie.cookieBehavior", = 1);
user_pref("network.http.referer.XOriginPolicy", = 2);
user_pref("webgl.disabled", = true);
user_pref("browser.sessionstore.privacy_level", = 0); //0=Store All 1=Store Data for HTTP only 2=Never Store Session Data
user_pref("network.IDN_show_punycode", = true);




