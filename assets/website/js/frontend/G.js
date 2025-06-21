// JavaScript Document
(function (_w) {

    var w = _w;

    //main namespace
    G = {};
	G.page_code = 'index';
	G.Message = {
		error:'系统错误，请联系管理员处理'
	};

	
    G.Fun = {
		//获取url中的参数
		getUrlParam: function(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		    if (r != null) return unescape(r[2]); return null; //返回参数值
		},
    	Today: function(){
    		return G.Fun.formatter_date();	
    	},
	    addDay: function(date, num) {
	      // 创建一个新的 Date 对象，避免直接修改原日期对象
	      var newDate = new Date(date.getTime());
	      // 获取当前日期的天数并加一
	      var day = newDate.getDate();
	      newDate.setDate(day + num);
	      return G.Fun.formatter_date(newDate);
	    },
    	formatter_date: function(time){
			const date = typeof time == 'undefined' ? new Date() : new Date(time);
			const formattedDate = date.toLocaleString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' });
			
			return formattedDate;
    	},
    	formatter_date_to_items: function(time) {
    		var d = G.Fun.formatter_date(time);
    		var dSplit = d.split('/');
    		var year = dSplit[0];
    		var month = dSplit[1].length == 1 ? '0' + dSplit[1] : dSplit[1];
    		var day = dSplit[2].length == 1 ? '0' + dSplit[2] : dSplit[2];

    		var re = {
    			year: year,
    			month: month,
    			day: day
    		};
    		return re
    	},
        //初始化操作
        init: function (page_code) {
			switch(page_code)
			{
				case 'index':
				case 'category':
					
					break;

				case 'detail':
					
					break;
			}
        },
    };

    $(function () {
		var page_code = $('body').attr('data-page');
        G.Fun.init(page_code);
    });
	
})();





