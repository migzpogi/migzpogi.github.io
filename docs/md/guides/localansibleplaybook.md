# Running a local Ansible playbook On Ubuntu 20.04

## Install Ansible
```bash
sudo apt-add-repository ppa:ansible/ansible
sudo apt update
sudo apt install ansible
```

## Create an Ansible playbook
```yml | local.yml
---
- name: "Playing with Ansible and Git"
  hosts: localhost
  connection: local 
  tasks:

  - name: "just execute a ls -lrt command"
    shell: "ls -lrt"
    register: "output"

  - debug: var=output.stdout_lines
```

## Run the playbook
```bash
ansible-playbook local.yml
```

## Running the playbook with an inventory file
```bash
ansible-playbook -i inventory_file_name local.yml
```

### Sample inventory file
```
[dev]
django_ap_south ansible_host=#{server-django-ap-south}# ansible_user=#{server-django-ap-south-user}# ansible_ssh_pass=#{server-django-ap-south-pass}#
```

## Sources
[How To Install and Configure Ansible on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-ansible-on-ubuntu-20-04)