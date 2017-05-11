<?php

  $name = $_POST['name'];
  $subject = $_POST['subject'] ;
  $email = $_POST['email'];
  $msg = $_POST['msg'];
  $antispam = $_POST['antispam'];
  $to = 'goroh83@yahoo.com';



$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $subject;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $msg;
$Body .= "\n";


if(isset($_POST['url']) && $_POST['url'] == '')  {

    if ( !isset($msg) || trim($msg) == '' || !isset($name) || trim($name) == ''  || !isset($subject) || trim($subject) == ''  || !isset($email) ||
    trim($email) == '') {
        header("Location: contact-error.html");
        exit();

    } else {
        mail($to, 'GOROH STUDIO contact form' , $Body);
        header("Location: contact-success.html");
        exit();
    }

} else{
    return false;
}

?>
