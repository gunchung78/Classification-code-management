package etravis.service;

import etravis.vo.*;
import java.util.List;

public interface AccountService {
	List<AccountVO> selectAccountList(AccountSearchVO asv);
	
	List<AccountVO> selectionList(ClassificationVO ccv);
	
	void insertSelectionList(SelectionVO sv);
	
	void deleteSelectionList(SelectionVO sv);
	
	void deleteSelectionListAuto(SelectionVO sv);
}

