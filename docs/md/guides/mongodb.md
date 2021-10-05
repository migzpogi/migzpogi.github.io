# Installing MongoDB in Debian 10
This will install **MongoDB 5.0 Community Edition** using the `apt` package manager for **64-Bit Debian releases**.

## Initial Preparations
### Check if architecture is 64-bit
```bash
uname -m
> x86_64
```

### Create a new user
```bash
adduser mongouser
usermod -aG sudo mongouser # --> -aG is for append Groups
sudo su mongouser
sudo whoami
> root
```

## Getting MongoDB
### Import the public key
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
> OK
```

### Create sources list
```bash
echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

### Install the package
```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Verify if successful
```bash
mongod --version
```

## Setting up the server
### Start the service
```bash
sudo service mongod start
sudo service mongod status
```

### Use the mongodb shell and switch to admin database
```bash
mongosh
use admin
```

### Create an admin user
```bash
db.createUser(
  {
    user: "mongoadminuser",    // --> set your username
    pwd: passwordPrompt(),     // --> clear text, or prompt
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
```

### Restart and exit
```bash
db.adminCommand( { shutdown: 1 } )
exit
```

### Change configuration
```bash
sudo vim /etc/mongod.conf
```
Configuration file should look like this:
```
net:
  bindIp: xxx.xxx.xxx.xxx  // --> IP Address

security:  // --> remove comment, and add authorization
    authorization: enabled
```

### Change permissions
```bash
sudo chown -R mongodb:mongodb /var/lib/mongodb
```

### Restart the service
```bash
sudo service mongod restart
sudo service mongod status
```

### Change socket permissions
```bash
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
```

# Connecting using Robo 3T

# Sources
* [Installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)
* [Authentication](https://docs.mongodb.com/manual/tutorial/configure-scram-client-authentication/)