//MISD user.js


//General
pref("general.warnOnAboutConfig", false);
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
pref("browser.warnOnQuit", false);

//MISD Branding
pref("distribution.about", "MISD IceCat");
pref("distribution.id", "MISD");
pref("distribution.version", "69.0");

pref("app.releaseNotesURL", "https://crossthedesert.dev");
pref("app.vendorURL", "https://crossthedesert.dev");
pref("app.privacyURL", "https://crossthedesert.dev");

//Clear history settings
pref("privacy.clearOnShutdown.cookies", false);
pref("privacy.clearOnShutdown.sessions", false);
pref("privacy.clearOnShutdown.siteSettings", true);
pref("privacy.firstparty.isolate", false);
pref("privacy.history.custom", true);
pref("privacy.sanitize.pending", "[{\"id\":\"shutdown\",\"itemsToClear\":[\"cache\",\"history\",\"formdata\",\"downloads\",\"siteSettings\"],\"options\":{}}]");
pref("privacy.sanitize.sanitizeOnShutdown", true);
pref("browser.sessionstore.max_tabs_undo", = 0);

//Anti-Botnet
pref("network.connectivity-service.enabled", false);
pref("browser.startup.homepage", "about:blank");
pref("browser.newtabpage.enabled", false);
pref("browser.newtab.preload", false);
pref("browser.search.geoip.url", "");
pref("app.update.enabled", false);
pref("extensions.update.enabled", false);
pref("app.update.auto", false);
pref("extensions.update.autoUpdateDefault", false);
pref("app.update.service.enabled", false);
pref("app.update.staging.enabled", false);
pref("app.update.silent", false);
pref("extensions.getAddons.cache.enabled", false);
pref("lightweightThemes.update.enabled", false);
pref("browser.search.update", false);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
pref("dom.ipc.plugins.reportCrashURL", false);
pref("extensions.getAddons.showPane", false);
pref("extensions.webservice.discoverURL", "");
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "data:,");
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.cachedClientID", "");
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.hybridContent.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("breakpad.reportURL", "");
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.enabled", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("browser.aboutHomeSnippets.updateUrl", "data:,");
pref("browser.chrome.errorReporter.enabled", false);
pref("browser.chrome.errorReporter.submitUrl", "");
pref("extensions.blocklist.enabled", false);
pref("extensions.blocklist.url", "");
pref("services.blocklist.update_enabled", false);
pref("services.blocklist.onecrl.collection", "");
pref("services.blocklist.addons.collection", "");
pref("services.blocklist.plugins.collection", "");
pref("services.blocklist.gfx.collection", "");
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.provider.google.reportURL", "");
pref("browser.safebrowsing.reportPhishURL", "");
pref("browser.safebrowsing.provider.google4.reportURL", "");
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
pref("browser.safebrowsing.allowOverride", false);
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
pref("browser.safebrowsing.blockedURIs.enabled", false);
pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
pref("browser.safebrowsing.provider.mozilla.updateURL", "");
pref("network.allow-experiments", false);
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("app.shield.optoutstudies.enabled", false);
pref("shield.savant.enabled", false);
pref("extensions.systemAddon.update.enabled", false);
pref("extensions.systemAddon.update.url", "");
pref("browser.ping-centre.telemetry", false);
pref("extensions.pocket.enabled", false);
pref("browser.library.activity-stream.enabled", false);
pref("extensions.screenshots.disabled", true);
pref("extensions.screenshots.upload-disabled", true);
pref("browser.onboarding.enabled", false);
pref("extensions.formautofill.addresses.enabled", false);
pref("extensions.formautofill.available", "off");
pref("extensions.formautofill.creditCards.enabled", false);
pref("extensions.formautofill.heuristics.enabled", false);
pref("extensions.webcompat-reporter.enabled", false);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.predictor.enabled", false);
pref("captivedetect.canonicalURL", "");
pref("network.captive-portal-service.enabled", false);
pref("browser.send_pings", false);
pref("browser.send_pings.require_same_host", true);
pref("network.protocol-handler.external.ms-windows-store", false);
pref("network.predictor.enable-prefetch", false);
pref("network.trr.mode", 0);
pref("network.trr.bootstrapAddress", "");
pref("network.trr.uri", "");
pref("network.file.disable_unc_paths", true);
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.suggest.searches", false);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
pref("browser.urlbar.usepreloadedtopurls.enabled", false);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("security.ssl.errorReporting.automatic", false);
pref("security.ssl.errorReporting.enabled", false);
pref("security.ssl.errorReporting.url", "");
pref("dom.push.enabled", false);
pref("dom.push.connection.enabled", false);
pref("dom.push.serverURL", "");
pref("dom.push.userAgentID", "");
pref("beacon.enabled", false);
pref("browser.uitour.enabled", false);
pref("browser.uitour.url", "");
pref("permissions.manager.defaultsUrl", "");
pref("webchannel.allowObject.urlWhitelist", "");
pref("browser.startup.homepage_override.mstone", "ignore");
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_welcome_url.additional", "");
pref("startup.homepage_override_url", "");
pref("media.gmp-gmpopenh264.autoupdate", false);
pref("browser.shell.shortcutFavicons", false);
pref("media.gmp-eme-adobe.autoupdate", false);
pref("media.gmp-manager.url", "data:text/plain,");
pref("media.gmp-manager.url.override", "data:text/plain,");
pref("media.gmp-manager.updateEnabled", false);
pref("media.gmp-widevinecdm.autoupdate", false);
pref("devtools.webide.autoinstallADBHelper", false);

//Speeding it up
pref("network.http.pipelining", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 10);
pref("nglayout.initialpaint.delay", 0);

// DuckDuckGo
pref("keyword.URL", "https://duckduckgo.com/?t=trisquel&q=!+");
pref("browser.search.defaultenginename", "DuckDuckGo");
pref("browser.search.order.1", "DuckDuckGo");
pref("browser.search.defaultenginename", "DuckDuckGo");
pref("browser.search.order.extra.duckduckgo", "DuckDuckGo");
pref("browser.search.showOneOffButtons", false);
pref("browser.search.suggest.enabled",false);
pref("browser.search.defaultenginename.US",      "data:text/plain,browser.search.defaultenginename.US=DuckDuckGo");
pref("browser.search.order.US.1",                "data:text/plain,browser.search.order.US.1=DuckDuckGo");

// Disable preconnecting to search engine when clicking on the search bar
pref("network.http.speculative-parallel-limit", 0);

//Dictionary
pref("browser.dictionaries.download.url", "http://dictionaries.mozdev.org/");
pref("browser.search.searchEnginesURL", "http://mycroft.mozdev.org/");
pref("layout.spellcheckDefault", 2);



