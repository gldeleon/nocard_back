export default {
  TransPais: {
    URL: "https://centos.transpais.com.mx/VentaWebService/services/VentaService?wsdl",
    USR: "webcap",
    PWD: "w3bc4pv3@3",
  },
  DB: {
    TYPE: process.env.DB_TYPE || "mysql",
    HOST: process.env.DB_HOST,
    DB_USR: process.env.DB_USER,
    DB_PWD: process.env.DB_PWD,
    DB_NAME: process.env.DB_NAME,
  },
  jwtSecret: process.env.JWT_SECRET,
};
