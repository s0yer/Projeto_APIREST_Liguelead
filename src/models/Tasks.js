

import sequelize from "../config/db.js";
import Projeto from "./Projects.js";
import  DataTypes  from "sequelize";


const Tarefa = sequelize.define("tasks", {

    // sequelize ja cria id por default
    nomeTarefa: {
        type: sequelize.Sequelize.STRING,
        allowNull: false
    },

    titulo: { 
        type: DataTypes.STRING, 
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Pendente', 'Desenvolvendo', 'Concluida'),
        defaultValue: 'Pendente',
        allowNull: false,
    }        
});

// 1. A Tarefa PERTENCE A um Projeto (lado N)
Tarefa.belongsTo(Projeto, { 
    foreignKey: 'projectId', // Define o nome da FK na tabela 'tasks'
    as: 'project' 
});

// 2. O Projeto TEM MUITAS Tarefas (lado 1)
Projeto.hasMany(Tarefa, {
    foreignKey: 'projectId',
    as: 'tasks' // Usado para consultas (Ex: Project.findAll({ include: 'tasks' }))
});

Tarefa.create({
    nomeTarefa: "Nova Tarefa Criada"
});

export default Tarefa;

Tarefa.sync({force: false});

