import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const StatusBar = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div className="bg-gray-700 text-white  text-left ">
            <div className="container mx-auto text-xs">
                <span className="font-bold ml-3">GAD </span>
                <span className="mr-5">Suite v1.0.1 </span>
                {user && <span> user: {user?.displayName} &nbsp;</span>}
                {user && <button onClick={handleSignOut}> (Sign Out)</button>}
            </div>
        </div>
    );
};

export default StatusBar;
