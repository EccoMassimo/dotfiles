#!/bin/bash

#clear the screen first
clear

#apple campus: one infinite loo
while :
do

#store all the operation in a variable to avoid flickering
output=$(

#title, border and empty line
figlet "Screenfetch"
echo "_________________________________________________"
echo

#check status
#awk '/open/ { print "Laptop lid is open" }' /proc/acpi/button/lid/LID/state
#awk '/closed/ { print "Laptop lid is closed " }' /proc/acpi/button/lid/LID/state
#awk '/1/ { print "Power cable is connected" }' /sys/class/power_supply/AC/online
#awk '/0/ { print "Power cable is disconnected" }' /sys/class/power_supply/AC/online

#pipe commands into awk
uname -sr | awk '{ print "Kernel: " $1, $2 }'
sensors | awk '/fan1/ { print "Fan speed: " $2, $3 }'
ip link | awk '/wlp2s0/ { print "Wifi: " $9 }'
lscpu | awk '/name/ { print "CPU: " $3, $5 }'

#storing a command output in a variable and print it
user=$(whoami) && echo "Username is: "$user
host=$(uname -n) && echo "Hostname is: "$host

#print visuals
echo "_________________________________________________"
cowsay "You know how this ends; the CIA sucks my cock. -Terry A. Davis"

#cat ~/ascii.txt

#end program and output
)
clear
echo -e "\e[32m$output\e[0m"
sleep 0.5
done


