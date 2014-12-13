#!/bin/sh
java -server -Xmx3g -Xms1024M -XX:PermSize=128m -XX:MaxPermSize=256m -XX:+AggressiveOpts -cp Forge.jar -jar Forge.jar 
