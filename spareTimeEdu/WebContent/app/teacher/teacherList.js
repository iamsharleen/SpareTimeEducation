angular.module('teacherList',[]).controller('teacherListCtrl',['$scope','$http',function($scope,$http){
	$scope.condition={
			keyword:'',
	};
	
	$scope.course={
			courseList:[],
	};
	
	//$scope.search=search;
	
	var req = {
			 method: 'POST',
			 url: '/spareTimeEdu/course/getCourse',
			 headers: {
//				 'Accept':'*/*',
				 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
//				 'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
				 'X-Requested-With':'XMLHttpRequest',
			 },
			 data:$.param({cond:JSON.stringify($scope.condition)}),
			};
	
	$http(req).then(function(reponse){
		console.log(reponse.data.obj);
		$scope.course=reponse.data.obj;
	});
	
	
}]);

// 检索条件
var parameter = {};
// 排序规则
var sort = [ 'comprehensive', 'studentNum', 'teacherScore', 'price' ];
// 网站名
var webName = Util.getWebName();

//去除空格
String.prototype.trim = function() {
	return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

/* 排序 */
$(".sort-list a").click(function() {
	$(".sort-list li").removeClass("picked");
	$(this).parent("li").addClass("picked");
	var sortIndex = $(this).attr("data-value");
	var order;
	if ($(this).parent().is($(".sort-list li").eq(0))) {
		$(".sort-list a").children("span").removeClass();
		order = "desc";
	} else {
		if ($(this).children().hasClass('icon-chevron-down')) {
			$(this).children().removeClass();
			$(this).children().addClass('icon-chevron-up');
			order = "asc";
		} else {
			$(this).children().removeClass();
			$(this).children().addClass("icon-chevron-down");
			order = "desc";
		}
	}
	// 排序
	orderReg(sortIndex, order);

});

$("form[class='search']").ready(function() {
	if ("undefined" !=typeof keyWord && keyWord.length > 0) {
		$("input[name='keyWord']").val(keyWord);
		parameter.keyWord=keyWord;
		delete sessionStorage.keyWord;
	}
	parameter[sort[0]] = 'desc';
	searchTeacher();

});

/* 同城搜索 */
function searchInCity(o) {
	var obj = $(o);
	// 搜索关键字
	keyWord = obj.parent().children().eq(0).val();
	if (null != keyWord && keyWord.trim() != "") {
		parameter.keyWord = keyWord;
	} else if (null != keyWord) {
		delete parameter.keyWord;
	}
	searchTeacher();
}

/* 加载课程类别（pc端） */
function courseOnload(str) {
	if (str == 0) {
		// 不限
		delete parameter.target;
	} else {
		// 检索主题对象
		parameter.target = str;
	}
	delete parameter.subjectType;
	parameter.subjectTypeType = str;
	$(".courseType").html('');
	$.ajax({
		type : "POST",
		data : parameter,
		url : "getSubjectTypes",
		success : function(msg) {
			$.each(JSON.parse(msg), function(i, obj) {
				var li = $("<li></li>");
				var str = "selectSubjectType(" + "'" + obj.subjectTypeId + "'"
						+ ")";
				var a = $("<a>" + obj.subjectTypeName + "</a>");
				a.attr("data-value", obj.subjectTypeName);
				/* a.attr("data-id", i); */
				a.attr("onclick", str);
				a.attr("class", "inner");
				li.append(a);
				$(".courseType").append(li);
			});
		}
	});
	searchTeacher();
}

/* 选择主题类别 */
function selectSubjectType(id) {
	parameter.subjectType = id;
	searchTeacher();
}
/* 加载时间表类别 */
$("#scheduleInfos").ready(function() {
	$.ajax({
		type : "POST",
		url : "getAllScheduleInfos",
		success : function(msg) {
			$.each(JSON.parse(msg), function(i, obj) {
				var a = $("<a>" + obj.scheduleName + "</a>");
				var li = $("<li></li>");
				a.attr("data-value", obj.scheduleId);
				a.attr("href", "#");
				a.attr("class", "inner")
				a.attr("data-action", "select-time");
				a.attr("onclick", "courseTime(" + obj.scheduleId + ")");
				li.append(a);
				$("#scheduleInfos").append(li);
			});
		}
	});
	// 不限时间
	$(".category-time-list li").eq(0).attr("onclick", "courseTime(0)");
});

/* 地区筛选 */
function areaOnload(id) {
	$("#area").html('');
	if (id == 0) {
		// 不限
		delete parameter.cityId;
	} else {
		// 检索城市Id
		parameter.cityId = id;
	}
	searchTeacher();
}
/* 上课时间筛选 */
function courseTime(id) {
	if (id == 0) {
		delete parameter.teacherSchedule;
	} else {
		parameter.teacherSchedule = id;
	}
	searchTeacher();
}
/* 按规则排序 */
function orderReg(sortType, order) {
	if (sortType == 0) {
		for (var i = 1; i < sort.length; i++) {
			delete parameter[sort[i]];
		}
		parameter[sort[sortType]] = order;
	} else {
		delete parameter[sort[0]];
	}
	parameter[sort[sortType]] = order;
	searchTeacher();
}
/* 加载老师 */
function searchTeacher() {
	$.ajax({
			type : "POST",
			data : parameter,
			url : "getTeacherList",
			success : function(data) {
				$(".topic-list").html('');
				var pageData = JSON.parse(data);
				//遍历查询结果
				$.each(pageData.dataList,function(i,teacher){
					//教师信息
					var teacherInfo=teacher.teacherInfo;
					//用户信息
					var userInfo=teacher.userInfo;
					//详细信息
					var userDetail=teacher.userDetail;
					//课程
					var teachSubjectList=teacher.teachSubjectList;
					//教学区域
					var teachAreaList=teacher.teachAreaList;
					var li = $("<li></li>");
					$.each(teachSubjectList,function(i,ts){
						var teachSubject=ts.teachSubject;
						var teachMethodList=ts.teachMethodList;
						var liat=$("<li class='a-topic'></li>");
						var attl=$("<a class='topic-tutor-link'></a>");
						var spanbi= $("<span class='topic-tutor-pic'></span>");
						var divti=$("<div class='topic-info'></div>");
						var h3tt=$("<div class='topic-title'></div>");
						var spanttt=$("<span class='topic-title-txt'></span>");
						var divtti=$("<div class='topic-title-info'></div>");
						var divppl=$("<div class='price price-left'></div>");
						var div=$("<div></div>");
						var divttui=$("<div class='topic-tutor-info'></div>");
						var p=$("<p></p>");
						var pttc=$("<p class='topic-tutor-count'>");
						attl.attr("href","toTeacherInfo?teacherId="+teacherInfo.teacherId);
				
						spanbi.attr("style","background-image: url("+webName
								+userInfo.userAvatar+")");
						attl.append(spanbi);
						spanttt.append( teachSubject.teachSubjectName);
						h3tt.append(spanttt);
						
						divtti.append("<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>");
						var score = Math
						.round(teacherInfo.teacherScore * 2);
						divtti.append("<span class='stars stars-"+ score+ "'></span>");
						divppl.append("<em>"+teachMethodList[0].subjectPrice+"</em>元/次");
						divtti.append(divppl);
						h3tt.append(divtti);
						divti.append(h3tt);
						divti.append(h3tt);
						divttui.append("<span class='topic-tutor-name'>"+userInfo.nickName+"</span>");
						divttui.append("<span>&nbsp;&nbsp;["+teachAreaList[0].teachArea+"]&nbsp;&nbsp;</span>");
						divttui.append("<span class='topic-tutor-intro'>"+teacherInfo.teacherIdentity+"</span>");
						div.append(divttui);
						divti.append(div);
						if (teachSubject.teachSubjectIntro.length > 40) {
							p.append(teachSubject.teachSubjectIntro
									.substr(0,40)+ '...');
						} else {
							p.append(teachSubject.teachSubjectIntro
									.substr(0));
						}
						
						divti.append(p);
						pttc.append("<span>"+ teacherInfo.studentNum+"</span>人约过");
						divti.append(pttc);
						
						attl.append(divti);
						liat.append(attl);
						li.append(liat);
						$(".topic-list").append(li);
					});
					pageControl(pageData.page, pageData.totalPages);
				});
		
			}
	});
}

/* 翻页控制对象 */
function pageCtr(page, totalPage) {
	this.page = page;// 当前页
	this.totalPage = totalPage;// 所有页
	this.pageLenth = 5;// 5页选择

	
}
/* 翻页 */
function pageControl(page, totalPage) {
	var pc = new pageCtr(page, totalPage);
	var u = $('<ul></ul>');
	var pager = $('.pager');
	if (totalPage < 2) {
		// 总页数少于2页则不显示页码控制条
		pager.html('');
		return;
	}
	// 页码控制条
	var pageStart;// 起始页码
	var pageEnd;// 终止页码

	if (pc.page <= pc.pageLenth) {
		/* 当前页码小于控制长度 */
		pageStart = 1;
		pageEnd = pc.pageLenth;
	} else {
		/* 单前页码大于控制长度 */
		pageStart = pc.page - parseInt(pc.pageLenth / 2);
		pageEnd = pc.page + parseInt(pc.pageLenth / 2);
	}

	if (pc.page > 1) {// 上一页
		u.append('<li><a href="javascript:void(0);"' + ' onclick="gotoPage('
				+ (pc.page - 1) + ')"><span '
				+ 'class="icon icon-chevron-left"></span></a></li>');
	}
	for (var i = pageStart; i <= pageEnd; i++) {
		if (pc.page == i) {// 页码
			u.append('<li class="current"><a href="javascript:void(0);">' + i
					+ '</a></li>')
		} else {
			u.append('<li><a  href="javascript:void(0);"'
					+ ' onclick="gotoPage(' + i + ')">' + i + '</a></li>')
		}
		if (i == pc.totalPage) {// 最后一页
			break;
		}
	}
	if (pc.page < pc.totalPage) {// 下一页
		u.append('<li><a href="javascript:void(0);" ' + ' onclick="gotoPage('
				+ (pc.page + 1) + ')"><span '
				+ 'class="icon icon-chevron-right"></span></a></li>');
	}
	u.attr("style", "text-align: center;");
	pager.html(u);
}
/* 跳转到page页 */
function gotoPage(page) {
	parameter.page = page;
	searchTeacher();
	delete parameter.page;
}
