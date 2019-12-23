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
alias dwm='cd ~/dwm ; sudo make clean install'
alias dwm-e='sudo vim ~/dwm/config.h'
alias st='cd ~/st ; sudo make clean install'
alias st-e='sudo vim ~/st/config.h'
alias neofetch='neofetch --ascii_distro gentoo --disable packages distro'

# Set ls stuff
export LS_OPTIONS='--color=auto'
eval "`dircolors`"
alias ls='ls $LS_OPTIONS -a'

# Safe Guard
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Colors
if [ "$TERM" = "linux" ]; then
  /bin/echo -e "
  \e]P0282a2e
  \e]P1a54242
  \e]P28c9440
  \e]P3de935f
  \e]P45f819d
  \e]P585678f
  \e]P65e8d87
  \e]P7707880
  \e]P8373b41
  \e]P9cc6666
  \e]PAb5bd68
  \e]PBf0c674
  \e]PC81a2be
  \e]PDb294bb
  \e]PE8abeb7
  \e]PFc5c8c6
  "
  # get rid of artifacts
  clear
fi
