

import sequelize from "./db.js";


const Projeto = sequelize.define("projetos", {

    // sequelize ja cria id
    
    nomeProjeto: {
        type: sequelize.Sequelize.STRING,
        allowNull: false
    }
});

Projeto.create({
    nomeProjeto: "API REST LigueLead"
});

export default Projeto;

Projeto.sync({force: false});

