{% extends './layout.tpl' %}

{% block css %}
{% endblock %}

{% block content %}
<h1>{{message}}</h1>
<h2>{{error.status}}</h2>
<pre>{{error.stack}}</pre>
{% endblock %}