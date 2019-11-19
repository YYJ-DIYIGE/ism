<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{title}}</title>
    {% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css"/>
    <link rel="stylesheet" href="/stylesheets/styles.css"/>
    <link rel="stylesheet" href="/stylesheets/classify.css"/>
    <link rel="stylesheet" href="/stylesheets/article.css"/>
    {% endblock %}
</head>
<body>
  <header class="page-header">
    <div class="header-logo">
      <img src="/images/jklogo.png">
      <span>信息管理</span>
    </div>
    <div>
      <a class="signOut" id="out">退出系统</a>
    </div>
  </header>
  <div class="page-body">
      <div class="page-aside">
        <nav class="page-nav">
          <ul>
            <li>
              <a href="/admin/user" class="page-nav-item">用户管理</a>
            </li>
            <li>
              <a href="/admin/classify" class="page-nav-item">分类管理</a>
            </li>
            <li>
              <a href="/admin/article" class="page-nav-item">文章管理</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="page-content">
        {% block content %}
        {% endblock %}
      </div>
  </div>
  <footer class="page-footer">
    Copyyright © 2019 Design by jikexueyuan All Rights Reserved
  </footer>

</body>
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/out.js"></script>
{% block js %}
{% endblock %}
</html>