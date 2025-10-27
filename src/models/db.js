import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "apirest_liguelead",
    "root",
    "123456",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then((function(){
    console.log("Banco de dados conectado com sucesso.")
})).catch(function(error){
    console.log("Erro ao se contectar com o database" + erro)
});


export default sequelize;

