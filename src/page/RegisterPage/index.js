import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      let userUid = userCred.user.uid;
      let displayName = userCred.user.displayName || "";
      let email = userCred.user.email;
      let accessToken = userCred.user.accessToken;
      let lastLogin = new Date().toISOString();

      const userDataToStore = { displayName, email, lastLogin };

      const userDocRef = doc(db, "user-data", userUid);

      await setDoc(userDocRef, userDataToStore);
      const userDataLocalStorage = {
        email: userCred.user.email,
        displayName: userCred.user.displayName,
        userId: userCred.user.uid,
      };
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userData", JSON.stringify(userDataLocalStorage));
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error("Error signing up:", errorCode, errorMessage);

      switch (errorCode) {
        case "auth/email-already-in-use":
          alert(
            "This email address is already registered. Try logging in or use a different email."
          );
          break;
        case "auth/invalid-email":
          alert(
            "The email address is not valid. Please check your email format."
          );
          break;
        case "auth/weak-password":
          alert(
            "The password is too weak. Please choose a stronger password (at least 6 characters)."
          );
          break;
        case "auth/operation-not-allowed":
          alert(
            "Email/Password sign-in is not enabled. Please contact support."
          );
          break;
        default:
          alert(
            "An unexpected error occurred during sign-up. Please try again."
          );
      }
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Register for a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Enter Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="!border-solid !border-2 !border-gray-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:border-2 focus:border-indigo-600 sm:text-sm/6"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="!border-solid !border-2 !border-gray-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:border-2 focus:border-indigo-600 sm:text-sm/6"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="!border-solid !border-2 !border-gray-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:border-2 focus:border-indigo-600 sm:text-sm/6"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
