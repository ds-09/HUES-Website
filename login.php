<?php
session_start();
$error = '';

if (isset($_POST['submit'])) {
    if (empty($_POST['email']) || empty($_POST['password'])) {
        $error = "Both fields are required.";
    } else {
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        // Connect to the database
        $conn = mysqli_connect('localhost', 'username', 'password', 'database_name');
        
        // Check if the email and password match
        $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = mysqli_query($conn, $query);
        
        if (mysqli_num_rows($result) == 1) {
            $_SESSION['email'] = $email;
            header("location: profile.php");
        } else {
            $error = "Invalid email or password.";
        }
        mysqli_close($conn);
    }
}
?>