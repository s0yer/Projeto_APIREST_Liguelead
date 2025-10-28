
// modulos importados e configuracoes
import express from 'express';
const app = express();
app.use(express.json())

// middlewares para requisicao
import bodyParser from 'body-parser';

// modelos
import Projeto from './models/Projects.js';
import Tarefa from './models/Tasks.js';
import sequelize from './config/db.js';

// rotas ???

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// variaveis de ambiente

const PORT = process.env.API_PORT || 8081;

// CRUD Projetos
app.post('/projects', (req, res) => {
    projects.push(req.body)
    res.status(201).json(req.body)
    Projeto.create({
        nomeProjeto: req.body.nomeProjeto
    }).then(function(){
        res.send("Projeto criado com sucesso.");
    }).catch(function(erro){
        res.send("Erro ao cadastrar o projeto" + erro);
    });
});

app.get('/projects', (req, res) => {
    Projeto.findAll().then(function(projects){
        res.send({projetos: projects });
    }).catch(function(erro){
        res.send("Erro ao buscar os dados" + erro);
    });

});

app.patch("/atualizar/:id", function(req,res){
    Projeto.update({
        nomeProjeto: req.body.nomeProjeto},
        {where: {"id": req.params.id}}
    ).then(function(){
        res.send("Sucesso na atualizacao do Projeto.");
    }).catch(function(erro){
        res.send("Erro ao buscar os dados" + erro); 
    });
});


app.get('/projects', (req, res) => {
    res.status(200).json(projects);

});

app.get('/projects/:id', (req, res) => {
    if(req.params.id == "1"){
        res.send("1 - projeto 1")
    }

});

app.delete("/deletar/:id", function(req, res){
    Projeto.destroy({where: {"id" : req.params.id}}).then(function(){
        res.send("Projeto deletado com sucesso!");
    }).catch(function(erro){
        res.send("Erro ao deletar projeto" + erro)
    });
})

// CRUD Tarefas

app.delete("/deletarTarefa/:id", function(req, res){
    Tarefa.destroy({where: {"id" : req.params.id}}).then(function(){
        res.send("Tarefa deletada!");
    }).catch(function(erro){
        res.send("Erro ao deletar Tarefa" + erro)
    });
})

async function startServer(){
    try{
        await sequelize.authenticate();
        console.log('Conexão com o Banco de Dados estabelecida');
        
        // para dev
        await sequelize.sync({force: false});
        console.log('Tabelas sincronizadas - projetc e tasks');

        //Inicia servidor
        app.listen(PORT, () => {
            console.log(`Servidor - http://localhost:${PORT}`);
        })
    }catch (error){
        console.error('Falha ao iniciar o servidor - ', error.message);
        // encerra processo
        process.exit(1);
    }
}

startServer();

// app.listen(8080);
