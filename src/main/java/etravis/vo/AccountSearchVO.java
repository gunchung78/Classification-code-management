package etravis.vo;

public class AccountSearchVO {
	private String propertysearch="";
	private int ecno;
	private int classificationid;

	public int getEcno() {
		return ecno;
	}

	public void setEcno(int ecno) {
		this.ecno = ecno;
	}

	public int getClassificationid() {
		return classificationid;
	}

	public void setClassificationid(int classificationid) {
		this.classificationid = classificationid;
	}

	public String getPropertysearch() {
		return propertysearch;
	}

	public void setPropertysearch(String propertysearch) {
		this.propertysearch = propertysearch;
	}

	
}
