/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      collapsible: false,
      items: [
        'en/what-is-clickhouse',
        'en/quick-start',
        'en/tutorial',
        'en/getting-started/install',
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      className: 'top-nav-item',
      collapsed: false,
      collapsible: false,
      items: [
        'en/concepts/why-clickhouse-is-so-fast',
        'en/concepts/olap',
        'en/about-us/distinctive-features',
      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      collapsible: false,
      items: [
        'en/concepts/creating-tables',
        'en/concepts/inserting-data',
        'en/concepts/writing-queries',
        'en/guides/developer/cascading-materialized-views',
        'en/getting-started/example-datasets/uk-price-paid',
        'en/guides/developer/mutations',
        'en/sql-reference/statements/select/join',
        'en/sql-reference/dictionaries/index',
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'S3',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/integrations/data-ingestion/s3/s3-intro',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/data-ingestion/s3',
            },
          ]
        },
        {
          type: 'category',
          label: 'PostgreSQL',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/integrations/data-ingestion/dbms/postgresql/postgres-with-clickhouse',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/data-ingestion/dbms/postgresql',
            },
          ]
        },
        {
          type: 'category',
          label: 'MySQL',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/data-ingestion/dbms/mysql',
            },
          ]
        },
        {
          type: 'category',
          label: 'Kafka',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/integrations/data-ingestion/kafka/intro',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/data-ingestion/kafka',
            },
          ]
        },
        'en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse',
        {
          type: 'category',
          label: 'dbt',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/integrations/data-ingestion/etl-tools/dbt/dbt-intro',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/data-ingestion/etl-tools/dbt',
            },
          ]
        },
        'en/integrations/data-ingestion/etl-tools/vector-to-clickhouse',
        {
          type: 'doc',
          id: 'en/integrations/index',
          label: 'View all integrations'
        },
      ]
    },
    {
      type: 'category',
      label: 'Data Formats',
      collapsed: false,
      collapsible: false,
      items: [
        'en/integrations/data-ingestion/data-formats/csv-tsv',
        {
          type: 'category',
          label: 'JSON',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/guides/developer/working-with-json/json-intro',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/guides/developer/working-with-json',
            },
          ]
        },
        'en/integrations/data-ingestion/data-formats/parquet',
        'en/integrations/data-ingestion/data-formats/arrow-avro-orc',
        {
          type: 'doc',
          id: 'en/interfaces/formats',
          label: 'View all data formats'
        },
      ]
    },
    {
      type: 'category',
      label: 'Clients',
      collapsed: false,
      collapsible: false,
      items: [
        'en/integrations/clickhouse-client-local',
        'en/integrations/sql-clients/sql-console',
        'en/getting-started/playground',
        {
          type: 'category',
          label: 'Language Clients',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/language-clients/nodejs',
            'en/integrations/language-clients/java/index',
            {
              type: 'category',
              label: 'Go',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/integrations/language-clients/go/clickhouse-go',
                },
              ],
            },
            {
              type: 'category',
              label: 'Python',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/integrations/language-clients/python',
                },
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'SQL Clients',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/sql-clients/datagrip',
            'en/integrations/sql-clients/dbeaver',
            'en/integrations/sql-clients/tablum',
          ]
        },
        {
          type: 'category',
          label: 'Business Intelligence',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/data-visualization/grafana-and-clickhouse',
            'en/integrations/data-visualization/metabase-and-clickhouse',
            'en/integrations/data-visualization/superset-and-clickhouse',
            'en/integrations/data-visualization/tableau-and-clickhouse',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Managing ClickHouse',
      collapsed: false,
      collapsible: false,
      items: [
        'en/operations/backup',
        'en/operations/update',
        'en/operations/monitoring',
        'en/guides/developer/ttl',
        'en/guides/developer/deduplication',
        {
          type: 'autogenerated',
          dirName: 'en/operations',
        },
        {
          type: 'autogenerated',
          dirName: '1s/sre/keeper',
        },
        'en/guides/sre/scaling-clusters',
        'en/guides/sre/configuring-ssl',
        {
          type: 'category',
          label: 'Users',
          link: {
            type: 'generated-index',
            slug: 'en/manage/users'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/guides/sre/user-management',
            },
            {
              type: 'doc',
              id: 'en/operations/access-rights',
            },
            {
              type: 'doc',
              id: 'en/operations/quotas',
            },
            {
              type: 'category',
              label: 'External Authentication',
              link: {
                type: 'doc',
                id: 'en/operations/external-authenticators/index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/operations/external-authenticators',
                },
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Security',
          link: {
            type: 'generated-index',
            slug: '/en/manage/security'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'doc',
              id: 'en/operations/named-collections',
            },
            {
              type: 'doc',
              id: 'en/guides/sre/configuring-ssl',
            },
            {
              type: 'doc',
              id: 'en/guides/sre/network-ports',
            },
          ]
        },
      ]
  },
  {
    type: 'category',
    label: "What's New",
    link: {
      type: 'generated-index',
      slug: '/en/whats-new',
    },
    collapsed: false,
    collapsible: false,
    items: [
      {
        type: 'autogenerated',
        dirName: 'en/whats-new',
      }
    ]
  },
  ],






cloud: [
  {
    type: 'category',
    label: 'Cloud',
    collapsed: false,
    collapsible: false,
    link: {
      type: 'doc',
      id: 'en/get-started/cloud-quick-start',
    },
    className: 'top-nav-item',
    items: [
      {
        type: 'doc',
        id: 'en/get-started/cloud-quick-start',
      },
      'en/cloud-index',
      'en/get-started/sql-console',
      {
        type: 'autogenerated',
        dirName: 'en/cloud',
      },
    ],
  },
],










  sqlreference: [
    {
      type: 'category',
      label: 'Introduction',
      className: 'top-nav-item',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'en/sql-reference/index',
        },
        {
          type: 'doc',
          id: 'en/sql-reference/syntax',
        },
        {
          type: 'doc',
          id: 'en/sql-reference/ansi',
        },
        {
          type: 'category',
          label: 'Data Types',
          link: {
            type: 'doc',
            id: 'en/sql-reference/data-types/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/data-types',
            },
          ]
        },
        {
          type: 'category',
          label: 'Statements',
          link: {
            type: 'doc',
            id: 'en/sql-reference/statements/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/statements',
            },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Engines',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/engines',
        }
      ]
    },
    {
      type: 'category',
      label: 'Functions',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Regular Functions',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/sql-reference/functions/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/functions',

            }
          ]
        },
        {
          type: 'category',
          label: 'Aggregate Functions',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/sql-reference/aggregate-functions/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/aggregate-functions',

            }
          ]
        },
        {
          type: 'category',
          label: 'Table Functions',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'en/sql-reference/table-functions/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference/table-functions',

            }
          ]
        },
        {
          type: 'doc',
          id: 'en/sql-reference/window-functions/index',
        },
      ]
    },
    {
      type: 'category',
      label: 'Other Features',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'en/sql-reference/operators/index'
        },
        {
          type: 'doc',
          id: 'en/sql-reference/distributed-ddl'
        },
      ]
    },
  ],



    russia: [
      {
        type: 'autogenerated',
        dirName: 'ru',
      },
    ],
      chinese: [
        {
          type: 'autogenerated',
          dirName: 'zh',
        },
      ],
};

module.exports = sidebars;
