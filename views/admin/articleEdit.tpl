{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title"><a href="/admin/article">返回文章管理 >></a></div>
<div class="form-section">
  <div class="form-item">
    <input id="articleTitle" type="text" class="form-input" placeholder="名称" value="{{articles.title}}"/>
  </div>
  <div class="form-item">
    <select class="form-input" id="articleID">
      <option >请选择分类</option>
      {% for val in Classifys  %}
      <option value="{{val.id}}">{{val.name}}</option>
      {% endfor %}
    </select>
  </div>
   <div class="form-item">
    <textarea id="articleContent" type="text" class="form-input-content" placeholder="内容" value="{{articles.content}}">{{articles.content}}</textarea>
  </div>
  <div class="form-item">
    <input id="articleId"  type="text" hidden value="{{nav.id}}" />
    <button id="articleSubmit" class="form-button">保存</button>
  </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/articleEdit.js"></script>
{% endblock %}