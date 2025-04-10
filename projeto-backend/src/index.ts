import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import dadosRouter from './routes/dados';
import authRouter from './routes/auth'; // 👈 importar

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('✅ MongoDB conectado!'))
  .catch((err) => console.error('❌ Erro MongoDB:', err));


app.use('/api/dados', dadosRouter);
app.use('/api/auth', authRouter); // 👈 ESSA LINHA FALTAVA

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Rodando na porta ${process.env.PORT || 5000}`);
});
/*Ponto de entrada do sistema
Esse é o coração da aplicação. Ele:

Carrega as variáveis do .env

Conecta ao MongoDB

Inicia o servidor Express

Define as rotas disponíveis (ex: /auth, /dados)*/
