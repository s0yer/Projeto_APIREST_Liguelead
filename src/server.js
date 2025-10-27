
import express from 'express'

const app = express()
app.use(express.json())

const projects = []

app.post('/projects', (req, res) => {
    projects.push(req.body)

    res.status(201).json(req.body)
})

app.get('/projects', (req, res) => {
    res.status(200).json(projects)

})

app.get('/projects/:id', (req, res) => {
    if(req.params.id == "1"){
        res.send("1 - projeto 1")
    }

})

app.listen(8080)



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