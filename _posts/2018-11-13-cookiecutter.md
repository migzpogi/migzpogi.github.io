---
layout: post
title:  "Cookiecutter"
date:   2018-11-13 10:14:00 +0800
categories: [python]
---

# Cookiecutter
I like it when things are organized. There is peace and order when everything is in its rightful place. Books that are properly aligned with each other. Loose cables that are neatly tied and fastened. Projects that follow a specific structure. All of these are not only aesthetically pleasing, but also serve an important purpose.

It is much easier to read the title from the spine if your books are properly aligned. Fastening the extra length of your loose cables will prevent them from tangling with each other. And when your projects follow a specific structure, that is one step towards cleaner and more reusable code.

Different languages have different requirements which merit different project structures. This is where **Cookiecutter** comes in. [Cookiecutter](https://github.com/audreyr/cookiecutter) is a command-line utility that creates projects from a project template. I usually code in Python so my project structure looks something like this: 

```
README.rst
LICENSE
setup.py
requirements.txt
sample/__init__.py
sample/core.py
sample/helpers.py
docs/conf.py
docs/index.rst
tests/test_basic.py
tests/test_advanced.py
```
(See [Hitchhiker's Guide](https://docs.python-guide.org/writing/structure/))

I have a template of this structure as you can see below:

```
python_template
|-- cookiecutter.json
|-- cookiecutter.directory_name
    |-- README.rst
    |-- LICENSE
    |-- setup.py
    |-- requirements.txt
    |-- sample
    |   |-- __init__.py
    |   |-- core.py
    |-- docs
    |   |-- conf.py
    |   |-- index.rst
    |-- tests
        |-- test_basic.py
        |-- test_advanced.py
```

Whenever I want to create a new project, I just run Cookiecutter. It automatically follows this structure.

Some key features you should take note are:
* It is cross-platform. Windows, Mac, and Linux are officially supported.
* Runs on Python
* Templates can be in any programming language or markup format. You can use multiple languages in the same project template.
* Supports unlimited levels of directory nesting.
* Templating is done with Jinja2. Define your variables in a JSON file.
* Cookiecutter repository.


The last part is what makes Cookiecutter really great. Aside from being able to create your own, **the community is actively contributing different types of templates** that is just right for your needs.

It is just really a simple tool that performs a simple task. Very mundane if I may add, but it works well for me. Perfectly organized. As all things should be.