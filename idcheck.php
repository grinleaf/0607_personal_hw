<?php
    header('Content-Type:application/json; charset=utf-8');

    $db= mysqli_connect("localhost","grinleaf",'jk165319**',"grinleaf");
    mysqli_query($db,"set names utf8");

    $sql="SELECT user_id FROM signup";
    $result= mysqli_query($db,$sql);
    $row_num= mysqli_num_rows($result);
    $rows= array();
    for($i=0; $i<$row_num; $i++){
        $row= mysqli_fetch_array($result, MYSQLI_ASSOC);    
        $rows[$i]= $row;
    }

    //$rows(2차원배열) --> json array 로 변환
    echo json_encode($rows);
?>