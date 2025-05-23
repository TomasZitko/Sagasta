import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container-custom py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sagasta-navy flex-1">
            <p className="text-sm">
              Na našich webových stránkách používáme soubory cookies, abychom vám poskytli co nejrelevantnější zážitek. 
              Kliknutím na "Přijmout" souhlasíte s používáním VŠECH souborů cookie.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-sagasta-navy hover:text-sagasta-blue transition-colors"
            >
              Odmítnout
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-sagasta-blue hover:bg-sagasta-navy transition-colors rounded-md"
            >
              Přijmout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 