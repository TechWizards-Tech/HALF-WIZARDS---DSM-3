import React, { useState } from 'react';
import api from '../services/api';
import './Login.css'; // reutilizando o CSS do login

const Register: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { nome, email, password: senha });


      setMensagem('✅ Usuário registrado com sucesso! Agora você pode fazer login.');
    } catch (err) {
      setMensagem('❌ Erro ao registrar. Tente outro e-mail.');
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
        {mensagem && <p className="erro">{mensagem}</p>}
      </form>
    </div>
  );
};

export default Register;
