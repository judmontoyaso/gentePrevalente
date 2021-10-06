const Empresa = require("../models/Empresa");

//Resolvers

const resolvers = {
  Query: {
    obtenerEmpresas: async () => {
      try {
        const empresas = await Empresa.find({});
        return empresas;
      } catch (error) {
        console.log(error);
      }
    },

    obtenerEmpresaEstado: async (_, { estado }) => {
      const empresa = await Empresa.find({ estado });
      if (!empresa) {
        throw new Error("No existen empresas en estado: " + estado);
      }

      return empresa;
    },

    obtenerEmpresaId: async (_, { identificacion }) => {
      const empresa = await Empresa.findOne({ identificacion });
      if (!empresa) {
        throw new Error(
          "No existen empresas con identificacion: " + identificacion
        );
      }

      return empresa;
    },
  },

  Mutation: {
    nuevaEmpresa: async (_, { input }) => {
      const { identificacion } = input;
      //Revisar si la empresa esta registrada
      const existeEmpresa = await Empresa.findOne({ identificacion });
      if (existeEmpresa) {
        throw new Error("La empresa ya fue registrada");
      }

      try {
        //guardar a la base de datos
        const empresa = new Empresa(input);
        empresa.save(); //guardar
        return empresa;
      } catch (error) {
        console.log(error);
      }
    },

    actualizarEmpresa: async (_, { identificacion, input }) => {
      //Revisar que exista empresa en base de datos

      let empresa = await Empresa.findOne({ identificacion });
      if (!empresa) {
        throw new Error("La empresa no se encuentra");
      }

      //guardarlo en la base de datos
      empresa = await Empresa.findOneAndUpdate(
        { identificacion: identificacion },
        input,
        { neew: true }
      );

      return empresa;
    },

    eliminarEmpresa: async (_, { identificacion }) => {
      let empresa = await Empresa.findOne({ identificacion });

      if (!empresa) {
        throw new Error("La empresa no esta registrada");
      }
      await Empresa.findOneAndDelete({ identificacion: identificacion });

      return "Empresa eliminada";
    },
  },
};

module.exports = resolvers;
