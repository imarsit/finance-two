module.exports = {
	// 模版标识
	name: 'finance-two',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '个人业务',
			// 路径
			path: 'cases',
			// 预览图
			thumbnail: 'cases.png',
		},
		{
			name: '机构业务',
			// 路径
			path: 'inst_sell',
			// 预览图
			thumbnail: 'inst_sell.png',
		},
		{
			name: '余额宝',
			// 路径
			path: 'yuebao',
			// 预览图
			thumbnail: 'yuebao.png',
		},
		{
			name: '养老金',
			// 路径
			path: 'old',
			// 预览图
			thumbnail: 'old.png',
		},
		{
			name: '银行业务',
			// 路径
			path: 'bank',
			// 预览图
			thumbnail: 'bank.png',
		},
		{
			name: '关于我们',
			// 路径
			path: 'about',
			// 预览图
			thumbnail: 'about.png',
		}
	]
}
