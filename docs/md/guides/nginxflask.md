adduser flaskuser
usermod -aG sudo flaskuser # --> -aG is for append Groups
sudo su flaskuser
sudo whoami

sudo apt update
sudo apt install nginx

sudo ufw app list
sudo ufw allow 'Nginx HTTP'
sudo ufw allow ssh
sudo ufw enable
sudo ufw status
sudo ufw allow 5000
sudo ufw allow 8080
sudo ufw delete allow 5000

systemctl status nginx


sudo apt update
sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools

sudo apt install python3-venv

cd /home/flaskuser
mkdir flaskproj
cd flaskproj
python3.8 -m venv flaskprojvenv
source flaskprojvenv/bin/activate

sudo apt install git

pip install wheel
pip install uwsgi
pip install -r requirements.txt

http://server:port/path/endpoint

~/flaskproj/gearscoreapi
vim wsgi.py

from WeebApp import app

if __name__ == "__main__":
    app.run()


uwsgi --socket 0.0.0.0:5000 --protocol=http -w wsgi:app
uwsgi --http :8080 -w wsgi:app
uwsgi --http-socket :8080 -w wsgi:app

uwsgi --ini WebApp.ini

vim WebApp.ini

[uwsgi]
module = wsgi:app

master = true
processes = 5

socket = WebApp.sock
chmod-socket = 660
vacuum = true

die-on-term = true


sudo vim /etc/systemd/system/WebApp.service

[Unit]
Description=uWSGI instance to serve myproject
After=network.target

[Service]
User=sammy
Group=www-data
WorkingDirectory=/home/sammy/myproject
Environment="PATH=/home/sammy/myproject/myprojectenv/bin"
ExecStart=/home/sammy/myproject/myprojectenv/bin/uwsgi --ini myproject.ini

[Install]
WantedBy=multi-user.target


sudo systemctl start myproject
sudo systemctl status WebApp

sudo systemctl enable WebApp
sudo systemctl status myproject


sudo vim /etc/nginx/sites-available/WebApp

sudo ln -s /etc/nginx/sites-available/WebApp /etc/nginx/sites-enabled

sudo unlink /etc/nginx/sites-enabled/default

sudo nginx -t

sudo systemctl restart nginx
sudo ufw allow 'Nginx Full'

alias