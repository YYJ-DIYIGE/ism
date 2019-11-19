{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title"><a href="/admin/classify">返回分类列表 >></a></div>
<div class="form-section">
  <div class="form-item">
    <input id="userName" type="text" class="form-input" placeholder="名称" value="{{user.name}}"/>
  </div>
  <div class="form-item">
    <input id="userId"  type="text" hidden value="{{nav.id}}" />
    <button id="userSubmit" class="form-button">保存</button>
  </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/classEdit.js"></script>
{% endblock %}