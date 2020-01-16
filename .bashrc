# _               _
#| |__   __ _ ___| |__  _ __ ___
#| '_ \ / _` / __| '_ \| '__/ __|
#| |_) | (_| \__ \ | | | | | (__
#|_.__/ \__,_|___/_| |_|_|  \___|

HISTSIZE= HISTFILESIZE= # Infinite history

# Prompt
export PS1="\[\e[36m\][\[\e[m\]\[\e[35m\]\w\[\e[m\]\[\e[36m\]]\[\e[m\] \[\e[37m\]\\$\[\e[m\] "

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
alias screenfetch='bash ~/.scripts/screenfetch.sh'

# Set ls stuff
export LS_OPTIONS='--color=auto'
eval "`dircolors`"
alias ls='ls $LS_OPTIONS -a'

# Safe Guard
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# autocomplete
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi