import * as types from './types/_index'
import { makeSchema } from 'nexus'
import path from 'path'

export default makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, '/generated/schema.graphql'),
    typegen: path.join(__dirname, '/generated/typings.ts')
  }
})
