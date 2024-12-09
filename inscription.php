<?php
// Inclure le fichier de connexion à la base de données
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire avec un filtrage
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $adresse_email = filter_var(trim($_POST['adresse_email']), FILTER_VALIDATE_EMAIL);
    $mot_de_passe = $_POST['mot_de_passe'];

    // Vérifications de base
    if (!$nom || !$prenom || !$adresse_email || !$mot_de_passe) {
        die("Veuillez remplir tous les champs.");
    }

    // Vérification du mot de passe avec une regex
    $regex_mot_de_passe = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';

    if (!preg_match($regex_mot_de_passe, $mot_de_passe)) {
        die("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
    }

    try {
        // Vérifier si l'adresse email existe déjà
        $stmt = $pdo->prepare("SELECT id FROM utilisateurs WHERE adresse_email = ?");
        $stmt->execute([$adresse_email]);
        if ($stmt->fetch()) {
            die("Cette adresse email est déjà utilisée.");
        }

        // Hacher le mot de passe
        $mot_de_passe_hache = password_hash($mot_de_passe, PASSWORD_BCRYPT);

        // Insérer le nouvel utilisateur dans la base de données
        $stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, adresse_email, mot_de_passe) VALUES (?, ?, ?, ?)");
        $stmt->execute([$nom, $prenom, $adresse_email, $mot_de_passe_hache]);

        echo "Inscription réussie. Vous pouvez maintenant vous connecter.";
    } catch (PDOException $e) {
        die("Erreur : " . $e->getMessage());
    }
}
?>
