import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User as FirebaseUser,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebaseClient";
import { User, UserRole } from "../types";

/**
 * Registra un nuevo usuario
 */
export const registerUser = async (
  email: string,
  password: string,
  displayName: string,
  role: UserRole = "cliente" // Por defecto, los usuarios nuevos son clientes
): Promise<User> => {
  try {
    // Crear el usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    // Actualizar el perfil con el nombre
    await updateProfile(user, { displayName });

    // Crear el documento de usuario en Firestore
    const userData: User = {
      uid: user.uid,
      email: user.email || email,
      displayName: displayName,
      role: role,
      createdAt: serverTimestamp(),
      photoURL: user.photoURL || undefined,
    };

    await setDoc(doc(db, "users", user.uid), userData);

    return userData;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};

/**
 * Inicia sesión con email y contraseña
 */
export const loginUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

/**
 * Cierra la sesión del usuario actual
 */
export const logoutUser = async (): Promise<void> => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

/**
 * Envía un email para restablecer contraseña
 */
export const resetPassword = async (email: string): Promise<void> => {
  try {
    return await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Error al enviar email de restablecimiento:", error);
    throw error;
  }
};

/**
 * Obtiene los datos completos de un usuario desde Firestore
 */
export const getUserData = async (userId: string): Promise<User | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));

    if (!userDoc.exists()) {
      return null;
    }

    return userDoc.data() as User;
  } catch (error) {
    console.error("Error al obtener datos de usuario:", error);
    throw error;
  }
};

/**
 * Convierte un objeto FirebaseUser a nuestro tipo User con datos de Firestore
 */
export const formatUserData = async (
  firebaseUser: FirebaseUser | null
): Promise<User | null> => {
  if (!firebaseUser) return null;

  try {
    // Obtener datos adicionales desde Firestore
    const userData = await getUserData(firebaseUser.uid);

    if (!userData) {
      // Si no existe en Firestore, devolver datos básicos de Auth
      return {
        uid: firebaseUser.uid,
        email: firebaseUser.email || "",
        displayName: firebaseUser.displayName || undefined,
        role: "cliente", // Rol por defecto
        createdAt: new Date(),
        photoURL: firebaseUser.photoURL || undefined,
      };
    }

    return userData;
  } catch (error) {
    console.error("Error al formatear datos de usuario:", error);
    return null;
  }
};

/**
 * Iniciar sesión con Google
 */
export const signInWithGoogle = async (): Promise<User> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { user } = result;

    // Verificar si el usuario ya existe en Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    let userData: User;

    if (!userDoc.exists()) {
      // Usuario nuevo - crear documento en Firestore
      userData = {
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName || undefined,
        role: "cliente", // Rol por defecto para usuarios de Google
        createdAt: serverTimestamp(),
        photoURL: user.photoURL || undefined,
      };

      await setDoc(userDocRef, userData);
      console.log("Nuevo usuario de Google creado:", userData);
    } else {
      // Usuario existente - obtener datos de Firestore
      const existingData = userDoc.data();
      userData = {
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName || existingData.displayName,
        role: existingData.role || "cliente",
        createdAt: existingData.createdAt,
        updatedAt: serverTimestamp(),
        photoURL: user.photoURL || existingData.photoURL,
      };

      // Actualizar datos si han cambiado
      await setDoc(userDocRef, userData, { merge: true });
      console.log("Usuario de Google actualizado:", userData);
    }

    return userData;
  } catch (error: any) {
    console.error("Error al iniciar sesión con Google:", error);
    throw new Error(error.message || "Error al iniciar sesión con Google");
  }
};
