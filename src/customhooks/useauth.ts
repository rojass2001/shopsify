 "use client"// This directive ensures that the component is executed on the client side in a Next.js environment.

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";  // Importing Firebase Authentication methods for user management.
import { auth } from '@/Backend/Firebase/Firebase';  // Importing the Firebase authentication instance.  // Next.js hook for navigating between pages.
import { toast } from "react-toastify";  // Importing the toast notification library to display messages.
import Cookies from 'js-cookie';  // Library to manage cookies on the client-side.
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Settabstatus } from "@/redux/Tabbarslice";

export default function useAuthentication(email?: string, password?: string) {
  const dispatch=useDispatch()// Using Redux dispatch for state management
  const router=useRouter();  // Using the Next.js router for navigation
  // Function for user registration.
  const registersubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Prevent the default form submission behavior.

    // Check if email and password are provided.
    if (!email || !password) {
      toast.error("Email and password are required.");  // Show error if any field is missing.
      return;
    }

    // Attempt to create a new user with email and password using Firebase.
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created the user.
        const user = userCredential.user;
        toast.success('User created successfully' + user);  // Show success message.
      })
      .catch((error) => {
        // Handle errors.
        if (error.code === 'auth/email-already-in-use') {
          toast.error("This email is already registered. Try logging in instead.");  // If email is already in use, show error.
        } else {
          toast.error("Password must be at least 6 characters long.");  // If password is invalid, show error.
        }
      });
  }

  // Function for logging in the user.
  const loginsubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Prevent the default form submission behavior.

    try {
      
      
      // Attempt to sign in with the provided credentials.
      if (email && password) {
        await signInWithEmailAndPassword(auth, email, password);  // Sign in the user with Firebase.
        Cookies.set('login', JSON.stringify(true), { expires: 7 }); // Set a cookie indicating the user is logged in.
        dispatch(Settabstatus(0))// Set the active tab to the first tab Home (index 0). 
        toast.success("Login successfully");  // Show success message.
        router.push("/");  // Redirect the user to the products page.
      }
      } catch  { // Handle errors during login
        toast.error("Invalid username or password");  // Show error if login fails.
        
      }
    };
  

  // Function to send a password reset email.
  const resetemail = async (e: React.FormEvent) => {
    e.preventDefault();  // Prevent the default form submission behavior.

    // Check if email is provided.
    if (!email) {
      toast.error("Email is required to reset the password.");  // Show error if email is missing.
      return;
    }

    // Attempt to send a password reset email using Firebase.
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Successfully sent link to email. Please check your email.");  // Show success message.
      })
      .catch(() => {
        toast.error("Please enter a valid email.");  // Show error if the email is invalid.
      });
  }

  // Function to log out the user.
  const logout = async () => {
    const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login') as string) : null;  // Get the login status from cookies.
    
    if (login === true) {
      // If the user is logged in, log them out.
      Cookies.set('login', JSON.stringify(false), { expires: 7 });
      toast.success("Successfully logged out");  // Show success message.
      router.push("/login");  // Redirect to login page.
    } else {
      toast.warning("Please login first");  // Show warning if user is not logged in.
      router.push("/login");  // Redirect to login page.
    }
  }

  // Function to check if the user is logged in before accessing the cart.
  const cartauthentication = async () => {
    const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login') as string) : null;  // Get the login status from cookies.
    
    if (!login) {
      toast.warning("Please login");  // Show warning if the user is not logged in.
      router.push('/login');  // Redirect to login page.
    } else {
      router.push("/cart");  // Redirect to the cart page if the user is logged in.
    }
  }

  // Function for handling contact form submissions.
  const contactsubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();  // Prevent the default form submission behavior.
    toast.success("Message submitted successfully");  // Show success message.
  }

  // Return all the functions for use in other components.
  return { registersubmit, cartauthentication, loginsubmit, resetemail, logout, contactsubmit };
}
