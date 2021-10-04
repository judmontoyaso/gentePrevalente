const mongoose = require("mongoose");

const EmpresasSchema = mongoose.Schema({
  nombre: {
      type: String,
      required: true,
      trim: true
  },
  razonSocial: {
    type: String,
    required: true,
    trim: true
  },
  tipoID: {
    type: String,
    required: true,
    trim: true
  },
  identificacion: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  },
  numeroEmpleados: {
    type: Number,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    required: true,
    trim: true
  },
  estado:{
      type: String,
      default: "Sin gestionar",
  }
});

module.exports = mongoose.model("Empresa", EmpresasSchema);
