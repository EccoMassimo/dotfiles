#!/bin/bash

function pause(){
   read -p "$*"
}

welcomemsg() { \
	clear
    printf "Thanks for downloading Max's Catastrophically Automatic File Transfer and Customized Installation Protocol.\\n%s\\n Before the installer continues, you must input your username.\\n The script will check if this is a valid user so don't worry\\n if you typed it wrong.\\n\\n If at any point you want to exit, press [CTRL+C] to quit the installer."
    echo
    echo
	}

getuser() { \
    clear
    echo "Input username:"
    read username

while ! echo "$username" | grep '/home' /etc/passwd | cut -d: -f1 | grep -w "$username" ; do
    echo "Username not valid. Try again."
    sleep 1
    getuser
    done
}

choosedotfiles() { \
    clear
    printf "Choose which dotfiles you would like to import.\\n%s 0. Max's default config\\n 1. Do not import dotfiles"
    echo
    echo
    echo "Enter selection (0) or (1) :"
    read dotfiles
    installdotfiles
}

installdotfiles() { \
if ! echo "$dotfiles" | grep -E '(0|1)' ; then
   echo "Option not valid. Try again."
   sleep 1
   choosedotfiles
   fi

if echo "$dotfiles" | grep '0' ; then
    clear
	cd /home/"$username"
	git clone https://github.com/eccomassimo/dotfiles.git
	mv -f /home/"$username"/dotfiles/* /home/"$username"/dotfiles/.* /home/"$username"/
	cd /home/"$username"
	rm -rf dotfiles/
	fi

if echo "$dotfiles" | grep '1' ; then
	cd /home/"$username"
    clear
	fi
}

chooseprograms() { \
    clear
    printf "Would you like to install additional programs?\\n%s 0. Everything you need to get started\\n 1. Do not install additional programs." 
    echo
    echo
    echo "Enter selection (0) or (1) :"
    read programs
    installprograms
}

installprograms() { \
if ! echo "$programs" | grep -E '(0|1)' ; then
   echo "Option not valid. Try again."
   sleep 1
   chooseprograms
   fi

if echo "$programs" | grep '0' ; then
    clear
	sudo dpkg --add-architecture i386
	sudo apt install cowsay cmatrix libreoffice audacity irssi lynx htop ttf-mscorefonts-installer steam lolcat figlet screenkey obs-studio youtube-dl lutris gimp plank
	cd /home/"$username"
	mkdir .programs
	installunchromium
	fi

if echo "$programs" | grep '1' ; then
    clear
	echo "No programs installed."
	fi
}

installunchromium(){ \
	cd /home/"$username"/.programs
	wget https://github.com/Eloston/ungoogled-chromium-binaries/releases/download/78.0.3904.108-2.1/ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	tar -xf ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	rm ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	sleep .5
	cd /home/"$username"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux
	mv -f chrome_sandbox chrome-sandbox
	sudo chmod 4755 /home/"$username"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-sandbox
	sudo chown root /home/"$username"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-sandbox

    echo "[Desktop Entry]
Version=1.0
Encoding=UTF-8
Name=Ungoogled Chromium
Exec=/home/$username/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-wrapper %U
Terminal=false
Icon=/home/$username/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/icon.png
Type=Application
Categories=Application;Network;WebBrowser;
MimeType=x-scheme-handler/unknown;x-scheme-handler/about;x-scheme-handler/https;x-scheme-handler/http;text/html;text/xml;application/xhtml_xml;" > /home/$username/.local/share/applications/chromium-devel.desktop
}

exitmsg() { \
	clear
    echo "done = good;"
    echo
    echo
	}

# Things that are executed (in order)
welcomemsg
pause "Press [Return] key to continue..."
getuser
choosedotfiles
chooseprograms
exitmsg
pause "Press [Return] key to continue..."
clear

