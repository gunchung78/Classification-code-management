package etravis.web;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import etravis.service.MemberService;
import etravis.vo.MemberVO;

@Controller
public class MemberController {
	
	@Resource(name = "MemberService")
	private MemberService ms;

	/**
	 * 회원가입
	 * @param mv 회원가입 정보
	 * @return 
	 */
	@RequestMapping(value = "/RegisterPost.do")
	public NexacroResult RegisterPost(@ParamDataSet(name = "registerInput") MemberVO mv){
		
		ms.register(mv);
		
		return null;
	}
	
	/**
	 * 로그인
	 * @param mv 아이디, 비밀번호
	 * @param req
	 * @param res
	 * @return 로그인 check, 사용자이름, session
	 * @throws Exception
	 */
	@RequestMapping(value = "/Login.do")
	public NexacroResult Login(@ParamDataSet(name = "loginInput") MemberVO mv, 
			HttpServletRequest req, 
			HttpServletResponse res) throws Exception  {
		
		
		int Code=0;
		String Msg;
		HttpSession session = req.getSession();
		MemberVO user = ms.login(mv);
		String username = "";
		if(user == null) {
			session.setAttribute("login", null);
			username = "out";
			Code = -1;
			Msg = "로그인에 실패했습니다.";
		}else {
			session.setAttribute("login", user);
			username = user.getUsername();
			Code = 0;
			Msg = "로그인 되었습니다.";		
		}

		PlatformData outdata = new PlatformData();
		VariableList outlist = outdata.getVariableList();
		outlist.add("username", username);
		outlist.add("ErrorCode", Code);
		outlist.add("ErrorMsg", Msg);
		
		HttpPlatformResponse pres = new HttpPlatformResponse(res, PlatformType.CONTENT_TYPE_XML,"UTF-8");
		pres.setData(outdata); 
		pres.sendData();
		
		return null;
	}
	
	/**
	 * 로그아웃
	 * @param session
	 * @return session 삭제
	 * @throws Exception
	 */
	@RequestMapping(value = "/Logout.do")
	public NexacroResult Logout(HttpSession session) throws Exception  {
		session.invalidate();
	return null;
	}
	
	
	
}
