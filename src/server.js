
// modulos importados

import express from 'express';
const app = express();
app.use(express.json())

// middlewares para requisicao
import bodyParser from 'body-parser';
import Projeto from './models/Projects.js';
import Tarefa from './models/Tasks.js';

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


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


app.listen(8080);
