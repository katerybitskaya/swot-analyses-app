<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'config.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'getUsers':
        getUsers();
        break;
    case 'createUser':
        createUser();
        break;
    case 'checkUser':
        checkUser();
        break;
    case 'findUserByEmail':
        findUserByEmail();
        break;
    case 'updateUser':
        updateUser();
        break;
    case 'deleteUser':
        deleteUser();
        break;
    default:
        echo json_encode(['error' => 'Invalid action']);
}

function getUsers() {
    global $pdo;
    try {
        $stmt = $pdo->query("SELECT * FROM users");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($users as &$user) {
            $user['getAnalyzed'] = (bool)$user['getAnalyzed'];
            if ($user['result']) {
                $user['result'] = json_decode($user['result'], true);
            }
        }
        
        echo json_encode($users);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function createUser() {
    global $pdo;
    $input = json_decode(file_get_contents('php://input'), true);
    
    try {
        $stmt = $pdo->prepare("INSERT INTO users (id, firstName, lastName, email, username, password, photo, createdAt, currentLanguage, result, getAnalyzed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        
        $result = $stmt->execute([
            $input['id'],
            $input['firstName'],
            $input['lastName'],
            $input['email'],
            $input['username'],
            $input['password'],
            $input['photo'],
            $input['createdAt'],
            $input['currentLanguage'],
            json_encode($input['result']),
            $input['getAnalyzed'] ? 1 : 0
        ]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['error' => 'Failed to create user']);
        }
    } catch (PDOException $e) {
        if ($e->errorInfo[1] == 1062) {
            echo json_encode(['error' => 'Username or email already exists']);
        } else {
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

function checkUser() {
    global $pdo;
    $input = json_decode(file_get_contents('php://input'), true);
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?");
        $stmt->execute([$input['loginInput'], $input['loginInput'], $input['password']]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            $user['getAnalyzed'] = (bool)$user['getAnalyzed'];
            if ($user['result']) {
                $user['result'] = json_decode($user['result'], true);
            }
            echo json_encode(['success' => true, 'user' => $user]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Invalid login credentials']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function findUserByEmail() {
    global $pdo;
    $email = $_GET['email'] ?? '';
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            $user['getAnalyzed'] = (bool)$user['getAnalyzed'];
            if ($user['result']) {
                $user['result'] = json_decode($user['result'], true);
            }
            echo json_encode(['success' => true, 'user' => $user]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Email not found']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function updateUser() {
    global $pdo;
    $input = json_decode(file_get_contents('php://input'), true);
    
    try {
        $stmt = $pdo->prepare("UPDATE users SET firstName = ?, lastName = ?, email = ?, username = ?, password = ?, photo = ?, currentLanguage = ?, result = ?, getAnalyzed = ? WHERE id = ?");
        
        $result = $stmt->execute([
            $input['firstName'],
            $input['lastName'],
            $input['email'],
            $input['username'],
            $input['password'],
            $input['photo'],
            $input['currentLanguage'],
            json_encode($input['result']),
            $input['getAnalyzed'] ? 1 : 0,
            $input['id']
        ]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['error' => 'Failed to update user']);
        }
    } catch (PDOException $e) {
        if ($e->errorInfo[1] == 1062) {
            echo json_encode(['error' => 'Username or email already exists']);
        } else {
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

function deleteUser() {
    global $pdo;
    $input = json_decode(file_get_contents('php://input'), true);
    
    try {
        $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
        $result = $stmt->execute([$input['id']]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['error' => 'Failed to delete user']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}
?>