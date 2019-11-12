# Massimo's Dotfiles

- Copy each of these files into your ~/ directory. This will update all of the configs and stuff automagically.

- This is mostly intended to work on *Arch Linux*, however it can be interpreted to work with other distros.

## Add this to visudo

`YOUR_USERNAME ALL=(ALL) NOPASSWD: ALL`

## Basic programs to install

- Yay - Install manually via AUR

- SeaMonkey - Extract tarball and run:

`sudo ln -s $PWD/seamonkey/seamonkey-bin /usr/bin/seamonkey`

When you are finished, move the .userjs file to your default profile folder & install ublock origin.
(https://github.com/gorhill/uBlock/releases/download/firefox-legacy-1.16.4.10/uBlock0.firefox-legacy.xpi)

### AUR Packages

`yay -S steam tty-clock minecraft-launcher font-manager`

### Copy this command and run it to install everything 

`sudo pacman -S alsa-utils asciiquarium base-devel cmatrix cowsay discord figlet git htop i3 libreoffice-still lolcat lxappearance man neofetch notepadqq openssh pcmanfm pulseaudio ristretto rxvt-unicode scrot vim vlc xarchiver xfce4-screenshooter xorg-xinit xorg-server`

## Fonts

- Install the Helv font for default font. (File Located in .fonts)
- Install GNU Unifont for i3 and terminals.

- Also install the following for emoji, and asian language support.
`sudo pacman -S noto-fonts-emoji`

`yay -S opendesktop-fonts otf-ipafont ttf-arphic-ukai ttf-arphic-uming ttf-baekmuk ttf-hannom ttf-monapo ttf-mplus ttf-nanum ttf-nanumgothic_coding ttf-sazanami ttf-tw ttf-vlgothic wqy-bitmapfont wqy-microhei wqy-zenhei --noconfirm`

## Other Configuration

- Mouse Acceleration: `xset m 0 0 ; sudo cp .other/50-mouse-acceleration.conf /etc/X11/xorg.conf.d/50-mouse-acceleration.conf`
