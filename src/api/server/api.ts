let baseUrl = {
	// 开发/测试
	dev: 'http://127.0.0.1:8080',
	// 生产
	pro: 'https://www.9s68.cn'
}

const api={
	// 接口域名
	baseUrl: baseUrl.dev,
	// 用户登录接口,
	register: '/user/auth/register',
	// ...
}


export default api