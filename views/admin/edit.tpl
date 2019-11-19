{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title"><a href="/admin/user">返回用户列表 >></a></div>
<div class="form-section">
  <div class="form-item">
    <input id="userName" type="text" class="form-input" placeholder="姓名" value="{{user.name}}"/>
  </div>
  <div class="form-item">
    <input id="userPhone" type="text" class="form-input" placeholder="电话" value="{{user.phone}}"/>
  </div>
  <div class="form-item">
    <input id="userPassword" disabled="true" type="text" class="form-input" placeholder="密码" value="{{user.password}}"/>
  </div>
  <div class="form-item">
    <input id="userId"  type="text" hidden value="{{nav.id}}" />
    <button id="userSubmit" class="form-button">保存</button>
  </div>
</div>
{% endblock %}
{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/userEdit.js"></script>
{% endblock %}