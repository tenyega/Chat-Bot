<?php
// Inclure le fichier de connexion à la base de données
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire avec un filtrage
    $adresse_email = filter_var(trim($_POST['adresse_email']), FILTER_VALIDATE_EMAIL);
    $mot_de_passe = $_POST['mot_de_passe'];

    // Vérifications de base
    if (!$adresse_email || !$mot_de_passe) {
        die("Veuillez remplir tous les champs.");
    }

    try {
        // Rechercher l'utilisateur par adresse email
        $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE adresse_email = ?");
        $stmt->execute([$adresse_email]);
        $utilisateur = $stmt->fetch();

        // Vérifier si l'utilisateur existe
        if (!$utilisateur) {
            die("Adresse email ou mot de passe incorrect.");
        }

        // Vérifier le mot de passe
        if (!password_verify($mot_de_passe, $utilisateur['mot_de_passe'])) {
            die("Adresse email ou mot de passe incorrect.");
        }

        // Si tout est correct, afficher un message de succès
        echo "Connexion réussie. Bienvenue, " . htmlspecialchars($utilisateur['prenom']) . " " . htmlspecialchars($utilisateur['nom']) . ".";
    } catch (PDOException $e) {
        die("Erreur : " . $e->getMessage());
    }
}
?>
