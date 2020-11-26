import mongoose from 'mongoose'

const connection = {};

async function dbConnect(){
  mongoose.connect('mongodb+srv://redux:redux@cluster0.v8brs.mongodb.net/redux?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  mongoose.connection.once('open', function(){
    console.log('Banco de Dados conectado!');
  }).on('error', function(error){
      console.log('Erro no Banco de Dados ->\n ', error);
  });

}

export default dbConnect