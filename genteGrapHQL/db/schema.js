const { gql } = require("apollo-server");

//Schema
const typeDefs = gql`

type Empresa {
    nombre: String
    razonSocial: String
    tipoID: String
    identificacion: Int
    numeroEmpleados: Int
    logo: String
    estado: String
}

input empresaInput{
    nombre: String!
    razonSocial: String!
    tipoID: String!
    identificacion: Int!
    numeroEmpleados: Int!
    logo: String!
    
}

input EstadoInput{
    estado: String!
}

type Query {
        obtenerEmpresas: [Empresa]
        obtenerEmpresaEstado(estado: String!): [Empresa]
        obtenerEmpresaId(identificacion: Int!): Empresa
    }

type Mutation {
        nuevaEmpresa(input: empresaInput) : Empresa
        actualizarEmpresa(identificacion: Int!, input: EstadoInput) : Empresa
        eliminarEmpresa(identificacion : Int!) : String
    }
`;

module.exports = typeDefs;
