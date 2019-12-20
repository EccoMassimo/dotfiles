# _               _
#| |__   __ _ ___| |__  _ __ ___
#| '_ \ / _` / __| '_ \| '__/ __|
#| |_) | (_| \__ \ | | | | | (__
#|_.__/ \__,_|___/_| |_|_|  \___|

stty -ixon # Disable ctrl-s and ctrl-q
HISTSIZE= HISTFILESIZE= # Infinite history

# Prompt
export PS1="\[\e[37;44m\]\u\[\e[m\]\[\e[44m\]@\[\e[m\]\[\e[44m\]\h\[\e[m\] \[\e[30;47m\]\w\[\e[m\] \\$ "

# Aliases
alias ctd='ssh crossthedesert@crossthedesert.dev'
alias ..='cd ..'
alias grep='grep --color=auto'
alias bc='bc -l'
alias mkdir='mkdir -pv'
alias vi='vim'
alias svi='sudo vim'
alias vis='vis "+set si"'
alias edit='vim'
alias root='sudo -i'
alias su='sudo -i'
alias dwm='cd ~/mibs-wm ; sudo make clean install'
alias dwm-e='sudo vim ~/mibs-wm/config.h'
alias st='cd ~/mibs-terminal ; sudo make clean install'
alias st-e='sudo vim ~/mibs-terminal/config.h'
alias neofetch='neofetch --ascii_distro gentoo --disable packages distro'

# Set ls stuff
export LS_OPTIONS='--color=auto'
eval "`dircolors`"
alias ls='ls $LS_OPTIONS -a'

# Safe Guard
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
