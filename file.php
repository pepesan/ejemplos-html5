<?php
$baseUrl="http://localhost/html5/datas/";
if (isset($_FILES['upload_file'])) {
    if(move_uploaded_file($_FILES['upload_file']['tmp_name'], getcwd().DIRECTORY_SEPARATOR."datas/" . $_FILES['upload_file']['name'])){
        
        echo $baseUrl.$_FILES['upload_file']['name'];
    } else {
        echo "Error:".$_FILES['upload_file']['name']. " KO";
    }
    exit;
} else {
    echo "No files uploaded ...";
}
?>