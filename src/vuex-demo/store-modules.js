
import mutations from './mutations';
import actions from './actions';

export default{
	state:{
		nameList:[],
		isShow:false,
		modifyName:'',
		nameIndex:0
	},	
	mutations:mutations,
	actions:actions,
	getters:{
		
	}
}