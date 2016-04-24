package system.utils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
@SuppressWarnings("rawtypes")
public class JsonUtil {
	
	public static Map jsonToMap(String jsonStr){
		ObjectMapper mapper = new ObjectMapper();
		Map map=new HashMap();
		try {
			map = (Map) mapper.readValue(jsonStr, HashMap.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return map;
	}

}
