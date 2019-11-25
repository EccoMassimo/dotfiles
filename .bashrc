# Massimo's bashrc

# Custom thing that says your username
export PS1="\[$(tput bold)\]\[\033[38;5;2m\]\u@\H\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput bold)\]\[$(tput sgr0)\]\[\033[38;5;12m\]\w\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;15m\]\\$ \[$(tput sgr0)\]"

# Aliases
alias ctd='ssh crossthedesert@crossthedesert.dev'
alias ..='cd ..'
alias ls='ls -a'
alias grep='grep --color=auto'
alias bc='bc -l'
