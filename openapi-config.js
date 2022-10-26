

// const config = {
//   schemaFile: './swagger-api.json',
//   apiFile: './src/Store/emptyApi.ts',
//   apiImport: 'emptySplitApi',
//   outputFile: './src/Store/SysGeneratedApi.ts',
//   exportName: 'SysGeneratedApi',
//   hooks: true,
// }


const config = {
  schemaFile: './swagger-api.json',
  apiFile: './src/Store/emptyApi.ts',  
  apiImport: 'emptySplitApi',
  outputFiles: {
    './src/Store/codeGenApis/AccountApi.ts': {
      filterEndpoints: [/Account/i],
    },
    
    './src/Store/codeGenApis/CardApi.ts': {
      filterEndpoints: [/Card/i],
    },

    './src/Store/codeGenApis/CustomerApi.ts': {
      filterEndpoints: [/Customer/i],
    }
  },
  hooks: true
}


module.exports = config