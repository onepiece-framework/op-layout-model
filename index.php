<?php
/**	op-layout-model:/index.php
 *
 * @created     2023-05-11  op-layout-flexbox:/index.php
 * @copied      2025-03-28  op-layout-flexbox:/index.php --> op-layout-model:/index.php
 * @version     1.0
 * @package     op-layout-model
 * @author      Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright   Tomoaki Nagahara All right reserved.
 */

/**	Declare strict
 *
 */
declare(strict_types=1);

/**	namespace
 *
 */
namespace OP;

//	Get local config.
$configs = OP()->Template('config.php');

//	Loop each unit config.
foreach( $configs as $unit_name => $config ){
	//	Set local layout config.
	OP()->Config($unit_name, $config);
}

//	Output HTML
include('html.phtml');
