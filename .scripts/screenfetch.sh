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

#display the things
dte="$(date +"%A, %B %d | %l:%M%p")"
echo "$dte"
echo

#awk '/open/ { print "Laptop lid is open" }' /proc/acpi/button/lid/LID/state
#awk '/closed/ { print "Laptop lid is closed " }' /proc/acpi/button/lid/LID/state
#awk '/1/ { print "Power cable is connected" }' /sys/class/power_supply/AC/online
#awk '/0/ { print "Power cable is disconnected" }' /sys/class/power_supply/AC/online

uname -sr | awk '{ print "Kernel: " $1, $2 }'
ip link | awk '/wlp2s0/ { print "Wifi: " $9 }'
lscpu | awk '/name/ { print "CPU: " $3, $5 }'
echo

#Display Hardware Usage

read cpu a b c previdle rest < /proc/stat   #CPU
prevtotal=$((a+b+c+previdle))
sleep 0.5
read cpu a b c idle rest < /proc/stat
total=$((a+b+c+idle))
cpu=$((100*( (total-prevtotal) - (idle-previdle) ) / (total-prevtotal) ))
echo "CPU Usage: $cpu%"

mem=`free | awk '/Mem/ {printf "%d MiB/%d MiB\n", $3 / 1024.0, $2 / 1024.0 }'` #MEM
echo "Memory Usage: $mem"

sensors | awk '/fan1/ { print "Fan speed: " $2, $3 }' #Fan Speed

#storing a command output in a variable and print it
echo
user=$(whoami) && echo "Username is: "$user
host=$(uname -n) && echo "Hostname is: "$host

#print visuals
echo "_________________________________________________"

#end program and output
)
clear
echo "$output"

sleep 0.5
done


