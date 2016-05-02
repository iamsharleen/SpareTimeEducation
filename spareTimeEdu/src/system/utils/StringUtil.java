package system.utils;

public class StringUtil {
	
	public static boolean isNotEmpty(String str){
		if(null!=str && !"".equals(str)){
			return true;
		}else{
			return false;
		}
	}
	
	public static String getInStr(String[] strs){
		StringBuilder b=new StringBuilder();
		for(int i=0;i<strs.length;i++){
			b.append("'").append(strs[i]).append("'");
		}
		if(b.length()>0){
			b.deleteCharAt(b.length()-1);
		}
		return b.toString();
	}

}
