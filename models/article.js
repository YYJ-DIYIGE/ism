const Base = require('./base.js');

class article extends Base{
  constructor(props = 'article'){
    super(props);
  }
  joinUser(params={},pagination={}){
    let limit = pagination.limit || 10;
    console.log(limit)
    let page = pagination.page || 10;
    let offset = limit * (page - 1);
    return knex('article')
      .leftJoin('classify', 'article.classify_id', '=', 'classify.id')
      .select(
        'article.id',
        'article.name',
        {'sales_name': 'classify.name'},
      )
      .orderBy('id', 'desc')
      .where(params)
      .limit(limit)
      .offset(offset)
  }
}

module.exports = new article();