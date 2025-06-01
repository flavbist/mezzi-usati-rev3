import { useState } from 'react';
import PasswordCheck from './PasswordCheck';
import MezzoForm from './MezzoForm';
import MezzoList from './MezzoList';

const Gestione = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <PasswordCheck onSuccess={() => setAuthenticated(true)} />;
  }

  return (
    <div className="gestione">
      <h1>Gestione Database</h1>
      <MezzoForm />
      <MezzoList isGestione={true} />
    </div>
  );
};

export default Gestione;