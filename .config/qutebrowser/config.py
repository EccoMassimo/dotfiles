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
c.tabs.position = 'top'
c.content.host_blocking.enabled = False
c.content.headers.do_not_track = True


color = {
    'base03': '#aaaaaa',
    'base02': '#555555',
    'base01': '#555555',
    'base00': '#555555',
    'base0': '#555555',
    'base1': '#00aaaa',
    'base2': '#000000',
    'base3': '#000000',
    'yellow': '#ffff55',
    'orange': '#aa5500',
    'red': '#aa0000',
    'magenta': '#aa00aa',
    'violet': '#ffffff',
    'blue': '#0000aa',
    'cyan': '#00aaaa',
    'green': '#00aa00'
}

## Background color of the completion widget category headers.
c.colors.completion.category.bg = color['base03']

## Bottom border color of the completion widget category headers.
c.colors.completion.category.border.bottom = color['base03']

## Top border color of the completion widget category headers.
c.colors.completion.category.border.top = color['base03']

## Foreground color of completion widget category headers.
c.colors.completion.category.fg = color['base3']

## Background color of the completion widget for even rows.
c.colors.completion.even.bg = color['base02']

## Text color of the completion widget.
c.colors.completion.fg = color['base3']

## Background color of the selected completion item.
c.colors.completion.item.selected.bg = color['violet']

## Bottom border color of the selected completion item.
c.colors.completion.item.selected.border.bottom = color['violet']

## Top border color of the completion widget category headers.
c.colors.completion.item.selected.border.top = color['violet']

## Foreground color of the selected completion item.
c.colors.completion.item.selected.fg = color['base3']

## Foreground color of the matched text in the completion.

c.colors.completion.match.fg = color['base2']

## Background color of the completion widget for odd rows.
c.colors.completion.odd.bg = color['base02']

## Color of the scrollbar in completion view
c.colors.completion.scrollbar.bg = color['base0']

## Color of the scrollbar handle in completion view.
c.colors.completion.scrollbar.fg = color['base2']

## Background color for the download bar.
c.colors.downloads.bar.bg = color['base03']

## Background color for downloads with errors.
c.colors.downloads.error.bg = color['red']

## Foreground color for downloads with errors.
c.colors.downloads.error.fg = color['base3']

## Color gradient start for download text.
c.colors.downloads.start.fg = color['base3']

## Background color for hints. Note that you can use a `rgba(...)` value
c.colors.hints.bg = color['violet']

## Font color for hints.
c.colors.hints.fg = color['base3']

## Font color for the matched part of hints.
c.colors.hints.match.fg = color['base2']

## Text color for the keyhint widget.
c.colors.keyhint.fg = color['base3']

## Highlight color for keys to complete the current keychain.
c.colors.keyhint.suffix.fg = color['yellow']

## Background color of an error message.
c.colors.messages.error.bg = color['red']

## Border color of an error message.
c.colors.messages.error.border = color['red']

## Foreground color of an error message.
c.colors.messages.error.fg = color['base3']

## Background color of an info message.
c.colors.messages.info.bg = color['base03']

## Border color of an info message.
c.colors.messages.info.border = color['base03']

## Foreground color an info message.
c.colors.messages.info.fg = color['base3']

## Background color of a warning message.
c.colors.messages.warning.bg = color['orange']

## Border color of a warning message.
c.colors.messages.warning.border = color['orange']

## Foreground color a warning message.
c.colors.messages.warning.fg = color['base3']

## Background color for prompts.
c.colors.prompts.bg = color['base02']

## Border used around UI elements in prompts.
c.colors.prompts.border = '1px solid ' + color['base3']

## Foreground color for prompts.
c.colors.prompts.fg = color['base3']

## Background color for the selected item in filename prompts.
c.colors.prompts.selected.bg = color['base01']

## Background color of the statusbar in caret mode.
c.colors.statusbar.caret.bg = color['blue']

## Foreground color of the statusbar in caret mode.
c.colors.statusbar.caret.fg = color['base3']

## Background color of the statusbar in caret mode with a selection.
c.colors.statusbar.caret.selection.bg = color['violet']

## Foreground color of the statusbar in caret mode with a selection.
c.colors.statusbar.caret.selection.fg = color['base3']

## Background color of the statusbar in command mode.
c.colors.statusbar.command.bg = color['base03']

## Foreground color of the statusbar in command mode.
c.colors.statusbar.command.fg = color['base3']

## Background color of the statusbar in private browsing + command mode.
c.colors.statusbar.command.private.bg = color['base01']

## Foreground color of the statusbar in private browsing + command mode.
c.colors.statusbar.command.private.fg = color['base3']

## Background color of the statusbar in insert mode.
c.colors.statusbar.insert.bg = color['green']

## Foreground color of the statusbar in insert mode.
c.colors.statusbar.insert.fg = color['base3']

## Background color of the statusbar.
c.colors.statusbar.normal.bg = color['base03']

## Foreground color of the statusbar.
c.colors.statusbar.normal.fg = color['base3']

## Background color of the statusbar in passthrough mode.
c.colors.statusbar.passthrough.bg = color['magenta']

## Foreground color of the statusbar in passthrough mode.
c.colors.statusbar.passthrough.fg = color['base3']

## Background color of the statusbar in private browsing mode.
c.colors.statusbar.private.bg = color['base01']

## Foreground color of the statusbar in private browsing mode.
c.colors.statusbar.private.fg = color['base3']

## Background color of the progress bar.
c.colors.statusbar.progress.bg = color['base3']

## Foreground color of the URL in the statusbar on error.
c.colors.statusbar.url.error.fg = color['red']

## Default foreground color of the URL in the statusbar.
c.colors.statusbar.url.fg = color['base3']

## Foreground color of the URL in the statusbar for hovered links.
c.colors.statusbar.url.hover.fg = color['base2']

## Foreground color of the URL in the statusbar on successful load
c.colors.statusbar.url.success.http.fg = color['base3']

## Foreground color of the URL in the statusbar on successful load
c.colors.statusbar.url.success.https.fg = color['base3']

## Foreground color of the URL in the statusbar when there's a warning.
c.colors.statusbar.url.warn.fg = color['yellow']

## Background color of unselected even tabs.
c.colors.tabs.even.bg = color['base01']

## Foreground color of unselected even tabs.
c.colors.tabs.even.fg = color['base2']

## Color for the tab indicator on errors.
c.colors.tabs.indicator.error = color['red']

## Color gradient start for the tab indicator.
c.colors.tabs.indicator.start = color['violet']

## Color gradient end for the tab indicator.
c.colors.tabs.indicator.stop = color['orange']

## Background color of unselected odd tabs.
c.colors.tabs.odd.bg = color['base01']

## Foreground color of unselected odd tabs.
c.colors.tabs.odd.fg = color['base2']

## Background color of selected even tabs.
c.colors.tabs.selected.even.bg = color['base03']

## Foreground color of selected even tabs.
c.colors.tabs.selected.even.fg = color['base3']

## Background color of selected odd tabs.
c.colors.tabs.selected.odd.bg = color['base03']

## Foreground color of selected odd tabs.
c.colors.tabs.selected.odd.fg = color['base3']