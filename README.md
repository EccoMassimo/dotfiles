# Massimo's Dotfiles

Copy each of these files into your ~/ directory. This will update all of the configs and stuff automagically.

This is mostly intended to work on *Debian 10*, however it can be interpreted to work with other distros.

## Add this to visudo

`YOUR_USERNAME ALL=(ALL) NOPASSWD: ALL`

## Programs

When installing generic program types (tarballs), place them in the ~/Programs folder.

To create a symbolic link use this command: 
`sudo ln -s ~/Programs/PROGRAM/PROGRAM_RUN_FILE /usr/bin/SYMLINK_NAME`

To install .deb packages use this command:
`sudo dpkg -i PACKAGENAME.deb`

To enable 32 bit support:
`sudo dpkg --add-architecture i386`

Fix Broken:
`sudo apt --fix-broken install`

### Git

Configure the Git default editor with this command:

`git config core.editor vim`

### Browser: Qutebrowser

Install the `qutebrowser` package.

When you are finished, navigate to https://gitlab.com/jgkamat/jblock to download the latest version of `jblock` and clone it into ~/.config/qutebrowser

### Browser: Firefox (& Forks)

Install Firefox or a fork (Seamonkey, Palemoon, IceCat, Seamonkey etc.)

Just move `.other/user.js` into the profile directory for the browser.

Install Ublock Origin via Mozilla Addon Store for later versions and forks.

OR Install Ublock Origin Legacy for older forks (Palemoon & Seamonkey) https://github.com/gorhill/uBlock/releases/download/firefox-legacy-1.16.4.11/uBlock0.firefox-legacy.xpi

### Java 

`wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -`

`sudo add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/`

`sudo apt update -y`

`sudo apt install adoptopenjdk-8-hotspot -y`

### Etcher

`echo "deb https://deb.etcher.io stable etcher" | sudo tee /etc/apt/sources.list.d/balena-etcher.list`

`sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 379CE192D401AB61`

`sudo apt-get update`
`sudo apt-get install balena-etcher-electron`

### Copy this command and run it to install everything 

Main Packages:
`apt install sudo vim xorg rxvt-unicode i3 w3m pcmanfm rofi fonts-dejavu git nitrogen ranger ssh alsa-utils pulseaudio arandr lxappearance cowsay cmatrix mousepad xfce4-screenshooter p7zip man mpv xarchiver libreoffice audacity dbus fonts-noto-color-emoji fonts-arphic-uming fonts-wqy-zenhei fonts-unfonts-core fonts-lexi-saebom irssi feh htop neofetch ntp ttf-mscorefonts-installer software-properties-common steam bc ed wine wine32 mono-complete`

## AMD Driver Support

Add `non-free` and `contrib` to `/etc/apt/sources.list`

Run This: `sudo apt install firmware-linux firmware-linux-nonfree libdrm-amdgpu1 xserver-xorg-video-amdgpu mesa-opencl-icd mesa-vulkan-drivers libvulkan1 vulkan-tools vulkan-utils vulkan-validationlayers`


## Other Configuration

Mouse Acceleration: `xset m 0 0 ; sudo cp .other/50-mouse-acceleration.conf /etc/X11/xorg.conf.d/50-mouse-acceleration.conf`

Clock: `sudo timedatectl set-timezone America/New_York`

