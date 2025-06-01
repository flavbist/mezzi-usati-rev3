import MezzoList from './MezzoList';

const Consultazione = () => {
  return (
    <div className="consultazione">
      <h1>Consultazione Database</h1>
      <MezzoList isGestione={false} />
    </div>
  );
};

export default Consultazione;