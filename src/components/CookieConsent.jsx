import React from 'react';
import CookieConsent from "react-cookie-consent";

const CookieNotification = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Agree"
      cookieName="user-consent"
      style={{
        background: "#2B373B",
        color: "#fff",
        fontSize: "14px",
        padding: "10px",
        textAlign: "center",
      }}
      buttonStyle={{
        backgroundColor: "#4e8b7c",
        color: "white",
        borderRadius: "5px",
        fontSize: "13px",
        padding: "10px 20px",
      }}
      expires={365} // Cookie will expire after 1 year
    >
      We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
    </CookieConsent>
  );
};

export default CookieNotification;
