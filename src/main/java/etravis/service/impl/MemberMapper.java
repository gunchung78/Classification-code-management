package etravis.service.impl;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import etravis.vo.MemberVO;

@Mapper("MemberMapper")
public interface MemberMapper {
	void register(MemberVO mv);
	
	MemberVO login(MemberVO mv);
}
