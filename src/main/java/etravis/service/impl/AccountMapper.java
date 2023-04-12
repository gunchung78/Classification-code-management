package etravis.service.impl;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import etravis.vo.*;
import java.util.List;

@Mapper("AccountMapper")
public interface AccountMapper {
	List<AccountVO> selectAccountList(AccountSearchVO asv);
	
	List<AccountVO> selectionList(ClassificationVO ccv);
	
	void insertSelectionList(SelectionVO sv);
	
	void deleteSelectionList(SelectionVO sv);
	
	void deleteSelectionListAuto(SelectionVO sv);
}
