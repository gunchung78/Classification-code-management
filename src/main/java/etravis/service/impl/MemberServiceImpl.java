package etravis.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import etravis.service.MemberService;
import etravis.vo.MemberVO;

@Service("MemberService")
public class MemberServiceImpl implements MemberService{
	
	@Resource(name = "MemberMapper")
	private MemberMapper mm;
	
	@Override
	public void register(MemberVO mv) {
		mm.register(mv);
	}
	
	@Override
	public MemberVO login(MemberVO mv) {
		return mm.login(mv);
	}
	
}
