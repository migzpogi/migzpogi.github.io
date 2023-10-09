# Installing Node.js On Ubuntu 20.04
There are several ways to install Node and npm on Ubuntu and it can be found [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04). I prefer using the third option which was using the **Node Version Manager**. Complete instructions for NVM can be found [here](https://github.com/nvm-sh/nvm).

## Install and update script
Run either one of these commands:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

## Source your shell
Depending on the shell you are using, run of these commands:
```bash
source ~/.bashrc  # --> bash
source ~/.zshrc   # --> zsh
. ~/.profile      # --> ksh
```

## Testing
```bash
nvm -v
> 0.39.0  # --> or whatever the latest version is
```

## Installing Node.js and npm
List the available versions
```bash
nvm list-remote
> ...
>   v15.14.0
>   v16.0.0
>   v16.1.0
>   v16.2.0
```

Select your desired version
```bash
nvm install v16.2.0
```

Check your Node.js and npm  versions
```bash
node -v
> v16.2.0
npm -v
> 0.39.0
```