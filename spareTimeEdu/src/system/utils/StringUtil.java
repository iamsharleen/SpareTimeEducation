package system.utils;

public class StringUtil {
	
	public static boolean isNotEmpty(String str){
		if(null!=str && !"".equals(str)){
			return true;
		}else{
			return false;
		}
	}

}
