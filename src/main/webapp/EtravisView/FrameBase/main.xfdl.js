(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_account_list", this);
            obj._setContents("<ColumnInfo><Column id=\"accountid\" type=\"STRING\" size=\"256\"/><Column id=\"accountname\" type=\"STRING\" size=\"256\"/><Column id=\"productid\" type=\"STRING\" size=\"256\"/><Column id=\"productname\" type=\"STRING\" size=\"256\"/><Column id=\"propertyid\" type=\"STRING\" size=\"256\"/><Column id=\"propertyname\" type=\"STRING\" size=\"256\"/><Column id=\"eano\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col><Col id=\"code\"/></Row><Row><Col id=\"name\">단기매매</Col><Col id=\"code\">단기매매</Col></Row><Row><Col id=\"name\">매도가능(유동)</Col><Col id=\"code\">매도가능(유동)</Col></Row><Row><Col id=\"name\">만기보유(유동)</Col><Col id=\"code\">만기보유(유동)</Col></Row><Row><Col id=\"name\">매도가능(비유동)</Col><Col id=\"code\">매도가능(비유동)</Col></Row><Row><Col id=\"code\">만기보유(비유동)</Col><Col id=\"name\">만기보유(비유동)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_search", this);
            obj._setContents("<ColumnInfo><Column id=\"propertysearch\" type=\"STRING\" size=\"256\"/><Column id=\"ecno\" type=\"STRING\" size=\"256\"/><Column id=\"classificationid\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_categories_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"cno\" type=\"STRING\" size=\"256\"/><Column id=\"categoryname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classification_list", this);
            obj._setContents("<ColumnInfo><Column id=\"classificationid\" type=\"STRING\" size=\"256\"/><Column id=\"classificationname\" type=\"STRING\" size=\"256\"/><Column id=\"ecno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classification_search", this);
            obj._setContents("<ColumnInfo><Column id=\"cno\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selection_list", this);
            obj._setContents("<ColumnInfo><Column id=\"accountid\" type=\"STRING\" size=\"256\"/><Column id=\"accountname\" type=\"STRING\" size=\"256\"/><Column id=\"eano\" type=\"STRING\" size=\"256\"/><Column id=\"esno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selection_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ecno\" type=\"STRING\" size=\"256\"/><Column id=\"classificationid\" type=\"STRING\" size=\"256\"/><Column id=\"classificationname\" type=\"STRING\" size=\"256\"/><Column id=\"cno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selection_check", this);
            obj._setContents("<ColumnInfo><Column id=\"esno\" type=\"STRING\" size=\"256\"/><Column id=\"ecno\" type=\"STRING\" size=\"256\"/><Column id=\"classificationid\" type=\"STRING\" size=\"256\"/><Column id=\"eano\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit01","680","132","560","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboAccount","760","137","390","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_account_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","681","180","559","470",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_account_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"계정코드명\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"상품코드명\"/><Cell col=\"5\" text=\"자산코드\"/><Cell col=\"6\" text=\"자산코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:accountid\"/><Cell col=\"2\" text=\"bind:accountname\"/><Cell col=\"3\" text=\"bind:productid\"/><Cell col=\"4\" text=\"bind:productname\"/><Cell col=\"5\" text=\"bind:propertyid\"/><Cell col=\"6\" text=\"bind:propertyname\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1160","133","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_layoutorder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","10","225","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("분류코드 관리");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","18","80","1222","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","18","80","122","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("한도 점검항목");
            obj.set_color("#000000");
            obj.set_background("#999999");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboCategories","150","85","510","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_categories_combo");
            obj.set_codecolumn("cno");
            obj.set_datacolumn("categoryname");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","681","133","69","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("자산구분");
            obj.set_background("#33c4f9");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","18","180","280","468",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_classification_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\"/><Cell col=\"1\" text=\"분류코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:classificationid\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classificationname\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","320","180","280","467",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_selection_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"계정코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:accountid\"/><Cell col=\"2\" text=\"bind:accountname\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","615","340","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(">>");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","615","385","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<<");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","960","30","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","860","30","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","1060","30","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","1160","30","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("종료");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","18","150","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("점검항목별 분류코드");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","320","150","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("분류코드별 계정코드");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","198","152","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("분류코드등록");
            obj.set_background("#2dbca0");
            obj.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","670","30","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main.xfdl", function() {
        var ecnoInput = "";
        var classificationidInput = "";
        this.transaction("searchCategories", "svc::get.do" , "", "ds_categories_combo=categoriesOutput", "", "", false);
        this.ComboCategories.set_index(0);


        /* 1) --- 삭제 --- */
        this.Button04_onclick = function(obj,e)
        {
        	ecnoInput = "";
            classificationidInput = "";
        	this.ComboCategories.set_text("");
        	this.ComboAccount.set_index(0);
        	this.fnRestList("left");
        	this.fnRestList("middle");
        	this.fnRestList("right");
        	this.ComboCategories.set_index(0);
        };

        /* 2) --- 취소 --- */
        this.Button01_onclick = function(obj,e){
        	var input = "";
        	if ((ecnoInput == "") || (classificationidInput == ""))
        	{
        		alert("점검항목별 분류코드를 선택해주세요.")
        	}
        	else
        	{
        		for(var i=0;i<this.ds_selection_list.rowcount;i++){
        			if(this.ds_selection_list.getColumn(i, "chk") == "1"){
        				input = this.ds_selection_list.getColumn(i,"esno");
        				this.fnDeleteAccount(input);
        			}
        		}
        		if (input == ""){ alert("체크박스를 선택해주세요."); }
        		else {
        			this.fnRestList("middle");
        			this.fnRestList("right");
        		}
        	}
        };

        /* 3) --- 등록 --- */
        this.Button01_00_onclick = function(obj,e){
        	var input = "";
        	if ((ecnoInput == "") || (classificationidInput == "")) {
        		alert("계정코드를 선택해주세요.")
        	}
        	else {
        		for(var i=0;i<this.ds_account_list.rowcount;i++){
        			if(this.ds_account_list.getColumn(i, "chk") == "1"){
        				input = this.ds_account_list.getColumn(i,"eano");
        				this.fnInsertAccount(input);
        			}
        		}
        		if (input == ""){ alert("체크박스를 선택해주세요."); }
        		else {
        			this.fnRestList("middle");
        			this.fnRestList("right");
        		}
        	}
        };

        /* 4) --- 분류코드등록 --- */
        this.Button06_onclick = function(obj,e){
        	nexacro.open("add", "svc::EtravisView/FrameBase/add.xfdl", this.getOwnerFrame());
        };

        /* 5) --- 검색 --- */

        // 계정코드 조회
        this.Button00_onclick = function(obj,e){
        	this.fnRestList("right");
        };

        // 분류코드별 계정코드 조회
        this.Grid01_oncellclick = function(obj,e){
        	ecnoInput = this.ds_classification_list.getColumn(e.row,"ecno");
            classificationidInput = this.ds_classification_list.getColumn(e.row,"classificationid");
        	this.fnRestList("middle");
        	this.fnRestList("right");
        };

        // 점검항목별 분류코드 조회
        this.Button02_onclick = function(obj,e){
        	ecnoInput = "";
            classificationidInput = "";
        	this.fnRestList("left");
        	this.fnRestList("middle");
        	this.fnRestList("right");
        };

        /* 6) --- 로그인 --- */

        // 로그인 창 이동
        this.Button03_onclick = function(obj,e){
        	if (nexacro.getCookieVariable("login") != "out") {
        		this.fnLogout();
        		this.Static04.set_text("");
        		this.go("svc::EtravisView/FrameBase/Form_Work.xfdl");
        	}
        };

        // 로그인 확인
        this.Form_Work_onmousemove = function(obj,e)
        {
        	if (nexacro.getCookieVariable("login") == "out") {
        		this.Static04.set_text("");
        		this.Button03.set_text("로그인");
        	} else {
        		var welecome = nexacro.getCookieVariable("login") + "님 환영합니다.";
        		this.Static04.set_text(welecome);
        		this.Button03.set_text("로그아웃");
        	}
        };

        /* 7) --- 종료 --- */
        this.Button05_onclick = function(obj,e){
        	this.close();
        };



        /* --- 기타 function --- */

        // 조회 fn
        this.fnRestList = function (where)
        {
        	if (where == "left") {
        		this.fnClassificationSearch();
        	}
        	else if (where == "middle") {
        		this.Grid01_00.setCellProperty("head", 0, "text", "0");
        		this.fnSelectionSearch();
        	}
        	else if (where == "right") {
        		this.Grid00.setCellProperty("head", 0, "text", "0");
        		this.fnSearch();
        	}
        };


        // 체크박스 > 전체선택 계정코드
        this.Grid00_onheadclick = function(obj,e){
        	var dataset = this.ds_account_list;
        	this.fnAllCheck(dataset, e, obj)
        };

        // 체크박스 > 전체선택 분류코드별 계정코드
        this.Grid01_00_onheadclick = function(obj,e){
        	var dataset = this.ds_selection_list;
        	this.fnAllCheck(dataset, e, obj)
        };

        // 체크박스 추가
        this.fnCheckRowcount = function(dataset){
         	dataset.addColumn("chk","STRING");
         	for(var i=0;i<dataset.rowcount;i++){
         		dataset.setColumn(i, "chk", "0");
         	}
        };

        // 체크박스 전체선택 fn
        this.fnAllCheck = function(dataset, e, obj){
        	if(e.cell == 0){
        		var chk = obj.getCellText(-1, 0);
        		chk = (chk == "1" ? "0" : "1");
        		for(var i=0;i<dataset.rowcount;i++){
        			input = dataset.setColumn(i, "chk", chk);
        		}
        		obj.setCellProperty("head", 0, "text", chk);
        	}
        };



        /* --- transaction function --- */

        // 계정코드 조회 fn
        this.fnSearch = function (){
          this.ds_account_search.setColumn(0, "propertysearch"  , this.ComboAccount.value);

          var strSvcId    = "search";
          var strSvcUrl   = "svc::AccountPost.do";
          var inData      = "accountInput=ds_account_search";
          var outData     = "ds_account_list=accountOutput";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;
          var dataset = this.ds_account_list;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
          this.fnCheckRowcount(dataset);
        };

        // 점검항복별 분류코드 조회 fn
        this.fnClassificationSearch = function (){
          this.ds_classification_search.setColumn(0, "cno"  , this.ComboCategories.value);

          var strSvcId    = "ClassificationSearch";
          var strSvcUrl   = "svc::ClassificationPost.do";
          var inData      = "classificationInput = ds_classification_search";
          var outData     = "ds_classification_list = classificationOutput";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 분류코드별 계정코드 조회 fn
        this.fnSelectionSearch = function (){
          this.ds_selection_search.setColumn(0, "ecno", ecnoInput);
          this.ds_selection_search.setColumn(0, "classificationid", classificationidInput);
          this.ds_selection_check.setColumn(0, "ecno", ecnoInput);
          this.ds_selection_check.setColumn(0, "classificationid", classificationidInput);
          this.ds_account_search.setColumn(0, "ecno" , ecnoInput);
          this.ds_account_search.setColumn(0, "classificationid", classificationidInput);

          var strSvcId    = "SelectionSearch";
          var strSvcUrl   = "svc::SelectionPost.do";
          var inData      = "selectInput = ds_selection_search";
          var outData     = "ds_selection_list = selectOutput";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;
          var dataset = this.ds_selection_list;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
          this.fnCheckRowcount(dataset);
        };

        // 등록 fn
        this.fnInsertAccount = function(input){
          this.ds_selection_check.setColumn(0, "eano", input);
          var strSvcId    = "SelectionInsert";
          var strSvcUrl   = "svc::InsertSelectionPost.do";
          var inData      = "insertSelectInput = ds_selection_check";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 취소 fn
        this.fnDeleteAccount = function(input){
          this.ds_selection_check.setColumn(0, "esno", input);
          var strSvcId    = "SelectionDelete";
          var strSvcUrl   = "svc::DeleteSelectionPost.do";
          var inData      = "deleteSelectInput = ds_selection_check";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 로그아웃 fn
        this.fnLogout = function(){
          var strSvcId    = "Logout";
          var strSvcUrl   = "svc::Logout.do";
          var inData      = "";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
          nexacro.setCookieVariable("login", "out");
        }











        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onmouseenter",this.Form_Work_onmouseenter,this);
            this.addEventHandler("onmousemove",this.Form_Work_onmousemove,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
            this.Edit01.addEventHandler("onchanged",this.Edit01_onchanged,this);
            this.ComboAccount.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.ComboCategories.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Grid01_00.addEventHandler("onheadclick",this.Grid01_00_onheadclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
        };
        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
