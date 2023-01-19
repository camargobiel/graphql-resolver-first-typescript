import * as types from './types/_index'
import { makeSchema } from 'nexus'

export default makeSchema({ types, outputs: {
  schema: __dirname + '/generated/schema.graphql',
  typegen: __dirname + '/generated/typings.ts',
}})