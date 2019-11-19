{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title"><a href="/admin/user">返回用户列表 >></a></div>
<div class="form-section">
  <div class="form-item">
    <input id="userName" type="text" class="form-input" placeholder="姓名"/>
  </div>
  <div class="form-item">
    <input id="userPhone" type="text" class="form-input" placeholder="电话"/>
  </div>
  <div class="form-item">
    <input id="userPassword" type="text" class="form-input" placeholder="密码"/>
  </div>
  </div>
  <div class="form-item">
    <button id="userSubmit" class="form-button">新增</button>
  </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/userCreate.js"></script>
{% endblock %}