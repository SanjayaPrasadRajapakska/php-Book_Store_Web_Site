
<?php
$hostName= "localhost";
$dbUser= "root";
$bdPassword= "";
$dbName= "shop_db";

$conn = mysqli_connect($hostName, $dbUser, $bdPassword, $dbName);
if (!$conn) {
    die ("Something went to wrong;");
}
?>