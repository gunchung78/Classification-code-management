(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("add");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_classification_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ecno\" type=\"STRING\" size=\"256\"/><Column id=\"classificationid\" type=\"STRING\" size=\"256\"/><Column id=\"classificationname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_categories_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"cno\" type=\"STRING\" size=\"256\"/><Column id=\"categoryname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"cno\" type=\"STRING\" size=\"256\"/><Column id=\"categoryname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classification_search", this);
            obj._setContents("<ColumnInfo><Column id=\"cno\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classification_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"ecno\" type=\"STRING\" size=\"256\"/><Column id=\"classificationid\" type=\"STRING\" size=\"256\"/><Column id=\"classificationname\" type=\"STRING\" size=\"256\"/><Column id=\"cno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classification_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"ecno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classification_update", this);
            obj._setContents("<ColumnInfo><Column id=\"ecno\" type=\"STRING\" size=\"256\"/><Column id=\"classificationname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00_02_00","321","198","299","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","72","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("GridCode","20","114","280","566",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_classification_list");
            obj.set_autosizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\"/><Cell col=\"1\" text=\"분류코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:classificationid\"/><Cell col=\"1\" text=\"bind:classificationname\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","173","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("분류코드 등록");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","72","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("한도 점검항목");
            obj.set_background("#33c4f9");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboCategories","106","77","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_categories_combo");
            obj.set_codecolumn("cno");
            obj.set_datacolumn("categoryname");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","321","114","299","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","321","114","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("점검항목 *");
            obj.set_background("#33c4f9");
            obj.set_textAlign("center");
            obj.set_border("1px solid royalblue");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboCategory","407","119","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_category_combo");
            obj.set_datacolumn("categoryname");
            obj.set_codecolumn("cno");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","321","142","299","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","321","142","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("분류코드 *");
            obj.set_background("#33c4f9");
            obj.set_textAlign("center");
            obj.set_border("1px solid royalblue");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","321","170","299","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","321","170","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("분 류 명 *");
            obj.set_background("#33c4f9");
            obj.set_textAlign("center");
            obj.set_border("1px solid royalblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","320","75","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("입력 및 상세내역");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","460","75","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","515","75","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","570","75","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","460","22","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","515","22","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","570","22","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("종료");
            this.addChild(obj.name, obj);

            obj = new Edit("EditCode","407","147","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_displaynulltext("8자리 이하의 숫자");
            this.addChild(obj.name, obj);

            obj = new Edit("EditName","407","175","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_displaynulltext("15이하의 문자");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add.xfdl", function() {
        var RowIndex = null;
        var flag = null;

        this.transaction("searchCategories", "svc::get.do" , "", "ds_categories_combo=categoriesOutput", "", "", false);
        this.ComboCategories.set_index(0);
        this.ds_classification_search.setColumn(0, "cno"  , this.ComboCategories.value);
        this.transaction("ClassificationSearch", "svc::ClassificationPost.do", "classificationInput = ds_classification_search", "ds_classification_list = classificationOutput", "", "", false);
        this.ds_category_combo.setColumn(0,"cno", this.ComboCategories.value);
        this.ds_category_combo.setColumn(0,"categoryname", this.ComboCategories.text);
        this.ComboCategory.set_index(0);

        /* 1) --- 입력 --- */
        this.Button00_onclick = function(obj,e){
        	flag = "insert";
        	this.fnSet_enable(true, true, true, RowIndex);
        };

        /* 2) --- 수정 --- */
        this.Button01_onclick = function(obj,e){
        	flag = "update";
        	this.fnSet_enable(false, false, true, RowIndex);
        };

        /* 3) --- 취소 --- */
        this.Button02_onclick = function(obj,e)
        {
        	flag = null;
        	this.fnSet_enable(false, false, false, RowIndex);
        };

        /* 4) --- 삭제 --- */
        this.Button03_onclick = function(obj,e)
        {
        	if(RowIndex == null){
        		alert("삭제할 분류코드를 선택해주세요.");
        	} else {
        		this.fnClassificationDelete();
        		this.fnClassificationSearch();
        		this.fnSelectionDeleteAuto();
        		this.fnSet_enable(false, false, false, RowIndex);
        		RowIndex = null;
        	}
        };

        /* 5) --- 저장 --- */
        this.Button04_onclick = function(obj,e)
        {
        	var cinput = this.EditCode.text;
        	var regCode = new RegExp("[0-9]{1,8}");
        	var checkCode = regCode.exec(cinput);

         	var ninput = this.EditName.text;
        	var regName = new RegExp("[^a-za-z0-9]{1,15}");
        	var checkName = regName.exec(ninput);

        	if ((cinput == "") || (ninput == ""))
        	{	alert("값을 입력해주세요.");	}
        	else if ((checkName == null) || (checkCode == null))
        	{	alert("입력조건에 부적합합니다.");	}
        	else{
        		if (flag == "insert") { this.fnClassificationInsert();
        		} else if (flag == "update") { this.fnClassificationUpdate();
        		} else { alert("저장할 분류코드를 입력해주세요.");
        		}
        		this.fnClassificationSearch();
        		this.fnSet_enable(false, false, false, RowIndex);
        		RowIndex = null;
        		flag = null;
        	}
        };

        /* 6) --- 조회 --- */

        // 점검항복별 분류코드 조회
        this.ComboCategories_onitemchanged = function(obj,e)
        {
        	this.fnClassificationSearch();
        	this.ds_category_combo.setColumn(0,"cno", this.ComboCategories.value);
        	this.ds_category_combo.setColumn(0,"categoryname", this.ComboCategories.text);
        	this.ComboCategory.set_index(0);
        };

        // 분류코드 선택
        this.GridCode_oncellclick = function(obj,e)
        {
        	RowIndex = e.row;
        	this.ds_classification_delete.setColumn(0, "ecno"  , this.ds_classification_list.getColumn(RowIndex, "ecno"));
        	this.ds_classification_update.setColumn(0, "ecno"  , this.ds_classification_list.getColumn(RowIndex, "ecno"));
        	this.fnSet_enable(false, false, false, RowIndex);
        };

        /* 7) --- 종료 --- */
        this.Button05_onclick = function(obj,e)
        {
        	this.close();
        };



        /* --- 기타 function --- */

        // Edit 비활성화 fn
        this.fnSet_enable = function (category, code, name, RowIndex){
        	this.fnMoveValue(RowIndex);
        	this.ComboCategory.set_enable(category);
        	this.EditCode.set_enable(code);
        	this.EditName.set_enable(name);
        	if (category == true)
        	{
        		this.transaction("searchCategories", "svc::get.do" , "", "ds_category_combo=categoriesOutput", "", "", false);
        		this.EditCode.set_value(null);
        		this.EditName.set_value(null);
        	}
        	else if (category == false && name == true)
        	{
        		this.fnMoveValue(RowIndex);
        		if (RowIndex == null)
        		{
        			this.ComboCategory.set_enable(false);
        			this.EditCode.set_enable(false);
        			this.EditName.set_enable(false);
        			alert("수정할 분류코드를 선택해주세요.");
        		}
        	}
        	else if (name == false)
        	{
        		this.fnMoveValue(RowIndex);
        	}
        };

        // 분류코드값 이동 fn
        this.fnMoveValue = function (RowIndex){
        	this.ds_classification_insert.setColumn(0, "classificationid"  , this.EditCode.text);
        	this.ds_classification_insert.setColumn(0, "classificationname"  , this.EditName.text);
        	this.EditCode.set_value(this.ds_classification_list.getColumn(RowIndex, "classificationid"));
        	this.EditName.set_value(this.ds_classification_list.getColumn(RowIndex, "classificationname"));
        };



        /* --- transaction function --- */

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

        // 분류코드 insert fn
        this.fnClassificationInsert = function (){
          this.ds_classification_insert.setColumn(0, "cno"  , this.ComboCategory.value);
          this.ds_classification_insert.setColumn(0, "classificationid"  , this.EditCode.text);
          this.ds_classification_insert.setColumn(0, "classificationname"  , this.EditName.text);

          var strSvcId    = "ClassificationInsert";
          var strSvcUrl   = "svc::InsertClassificationPost.do";
          var inData      = "insertClassificationInput = ds_classification_insert";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // 분류코드 delete fn
        this.fnClassificationDelete = function (){

          var strSvcId    = "ClassificationDelete";
          var strSvcUrl   = "svc::DeleteClassificationPost.do";
          var inData      = "deleteClassificationInput = ds_classification_delete";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        this.fnSelectionDeleteAuto = function (){

          var strSvcId    = "SelectionDeleteAuto";
          var strSvcUrl   = "svc::DeleteSelectionAutoPost.do";
          var inData      = "deleteSelectAutoInput = ds_classification_delete";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 분류코드 update fn
        this.fnClassificationUpdate = function (){
          this.ds_classification_update.setColumn(0, "classificationname"  , this.EditName.text);

          var strSvcId    = "ClassificationUpdate";
          var strSvcUrl   = "svc::UpdateClassificationPost.do";
          var inData      = "updateClassificationInput = ds_classification_update";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "";
          var isAsync     = false;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.GridCode.addEventHandler("oncellclick",this.GridCode_oncellclick,this);
            this.ComboCategories.addEventHandler("onitemchanged",this.ComboCategories_onitemchanged,this);
            this.ComboCategories.addEventHandler("canitemchange",this.ComboCategories_canitemchange,this);
            this.ComboCategory.addEventHandler("onitemchanged",this.ComboCategory_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.EditCode.addEventHandler("onchanged",this.EditCode_onchanged,this);
        };
        this.loadIncludeScript("add.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
