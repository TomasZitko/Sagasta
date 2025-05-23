import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Chyba: Uživatel se pokusil přistoupit k neexistující stránce:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sagasta-gray p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-6xl font-bold text-sagasta-navy mb-4">404</h1>
        <p className="text-xl text-sagasta-dark-gray mb-6">Jejda! Stránka nenalezena</p>
        <p className="mb-8 text-sagasta-dark-gray">
          Stránka, kterou hledáte, mohla být odstraněna, přejmenována nebo je dočasně nedostupná.
        </p>
        <Link to="/" className="btn-primary">
          Zpět na úvodní stránku
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
