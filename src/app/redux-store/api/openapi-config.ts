import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'http://localhost:5000/api/docs-json',
  apiFile: './src/app/redux-store/api/empty-Api.ts',
  apiImport: 'emptySplitApi',
  outputFile: './gen/gen-api.ts',
  exportName: 'iLikeItApi',
  hooks: true,
}

export default config
