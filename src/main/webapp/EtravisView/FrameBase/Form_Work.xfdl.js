(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("login");
            this.set_titletext("New Form");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_register", this);
            obj._setContents("<ColumnInfo><Column id=\"userid\" type=\"STRING\" size=\"256\"/><Column id=\"userpass\" type=\"STRING\" size=\"256\"/><Column id=\"username\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"userid\" type=\"STRING\" size=\"256\"/><Column id=\"userpass\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","125","75","250","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Etravis");
            obj.set_textAlign("center");
            obj.set_font("36px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Edit("EditId","125","180","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("아이디");
            this.addChild(obj.name, obj);

            obj = new Edit("EditPass","125","240","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","125","300","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("로그인");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","125","350","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","315","350","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("종료");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","125","75","250","75",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("LOGIN");
            obj.set_textAlign("center");
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("userid","125","180","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_positionstep("1");
            obj.set_displaynulltext("아이디");
            this.addChild(obj.name, obj);

            obj = new Edit("userpass","125","220","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_positionstep("1");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","125","350","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("등록");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","315","350","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("username","125","260","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_positionstep("1");
            obj.set_displaynulltext("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("birth","125","300","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_positionstep("1");
            obj.set_displaynulltext("생년월일");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        this.username = null;


        this.Button00_onclick = function(obj,e)
        {
        	this.fnLogin();
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.setStepIndex(1);
        };

        this.Button02_00_onclick = function(obj,e)
        {
        	this.setStepIndex(0);
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.fnRegister();
        };

        this.Button03_onclick = function(obj,e)
        {
        	var strSvcId    = "Logout";
        	var strSvcUrl   = "svc::Logout.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "";
        	var isAsync     = false;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnRegister = function ()
        {
        	if ((this.userid.value == null) || (this.userpass.value == null) || (this.username.value == null) || (this.birth.value == null))
        	{
        		alert("빈 값이 존재합니다");
        	}
        		else {
        		this.ds_register.setColumn(0, "userid", this.userid.value);
        		this.ds_register.setColumn(0, "userpass", this.userpass.value);
        		this.ds_register.setColumn(0, "username", this.username.value);
        		this.ds_register.setColumn(0, "birth", this.birth.value);

        		var strSvcId    = "Register";
        		var strSvcUrl   = "svc::RegisterPost.do";
        		var inData      = "registerInput = ds_register";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "";
        		var isAsync     = false;

        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}

        };

        this.fnLogin = function ()
        {

        	this.ds_login.setColumn(0, "userid", this.EditId.text);
        	this.ds_login.setColumn(0, "userpass", this.EditPass.text);

        	var strSvcId    = "Login";
        	var strSvcUrl   = "svc::Login.do";
        	var inData      = "loginInput = ds_login";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnlogincheck";
        	var isAsync     = false;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnlogincheck = function (strSvcId, ErrorCode, ErrorMsg) {
        	if (ErrorCode == 0)
        	{
        		nexacro.setCookieVariable("login", this.username);
        		this.go("svc::EtravisView/FrameBase/main.xfdl")
        	} else{
        		alert(ErrorMsg);
        	}
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.login_onclose,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.EditPass.addEventHandler("onchanged",this.Edit01_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.userid.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
            this.birth.addEventHandler("onchanged",this.Edit03_onchanged,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
