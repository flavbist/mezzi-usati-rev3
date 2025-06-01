import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';

const MezzoList = ({ isGestione }) => {
  const [mezzi, setMezzi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMezzi = async () => {
      const querySnapshot = await getDocs(collection(db, 'mezzi'));
      const mezziList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMezzi(mezziList);
      setLoading(false);
    };

    fetchMezzi();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Sei sicuro di voler eliminare questo mezzo?')) {
      await deleteDoc(doc(db, 'mezzi', id));
      setMezzi(mezzi.filter(mezzo => mezzo.id !== id));
    }
  };

  if (loading) return <p>Caricamento...</p>;

  return (
    <div className="mezzo-list">
      <h2>Elenco mezzi</h2>
      <div className="mezzi-grid">
        {mezzi.map(mezzo => (
          <div key={mezzo.id} className="mezzo-card">
            <h3>{mezzo.codice} - {mezzo.nome}</h3>
            <p>Anno: {mezzo.annoImmatricolazione}</p>
            <p>Km: {mezzo.km}</p>
            <p>Prezzo: €{mezzo.prezzo}</p>
            {mezzo.foto && mezzo.foto.length > 0 && (
              <img src={mezzo.foto[0]} alt={mezzo.nome} style={{ maxWidth: '100px' }} />
            )}
            {isGestione && (
              <button onClick={() => handleDelete(mezzo.id)}>Elimina</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MezzoList;