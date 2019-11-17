# Massimo's Dotfiles

- Copy each of these files into your ~/ directory. This will update all of the configs and stuff automagically.

- This is mostly intended to work on *Arch Linux*, however it can be interpreted to work with other distros.

## Add this to visudo

`YOUR_USERNAME ALL=(ALL) NOPASSWD: ALL`

## Programs

- When installing generic program types (tarballs), place them in the ~/Programs folder.
- To create a symbolic link use this command:
`sudo ln -s PROGRAM_RUN_FILE /usr/bin/SYMLINK_NAME`

### Yay

- Install the Yay AUR helper from git and use makepkg to built it.

### Browser

- Install the `qutebrowser` package.

- When you are finished, navigate to https://gitlab.com/jgkamat/jblock to download the latest version of `jblock` and clone it into ~/.config/qutebrowser

### AUR Packages

`yay -S steam tty-clock minecraft-launcher font-manager`

### Copy this command and run it to install everything 

`sudo pacman -S alsa-utils asciiquarium audacity base-devel cmatrix cowsay feh figlet git hexchat htop i3 libreoffice-still lolcat lxappearance man mpv neofetch notepadqq openssh pcmanfm pulseaudio qutebrowser rxvt-unicode scrot vim vlc xarchiver xfce4-screenshooter xorg-xinit xorg-server`

## Fonts

- Install the DejaVu Font Family

- Also install the following for emoji, and asian language support.
`sudo pacman -S noto-fonts-emoji`

`yay -S opendesktop-fonts otf-ipafont ttf-arphic-ukai ttf-arphic-uming ttf-baekmuk ttf-hannom ttf-monapo ttf-mplus ttf-nanum ttf-nanumgothic_coding ttf-sazanami ttf-tw ttf-vlgothic wqy-bitmapfont wqy-microhei wqy-zenhei --noconfirm`

## Other Configuration

- Mouse Acceleration: `xset m 0 0 ; sudo cp .other/50-mouse-acceleration.conf /etc/X11/xorg.conf.d/50-mouse-acceleration.conf`
