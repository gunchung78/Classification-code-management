package etravis.service;

import etravis.vo.MemberVO;

public interface MemberService {
	void register(MemberVO mv);
	
	MemberVO login(MemberVO mv);
	
}
