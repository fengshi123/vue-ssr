module.exports.userlist = {
    userlist: [{
        'id': '1001',
        'name': '张三',
        'age': 15,
        'sex': 0,
        'role': '学生'
    },
        {
            'id': '1002',
            'name': '李四',
            'age': 25,
            'sex': 0,
            'role': '软件工程师'
        },
        {
            'id': '1003',
            'name': '王五',
            'age': 35,
            'sex': 0,
            'role': '老师'
        },
    ]
};

module.exports.movielist = {
    movielist: [{
        'id':'2001',
        'name':'小鬼当家1',
        'date':'2017-01-01',
        'type':'喜剧',
    },
        {
            'id':'2002',
            'name':'小鬼当家2',
            'date':'2018-02-02',
            'type':'动作',
        },
        {
            'id':'2003',
            'name':'小鬼当家3',
            'date':'2019-03-03',
            'type':'枪战',
        },
    ]
};

module.exports.option1 = {
    title: {
        text: '电影分类统计'
    },
    tooltip: {},
    legend: {
        data:['数量']
    },
    xAxis: {
        data: ['喜剧','动作','战争','爱情','记录','恐怖']
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

module.exports.option2 = {
    title : {
        text: '电影分类统计',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['喜剧','动作','战争','爱情','记录','恐怖']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:5, name:'喜剧'},
                {value:20, name:'动作'},
                {value:36, name:'战争'},
                {value:10, name:'爱情'},
                {value:10, name:'记录'},
                {value:20, name:'恐怖'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
