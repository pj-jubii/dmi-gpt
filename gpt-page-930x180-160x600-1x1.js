  	googletag.cmd.push(function () {
			var pageUnit = gptFindPageUnit(document.location.pathname);
			for (var i = 0; i < pageUnit.kv.length; i++) {var kv = pageUnit.kv[i];googletag.pubads().setTargeting(kv.key, kv.value);}
			googletag.defineSlot('/7733/' + pageUnit.au + '/930x180_atf_top1', [930, 180], 'gpt-930x180-atf-top1').addService(googletag.pubads()).setTargeting('fold','atf').setTargeting('position','top1');
			googletag.defineSlot('/7733/' + pageUnit.au + '/160x600_atf_right1', [160, 600], 'gpt-160x600-atf-right1').addService(googletag.pubads()).setTargeting('fold','atf').setTargeting('position','right1');
			googletag.defineOutOfPageSlot('/7733/' + pageUnit.au + '/1x1_outofpage1', 'gpt-1x1-oop').addService(googletag.pubads()).setTargeting('position', 'outofpage1');
			googletag.pubads().collapseEmptyDivs();
			googletag.enableServices();
		});
	
		googletag.cmd.push(function () { googletag.display('gpt-930x180-atf-top1'); });
		googletag.cmd.push(function () { googletag.display('gpt-160x600-atf-right1'); });
		googletag.cmd.push(function () { googletag.display('gpt-1x1-oop'); });
