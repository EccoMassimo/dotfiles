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
c.completion.web_history.max_items = 100
c.statusbar.position = 'bottom'
c.tabs.position = 'top'
c.content.host_blocking.enabled = True
c.content.headers.do_not_track = True
#c.content.headers.user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7'
    



