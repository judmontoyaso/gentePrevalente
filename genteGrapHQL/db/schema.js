const { gql } = require("apollo-server");

//Schema
const typeDefs = gql`
  type Empresa {
    nombre: String
    razonSocial: String
    tipoID: String
    identificacion: String
    numeroEmpleados: Int
    logo: String
    estado: String
  }

  input empresaInput {
    nombre: String!
    razonSocial: String!
    tipoID: String!
    identificacion: String!
    numeroEmpleados: Int!
    logo: String!
  }

  input EstadoInput {
    estado: String!
  }

  type Query {
    obtenerEmpresas: [Empresa]
    obtenerEmpresaEstado(estado: String!): [Empresa]
    obtenerEmpresaId(identificacion: String!): Empresa
  }

  type Mutation {
    nuevaEmpresa(input: empresaInput): Empresa
    actualizarEmpresa(identificacion: String!, input: EstadoInput): Empresa
    eliminarEmpresa(identificacion: String!): String
  }
`;

module.exports = typeDefs;
