var home = require('./pages/home');

var magento = function () {
	this.base_url = 'http://demo.magentocommerce.com';
	this.unsecure_directories = ['downloader', 'var', 'media'];
	this.sitemaps = [];

	this.is_production = false;

	this.selectors = {
		demo_notice: '.demo-notice'
	};
	this.pages = {
		home : new home(this)
	};
};

module.exports = magento;
