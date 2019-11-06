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

//MISD Branding
pref("distribution.about", "MISD IceCat");
pref("distribution.id", "MISD");
pref("distribution.version", "69.0 ( ͡° ͜ʖ ͡°)");

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
pref("privacy.donottrackheader.enabled", true);
pref("privacy.donottrackheader.value", 1);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
pref("services.sync.privacyURL", "https://www.gnu.org/software/gnuzilla/");
pref("social.enabled", false);
pref("social.remote-install.enabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
pref("healthreport.uploadEnabled", false);
pref("social.toast-notifications.enabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.slowStartup.notificationDisabled", true);
pref("network.http.sendRefererHeader", 2);
pref("network.http.referer.spoofSource", true);
pref("network.http.originextension", false);
pref("dom.event.clipboardevents.enabled",false);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.sendSecureXSiteReferrer", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "");
pref("experiments.manifest.uri", ""); 
pref("toolkit.telemetry.unified", false);
pref("plugins.enumerable_names", "");
pref("plugin.state.flash", 0);
pref("browser.search.update", false);
pref("accessibility.blockautorefresh", true);
pref("dom.battery.enabled", false);
pref("device.sensors.enabled", false);
pref("camera.control.face_detection.enabled", false);
pref("camera.control.autofocus_moving_callback.enabled", false);
pref("network.http.speculative-parallel-limit", 0);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
pref("browser.search.suggest.enabled", false);
pref("browser.sessionstore.max_resumed_crashes", 0);
pref("extensions.shield-recipe-client.enabled", false);
pref("browser.newtabpage.directory.source", "");
pref("browser.newtabpage.directory.ping", "");
pref("browser.newtabpage.introShown", true);
pref("browser.aboutHomeSnippets.updateUrl", "");
pref("browser.sessionstore.max_resumed_crashes", 0);
pref("browser.safebrowsing.provider.mozilla.updateURL", "");
pref("privacy.trackingprotection.enabled", false);
pref("privacy.trackingprotection.pbmode.enabled", false);
pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tracking-protection/start/");
pref("geo.enabled", false);
pref("browser.search.geoip.url", "");
pref("captivedetect.canonicalURL", "");
pref("network.captive-portal-service.enabled", false);
pref("extensions.shield-recipe-client.enabled", false);
pref("privacy.resistFingerprinting", true);
pref("webgl.disabled", true);
pref("media.peerconnection.ice.no_host", true);
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.notifyMissingFlash", false);
pref("app.update.url", "http://127.0.0.1/");
pref("app.update.enabled", false);
pref("app.update.auto", false);
pref("toolkit.telemetry.enabled", false);
pref("media.eme.enabled", false);
pref("media.eme.apiVisible", false);
pref("media.peerconnection.enabled", true);
pref("media.peerconnection.ice.no_host", true);
pref("media.peerconnection.ice.default_address_only", true);
pref("gecko.handlerService.schemes.mailto.0.name", "");
pref("gecko.handlerService.schemes.mailto.1.name", "");
pref("handlerService.schemes.mailto.1.uriTemplate", "");
pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
pref("browser.contentHandlers.types.0.title", "");
pref("browser.contentHandlers.types.0.uri", "");
pref("browser.contentHandlers.types.1.title", "");
pref("browser.contentHandlers.types.1.uri", "");
pref("gecko.handlerService.schemes.webcal.0.name", "");
pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
pref("gecko.handlerService.schemes.irc.0.name", "");
pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
pref("extensions.blocklist.enabled", false);
pref("geo.enabled", false);
pref("geo.wifi.uri", "");
pref("browser.selfsupport.url", "");
pref("browser.apps.URL", "");
pref("loop.enabled",false);
pref("security.tls.unrestricted_rc4_fallback", false);
pref("security.tls.insecure_fallback_hosts.use_static_list", false);
pref("security.tls.version.min", 1);
pref("security.ssl.require_safe_negotiation", false);
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
pref("security.ssl3.rsa_seed_sha", true);
pref("security.OCSP.enabled", 1);
pref("security.OCSP.require", false); // set to false otherwise it breaks captive portal usage
pref("security.ssl3.dhe_rsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_256_sha", false);
pref("security.ssl3.dhe_dss_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
pref("browser.pocket.enabled", false);
pref("extensions.pocket.enabled", false);
pref("xpinstall.signatures.required", false);
pref("network.IDN_show_punycode", true);
pref("extensions.screenshots.disabled", true);
pref("browser.onboarding.newtour", "performance,private,addons,customize,default");
pref("browser.onboarding.updatetour", "performance,library,singlesearch,customize");
pref("browser.onboarding.enabled", false);
pref("gfx.xrender.enabled",true);

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



