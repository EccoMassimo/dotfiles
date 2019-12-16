# _               _
#| |__   __ _ ___| |__  _ __ ___ 
#| '_ \ / _` / __| '_ \| '__/ __|
#| |_) | (_| \__ \ | | | | | (__ 
#|_.__/ \__,_|___/_| |_|_|  \___|
                                
stty -ixon # Disable ctrl-s and ctrl-q
HISTSIZE= HISTFILESIZE= # Infinite history

# Prompt 
export PS1="\[$(tput bold)\]\[\033[38;5;2m\]\u@\H\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput bold)\]\[$(tput sgr0)\]\[\033[38;5;12m\]\w\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;15m\]\\$ \[$(tput sgr0)\]"

# Aliases
alias ctd='ssh crossthedesert@crossthedesert.dev'
alias ..='cd ..'
alias ls='ls -a'
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

if [ "$TERM" = "linux" ]; then
  /bin/echo -e "
  \e]P01d1f21
  \e]P1cc6666
  \e]P2b5bd68
  \e]P3f0c674
  \e]P481a2be
  \e]P5b294bb
  \e]P68abeb7
  \e]P7c5c8c6
  \e]P8969896
  \e]P9cc6666
  \e]PAb5bd68
  \e]PBf0c674
  \e]PC81a2be
  \e]PDb294bb
  \e]PE8abeb7
  \e]PFffffff
  "
  # get rid of artifacts
  clear
fi
