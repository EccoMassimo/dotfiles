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

installdotfiles() { \
    clear
	cd /home/"$username"
	git clone https://github.com/eccomassimo/dotfiles.git
	mv -f /home/"$username"/dotfiles/* /home/"$username"/dotfiles/.* /home/"$username"/
	cd /home/"$username"
	rm -rf dotfiles/
}

installprograms() { \
    clear
	sudo dpkg --add-architecture i386
	sudo apt install cowsay cmatrix libreoffice audacity irssi lynx htop steam lolcat figlet screenkey obs-studio youtube-dl lutris gimp --no-install-recommends
	cd /home/"$username"
	mkdir .programs
	installunchromium
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

    touch /home/$username/.local/share/applications/ungoogled-chromium.desktop
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
installdotfiles
installprograms
exitmsg
pause "Press [Return] key to continue..."
clear

