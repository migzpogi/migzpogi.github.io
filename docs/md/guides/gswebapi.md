# GearScore Web API

GearScore is an addon for the game World of Warcraft that calculates a player's item score. It helps in estimating a character's readiness for certain dungeons and raid encounters. There is a limited (or close to none) resource on how one can check an item's gear score without opening up the game. This web API fills in that gap.

![Screenshot](https://i.imgur.com/4dtt0F1.png)
![API](https://i.imgur.com/FAsOxja.png)

## Inspiration

The idea came primarily from my need to check an item's gear score programmatically. There is a bot called [Snuske](https://github.com/mortenmoulder/Snuske) that lets you do this through Discord and it is achieved by querying a database that contains a list of items together with their corresponding gear score. Exposing this to an endpoint would be a good idea.

## Database
### Install MongoDB
Check out my guide on how to install and set up a MongoDB server [here](/guides/mongodb).

### Create a user with restore privileges
* Log in to mongosh
```bash
mongosh --host [host_ip] --port 27017 -u [admin_username] -p [admin_password] --authenticationDatabase admin
use admin
>  switched to db admin
```

* Create a user that has restore privileges
```
db.createUser({
  user: 'youruser',
  pwd: 'yourpass', // --> set password
  roles: ['restore']
});
```
> :Buttons
> > :CopyButton

* Exit mongosh
```bash | --term admin>
exit
```

### Install git

* Install git to clone Snuske repository
```bash
sudo apt update
sudo apt install git
cd /home/mongouser
git clone https://github.com/mortenmoulder/Snuske.git
cd Snuske
```

### Restore the database

* Use mongorestore to restore the database
```bash
mongorestore --host [host_ip] --port 27017 -u [youruser] -p [yourpass] --authenticationDatabase admin -d warmane -c items dump/items.bson
>38500 document(s) restored successfully.
```

### Verify changes

* Using Robo 3T
