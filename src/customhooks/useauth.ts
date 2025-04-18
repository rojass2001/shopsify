"use client"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import {auth} from '@/Backend/Firebase/Firebase'
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

export default function useAuth( email?:string,password?:string) {
     const router=useRouter()
     const registersubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !password) {
            toast.error("Email and password are required.");
            return;
         }
         
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Success! user created
        const user = userCredential.user;
         toast.success('User created successfully' + user);       
         }).catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error("This email is already registered. Try logging in instead.");
                    
                } else {
                    toast.error("Error creating user: " + error.message);
                   
                }
        })
    }


    const loginsubmit = async (e: React.FormEvent) => {
          e.preventDefault()
            try {
                if (!email || !password) {
                    throw new Error("Email and password must be provided.");
                }
                await signInWithEmailAndPassword(auth, email, password);
                Cookies.set('login', JSON.stringify(true), { expires: 7 });
                toast.success("login successfully");
                router.push("/products");
                 
               
            } catch (error) {
                toast.error("Invalid username or password");
                console.log(error);
            }
    };
    
    const resetemail = async(e: React.FormEvent) => {
        e.preventDefault()
            if (!email) {
                toast.error("Email is required to reset the password.");
                return;
            }
            await sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Successfully sent link to email. Please check your email.");
                }).catch(() => {
                    toast.error("Please enter a valid email.");
            });
    }

    const logout =async () => {
            const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login') as string) : null;
            console.log(login)
            if (login === true) {
            Cookies.set('login', JSON.stringify(false),{ expires: 7});
                toast.success("sucessfully logout");
            }
            else {
                toast.warning("please login first");
                }
        }
    const cartauthentication=async() => {
          const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login') as string) : null;
        if (!login) {
              toast.warning("please login");
              router.push('/login');
        }
          else {
              router.push("/cart");
        }
     }
    return{registersubmit,cartauthentication,loginsubmit,resetemail,logout}
}




