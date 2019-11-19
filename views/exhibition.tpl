{% extends './index.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/index.css">
{% endblock %}
{% block content %}
<div class="page-boby">
  <div class="content-list">
    {% for val in articles  %}
    <div class="content-item">    
      <div class="content-number">{{val.id}}</div>
      <div class="content-smallProject">
        <div class="content-title"><a href="exhibibtion/{{val.id}}/content">{{val.title}}</a></div>
        <div class="content-time">{{val.time_es}}</div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
{% endblock %}