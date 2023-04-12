package etravis.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import etravis.service.ClassificationService;
import etravis.vo.*;
import java.util.List;

@Service("ClassificationService")
public class ClassificationServiceImpl implements ClassificationService {
	
	@Resource(name = "ClassificationMapper")
	private ClassificationMapper cm;
	
	@Override
	public List<CategoriesVO> CategoriesList(){
		return cm.CategoriesList();
	}
	
	@Override
	public List<ClassificationVO> selectCategoriesList(CategoriesVO cv) {
		return cm.selectCategoriesList(cv);
	}
	
	@Override
	public void insertClassification(ClassificationVO ccv) {
		cm.insertClassification(ccv);
	}

	@Override
	public void updateClassification(ClassificationVO ccv) {
		cm.updateClassification(ccv);
	}
	
	@Override
	public void deleteClassification(ClassificationVO ccv) {
		cm.deleteClassification(ccv);
	}
}
