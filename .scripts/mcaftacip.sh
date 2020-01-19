#!/bin/bash

function pause(){
   read -p "$*"
}

welcomemsg() { \
	clear
    echo "THIS SCRIPT CAN NOT BE RUN AS ROOT. IF YOU DID GO BACK NOW

Thank you for using Max's Catastrophically Automatic File Transfer and Customized Installation Protocol.
Before the installer continues, you must input your USER.
The script will check if this is a valid user so don't worry if you typed it wrong.
If at any point you want to exit, press [CTRL+C] to quit the installer."
    echo
    echo
	}

choosedotfiles() { \
	clear
	read -e -p "Would you like to install Massimo's custom settings? (y/n)   " choice
	[[ "$choice" == [Yy]* ]] && echo "Cloning dotfiles..." && installdotfiles
	
}

installdotfiles() { \
    clear
	cd /home/"$USER"/
	git clone https://github.com/eccomassimo/dotfiles.git
	mv -f /home/"$USER"/dotfiles/* /home/"$USER"/dotfiles/.* /home/"$USER"/
	cd /home/"$USER"/
	rm -rf dotfiles/
}

chooseprograms() { \
	# prompt to install ungoogled chromium
	clear
	read -e -p "Would you like to install Ungoogled Chromium? (y/n) " choice
	[[ "$choice" == [Yy]* ]] && echo "Installing Ungoogled Chromium..." && installunchromium

	# prompt to install vscodium & frc tools
	clear
	read -e -p "Would you like to install VSCodium? (y/n) " choice
	[[ "$choice" == [Yy]* ]] && echo "Installing VSCodium..." && installvscodium && read -e -p "Would you like to install WPILib for FRC? (y/n) " choice
	[[ "$choice" == [Yy]* ]] && echo "Installing FRC Tools..." && installwpilib
}

installprograms() { \
    clear
	sudo dpkg --add-architecture i386
	sudo apt install cowsay cmatrix libreoffice audacity irssi lynx htop steam lolcat figlet screenkey obs-studio youtube-dl lutris gimp gnome-tweaks exfat-utils exfat-fuse openjdk-8-jre openjdk-11-jre openjdk-8-jdk openjdk-11-jdk playonlinux virtualbox gnome-shell-extension-dashtodock gnome-shell-extension-multi-monitors gnome-shell-extension-no-annoyance mlocate
	sudo apt remove firefox
	sudo apt autoremove
	cd /home/"$USER"/
	mkdir .programs
	clear
}

installunchromium(){ \
	cd /home/"$USER"/.programs
	wget https://github.com/Eloston/ungoogled-chromium-binaries/releases/download/78.0.3904.108-2.1/ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	tar -xf ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	rm ungoogled-chromium_78.0.3904.108-2.1_linux.tar.xz
	sleep .5
	cd /home/"$USER"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux
	mv -f chrome_sandbox chrome-sandbox
	sudo chmod 4755 /home/"$USER"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-sandbox
	sudo chown root /home/"$USER"/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-sandbox

    touch /home/$USER/.local/share/applications/chromium-devel.desktop
    echo "[Desktop Entry]
Version=1.0
Encoding=UTF-8
Name=Ungoogled Chromium
Exec=/home/$USER/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/chrome-wrapper %U
Terminal=false
Icon=/home/$USER/.programs/ungoogled-chromium_78.0.3904.108-2.1_linux/icon.png
Type=Application
Categories=Application;Network;WebBrowser;
MimeType=x-scheme-handler/unknown;x-scheme-handler/about;x-scheme-handler/https;x-scheme-handler/http;text/html;text/xml;application/xhtml_xml;" > /home/$USER/.local/share/applications/chromium-devel.desktop
}

installvscodium() { \
	cd /home/"$USER"/.programs
	wget https://github.com/VSCodium/vscodium/releases/download/1.41.1/codium_1.41.1-1576787344_amd64.deb
	sudo dpkg -i codium_1.41.1-1576787344_amd64.deb
	rm -f codium_1.41.1-1576787344_amd64.deb
	codium --install-extension vscjava.vscode-java-pack 
	codium --install-extension zhuangtongfa.material-theme
	clear
}

installwpilib() { \
	mkdir -p /home/"$USER"/wpilib/2020
	cd /home/"$USER"/wpilib/2020
	wget --output-document=WPILib_Linux.tar.gz `curl -s https://api.github.com/repos/wpilibsuite/allwpilib/releases | grep browser_download_url | grep 'Linux' | head -n 1 | cut -d '"' -f 4`
	tar -xf WPILib_Linux.tar.gz
	rm -rf WPILib_Linux.tar.gz
	cd /home/"$USER"/wpilib/2020/vsCodeExtensions
	codium --install-extension JavaDebug.vsix 
	codium --install-extension JavaDeps.vsix 
	codium --install-extension JavaLang.vsix 
	codium --install-extension WPILib.vsix
	cd /home/"$USER"/wpilib/2020/tools
	java -jar ToolsUpdater.jar
	#Set Desktop Entries
	touch /home/$USER/.local/share/applications/pathweaver.desktop
	echo "[Desktop Entry]
Version=2020
Encoding=UTF-8
Name=FRC PathWeaver
Exec=java -jar /home/$USER/wpilib/2020/tools/PathWeaver.jar
Terminal=false
Icon=/home/$USER/.programs/wpilib/icon.png
Type=Application
Categories=Application;FRC;WPILib;" > /home/$USER/.local/share/applications/pathweaver.desktop

	touch /home/$USER/.local/share/applications/shuffleboard.desktop
	echo "[Desktop Entry]
Version=2020
Encoding=UTF-8
Name=FRC ShuffleBoard
Exec=java -jar /home/$USER/wpilib/2020/tools/shuffleboard.jar
Terminal=false
Icon=/home/$USER/.programs/wpilib/icon.png
Type=Application
Categories=Application;FRC;WPILib;" > /home/$USER/.local/share/applications/shuffleboard.desktop

	touch /home/$USER/.local/share/applications/outlineviewer.desktop
	echo "[Desktop Entry]
Version=2020
Encoding=UTF-8
Name=FRC OutlineViewer
Exec=java -jar /home/$USER/wpilib/2020/tools/OutlineViewer.jar
Terminal=false
Icon=/home/$USER/.programs/wpilib/icon.png
Type=Application
Categories=Application;FRC;WPILib;" > /home/$USER/.local/share/applications/outlineviewer.desktop

	touch /home/$USER/.local/share/applications/robotbuilder.desktop
	echo "[Desktop Entry]
Version=2020
Encoding=UTF-8
Name=FRC RobotBuilder
Exec=java -jar /home/$USER/wpilib/2020/tools/RobotBuilder.jar
Terminal=false
Icon=/home/$USER/.programs/wpilib/icon.png
Type=Application
Categories=Application;FRC;WPILib;" > /home/$USER/.local/share/applications/robotbuilder.desktop

	touch /home/$USER/.local/share/applications/smartdashboard.desktop
	echo "[Desktop Entry]
Version=2020
Encoding=UTF-8
Name=FRC SmartDashboard
Exec=java -jar /home/$USER/wpilib/2020/tools/SmartDashboard.jar
Terminal=false
Icon=/home/$USER/.programs/wpilib/icon.png
Type=Application
Categories=Application;FRC;WPILib;" > /home/$USER/.local/share/applications/smartdashboard.desktop

	touch /home/$USER/.local/share/applications/toolsupdater.desktop
	echo "[Desktop Entry]
Version=2020
Encoding=UTF-8
Name=FRC ToolsUpdater
Exec=java -jar /home/$USER/wpilib/2020/tools/ToolsUpdater.jar
Terminal=false
Icon=/home/$USER/.programs/wpilib/icon.png
Type=Application
Categories=Application;FRC;WPILib;" > /home/$USER/.local/share/applications/toolsupdater.desktop
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
choosedotfiles
chooseprograms
exitmsg
pause "Press [Return] key to continue..."
clear
