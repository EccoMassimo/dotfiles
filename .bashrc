# Massimo's bashrc

# PS1

export PS1="\[$(tput bold)\]\[\033[38;5;2m\]\u@\H\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput bold)\]\[$(tput sgr0)\]\[\033[38;5;12m\]\w\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;15m\]\\$ \[$(tput sgr0)\]"

#export PS1="\[\e[1;30m\][$$:$PPID - \j:\!\[\e[1;30m\]]\[\e[0;36m\] \t \[\e[1;30m\][\[\e[1;34m\]\u@\H\[\e[1;30m\]:\[\e[0;37m\]${SSH_TTY:-o} \[\e[0;32m\]+${SHLVL}\[\e[1;30m\]] \[\e[1;37m\]\w \n\$ "

#export PS1="\[\e[32m\][\[\e[m\]\[\e[36m\]\w\[\e[m\]\[\e[32m\]]\[\e[m\] "

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
