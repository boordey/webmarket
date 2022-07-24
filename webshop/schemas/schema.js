
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import product from './product';
import banner from './banner';
  // We name our schema
  
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  export default createSchema({
    name: 'default',
    types: schemaTypes.concat([product, banner]),
  })
