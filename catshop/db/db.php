<?
$host = "localhost";
$user_db = "root";
$pass_db = "";
$dbase = "cat_shop";
$dtable = "cat";    
mysql_connect ("$host", "$user_db", "$pass_db");
mysql_select_db("$dbase");
$sql = "SELECT * FROM $dtable";
$result = mysql_query($sql);
echo '<ol>';
 
while($row = mysql_fetch_array($result)) {

    $id = $row["id_cat"];
    $name = $row["name_cat"];
    $poro = $row["poroda"];
    $age = $row["age"];
    $male = $row["male"];
    $price = $row["price"];
    $opis = $row["opis"];


echo "<li>

      $name
	  $poro
	  $age
      $male
	  $price
	  $opis

      </li>";
}
echo '</ol>'; 
?>