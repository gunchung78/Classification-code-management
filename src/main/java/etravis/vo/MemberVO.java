package etravis.vo;

public class MemberVO {
	private int emno;
	private String userid="";
	private String userpass="";
	private String username="";
	private int birth;
	private int indate;
	private int intime;
	public int getEmno() {
		return emno;
	}
	public void setEmno(int emno) {
		this.emno = emno;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUserpass() {
		return userpass;
	}
	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getBirth() {
		return birth;
	}
	public void setBirth(int birth) {
		this.birth = birth;
	}
	public int getIndate() {
		return indate;
	}
	public void setIndate(int indate) {
		this.indate = indate;
	}
	public int getIntime() {
		return intime;
	}
	public void setIntime(int intime) {
		this.intime = intime;
	}
}
