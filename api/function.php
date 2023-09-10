<?php

    function my_autoloader($class) {
        if(is_readable( __DIR__ . '/controller/'.$class.'.php')){
            include  __DIR__ . '/controller/'.$class.'.php';	
        }elseif(is_readable( __DIR__ . '/model/'.$class.'.php')){
            include  __DIR__ . '/model/'.$class.'.php';	
        }
    }

    spl_autoload_register('my_autoloader');
?>
