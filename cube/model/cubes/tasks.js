cube(`tasks`, {
  sql_table: `default.tasks`,

  data_source: `default`,

  joins: {
    orders: {
      relationship: `many_to_one`,
      sql: `${CUBE.order_code} = ${orders.order_code} AND ${CUBE.instance} = ${orders.instance}`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
    },

    order_code: {
      sql: `order_code`,
      type: `string`,
      primary_key: true
    },

    type: {
      sql: `type`,
      type: `string`
    },

    address: {
      sql: `address`,
      type: `string`
    },

    status: {
      sql: `status`,
      type: `string`
    },

    courier: {
      sql: `courier`,
      type: `string`
    },

    organization: {
      sql: `organization`,
      type: `string`
    },

    instance: {
      sql: `instance`,
      type: `string`
    },

    month: {
      sql: `month`,
      type: `string`
    },

    year: {
      sql: `year`,
      type: `string`
    },

    after: {
      sql: `after`,
      type: `time`
    },

    before: {
      sql: `before`,
      type: `time`
    },

    finished: {
      sql: `finished`,
      type: `time`
    }
  },

  measures: {
    count: {
      type: `count`
    },

    order_total: {
      sql: `order_total`,
      type: `sum`
    }
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
