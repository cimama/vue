const message = {
	error: (msg:any, callback:any) => {
		uni.showToast({
			title: msg,
			icon: 'error',
			success: callback ? callback : null
		})
	},
	success: (msg:string, callback:any) => {
		uni.showToast({
			title: msg,
			icon: 'success',
			success: callback ? callback : null
		})
	},
	warning: (msg:any, callback:any) => {
		uni.showToast({
			title: msg,
			icon: 'exception',
			success: callback ? callback : null
		})
	}
}
export default message;