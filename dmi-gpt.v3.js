var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];

(function() {
	var gads = document.createElement('script');
	gads.async = true;
	gads.type = 'text/javascript';
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
})();

var n_pbt = '';
function nuggAdReady(pbt) {
	var d = new Date();d.setFullYear(d.getFullYear() + 1);
	document.cookie='__npbt=' + pbt.replace(/\;/gi,'|') + '; expires=' + d.toUTCString();
}
(function(r,s) {
	var d = document, a = d.createElement('script'), b = d.getElementsByTagName('script')[0]; 
	a.async = true; a.type = 'text/javascript'; a.src =(s?'https://jubdk-s':'http://jubdk')+'.nuggad.net/rc?nuggn=224986932&nuggsid=1289003088&nuggrid=' + r;
	b.parentNode.insertBefore(a, b);
})(encodeURIComponent(top.location.href) || 0, 'https:' == document.location.protocol);

googletag.cmd.push(function() {
	var x = /(?:\?|&)jubiitest=([^&#]*)/g, m, v = [], d = function (s) {return decodeURIComponent(s.replace(/\+/g, ' '));}; while (m = x.exec(location.search)) { v[v.length] = d(m[1]); }
	if(v.length>0){ googletag.pubads().setTargeting('jubiitest',v); }

	var pbt=null,cakes=document.cookie.split('; '),c=cakes.length,n='__npbt=';
	while(c--){ var cake=cakes[c]; if(cake.indexOf(n)===0&&cake.length){pbt=cake.substring(n.length).split('|'); n_pbt=pbt.join(';');break;}}
	if(pbt!=null){ c=pbt.length; while(c--){var kv=pbt[c].split('='); if(kv.length==2){googletag.pubads().setTargeting(kv[0],kv[1]);} } }
});

function gptFindPageUnit(path) {
	var prefix = '^/(?:en/)?';
	var suffix = '/?$';
	var tilLands = 'vejr/til\\-lands/';
	var region = tilLands + 'regionaludsigten/';

	var units = [
		{ p: 'vejr' + suffix, u: '/vejr' },	
		{ p: 'faeroeerne/vejret/byvejr/by/vis/([^/?#]+)/(\\d+)(?:/.*)?$', u: '/faeroeerne', r: { 1: 'dmi_country', 2: 'dmi_city' } },
		{ p: 'groenland/vejret/byvejr/by/vis/([^/?#]+)/(\\d+)(?:/.*)?$', u: '/groenland', r: { 1: 'dmi_country', 2: 'dmi_city' } },
		{ p: tilLands + 'byvejr/by/vis/([^/?#]+)/(\\d+)(?:/.*)?$', u: '/vejr/byvejr', r: { 1: 'dmi_country', 2: 'dmi_city' } },
		{ p: tilLands + 'skivejr' + suffix, u: '/vejr/skivejr' },
		{ p: region + 'nordjylland' + suffix, u: '/vejr/region/nordjylland' },
		{ p: region + 'mvjylland' + suffix, u: '/vejr/region/midtvestjylland' },
		{ p: region + 'oestjylland' + suffix, u: '/vejr/region/oestjylland' },
		{ p: region + 'ssjylland' + suffix, u: '/vejr/region/soenderjylland' },
		{ p: region + 'fyn' + suffix, u: '/vejr/region/fyn' },
		{ p: region + 'vssjaelland' + suffix, u: '/vejr/region/sydvestsjaelland' },
		{ p: region + 'kbhnsjaelland' + suffix, u: '/vejr/region/koebenhavn-nordsjaelland' },
		{ p: region + 'bornholm' + suffix, u: '/vejr/region/bornholm' },
		{ p: 'vejr/sundhedsvejr/pollen' + suffix, u: '/vejr/pollen' },
		{ p: 'groenland(/.*)?$', u: '/groenland' },
		{ p: 'faeroeerne(/.*)?$', u: '/faeroeerne' }
	];

	var au = 'dmi.dk';
	var kv = [];

	for (var i = 0; i < units.length; i++) {
		var u = units[i];
		var exp = new RegExp(prefix + u.p, 'i');

		if (exp.test(path)) 
		{
			au += u.u;

			if(typeof(u.r) !== 'undefined')
			{
				var ms = path.match(exp);
				for (x in u.r) 
				{
					if(typeof(ms[x]) === 'undefined') continue;
					kv[kv.length] = { 'k':u.r[x], 'v':ms[x]};
				};
			}

			break;
		}
	}

	return { 'au': au, 'kv': kv };
}
		
googletag.cmd.push(function () {
	var pageUnit = gptFindPageUnit(document.location.pathname);
	for (var i = 0; i < pageUnit.kv.length; i++) {var kv = pageUnit.kv[i];googletag.pubads().setTargeting(kv.k, kv.v);}
	googletag.defineSlot('/7733/' + pageUnit.au + '/930x180_atf_top1', [930, 180], 'gpt-930x180-atf-top1').addService(googletag.pubads()).setTargeting('fold','atf').setTargeting('position','top1');
	googletag.defineSlot('/7733/' + pageUnit.au + '/160x600_btf_right2', [160, 600], 'gpt-160x600-btf-right2').addService(googletag.pubads()).setTargeting('fold','btf').setTargeting('position','right2');
	googletag.defineSlot('/7733/' + pageUnit.au + '/160x600_atf_right1', [160, 600], 'gpt-160x600-atf-right1').addService(googletag.pubads()).setTargeting('fold','atf').setTargeting('position','right1');
	googletag.defineOutOfPageSlot('/7733/' + pageUnit.au + '/1x1_outofpage1', 'gpt-1x1-oop').addService(googletag.pubads()).setTargeting('position', 'outofpage1');
	googletag.pubads().collapseEmptyDivs();
	googletag.enableServices();
});

googletag.cmd.push(function () { 
	googletag.display('gpt-1x1-oop'); 
	googletag.display('gpt-930x180-atf-top1');
	googletag.display('gpt-160x600-btf-right2');
	googletag.display('gpt-160x600-atf-right1');
});

