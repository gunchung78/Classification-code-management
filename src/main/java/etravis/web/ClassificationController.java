package etravis.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import etravis.service.ClassificationService;
import etravis.vo.CategoriesVO;
import etravis.vo.ClassificationVO;

@Controller
public class ClassificationController {

	@Resource(name = "ClassificationService")
	private ClassificationService cs;
	
	/**
	 * 한도 점검항목 조회
	 * @return 한도 점검항목 목록
	 */
	@RequestMapping(value = "/get.do")
	public NexacroResult getList() {
		
		List<CategoriesVO> categoriesList = cs.CategoriesList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("categoriesOutput", categoriesList);
		
		return result;
	}
	
	/**
	 * 점검항목별 분류코드 조회
	 * @param cv 한도 점검항목 목록
	 * @return 분류코드 목록
	 */
	@RequestMapping(value = "/ClassificationPost.do")
	public NexacroResult ClassificationPost(@ParamDataSet(name = "classificationInput") CategoriesVO cv) {
		
		List<ClassificationVO> selectClassificationList = cs.selectCategoriesList(cv);
		NexacroResult result = new NexacroResult();
		result.addDataSet("classificationOutput", selectClassificationList);
		
		return result;
	}
	
	/**
	 * 분류코드 등록
	 * @param ccv 분류코드, 분류코드명, 점검항목
	 * @return 
	 */
	@RequestMapping(value = "/InsertClassificationPost.do")
	public NexacroResult InsertClassificationPost(@ParamDataSet(name = "insertClassificationInput") ClassificationVO ccv) {
		
		cs.insertClassification(ccv);
		
		return null;
	}

	/**
	 * 분류코드 수정
	 * @param ccv 분류코드명
	 * @return
	 */
	@RequestMapping(value = "/UpdateClassificationPost.do")
	public NexacroResult UpdateClassificationPost(@ParamDataSet(name = "updateClassificationInput") ClassificationVO ccv) {
		
		cs.updateClassification(ccv);
		
		return null;
	}
	
	/**
	 * 분류코드 삭제
	 * @param ccv 분류코드, 분류코드 시퀀스
	 * @return
	 */
	@RequestMapping(value = "/DeleteClassificationPost.do")
	public NexacroResult DeleteClassificationPost(@ParamDataSet(name = "deleteClassificationInput") ClassificationVO ccv) {
		
		cs.deleteClassification(ccv);
		
		return null;
	}
}
