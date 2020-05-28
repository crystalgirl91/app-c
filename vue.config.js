const path = require('path');
module.exports = {
	// devServer:{
	// 	port:80,
	// 	disableHostCheck: true
	// },
	publicPath: process.env.NODE_ENV === 'production'? './' : '/',
	lintOnSave:false,
	filenameHashing:true,
	pages: {
	    index: {
	      // page 的入口
	      entry: 'src/main.js',
	      // 模板来源
	      template: 'index.html',
	      // 在 dist/index.html 的输出
	      filename: 'index.html',
	      // 当使用 title 选项时，
	      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	      title: '',
	      // 在这个页面中包含的块，默认情况下会包含
	    }
  	},
  	css:{
  		sourceMap:true,
  		loaderOptions:{
  			postcss: {
		        plugins: [
		          // 把px单位换算成rem单位
		          require("postcss-pxtorem")({
		            rootValue: 37.5, // 换算的基数(设计图750)
		            propList: ["*"], //可以从px更改为rem的属性。
		            minPixelValue: 2 // 设置要替换的最小像素值。
		          })
		        ]
		      }
  		}
  	},
  	configureWebpack:{
  		resolve: {
	  		alias: {
	            '@': path.join(__dirname, "src/pages"),
	            '@s': path.join(__dirname, "src")
	        }
	    }
  	}
}