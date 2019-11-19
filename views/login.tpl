{% extends './layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/login.css">
<link rel="stylesheet" href="/stylesheets/index.css">
{% endblock %}

{% block content %}
 <div class="page-body">
    <div class="login-section">
      <div class="login-content">
        <div class="login-title">消息发布管理系统</div>
        <div class="form-section">
          <div class="form-item">
            <input id="userPhone" type="text" class="form-input" placeholder="请输入你的账号"/>
          </div>
          <div class="form-item">
            <input id="userPassword" type="password" class="form-input" placeholder="请输入你的密码"/>
          </div>
          <div class="form-item">
            <button id="userSubmit" class="form-button">马上登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
{% endblock %}
{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/login.js"></script>
{% endblock %}