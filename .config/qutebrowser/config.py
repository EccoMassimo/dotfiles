import sys, os

sys.path.append(os.path.join(sys.path[0], 'jblock'))
config.source("jblock/jblock/integrations/qutebrowser.py")

c.content.default_encoding = 'utf-8'
c.content.geolocation = False
c.scrolling.bar = 'always'
c.tabs.background = True
c.zoom.default = '100%'
c.auto_save.session = False
c.backend = 'webengine'
c.url.default_page = 'about:blank'
c.url.start_pages = 'about:blank'
c.completion.web_history.max_items = 0
c.statusbar.position = 'bottom'
c.tabs.position = 'bottom'
c.content.host_blocking.enabled = False
c.content.headers.do_not_track = True




