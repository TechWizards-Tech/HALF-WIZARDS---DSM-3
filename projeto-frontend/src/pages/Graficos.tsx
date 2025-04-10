import React, { useEffect, useState } from 'react';
import api from '../services/api';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './Graficos.css';

interface Dado {
  _id: string;
  estacao: string;
  dataHora: string;
  temperatura: number;
  umidade: number;
  pressao: number;
  velocidadeVento: number;
}

const Graficos: React.FC = () => {
  const [dados, setDados] = useState<Dado[]>([]);
  const [intervalo, setIntervalo] = useState<'hoje' | '7dias' | '30dias' | '1ano'>('7dias');
  

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const res = await api.get('/dados');
        const agora = new Date();
        const filtrados = res.data.filter((item: Dado) => {
          const data = new Date(item.dataHora);
          const diff = (agora.getTime() - data.getTime()) / (1000 * 60 * 60 * 24); // dias
          if (intervalo === 'hoje') return data.toDateString() === agora.toDateString();
          if (intervalo === '7dias') return diff <= 7;
          if (intervalo === '30dias') return diff <= 30;
          if (intervalo === '1ano') return diff <= 365;
          
          
          return true;
        });
        setDados(filtrados);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    };

    buscarDados();
  }, [intervalo]);

  return (
    <div className="graficos-container">
      <h1>Gráficos Meteorológicos</h1>

      <div className="filtro">
        <label>Filtrar por: </label>
        <select value={intervalo} onChange={e => setIntervalo(e.target.value as any)}>
          <option value="hoje">Hoje</option>
          <option value="7dias">Últimos 7 dias</option>
          <option value="30dias">Últimos 30 dias</option>
          <option value="1ano">Últimos 12 meses</option>
        </select>
      </div>

      <div className="grafico">
        <h2>Temperatura (°C)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dataHora" tickFormatter={(d) => new Date(d).toLocaleTimeString()} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperatura" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grafico">
        <h2>Umidade (%)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dataHora" tickFormatter={(d) => new Date(d).toLocaleTimeString()} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="umidade" stroke="#00aaff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graficos;
