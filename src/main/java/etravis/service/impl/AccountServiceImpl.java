package etravis.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import etravis.service.AccountService;
import etravis.vo.*;

@Service("AccountService")
public class AccountServiceImpl implements AccountService{

	@Resource(name = "AccountMapper")
	private AccountMapper am;
	
	@Override
	public List<AccountVO> selectAccountList(AccountSearchVO asv){
		return am.selectAccountList(asv);
	}
	
	@Override
	public List<AccountVO> selectionList(ClassificationVO ccv){
		return am.selectionList(ccv);
	}
	
	@Override
	public void insertSelectionList(SelectionVO sv){
		am.insertSelectionList(sv);
	}
	
	@Override
	public void deleteSelectionList(SelectionVO sv){
		am.deleteSelectionList(sv);
	}
	
	@Override
	public void deleteSelectionListAuto(SelectionVO sv) {
		am.deleteSelectionListAuto(sv);
	}
}
