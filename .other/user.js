//Massimo's user.js

//General
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.warnOnQuit", false);
user_pref("browser.user_preferences.inContent",false);
user_pref("general.useragent.override", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:24.0) Gecko/20100101 Firefox/60.0");
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.loadInBackground", false);
user_pref("browser.urlbar.searchSuggestionsChoice", false);

//Appearance
user_pref("font.internaluseonly.changed", true);
user_pref("font.name.monospace.x-western", "Deja Vu Sans Mono");
user_pref("font.name.sans-serif.x-western", "DejaVu Sans Serif");
user_pref("font.name.serif.x-western", "DejaVu Serif");
user_pref("font.size.fixed.x-western", 11);
user_pref("font.size.variable.x-western", 14);
user_pref("browser.urlbar.placeholderName", "SuccSuccGo");
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("dom.webnotifications.enabled",false); 
user_pref("dom.webnotifications.serviceworker.enabled",false); 
user_pref("dom.push.enabled",false); 
user_pref("widget.chrome.allow-gtk-dark-theme", true);
user_pref("widget.content.allow-gtk-dark-theme",true);
user_pref("general.smoothScroll", false);
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"personal-bookmarks\",\"urlbar-container\",\"downloads-button\",\"jid1-ktlzuoiikvffew_jetpack-browser-action\",\"tortm-browser-button_jeremybenthum-browser-action\",\"tprb_addon_searxes_danwin1210_me-browser-action\",\"https-everywhere_eff_org-browser-action\",\"ublock0_raymondhill_net-browser-action\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[]},\"seen\":[\"developer-button\",\"jid1-ktlzuoiikvffew_jetpack-browser-action\",\"tortm-browser-button_jeremybenthum-browser-action\",\"tprb_addon_searxes_danwin1210_me-browser-action\",\"https-everywhere_eff_org-browser-action\",\"ublock0_raymondhill_net-browser-action\"],\"dirtyAreaCache\":[\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\"],\"currentVersion\":16,\"newElementCount\":4}");
user_pref("browser.uidensity", 1);

//Clear history settings
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.pending", "[{\"id\":\"shutdown\",\"itemsToClear\":[\"cache\",\"history\",\"formdata\",\"downloads\",\"siteSettings\"],\"options\":{}}]");
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("browser.sessionstore.max_tabs_undo",  0);

//Anti-Botnet
user_pref("privacy.resistFingerprinting",  true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.send_pings", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("media.eme.enabled",  false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled",  false);
user_pref("network.cookie.cookieBehavior",  1);
user_pref("network.http.referer.XOriginPolicy", 0);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
user_pref("webgl.disabled",  true);
user_pref("browser.sessionstore.privacy_level",  0); //0Store All 1Store Data for HTTP only 2Never Store Session Data
user_pref("network.IDN_show_punycode",  true);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("extensions.blocklist.enabled", false);
user_pref("services.sync.user_prefs.sync.security.OCSP.enabled", false);
user_pref("security.OCSP.GET.enabled", false);
user_pref("security.OCSP.require", false);
user_pref("security.OCSP.enabled", 0);
user_pref("geo.enabled", false);
user_pref("privacy.donottrackheader.enabled", true);

//Speeding it up
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 10);
user_pref("nglayout.initialpaint.delay", 0);




