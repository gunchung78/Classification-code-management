package etravis.service;

import java.util.List;
import etravis.vo.*;

public interface ClassificationService {
	List<CategoriesVO> CategoriesList();
	
	List<ClassificationVO> selectCategoriesList(CategoriesVO cv);
	
	void insertClassification(ClassificationVO ccv);
	
	void updateClassification(ClassificationVO ccv);
	
	void deleteClassification(ClassificationVO ccv);
}
