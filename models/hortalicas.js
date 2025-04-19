import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Hortalicas = connection.define('hortalicas', {
    id_hortalica: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome_hortalica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tempo_estimado: {
        type: Sequelize.TIME,
    },
    tempo_real: {
        type: Sequelize.TIME,
    },
    tipo_hortalica: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Hortalicas.sync({ force: false }); // cria a tabela se não existir

export default Hortalicas;