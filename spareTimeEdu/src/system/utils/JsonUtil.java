package system.utils;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
@SuppressWarnings("rawtypes")
public class JsonUtil {
	
	public static Map toMap(String jsonStr){
		Map map=new HashMap();
		if(null!=jsonStr && ""!=jsonStr){
			Gson gson=new Gson();
			Type type = new TypeToken<Map>() {}.getType();
			map=gson.fromJson(jsonStr, type);
		}
		
		return map;
	}

}
