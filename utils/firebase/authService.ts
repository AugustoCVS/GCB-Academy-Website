// authService.ts

import { auth } from './firebaseService'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export async function logOut() {
  return signOut(auth)
}

export function onAuthChanged(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}

export async function userRegister(data: {
  name: string
  email: string
  password: string
  confirmPassword: string
}) {
  if (data.password !== data.confirmPassword) {
    throw new Error('Passwords do not match')
  }

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  )

  if (userCredential.user) {
    await updateDisplayName(userCredential.user, data.name)
  }

  return userCredential.user
}

async function updateDisplayName(user: User, name: string) {
  await updateProfile(user, { displayName: name })
}
