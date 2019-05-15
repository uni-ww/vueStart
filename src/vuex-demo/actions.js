// actions.js 页面执行的逻辑操作
import * as mod from "./mutation-type";

export default{
	addName({commit},obj){
		commit(mod.ADD_NAME,obj.name);
	},
	deleteName({commit},i){
		commit(mod.DELETE_NAME,i);
	},
	modifyName({commit},obj,i){
		commit(mod.MODIFY_NAME,obj,i);
	},
	calcModify({commit},obj){
		commit(mod.CALC_MODIFY);
	},
	sureModify({commit}){
		commit(mod.SURE_MODIFY);
	},
	updateName({commit},value){
		commit(updateName,value);
	}
}
