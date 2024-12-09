<?php
// Informations de connexion à la base de données
$host = 'localhost'; // Adresse du serveur MySQL (modifiez si nécessaire)
$dbname = 'tp_users'; // Nom de la base de données
$username = 'root'; // Nom d'utilisateur MySQL (modifiez si nécessaire)
$password = ''; // Mot de passe MySQL (modifiez si nécessaire)

try {
    // Création d'une connexion PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    // Configuration des options PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

   
} catch (PDOException $e) {
    // Gestion des erreurs de connexion
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>
