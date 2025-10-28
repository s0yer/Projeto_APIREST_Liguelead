

import sequelize from "../config/db.js";


const Projeto = sequelize.define("projects", {

    // sequelize ja cria id

    nomeProjeto: {
        type: sequelize.Sequelize.STRING,
        allowNull: false
    }
});

Projeto.create({
    nomeProjeto: "API REST LigueLead"
});
Projeto.sync({force: false});

export default Projeto;


