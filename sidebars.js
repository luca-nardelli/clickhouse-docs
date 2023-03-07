/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      collapsible: false,
      items: [
        'en/intro',
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
        'en/guides/developer/mutations',
        'en/concepts/joining-tables',
        'en/guides/developer/cascading-materialized-views',
        'en/getting-started/example-datasets/uk-price-paid',
        'en/sql-reference/dictionaries/index',
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      collapsible: false,
      link: {
        type: 'doc',
        id: 'en/integrations/index',
      },
      items: [
        'en/integrations/data-ingestion/s3/index',
        'en/integrations/data-ingestion/gcs/index',
        'en/integrations/data-ingestion/dbms/postgresql/index',
        'en/integrations/data-ingestion/dbms/mysql/index',
        'en/integrations/data-ingestion/kafka/index',
        'en/integrations/data-ingestion/etl-tools/dbt/index',
        'en/integrations/data-ingestion/etl-tools/vector-to-clickhouse',
        {
          type: 'category',
          label: 'More...',
          className: 'top-nav-item',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse',
            'en/integrations/data-ingestion/msk/index',
            'en/integrations/data-ingestion/emqx/index',
            {
              type: 'link',
              label: 'Cassandra',
              href: '/en/sql-reference/dictionaries#cassandra'
            },
            'en/sql-reference/table-functions/deltalake',
            'en/engines/table-engines/integrations/embedded-rocksdb',
            'en/engines/table-engines/integrations/hive',
            'en/engines/table-engines/integrations/hudi',
            'en/engines/table-engines/integrations/iceberg',
            'en/engines/table-engines/integrations/mongodb',
            'en/engines/table-engines/integrations/nats',
            'en/integrations/data-ingestion/etl-tools/nifi-and-clickhouse',
            'en/engines/table-engines/integrations/rabbitmq',
            {
              type: 'link',
              label: 'Redis',
              href: '/en/sql-reference/dictionaries#redis'
            },
            'en/integrations/data-ingestion/redshift/index',
            'en/engines/table-engines/integrations/sqlite',
            {
              type: 'doc',
              label: 'View all integrations',
              id: 'en/integrations/index',
            },
          ],
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
        'en/integrations/data-ingestion/data-formats/json',
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
            'en/integrations/language-clients/go/index',
            'en/integrations/language-clients/python/index',
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
            'en/integrations/sql-clients/jupysql',
            'en/integrations/sql-clients/tablum',
          ]
        },
        {
          type: 'category',
          label: 'Business Intelligence',
          collapsed: true,
          collapsible: true,
          items: [
            'en/integrations/data-visualization/deepnote',
            'en/integrations/data-visualization/grafana-and-clickhouse',
            'en/integrations/data-visualization/metabase-and-clickhouse',
            'en/integrations/data-visualization/rocketbi-and-clickhouse',
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
        'en/guides/sre/user-management/index',
        'en/operations/backup',
        'en/operations/monitoring',
        'en/guides/developer/ttl',
        'en/guides/developer/deduplication',
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
            'en/guides/sre/user-management/configuring-ldap',
            'en/guides/sre/user-management/ssl-user-auth',
            'en/operations/named-collections',
            'en/guides/sre/configuring-ssl',
            'en/guides/sre/network-ports',
            'en/operations/ssl-zookeeper',
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
        'en/operations/configuration-files',
        'en/operations/named-collections',
        'en/operations/storing-data',
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'Settings',
          link: {
            type: 'doc',
            id: 'en/operations/settings/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/settings'
            },
          ]
        },
        'en/operations/server-configuration-parameters/settings',
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'Utilities',
          link: {
            type: 'doc',
            id: 'en/operations/utilities/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/utilities'
            },
          ]
        },
        'en/operations/update',
        'en/guides/sre/keeper/index',
        'en/guides/sre/scaling-clusters',
        'en/guides/sre/configuring-ssl',
        'en/operations/caches',
        'en/operations/query-cache',
        'en/operations/quotas',
        'en/operations/optimizing-performance/sampling-query-profiler',
        'en/operations/opentelemetry',
        'en/operations/performance-test',
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'System Tables',
          link: {
            type: 'doc',
            id: 'en/operations/system-tables/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/system-tables'
            },
          ]
        },
        'en/operations/tips',
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
      {
        type: 'category',
        label: 'Migrating',
        collapsed: true,
        collapsible: true,
        link: {
          type: 'doc',
          id: 'en/integrations/migration/index'
        },
        items: [
          {
            type: 'autogenerated',
            dirName: 'en/integrations/migration',
          },
        ],
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
        'en/sql-reference/index',
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
