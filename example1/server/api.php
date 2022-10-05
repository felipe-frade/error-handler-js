<?php
    header('Access-Control-Allow-Origin: *'); 
    echo json_encode(file_get_contents('php://input'));
?>