#!/bin/sh
# Max's Catastrophically Automatic File Transfer and Customized Installation Protocol (MCAFTACIP)
# by Max Amundsen <max@maxamundsen.xyz>
# License: WTFPLv2

# Functions
welcomemsg() { \
	whiptail --title "Welcome!" --msgbox "Thank you for downloading Max's Catastrophically Automatic File Transfer and Customized Installation Protocol. This script will install all the programs and utils you need to get Work™ done. \\n\\n-Max" 12 60
	}

choosedotfiles() { \
	edition="$(whiptail --title "Dotfiles" --menu "Select dotfiles (config files) to import for the user:" 12 70 3 0 "Max's default configuration (recommended)." 1 "Don't import dotfiles (scary mode)." 3>&1 1>&2 2>&3 3>&1)" || error "User quit the installer."
	}

getuser() { \
	# Prompts user for new username an password.
	username=$(whiptail --inputbox "Please enter your username." 10 60 3>&1 1>&2 2>&3 3>&1) || error "User quit the installer."
	while ! echo "$username" | grep '/home' /etc/passwd | cut -d: -f1 | grep -w "$username" >/dev/null 2>&1; do
		username=$(whiptail --inputbox "Username not valid. Please enter a valid system user." 10 60 3>&1 1>&2 2>&3 3>&1) || error "User quit the installer."
	done
	}

installdotfiles(){ \
if echo "$edition" | grep '0' >/dev/null 2>&1; then
	cd /home/"$username"
	git clone https://github.com/eccomassimo/dotfiles.git
	#cd /home/"$username"/dotfiles
	mv /home/"$username"/dotfiles/* /home/"$username"/dotfiles/.* /home/"$username"/
	cd /home/"$username"
	rm -rf dotfiles/
	fi

if echo "$edition" | grep '1' >/dev/null 2>&1; then
	cd /home/"$username"
	fi
}

chooseprograms(){ \
	programs="$(whiptail --title "Programs" --menu "Select Programs to install:" 10 80 2 0 "Everything you need to get started (recommended)." 1 "None (Don't install anything)." 3>&1 1>&2 2>&3 3>&1)" || error "User quit the installer."	
}

installprograms(){ \
if echo "$programs" | grep '0' >/dev/null 2>&1; then
	sudo dpkg --add-architecture i386
	sudo apt install cowsay cmatrix libreoffice audacity irssi lynx htop ttf-mscorefonts-installer steam lolcat figlet screenkey obs-studio youtube-dl lutris gimp
	cd /home/"$username"
	mkdir .programs
	installunchromium
	fi

if echo "$programs" | grep '1' >/dev/null 2>&1; then
	echo "nope"
	fi
}

installunchromium(){ \
	cd /home/"$username"/.programs
	wget https://github.com/Eloston/ungoogled-chromium-binaries/releases/download/78.0.3904.108-2.1/ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	tar -xf ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	rm ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	sleep .5
	cd /home/"$username"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux
	mv chrome_sandbox chrome-sandbox
	sudo chmod 4755 /home/"$username"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-sandbox
	sudo chown root /home/"$username"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-sandbox
	

}

error() { clear; printf "Installation could not complete:\\n%s\\n" "$1"; exit;}

finishmsg() { \
	whiptail --title "Installation Complete!" --msgbox "Just kidding lel. Thank you for installing MCAFTACIP! \\n\\n To start your display server, type the command startx into the console. \\n\\n If you are using dwm, press Mod+Shift+F1 to open up the help screen." 11 90
	}

# Execute (in this order)
welcomemsg
getuser 
choosedotfiles 
installdotfiles 
chooseprograms
installprograms
finishmsg

clear
echo "done = good;"
