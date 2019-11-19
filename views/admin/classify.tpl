{% extends './adminLayou.tpl' %}

{% block content %}
<div class="page-content">
  <div class="content-title">
    <a id="Add" href="/admin/classify/classCreate">添加分类 ></a>
  </div>
  <div class="content-table">
    <table class="table-container">
      <tbody>
        <tr>
          <th>id</th>
          <th>分类名称</th>
          <th>操作</th>
        </tr>
      {% for val in Class  %}
        <tr>
          <td>{{val.id}}</td>
          <td>{{val.name}}</td>
          <td>
            <a href="/admin/classify/{{val.id}}/classEdit">编辑</a>
            <span id="delete" class="delete" data-id="{{val.id}}">删除</span>
          </td>
        </tr>
      {% endfor %}
      </tbody>
    </table>
  </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/classDele.js"></script>
{% endblock %}