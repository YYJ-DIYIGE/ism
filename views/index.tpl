<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{title}}</title>
    {% block css %}
    <link rel="stylesheet" href="/stylesheets/index.css">
    {% endblock %}
</head>
<body>
  <div class="background">
  <div class="header">
    <div class="time"><a href="/exhibibtion" >全部</a></div>
    {% for val in Class  %}
    <div class="time"><a href="/exhibibtion/{{val.id}}/edit" >{{val.name}}</a></div>
    {% endfor %}
  </div>
    {% block content %}
    
    {% endblock %}
  <footer class="page-footer">
    Copyyright © 2019 Design by jikexueyuan All Rights Reserved
  </footer>
  </div>
    {% block js %}
    {% endblock %}
</body>
</html>