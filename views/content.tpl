{% extends './index.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/index.css">
{% endblock %}
{% block content %}
<div class="page-boby">
  <div class="text-content">{{articles.content}}</div>
</div>
{% endblock %}