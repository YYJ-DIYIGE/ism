{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title">
  <a href="/admin/article/create">新建文章 >></a></div>
<div class="content-table">
  <table class="table-container">
    <tr>
      <th>index</th>
      <th>标题</th>
      <th>分类</th>
      <th>操作</th>
    </tr>
    {% for val in article  %}
    <tr>
      <td>{{val.article_id}}</td>
      <td>{{val.title}}</td>
      <td>{{val.name}}</td>
      <td>
        <a href="/admin/article/{{val.article_id}}/articleEdit">编辑</a>
        <a class="dele" id="delete" data-id="{{val.article_id}}">删除</a>
      </td>
    </tr>
    {% endfor %}
  </table>
</div>
{% endblock %}
{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/articledetele.js"></script>
{% endblock %}
