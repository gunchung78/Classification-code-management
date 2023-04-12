package etravis.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import etravis.service.AccountService;
import etravis.vo.AccountSearchVO;
import etravis.vo.AccountVO;
import etravis.vo.ClassificationVO;
import etravis.vo.SelectionVO;

@Controller
public class AccountMember {
	
	@Resource(name = "AccountService")
	private AccountService as;
	
	
	/**
	 * asv 조건에 계정코드 목록 조회
	 * @param asv 자산구분 콤보박스 선택
	 * @return 계정코드 목록
	 */
	@RequestMapping(value = "/AccountPost.do")
	public NexacroResult AccountPost(@ParamDataSet(name = "accountInput") AccountSearchVO asv) {		
		List<AccountVO> selectAccountList = as.selectAccountList(asv);
		NexacroResult result = new NexacroResult();
		result.addDataSet("accountOutput", selectAccountList);
		
		return result;
	}
	
	/**
	 * ccv 조건에 계정코드 목록 조회
	 * @param ccv 점검항목별 분류코드 목록
	 * @return 등록된 계정코드 제외한 계정코드 목록
	 */
	@RequestMapping(value = "/SelectionPost.do")
	public NexacroResult SelectionPost(@ParamDataSet(name = "selectInput") ClassificationVO ccv) {
		
		List<AccountVO> selectionList = as.selectionList(ccv);
		NexacroResult result = new NexacroResult();
		result.addDataSet("selectOutput", selectionList);
		
		return result;		
	}
	
	/**
	 * 선택한 계정코드 등록
	 * @param sv 선택된 계정코드 목록 
	 * @return 선택한 계정코드 등록
	 */
	@RequestMapping(value = "/InsertSelectionPost.do")
	public NexacroResult InsertSelectionPost(@ParamDataSet(name = "insertSelectInput") SelectionVO sv) {
		
		as.insertSelectionList(sv);
		
		return null;
	}
	
	/**
	 * 선택한 계정코드 삭제
	 * @param sv 선택된 계정코드 목록
	 * @return 선택한 계정코드 삭제
	 */
	@RequestMapping(value = "/DeleteSelectionPost.do")
	public NexacroResult DeleteSelectionPost(@ParamDataSet(name = "deleteSelectInput") SelectionVO sv) {
		
		as.deleteSelectionList(sv);
		
		return null;
	}
	
	/**
	 * 분류코드 삭제후 선택된 계정코드 삭제
	 * @param sv
	 * @return 선택된 계정토드 삭제
	 */
	@RequestMapping(value = "/DeleteSelectionAutoPost.do")
	public NexacroResult DeleteSelectionAutoPost(@ParamDataSet(name = "deleteSelectAutoInput") SelectionVO sv) {

		as.deleteSelectionListAuto(sv);
		
		return null;
	}
}
