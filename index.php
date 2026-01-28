<?php
/**	op-layout-model:/index.php
 *
 * @created     2023-05-11  op-layout-flexbox:/index.php
 * @copied      2025-03-28  op-layout-flexbox:/index.php --> op-layout-model:/index.php
 * @rebuild     2026-01-28  op-layout-model:/index.php
 * @license     Apache-2.0
 * @package     op-layout-model
 * @copyright   Tomoaki Nagahara
 */

/**	Declare strict type
 *
 */
declare(strict_types=1);

/**	Namespace
 *
 */
namespace OP\LAYOUT\MODEL;

//	Get local config.
$config = (function(){
	return include_once(__DIR__.'/config.php');
})();

//	Set local config.
if( $config ){
	OP()->Config(basename(__DIR__), $config);
}

//	Output HTML
include('html.phtml');
