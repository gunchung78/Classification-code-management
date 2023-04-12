package etravis.service.impl;

import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import etravis.vo.*;

@Mapper("ClassificationMapper")
public interface ClassificationMapper {
	List<CategoriesVO> CategoriesList();
	
	List<ClassificationVO> selectCategoriesList(CategoriesVO cv);
	
	void insertClassification(ClassificationVO ccv);
	
	void updateClassification(ClassificationVO ccv);
	
	void deleteClassification(ClassificationVO ccv);
}
