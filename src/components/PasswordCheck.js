import { useState } from 'react';

const PasswordCheck = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '171073') {
      onSuccess();
    } else {
      setError('Password errata');
    }
  };

  return (
    <div className="password-check">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Inserisci password"
          required
        />
        <button type="submit">Accedi</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default PasswordCheck;