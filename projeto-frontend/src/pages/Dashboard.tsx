import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Dashboard.css';

interface DadoMeteorologico {
  _id: string;
  estacao: string;
  dataHora: string;
  temperatura: number;
  umidade: number;
  pressao: number;
  velocidadeVento: number;
  direcaoVento: string;
}

const Dashboard: React.FC = () => {
  const [dados, setDados] = useState<DadoMeteorologico[]>([]);

  useEffect(() => {
    api.get('/dados')
      .then(response => setDados(response.data))
      .catch(error => console.error('Erro ao carregar dados:', error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const irParaGraficos = () => {
    window.location.href = '/graficos';
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <button onClick={irParaGraficos}>Ver Gráficos</button>
        <button onClick={handleLogout}>Sair</button>
      </div>

      <h1>Histórico Meteorológico</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Estação</th>
            <th>Temperatura (°C)</th>
            <th>Umidade (%)</th>
            <th>Pressão (hPa)</th>
            <th>Veloc. Vento (m/s)</th>
            <th>Direção Vento</th>
          </tr>
        </thead>
        <tbody>
          {dados.map(dado => {
            const data = new Date(dado.dataHora);
            return (
              <tr key={dado._id}>
                <td>{data.toLocaleDateString()}</td>
                <td>{data.toLocaleTimeString()}</td>
                <td>{dado.estacao}</td>
                <td>{dado.temperatura}</td>
                <td>{dado.umidade}</td>
                <td>{dado.pressao}</td>
                <td>{dado.velocidadeVento}</td>
                <td>{dado.direcaoVento}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
