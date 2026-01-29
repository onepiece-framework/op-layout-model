
/**	op-layout-model:/js/favicon.js
 *
 * @created   2025-11-06  op-layout-flexbox:/js/favicon.js
 * @license   Apache-2.0
 * @package   op-layout-model
 * @copyright Tomoaki Nagahara
 */

/* <?php if( OP()->isAdmin() != true ){ return; } ?> */

//	Add the branch number as an overlay on the favicon.
(function(){
	/**	Set branch number to favicon.
	 * 
	 */
	function SetBranchNumberToFavicon(badgeText){
		const canvas = document.createElement('canvas');
		canvas.width = 32;
		canvas.height = 32;
		const ctx = canvas.getContext('2d');

		//	...
		const img = new Image();
		img.onload = () => {
			ctx.drawImage(img, 0, 0, 32, 32);
			ctx.beginPath();

			/*
			//	background
			ctx.fillStyle = '#f00';
			ctx.arc(24, 8, 8, 0, 2 * Math.PI);
			ctx.fill();
			*/

			//	number
			ctx.fillStyle = '#fff';
			ctx.font = 'bold 14px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(badgeText, 16, 8);

			//	...
			UpdateFavicon(canvas.toDataURL());
		};
		img.src = document.querySelector("link[rel~='icon']").href;
	}

	/**	Update faviceon.
	 * 
	 */
	function UpdateFavicon(dataUrl){
		let link = document.querySelector("link[rel~='icon']");
		if(!link ){
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}
		link.href = dataUrl;
	}

	//	...
	SetBranchNumberToFavicon('<?= _OP_APP_BRANCH_ ?>');
})();
