import Sequelize from 'sequelize';

const sequelize = new Sequelize("auth-db", "postgres", "hsud4dfw", {
  host: "localhost",
  dialect: "postgres",
  quoteIndentifiers: false,
  define: {
    syncOnAssociation: true,
    timestamps: false,
    undescored: true,
    undescoredAll: true,
    freezeTableName: true
  }
});

sequelize.authenticate().then(() => {
  console.info("Connection has been stablished!");
}).catch(e => {
  console.error("Unable to connect to the database");
  console.error(e.message);
});

export default sequelize;
