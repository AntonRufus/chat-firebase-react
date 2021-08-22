import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";

function SignOut() {
  const signOutWithGoogle = () => {
    auth.signOut();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <Button
        style={{
          padding: "20px",
          fontSize: "15px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signOutWithGoogle}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default SignOut;
