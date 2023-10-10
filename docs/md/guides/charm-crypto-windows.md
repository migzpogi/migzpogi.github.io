# Running charm-crypto in Windows  
For all intents and purposes, we will be using Windows Subsystem for Linux (WSL) to make this work. Any attempt I made 
to make this run natively has been frustratingly unsuccessful. With that being said, let us begin.

## Install Windows Subsystem for Linux (WSL)
This guide will only cover installation of WSL 1. WSL 2 offers a lot of performance improvements so do check it out also.
Full documentation [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Enable WSL
1. Open PowerShell as Administrator and run:
```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
![](https://i.imgur.com/uZsiAoc.png)
2. Restart your machine.

### Install Ubuntu 20.04 LTS
You can always select another distribution if you like.
1. Go to [Ubuntu 20.04](https://www.microsoft.com/store/apps/9n6svws3rx71)
2. Select 'Get'. If a prompt asks you to open the Microsoft Store, just click 'Open'.
![](https://i.imgur.com/dzdMyNh.png)
3. Select 'Install'
![](https://i.imgur.com/jRuRyKz.png)
4. Select 'Launch'. This will take a little bit of time but all future launches should take less than a second. You will 
then need to create a user account and password for your new Linux distribution.
![](https://i.imgur.com/by38oWW.png)
5. You now have access to an Ubuntu terminal. Just type 'Ubuntu' in your Start menu and click the app.
![](https://i.imgur.com/bpUHXLD.png)

## Install Dependencies
Run these commands in your Ubuntu terminal.

### Update apt-get
```
sudo apt-get update
sudo apt-get upgrade
```

### Install subversion
```
sudo apt-get install subversion
```

### Install make
```
sudo apt-get install build-essential
```

### Install m4
```
sudo apt-get install m4
```

### Install python3 setuptools and dev
```
sudo apt-get install python3-setuptools python3-dev
```

### Install GMP
```
sudo apt-get install libgmp-dev
```

### Install flex and bison
```
sudo apt-get -y install flex bison
```

### Install libssl-dev
```
sudo apt-get install libssl-dev
```

## Install charm
Create a folder named `charm_root` in your Windows desktop. This will just simplify things and make the guide easier to 
follow.

### Install PBC
1. Download PBC source [here](https://crypto.stanford.edu/pbc/files/pbc-0.5.14.tar.gz). Put in inside `charm_root` folder.
2. Extract PBC files. In your Ubuntu terminal, run:
```
cd /mnt/c/Users/your_name/Desktop/charm_root
tar -xf pbc-0.5.14.tar.gz
cd pbc-0.5.14
```
![](https://i.imgur.com/cVsBwjh.png)
> [info](:Icon) **NOTE**
> Double check the path of your charm_root folder. Drive letter is case-sensitive (c instead of C)

3. Run:
```
./configure LDFLAGS="-lgmp" 
make
sudo make install
sudo ldconfig
```

### Install charm-crypto 
1. Get the source code [here](https://github.com/JHUISI/charm). Click 'Code' then select 'Download ZIP'.
![](https://i.imgur.com/URnXbKg.png)

2. Put in `charm_root` folder and then extract.  
![](https://i.imgur.com/0uGJ2Ud.png)

3. Run
```
cd /mnt/c/Users/your_name/Desktop/charm_root/charm-dev/charm-dev
sudo ./configure.sh --python=python3
sudo make
sudo make install
sudo ldconfig
```
> [info](:Icon) **NOTE**
> Double check the path of your charm_root folder. Drive letter is case-sensitive (c instead of C)

## Testing
1. Run:
```
python3
>>> import charm
```
---
*07-Feb-2021*