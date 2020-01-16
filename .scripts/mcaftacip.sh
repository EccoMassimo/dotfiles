#!/bin/bash

function pause(){
   read -p "$*"
}

welcomemsg() { \
	clear
    echo "THIS SCRIPT CAN NOT BE RUN AS ROOT. IF YOU DID GO BACK NOW

Thank you for using Max's Catastrophically Automatic File Transfer and Customized Installation Protocol.
Before the installer continues, you must input your username.
The script will check if this is a valid user so don't worry if you typed it wrong.
If at any point you want to exit, press [CTRL+C] to quit the installer."
    echo
    echo
	}

getuser() { \
    clear
    echo "Input username:"
    read username

while ! echo "$username" | grep '/home' /etc/passwd | cut -d: -f1 | grep -w "$username" >/dev/null ; do
    echo "Username not valid. Try again."
    sleep 1
    getuser
    done
}

choosedotfiles() { \
	clear
	read -e -p "Would you like to clone the dotfiles repo? (y/n)" choice
	[[ "$choice" == [Yy]* ]] && echo "Cloning dotfiles..." && installdotfiles
	
}


installdotfiles() { \
    clear
	cd /home/"$username"/
	git clone https://github.com/eccomassimo/dotfiles.git
	mv -f /home/"$username"/dotfiles/* /home/"$username"/dotfiles/.* /home/"$username"/
	cd /home/"$username"/
	rm -rf dotfiles/
}

chooseprograms() { \
	# prompt to install ungoogled chromium
	clear
	read -e -p "Would you like to install Ungoogled Chromium? (y/n)" choice
	[[ "$choice" == [Yy]* ]] && echo "Installing Ungoogled Chromium..." && installunchromium

	# prompt to install vscodium & frc tools
	clear
	read -e -p "Would you like to install VSCodium? (y/n)" choice
	[[ "$choice" == [Yy]* ]] && echo "Installing VSCodium..." && installvscodium && read -e -p "Would you like to install WPILib for FRC? (y/n)" choice
	[[ "$choice" == [Yy]* ]] && echo "Installing FRC Tools..." && installwpilib
}

installprograms() { \
    clear
	sudo dpkg --add-architecture i386
	sudo apt install cowsay cmatrix libreoffice audacity irssi lynx htop steam lolcat figlet screenkey obs-studio youtube-dl lutris gimp gnome-tweaks exfat-utils exfat-fuse openjdk-8-jre openjdk-11-jre openjdk-8-jdk openjdk-11-jdk playonlinux virtualbox gnome-shell-extension-dashtodock gnome-shell-extension-multi-monitors gnome-shell-extension-no-annoyance mlocate
	sudo apt remove firefox
	sudo apt autoremove
	cd /home/"$username"/
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

    touch /home/$username/.local/share/applications/chromium-devel.desktop
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

installvscodium() { \
	cd /home/"$username"/
	mkdir .programs 
	cd /home/"$username"/.programs
	wget https://github.com/VSCodium/vscodium/releases/download/1.41.1/codium_1.41.1-1576787344_amd64.deb
	sudo dpkg -i codium_1.41.1-1576787344_amd64.deb
	rm -f codium_1.41.1-1576787344_amd64.deb
	codium --install-extension visualstudioexptteam.vscodeintellicode eamodio.gitlens vscjava.vscode-java-pack siddharthkp.codesandbox-black zhuangtongfa.material-theme
	clear
}

installwpilib() { \
	cd /home/"$username"/
	mkdir wpilib
	cd wpilib
	mkdir 2020
	wget https://github.com/wpilibsuite/allwpilib/releases/download/v2020.1.2/WPILib_Linux-2020.1.2.tar.gz
	tar -xf WPILib_Linux-2020.1.2.tar.gz
	sudo rm -rf WPILib_Linux-2020.1.2.tar.gz
	cd vsCodeExtensions
	codium --install-extension JavaDebug.vsix JavaDeps.vsix JavaLang.vsix WPILib.vsix
	clear
}


exitmsg() { \
	clear
    echo "done = good;"
	echo
    echo "The installer has finished."
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
