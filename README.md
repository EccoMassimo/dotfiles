# Massimo's Dotfiles:

- Copy each of these files into your ~/ directory. This will update all of the configs and stuff automagically.

- This is mostly intended to work on *Arch Linux*, however it can be interpreted to work with other distros.

## Add this to visudo

*username* ALL=(ALL) NOPASSWD: ALL

## Basic programs to install

- Yay: Install manually via AUR

- GNU IceCat - Extract tarball and run:

- sudo ln -s $PWD/icecat/icecat-bin /usr/bin/icecat

### Copy this command and run it to install everything 

`sudo pacman -S alsa-utils asciiquarium cmatrix cowsay discord feh figlet git hexchat htop i3 libreoffice-still lolcat man mousepad mpv neofetch openssh pcmanfm pulseaudio steam tty-clock urxvt vim xarchiver xfce4-screenshooter xfce4-settings xinit xorg-server`

## Fonts

`sudo pacman -S noto-fonts-emoji`

`yay -S opendesktop-fonts otf-ipafont ttf-arphic-ukai ttf-arphic-uming ttf-baekmuk ttf-hannom ttf-monapo ttf-mplus ttf-nanum ttf-nanumgothic_coding ttf-sazanami ttf-tw ttf-vlgothic wqy-bitmapfont wqy-microhei wqy-zenhei --noconfirm`

