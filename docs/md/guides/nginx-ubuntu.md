# Nginx For Ubuntu 20.04

## Create user with sudo privileges
adduser mongouser
usermod -aG sudo mongouser # --> -aG is for append Groups
sudo su mongouser
sudo whoami

## Install nginx
sudo apt update
sudo apt install nginx

# Adjust firewall
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
sudo ufw allow ssh
sudo ufw enable
> Firewall is active and enabled on system startup
sudo ufw status

## Check nginx
systemctl status nginx
http://139.162.55.188/
sudo systemctl enable nginx

# Flask

## Install
sudo apt update
sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools

##  Virtual env
sudo apt install python3-venv
cd /home/flaskuser
mkdir flaskproject
cd flaskproject
python3.8 -m  venv flaskprojectvenv

## Alias
vim ~/.bashrc
alias myalias='cat ~/.bashrc | grep alias'
alias venvflask='source ~/flaskproject/flaskprojectvenv/bin/activate'
source ~/.bashrc
venvflask

##  Git
sudo apt install git
git  clone https://github.com/migzpogi/gearscoreapi.git
cd gearscoreapi
pip install -r requirements.txt
sudo ufw allow 8080
sudo ufw enable
pip install wheel
pip install uwsgi
python WebApp.py
http://139.162.55.188:8080/
uwsgi --ini WebApp.ini
http://139.162.55.188:8080/

## Systemd
sudo vim /etc/systemd/system/WebApp.service

[Unit]
Description=uWSGI instance to serve WebApp
After=network.target

[Service]
User=flaskuser
Group=www-data
WorkingDirectory=/home/flaskuser/flaskproject/gearscoreapi
Environment="PATH=/home/flaskuser/flaskproject/flaskprojectvenv/bin"
ExecStart=/home/flaskuser/flaskproject/flaskprojectvenv/bin/uwsgi --ini WebApp.ini

[Install]
WantedBy=multi-user.target

sudo systemctl start WebApp
sudo systemctl enable WebApp

## Nginx
vim ~/.bashrc
alias editwebnginx='sudo vim /etc/nginx/sites-available/WebApp'
source ~/.bashrc
venvflask
editwebnginx


upstream webapp {
    server 139.162.55.188:8080;
}
server {
    listen 80;
    server_name 139.162.55.188;
    location / {
        include uwsgi_params;
        proxy_pass http://webapp;
    }
}

sudo ln -s /etc/nginx/sites-available/WebApp /etc/nginx/sites-enabled

sudo nginx -t

sudo systemctl restart nginx

sudo ufw allow 'Nginx Full'
sudo ufw enable

If you encounter any errors, try checking the following:

sudo less /var/log/nginx/error.log: checks the Nginx error logs.
sudo less /var/log/nginx/access.log: checks the Nginx access logs.
sudo journalctl -u nginx: checks the Nginx process logs.
sudo journalctl -u myproject: checks your Flask app’s uWSGI logs.

https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-20-04

Always edit /etc/nginx/sites-available/WebApp