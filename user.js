//Massimo's user.js

//General
pref("general.warnOnAboutConfig", false);
pref("browser.warnOnQuit", false);
pref("browser.preferences.inContent",false);
pref("general.useragent.override", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:24.0) Gecko/20100101 Firefox/60.0");

//Appearance
pref("font.internaluseonly.changed", true);
pref("font.name.monospace.x-western", "DejaVu Sans Mono");
pref("font.name.sans-serif.x-western", "DejaVu Sans");
pref("font.name.serif.x-western", "DejaVu Serif");
pref("font.size.fixed.x-western", 14);
pref("font.size.variable.x-western", 14);
pref("browser.urlbar.placeholderName", "SuccSuccGo");
pref("browser.startup.homepage", "about:blank");
pref("browser.newtabpage.enabled", false);
pref("dom.webnotifications.enabled",false); 
pref("dom.webnotifications.serviceworker.enabled",false); 
pref("dom.push.enabled",false); 
pref("widget.chrome.allow-gtk-dark-theme", true);
pref("widget.content.allow-gtk-dark-theme",true);
pref("general.smoothScroll", false);
pref("browser.newtabpage.activity-stream.showTopSites", false);
pref("browser.newtabpage.activity-stream.prerender", false);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref("browser.newtabpage.activity-stream.showTopSites", false);

pref("extensions.blocklist.enabled", false);
pref("services.sync.prefs.sync.security.OCSP.enabled", false);
pref("security.OCSP.GET.enabled", false);
pref("security.OCSP.require", false);
pref("security.OCSP.enabled", 0);
pref("geo.enabled", false);


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

//Speeding it up
pref("network.http.pipelining", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 10);
pref("nglayout.initialpaint.delay", 0);




