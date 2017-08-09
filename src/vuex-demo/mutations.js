// mutaion.js 对数据的操作(同步)
import * as mod from "./mutation-type";
export default{
	[mod.ADD_NAME](state,name){
		if(name.trim()){
			let nameInfo = {};
			nameInfo.name = name;
			nameInfo.id = state.nameList.length + 1;
			state.nameList.push(nameInfo);
		}else{
			alert('添加的内容不能为空');
		}
	},
	[mod.DELETE_NAME](state,i){
		state.nameList.splice(i,1);
	},
	[mod.MODIFY_NAME](state,obj){
		state.isShow = true;
		state.modifyName = obj.nameInfo.name;
		state.nameIndex = obj.index;
	},
	[mod.CALC_MODIFY](state){
		state.isShow = false;
	},
	[mod.SURE_MODIFY](state){
		state.nameList[state.nameIndex].name = state.modifyName; 
		state.isShow = false;
	},
	// 这里必须要执行updateName操作
	updateName(state,value){
		state.modifyName = value;
	}
}