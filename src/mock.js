const Mock = require('mockjs')
const Random = Mock.Random //获取random对象，随机生成各种数据
const domain = 'http://mockjs.com/api'


Mock.mock(`${domain}/k`,'get' , {
        'btcusdt|4':[{
            'time|+1':10,
            'amount|+2':60707.45192285645,
            'close|+2':4302317,
            'high|+1':7452.89,
            'id':137240824,
            'low|+2':7073.33,
            'open|+3':7144.12,
            'vol':443041963.533270312
        }]
    })