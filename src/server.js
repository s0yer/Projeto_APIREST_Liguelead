
import express from 'express';
const app = express();
app.use(express.json())

import bodyParser from 'body-parser';
import Projeto from './models/Projects.js';
// const projects = [] 

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

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

app.get('/', (req, res) => {
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

app.listen(8080);



// app.post('/projects')
// app.put('/projects')
// app.delete('/projects')

// 1. CRUD de Projetos
// POST /projects → Cria um projeto.
// GET /projects → Lista todos os projetos.
// GET /projects/:id → Retorna dados do projeto.
// PUT /projects/:id → Atualiza informações do projeto.
// DELETE /projects/:id → Remove um projeto.

// 2. CRUD de Tarefas
// POST /projects/:projectId/tasks → Cria tarefa vinculada a um projeto.
// PUT /tasks/:id → Atualiza status/título/descrição.
// DELETE /tasks/:id → Remove tarefa.