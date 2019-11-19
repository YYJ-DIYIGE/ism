{% extends './adminLayou.tpl' %}

{% block content %}
<div class="content-title"><a href="/admin/article">返回文章管理 >></a></div>
<div class="form-section">
   <div class="form-item">
    <input id="articleTitle" type="text" class="form-input" placeholder="标题" value="{{articles.title}}"/>
  </div>
  <div class="form-item">
    <select class="form-input" id="articleID">
      <option >请选择分类</option>
      {% for val in Classifys  %}
      分类<option value="{{val.id}}">{{val.name}}</option>
      {% endfor %}
    </select>
  </div>
  <div class="form-item">
    内容:<textarea id="articleContent" type="text" class="form-input-content"></textarea>
  </div>
    <button id="articleSubmit" class="form-button">新增</button>
  </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script src="/javascripts/articleCreate.js"></script>
{% endblock %}