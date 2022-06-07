<?php

    header('Content-Type:text/plain; charset=utf-8');

    $user_id= $_POST['user_id'];
    $user_pw= $_POST['user_pw'];
    $user_name= $_POST['user_name'];
    $user_email= $_POST['user_email'];
    $user_postcode= $_POST['user_postcode'];
    $user_address= $_POST['user_address'];
    $user_phone= $_POST['user_phone'];

    $db= mysqli_connect("localhost","grinleaf","jk165319**","grinleaf");
    mysqli_query($db, "set names utf8");

    $sql= "INSERT INTO signup(user_id, user_pw, user_name, user_email, user_postcode, user_address, user_phone)
           VALUES('$user_id','$user_pw', '$user_name', '$user_email', '$user_postcode', '$user_address', '$user_phone')";
    $result= mysqli_query($db, $sql);

    if($result) echo "DB insert 완료";
    else echo "DB insert 실패 : ".mysqli_error($db);

    mysqli_close($db);

?>