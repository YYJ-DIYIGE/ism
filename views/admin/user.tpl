{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title">
  <a href="/admin/user/create">新增人员 >></a></div>
<div class="content-table">
  <table class="table-container">
    <tr>
      <th>姓名</th>
      <th>电话</th>
      <th>创建时间</th>
      <th>操作</th>
    </tr>
    {% for val in users  %}
    <tr>
      <td>{{val.name}}</td>
      <td>{{val.phone}}</td>
      <td>{{ val.created_time}}</td>
      <td>
        <a href="/admin/user/{{val.id}}/edit">编辑</a>
        <a class="dele" id="delete" data-id="{{val.id}}">删除</a>
      </td>
    </tr>
    {% endfor %}
  </table>
</div>
{% endblock %}
{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/userDele.js"></script>
{% endblock %}