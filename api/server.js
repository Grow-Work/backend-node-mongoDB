const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const professionalsRouter = require("./routes/professionalsRoutes");
const companyRouter = require("./routes/companyRoutes");
const jobRouter = require("./routes/jobRoutes")
const accountCompanyRouter = require("./routes/accountCompanyRoutes");
const accountProfessionalRouter = require("./routes/accountProfessionalRoutes");

const server = express();


server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/professionals", professionalsRouter);
server.use("/companies", companyRouter);
server.use("/jobs", jobRouter);
server.use("/account/company", accountCompanyRouter);
server.use("/account/professional", accountProfessionalRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.get('/', (req, res) => {
    res.send(`Welcome to my API!!`)
})

module.exports = server;
