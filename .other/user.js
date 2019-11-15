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
user_pref("privacy.donottrackheader.value", 1);
user_pref("plugins.hide_infobar_for_missing_plugin", true);
user_pref("plugins.hide_infobar_for_outdated_plugin", true);
user_pref("plugins.notifyMissingFlash", false);
user_pref("privacy.firstparty.isolate", true);
user_pref("extensions.update.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.EULA.override", true);
user_pref("extensions.autoDisableScopes", 3);
user_pref("extensions.shownSelectionUI", true);
user_pref("app.update.url", "http://127.0.0.1/");
user_pref("general.useragent.compatMode.icecat",true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.privacyURL", "https://www.gnu.org/software/gnuzilla/");
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
user_pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
user_pref("healthreport.uploadEnabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("network.http.sendRefererHeader", 2);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.originextension", false);
user_pref("dom.event.clipboardevents.enabled",false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.sendSecureXSiteReferrer", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("experiments.manifest.uri", ""); 
user_pref("toolkit.telemetry.unified", false);
user_pref("plugins.enumerable_names", "");
user_pref("plugin.state.flash", 0);
user_pref("browser.search.update", false);
user_pref("dom.battery.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.sessionstore.max_resumed_crashes", 0);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.sessionstore.max_resumed_crashes", 0);
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tracking-protection/start/");
user_pref("browser.search.geoip.url", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("media.peerconnection.ice.no_host", true);

//Speeding it up
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 10);
user_pref("nglayout.initialpaint.delay", 0);




