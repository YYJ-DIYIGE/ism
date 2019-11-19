const authcode = require('../utils/auth.js');
const User = require('./../models/user.js');

var middleAuth = async function(req,res,next){
    try{
        let token = req.cookies.ac;
        if(!token){
            res.json({
                code:0,
                message:'未登录，请先登录'
            })
            return
        }
        let manageres = authcode(token,'DECODE');
        if(manageres.length<1){
            res.json({
                code:200,
                message:'该管理员账号无效'
            })
            return
        }
        let manager = manageres.split('\t')
        let clock = await User.select({phone:manager[0],password:manager[1],id:manager[2]});
        let clockes = clock.length>0;
        if(!clockes){
            res.json({
                code:0,
                message:'该管理员账号不存在'
            })
            return
        }
        next()
    }
    catch(err){
        console.log(err)
        res.json({
            code:0,
            message:'服务器错误'
        })
    }

}


module.exports = middleAuth;