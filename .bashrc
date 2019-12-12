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
alias dwm='cd Programs/dwm ; sudo make clean install'
alias dwm_ed='vim ~/Programs/dwm/config.h'         
alias neofetch='neofetch --ascii_distro gentoo --disable packages distro'
