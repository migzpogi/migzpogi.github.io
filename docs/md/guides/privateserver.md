# Setting up a WOTLK private server

## System requirements
This guide uses a 2-Core CPU, 4 GB RAM, and 80 GB disk machine that runs on Debian 10 from [Linode](https://www.linode.com/). I think this can serve up to 30 people max.[Basic Plan - https://www.hostbarrel.net/wowprivate.php](:Footnote)

## Change the time zone
```bash
# Confirm that the current time zone is in UTC 00:00
timedatectl

# List the available time zones
timedatectl list-timezones

# Set the time zone
sudo timedatectl set-timezone <TIME_ZONE>
sudo timedatectl set-timezone Asia/Hong_Kong

# Verify the changes
timedatectl
```

## Add new user with sudo privileges
```bash
# Fill in the password, and skip the other prompts
adduser azcore
usermod -aG sudo azcore

# Verify changes. It should display root
sudo su azcore
sudo whoami
> root
```

## Installing dependencies

### Update sources list for clang-11
Edit sources.list by `sudo vim /etc/apt/sources.list` then append:

```bash | sources.list
deb http://apt.llvm.org/buster/ llvm-toolchain-buster main 
deb-src http://apt.llvm.org/buster/ llvm-toolchain-buster main 
deb http://apt.llvm.org/buster/ llvm-toolchain-buster-10 main 
deb-src http://apt.llvm.org/buster/ llvm-toolchain-buster-10 main 
deb http://apt.llvm.org/buster/ llvm-toolchain-buster-11 main 
deb-src http://apt.llvm.org/buster/ llvm-toolchain-buster-11 main
```
> :Buttons
> > :CopyButton

Install gnupg:
```bash
sudo apt-get install gnupg
```

Add the signature:
```bash
wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key|sudo apt-key add -
> OK
```

Export:
```bash
export CMAKE_C_COMPILER=clang-11
export CMAKE_CXX_COMPILER=clang++-11
```

### Install clang-11, pip3, and other dependencies
```bash
sudo apt-get update && sudo apt-get install git make gcc g++ default-libmysqlclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev mariadb-server libboost-all-dev python3-pip clang-11

# Verify if installed correctly.
clang-11 --version
pip3 --version
```

### Install cmake
```bash
sudo pip3 install cmake --upgrade

# Create link
sudo ln /usr/local/bin/cmake /usr/bin/cmake

# Verify if installed correctly.
cmake --version
```

## Install AzerothCore
```bash
# Go to home directory
cd ~

# Clone the repository
git clone https://github.com/azerothcore/azerothcore-wotlk.git --branch master --single-branch azerothcore

# Run cmake
cd azerothcore
mkdir build
cd build

cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DCMAKE_C_COMPILER=/usr/bin/clang-11 -DCMAKE_CXX_COMPILER=/usr/bin/clang++-11 -DWITH_WARNINGS=1 -DTOOLS=0 -DSCRIPTS=static

# Check available cores
nproc --all

# Install. This will take some time.
make -j <number_of_cores>
make install
```

## Set up MariaDB
Log in to MariaDB shell:
```bash
sudo mysql_secure_installation
# For the prompts: [none]/N/Y/Y/Y/Y

sudo mysql
```

Set the database username and password:

```sql | --term MariaDB [(none)]>
GRANT ALL ON *.* TO 'adminuser'@'%' IDENTIFIED BY 'adminpass' WITH GRANT OPTION;
GRANT ALL ON *.* TO 'adminuser'@'localhost' IDENTIFIED BY 'adminpass' WITH GRANT OPTION;
Flush Privileges;
```

Check if users were added:

```sql | --term MariaDB [mysql]>
select user from user;
exit
```

Edit the configuration:

```bash
sudo vim /etc/mysql/mariadb.conf.d/50-server.cnf

# Bind Address to 0.0.0.0
bind-address = 0.0.0.0

# Restart.
sudo /etc/init.d/mysql restart
```

## Set up UFW
```bash
sudo apt update
sudo apt install ufw

# Blanket block all incoming
sudo ufw default deny incoming

# Blanket allow all outgoing
sudo ufw default allow outgoing

# Allow port 22
sudo ufw allow ssh

# Allow port 3306
sudo ufw allow 3306

# Allow port 3724
sudo ufw allow 3724

# Allow port 8085
sudo ufw allow 8085

# Turn on
sudo ufw enable
```

## Download data files
```bash
# Install unzip
sudo apt install unzip

# Get the files
cd /home/azcore/azeroth-server/
curl -LJO  https://github.com/wowgaming/client-data/releases/download/v12/data.zip --output data.zip
unzip data.zip

# Expected files in /root/azeroth-server
# bin/ Cameras/ dbc/ etc/ maps/ mmaps/ vmaps/
```

## Install screen
```bash
sudo apt-get install screen
screen -v
```

## Set up server config
```bash
cd /home/azcore/azeroth-server/etc/

# Edit authserver.conf.dist
# Go to MYSQL SETTINGS
# Replace username and pass in LoginDatabaseInfo 
vim authserver.conf.dist

# Edit worldserver.conf.dist
# Go to Connections and Directories
# Replace username and pass in 
# LoginDatabaseInfo, WorldDatabaseInfo, CharacterDatabaseInfo 
vim worldserver.conf.dist

# Update data dir
# Go to Connections and Directories
# Replace DataDir
vim worldserver.conf.dist
DataDir = /home/azcore/azeroth-server
```

## Set up database config
```bash
# Go to DB EXPORTER/IMPORTER CONFIGURATIONS
# Change DB_AUTH_CONF, DB_CHARACTERS_CONF, and DB_WORLD_CONF accordingly
cd /home/azcore/azerothcore/conf/dist
vim config.sh

# Run
cd /nome/azcore/azerothcore/apps/db_assembler
bash db_assember.sh

# Choose import-all
import-all

# Choose quit when
# importing WORLD is done
quit
```

## Double check realmlist
```bash
sudo mysql
```

```sql | --term MariaDB [(none)]> 
use acore_auth;
```
If address is 127.0.0.1, change it to your public IP address
```sql | --term MariaDB [acore_auth]> 
select address, name from realmlist;
UPDATE realmlist SET address = '123.456.789.101' WHERE name = 'AzerothCore';
exit
```

## Starting up the server
```bash
cd /home/azcore/azeroth-server/bin

# Copy files
cp /home/azcore/azeroth-server/etc/authserver.conf.dist /home/azcore/azeroth-server/etc/authserver.conf

# Run the first screen
screen -AmdS auth ./authserver

#  Verify
# To "minimize" screen, ctrl-a-d
# To shutdown screen, ctrl c
screen -r auth

# Copy files
cp /home/azcore/azeroth-server/etc/worldserver.conf.dist /home/azcore/azeroth-server/etc/worldserver.conf

# Run the second screen
screen -AmdS world ./worldserver

#  Verify
# To "minimize" screen, ctrl-a-d
# To shutdown screen, ctrl c
screen -r world
```

## Creating an account
```bash | --term AC> 
account create migzpogi migzpogi
account set gmlevel migzpogi 3 -1
```

# Edit realmlist.wtf
```text | realmlist.wtf
set realmlist 123.456.789.101

```
Enjoy! The list of GM commands can be found [here](https://www.azerothcore.org/wiki/gm-commands).

# Footnotes
> :Footnotes

*Updated as of: 29-Oct-2021*
