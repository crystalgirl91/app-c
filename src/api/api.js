import Vue from 'vue'
import axios  from 'axios';
import qs from "qs";
import {apiUrl,tokenUrl,client_id,client_secret,tmapKey} from "./const.js"
import apiAxios from "./axios.js"
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp);

// 接口api
class API{
	constructor(){
		this.name ="API";
		//------------------授权服务类
		this.accredit = function(action,pd){
			var data = {
				client_id: client_id,//应用的appid（企业移动端）
	            client_secret: client_secret,//引用的密钥（企业移动端）
			}
			var pd = Object.assign(data,pd);
			return axios.post(tokenUrl + action,qs.stringify(pd),{
				headers:{
					"Content-Type":'application/x-www-form-urlencoded'
				}
			})
		}
	}
	// 获取token
	authToken(pd){
		return this.accredit("/OAuth/Token",pd);
	}
	//注册  参数{EnterpriseName:"企业名称",LoginName:"手机号码",LoginPwd:"密码",AuthCode:"验证码",InviteCode:"邀请码(选传)",AuthData:"微信授权信息(选传)"}
	Register(pd){
		return this.accredit("/Account/Register",pd);
	}
	//发送验证码 参数{AuthCodeType:0,LoginName:"手机号码"}  AuthCodeType取值：0注册  1找回密码  
	SendAuthCode(pd){
		return this.accredit("/Account/SendAuthCode",pd);
	}
	//忘记密码
	ResetLoginPwd(pd){
		return this.accredit("/Account/ResetLoginPwd",pd);
	}
	//------------------
	// 企业端相关功能api
	//获取企业基本信息  需要登陆之后进行调用  判断返回值中的IsAudit来判断认证状态 未认证 = 0, 等待审核 = 1, 已认证 = 2, 认证不通过 = 3
	GetEnterpriseBase(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetEnterpriseBase',pd)
	}
	//认证 修改企业名称
	SubmitUpdateName(pd){
		return apiAxios.post("/api/EnterpriseTerminalBasis/SubmitUpdateName",pd)
	}
    //获取城市信息
	GetCityList(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetCityList',pd)
	}
	//获取企业设置的基础信息（行业规模等）
	GetEnterpriseOptionsProperty(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetEnterpriseOptionsProperty',pd)
	}
	//提交认证审核
	SubmitAudit(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/SubmitAudit',pd)
	}
	//上传
	Upload(pd){
		return axios.post('https://api.noahjob.cn/api/PublicAction/UploadFile',pd)
	}
	//获取发布岗位时的基本信息
	GetPositionBase(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPositionBase',pd)
	}
	//获取岗位列表参数{Search:'搜索关键字',PageIndex:1,PageSize:10,Status:0} Status=0表示下线 1表示正在招聘
	GetPositionList(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPositionList',pd,{
			loading:false
		})
	}
	//获取修改岗位填充信息{PK_CWID:'岗位ID'}
	GetPosition(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPosition',pd)
	}
	//发布岗位
	/*
	{
		Name:'岗位名称',
		Category:'类别ID',
		Profession:'行业ID',
		RecruitingNumber:'招聘人数',
		Education:'学历ID',
		Experience:'经验ID',
		Require:'要求',
		Duty:'职责',
		Sex:'性别0女1男2不限',
		Specialty:'专业',
		Property:'工作性质0全职1兼职2实习',
		EmolumentPattern:'薪酬模式0月薪，1年薪',
		MinSalary:'最小薪酬',
		MaxSalary:'最大薪酬',
		Welfare:['福利ID'],
		ProvinceNo:'省ID',
		ProvinceName:'省名称',
		CityNo:'城市ID',
		CityName:'城市名称',
		DistrictNo:'区ID',
		DistrictName:'区名称',
		Address:'地址',
		Longitude:'经度',
		Latitude:'纬度'
	}
	*/
	PublishPosition(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/PublishPosition',pd)
	}
	//编辑保存岗位
	/*
	{
		PK_CWID:'岗位ID',
		Name:'岗位名称',
		Category:'类别ID',
		Profession:'行业ID',
		RecruitingNumber:'招聘人数',
		Education:'学历ID',
		Experience:'经验ID',
		Require:'要求',
		Duty:'职责',
		Sex:'性别0女1男2不限',
		Specialty:'专业',
		Property:'工作性质0全职1兼职2实习',
		EmolumentPattern:'薪酬模式0月薪，1年薪',
		MinSalary:'最小薪酬',
		MaxSalary:'最大薪酬',
		Welfare:['福利ID'],
		ProvinceNo:'省ID',
		ProvinceName:'省名称',
		CityNo:'城市ID',
		CityName:'城市名称',
		DistrictNo:'区ID',
		DistrictName:'区名称',
		Address:'地址',
		Longitude:'经度',
		Latitude:'纬度'
	}
	*/
	SavePosition(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/SavePosition',pd)
	}
	//岗位上线{PK_CWID:'岗位ID'}
	PositionOnLine(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/PositionOnLine',pd)
	}
	//岗位下线{PK_CWID:'岗位ID'}
	PositionOffLine(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/PositionOffLine',pd)
	}
	//----------------------------------2020-03-11
	//获取岗位提升效果标识列表
	GetPositionEffect(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPositionEffect',pd)
	}
	//使用提升效果标识{PK_CWID:'岗位ID',Key:'标识Key'}
	EmployPositionEffect(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/EmployPositionEffect',pd)
	}
	//获取岗位分享图{PK_CWID:'岗位ID'}
	GetPositionShare(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPositionShare',pd)
	}	
	//获取岗位投递记录{PK_CWID:'岗位ID',PageIndex:1,PageSize:10,Status:-1}Status>全部 = -1,待处理 = 0,待笔试 = 1,待面试 = 2,待定 = 3,已淘汰 = 4,入职 = 5
	GetPositionDeliverRecord(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPositionDeliverRecord',pd)
	}
	//获取投递记录的状态{PK_CWJHL:'记录的ID'}
	GetPositionResumeStatus(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetPositionResumeStatus',pd)
	}	
	//标记记录的状态{PK_CWJHL:'记录的ID',Status:状态，见GetPositionResumeStatus的返回值}
	MarkPositionResumeStatus(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/MarkPositionResumeStatus',pd)
	}	
	//获取视频面试的二维码{PK_CWJHL:'记录的ID'}
	GetVideoInterview(pd){
		return apiAxios.post('/api/EnterpriseTerminalOrdinaryPosition/GetVideoInterview',pd)
	}
	//--------------------------------------其它地方可能通用的接口
	//获取简历的基本信息（头部）{PK_RID:'简历的ID'} 特别注意当LockStatus=true的时候需要再联系方式后面显示查看的按钮
	GetUserResumeBase(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetUserResumeBase',pd)
	}	
	//获取简历的详情{PK_RID:'简历的ID'}
	GetUserResumeDetails(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetUserResumeDetails',pd)
	}	
	//获取简历的诚信报告{PK_RID:'简历的ID'}
	GetUserResumeSincerity(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetUserResumeSincerity',pd)
	}	
	//获取简历的求职记录{PK_RID:'简历的ID'}  特别注意返回值Error==203的时候需要显示VIP会员信息
	GetUserResumeEmploymentRecord(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetUserResumeEmploymentRecord',pd)
	}	
	//获取简历的操作记录{PK_RID:'简历的ID'}
	GetUserResumeOperationRecord(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetUserResumeOperationRecord',pd)
	}	
	//获取简历的批注{PK_RID:'简历的ID'}
	GetUserResumePostil(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetUserResumePostil',pd)
	}	
	//获取企业的简历库
	GetResumeLibrary(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetResumeLibrary',pd)
	}	
	//验证查看转入简历库时候是否需要扣除查看次数{PK_RID:'简历的ID'}   返回值中包含IsDeduct和SurplusNumber
	ValidateResumeDivert(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/ValidateResumeDivert',pd)
	}	
	//将简历转移到简历库{PK_RID:'简历的ID',PK_TWID:"简历库的ID"}
	DivertResumeLibrary(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/DivertResumeLibrary',pd)
	}	
	//获取企业指定类型的权益{EMType:0}//取值0，1，2，3          
	/*  简历查看 = 0,
        岗位刷新 = 1,
        岗位发布 = 2,
        子账号 = 3*/
	GetEnterpriseEquity(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetEnterpriseEquity',pd)
	}	
	//-----------------------------------------------------------------------------
	//--------------------------------简历库相关
	//获取企业简历下载份数
	GetResumeDownloadCopies(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetResumeDownloadCopies',pd)
	}
	//获取人才库简历检索条件
	GetSearchTerm(pd){
		return apiAxios.post('/api/EnterpriseTerminalBasis/GetSearchTerm',pd)
	}	
	//获取企业简历库列表（注意返回值IsCollect=1表示是收藏）
	GetLibraryList(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/GetLibraryList',pd)
	}	
	//新增企业简历库{TWName:'简历库名称'}
	AddLibrary(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/AddLibrary',pd)
	}	
	//修改企业简历库{PK_TWID:'简历库ID',TWName:'简历库名称'}
	UpdateLibrary(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/UpdateLibrary',pd)
	}
	//获取搜索简历库简历{PageIndex:0,PageSize:10,Search:'搜索条件',PK_TWID:'简历库ID',Post:['岗位ID'],Profession:['行业ID'],MinPay:0,MaxPay:0,Education:['学历ID'],MinAge:0,MaxAge:0,WorkExperience:['工作经验ID'],UpdateTime:简历更新时间-1表示全部0一周以内，1一个月以内，2一年以内}
	GetLibraryResumeList(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/GetLibraryResumeList',pd)
	}
	//转移简历到其它库{PK_RID:'简历ID',Form_PK_TWID:'转出库的ID',To_PK_TWID:'接收库的ID'}
	TransferResume(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/TransferResume',pd)
	}
	//将简历移除简历库{PK_RID:'简历ID',PK_TWID:'简历库ID'}
	RemoveLibraryResume(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/RemoveLibraryResume',pd)
	}
	//-----------------------------------------平台简历库
	//获取平台公开的简历库ID
	GetPlatformLibrary(pd){
		return apiAxios.get('/api/EnterpriseTerminalTalentPool/GetPlatformLibrary',pd)
	}
	//-----------------------------------------小诺零工
	//获取零工发布时的基础信息
	GetSmallChoreTaskBases(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/GetSmallChoreTaskBases',pd)
	}
	//发布零工任务
	/**
	 * {
	 * Name:'任务名称',
	 * TaskType:任务类型,
	 * TaskTags:['任务标签'],
	 * Explain:'任务说明',
	 * Price:单价,
	 * ContactNumber:'客服电话',
	 * Unit:'单位',
	 * TaskCount:数量,
	 * EndTime:'结束时间',
     * ProvinceNo:'省ID',
	 * ProvinceName:'省名称',
	 * CityNo:'城市ID',
	 * CityName:'城市名称',
	 * DistrictNo:'区ID',
	 * DistrictName:'区名称',
	 * Address:'地址'
	 * }
	 * 
	 */
	PublishSmallChoreTask(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/PublishSmallChoreTask',pd)
	}
	//获取任务列表{PageIndex:1,PageSize:10,Status:0,Search:'搜索关键字'}Status>招聘中=0  未招聘=1
	GetSmallChoreTaskList(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/GetSmallChoreTaskList',pd)
	}
	//获取零工详情 {PK_SCTID:'任务ID'}
	GetSmallChoreTask(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/GetSmallChoreTask',pd)
	}
	//保存零工任务
	/**
	 * {
	 * PK_SCTID:'任务ID',
	 * Name:'任务名称',
	 * TaskType:任务类型,
	 * TaskTags:['任务标签'],
	 * Explain:'任务说明',
	 * Price:单价,
	 * ContactNumber:'客服电话',
	 * Unit:'单位',
	 * TaskCount:数量,
	 * EndTime:'结束时间',
     * ProvinceNo:'省ID',
	 * ProvinceName:'省名称',
	 * CityNo:'城市ID',
	 * CityName:'城市名称',
	 * DistrictNo:'区ID',
	 * DistrictName:'区名称',
	 * Address:'地址'
	 * }
	 * 
	 */
	SaveSmallChoreTask(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/SaveSmallChoreTask',pd)
	}
	//任务上线{PK_SCTID:'任务ID',EndTime:'截止时间'}
	SmallChoreTaskOnLine(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/SmallChoreTaskOnLine',pd)
	}
	//任务下线{PK_SCTID:'任务ID'}
	SmallChoreTaskOffLine(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/SmallChoreTaskOffLine',pd)
	}
	//获取任务分享内容{PK_SCTID:'任务ID'}
	GetSmallChoreTaskShare(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/GetSmallChoreTaskShare',pd)
	}
	//获取任务报名记录{PK_SCTID:'任务ID',PageIndex:1,PageSize:10,Status:-1,Search:'搜索关键字'}Status>全部-1  未查看 = 0,已通过 = 1,未通过 = 2
	GetSmallChoreTaskDeliverRecord(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/GetSmallChoreTaskDeliverRecord',pd)
	}
	//获取报名简历状态{PK_SCAID:'报名信息的ID'}
	GetSmallChoreTaskResumeStatus(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/GetSmallChoreTaskResumeStatus',pd)
	}
	//标记报名简历状态{PK_SCAID:'报名信息的ID',Status:0}Status>未查看 = 0,已通过 = 1,未通过 = 2
	MarkSmallChoreTaskResumeStatus(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/MarkSmallChoreTaskResumeStatus',pd)
	}
	//评价报名信息{PK_SCAID:'报名信息的ID',EvaluateContent:'评价内容'}
	EvaluateSmallChoreTaskTaskApply(pd){
		return apiAxios.post('/api/EnterpriseTerminalSmallChoreTask/EvaluateSmallChoreTaskTaskApply',pd)
	}
	//-----------------------------------------------企业个人中心
	// 获取企业信息
	// GetEnterpriseBase和个人中心接口GetPersonalCenter
	// 返回值中新增
	// MemberLevel会员级别该字段表示是否是认证会员（个人中心那个地方）
	// 0未认证1审核中2已认证 3审核失败  个人中心只显示未认证(0,1,3)和已认证(2)

	// 其中0和3在认证资料提交的时候可以提交  1和2在认证资料里面只允许查看


	// 新增接口（修改企业名称）【认证失败的那个页面新增一个按钮“修改企业名称”点击之后弹窗输入新的企业名称，并调用该接口，提交之后跳转到正在审核页面】

	// EnterpriseTerminalBasis/SubmitUpdateName
	// 参数：EName企业名称


	
	//获取企业个人中心信息
	GetPersonalCenter(pd){
		return apiAxios.post('/api/EnterpriseTerminalPersonalCenter/GetPersonalCenter',pd)
	}
	//保存企业信息(填充请用获取企业基本信息接口)
	/*
	{
		参数参考提交企业认证（去掉企业认证中的EName和Permit其它的都一致）
	}
	*/
	SaveEnterpriseDetails(pd){
		return apiAxios.post('/api/EnterpriseTerminalPersonalCenter/SaveEnterpriseDetails',pd)
	}	
	//通用发送验证码{Phone:'手机号码',CType:验证码类型(注册 = 0, 找回密码 = 1, 更换手机号码 = 2, 意向登记=3, 登陆=4)}
	PublicSendAuthCode(pd){
		return apiAxios.post('/api/PublicAction/SendAuthCode',pd)
	}	
	//修改手机号码
	/*
	{
		OriginalAuthCode:'原手机号码验证码',
		NewLoginName:'新手机号码',
		NewAuthCode:'新手机验证码'
	}
	*/
	UpdateLoginName(pd){
		return apiAxios.post('/api/EnterpriseTerminalPersonalCenter/UpdateLoginName',pd)
	}	
	//修改密码
	/*
	{
		OriginalPwd:'原密码',
		NewLoginPwd:'新密码'
	}
	*/
	UpdateLoginPwd(pd){
		return apiAxios.post('/api/EnterpriseTerminalPersonalCenter/UpdateLoginPwd',pd)
	}
	//-----------------------------找人才
	//获取检索条件
	GetExecutiveSearchFilter(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/GetExecutiveSearchFilter',pd)
	}	
	//获取检索结果
	/*
	{
		Search：'关键字',
		LodType:'加载类型1推荐2最新',
		PK_PID:['岗位ID'],//没选就传[]空数组
		PK_PTID:['行业ID'],//没选就传[]空数组
		PK_CID:'城市ID',//可以是省或者市或者区的ID
		PK_WEID:['工作经验ID'],//没选就传[]空数组
		PK_EID:['学历ID'],//没选就传[]空数组
		Sex:-1,//性别不限就传-1
		PayMin:-1,//薪酬范围不限就都穿-1或者0
		PayMax:-1,//薪酬范围不限就都穿-1或者0
		MinAge:-1,//年龄范围不限就都穿-1或者0
		MaxAge:-1,//年龄范围不限就都穿-1或者0
		MaritalStatus:-1,//婚姻状态不限就都穿-1
		UpdateTime:-1,//更新时间不限就传-1
		PageIndex:1,//分页索引
		PageSize:10//每页数量
	}
	*/
	ExecutiveSearch(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/ExecutiveSearch',pd)
	}	
	//收藏简历{PK_RID:'简历ID'}
	ExecutiveCollect(pd){
		return apiAxios.post('/api/EnterpriseTerminalTalentPool/ExecutiveCollect',pd)
	}
	//腾讯地图
	Geocoder(pd){
		var baseData = {
			key:tmapKey,
			output:"jsonp"
		};
		pd = Object.assign(pd,baseData);
		return Vue.jsonp('https://apis.map.qq.com/ws/geocoder/v1/',pd);
	}
}
export default new API();