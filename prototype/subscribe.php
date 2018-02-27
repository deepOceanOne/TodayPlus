<?php
//订阅
ini_set('default_socket_timeout', -1);  //不超时
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
$result=$redis->subscribe(array('中央广播电台'), 'callback');
function callback($instance,$channelName,$message){
	echo $message;
}
