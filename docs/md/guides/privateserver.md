# Setting up a WOTLK private server
*Updated as of: 27-Oct-2021*

## System requirements
This guide uses a 2-Core CPU, 4 GB RAM, 80 GB disk machine that runs on Debian 10 from [Linode](https://www.linode.com/). It **can** serve up to 10 people. I guess. 

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
