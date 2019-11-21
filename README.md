# Massimo's Dotfiles

Copy each of these files into your ~/ directory. This will update all of the configs and stuff automagically.

This is mostly intended to work on *Arch Linux* and *Debian 10*, however it can be interpreted to work with other distros.

## Add this to visudo

`YOUR_USERNAME ALL=(ALL) NOPASSWD: ALL`

## Programs

When installing generic program types (tarballs), place them in the ~/Programs folder.

To create a symbolic link use this command: 
`sudo ln -s ~/Programs/PROGRAM/PROGRAM_RUN_FILE /usr/bin/SYMLINK_NAME`

To install .deb packages use this command:
`sudo dpkg -i PACKAGENAME.deb`

### Git

Configure the Git default editor with this command:

`git config core.editor vim`

### Yay

Install the Yay AUR helper from git and use makepkg to built it.

### Browser: Qutebrowser

Install the `qutebrowser` package.

When you are finished, navigate to https://gitlab.com/jgkamat/jblock to download the latest version of `jblock` and clone it into ~/.config/qutebrowser

### Browser: Firefox (& Forks)

Install Firefox or a fork (Seamonkey, Palemoon, IceCat, Seamonkey etc.)

Just move `.other/user.js` into the profile directory for the browser.

Install Ublock Origin via Mozilla Addon Store for later versions and forks.

OR Install Ublock Origin Legacy for older forks (Palemoon & Seamonkey) https://github.com/gorhill/uBlock/releases/download/firefox-legacy-1.16.4.11/uBlock0.firefox-legacy.xpi

### Copy this command and run it to install everything 

`sudo pacman -S alsa-utils arandr asciiquarium audacity base-devel cmatrix cowsay discord feh figlet git htop i3-lock i3-status i3-wm irssi libreoffice-still lolcat lxappearance man mousepad mpv neofetch nitrogen openssh p7zip pcmanfm pulseaudio rxvt-unicode scrot tty-dejavu vim w3m xarchiver xfce4-screenshooter xorg-xinit xorg-server`

`apt install sudo vim xorg rxvt-unicode i3 w3m pcmanfm rofi fonts-dejavu git nitrogen ranger ssh alsa-utils pulseaudio arandr lxappearance cowsay cmatrix mousepad xfce4-screenshooter p7zip man mpv xarchiver libreoffice audacity dbus fonts-noto-color-emoji xfonts-intl-japanese xfonts-intl-chinese irssi`

## AMD Driver Support

Add `non-free` and `contrib` to `/etc/apt/sources.list`

Run This: `sudo apt install firmware-linux firmware-linux-nonfree libdrm-amdgpu1 xserver-xorg-video-amdgpu mesa-opencl-icd mesa-vulkan-drivers libvulkan1 vulkan-tools vulkan-utils vulkan-validationlayers`


## Other Configuration

- Mouse Acceleration: `xset m 0 0 ; sudo cp .other/50-mouse-acceleration.conf /etc/X11/xorg.conf.d/50-mouse-acceleration.conf`
