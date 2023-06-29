import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        price: fields.integer({ label: 'Price' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        ingredients: fields.array(
          fields.relationship({
          label: 'Ingredients',
          collection: 'ingredients',
          }),
          {
            label: 'Ingredients',
            itemLabel: (props) => props.value ?? 'Select an ingredient',
          }
        ),
        benefits: fields.array(
          fields.relationship({
          label: 'Benefits',
          collection: 'benefits',
          }),
          {
            label: 'Benefits',
            itemLabel: (props) => props.value ?? 'Select a benefit',
          }
        ),
        additions: fields.array(
          fields.relationship({
          label: 'Works well with',
          collection: 'additions',
          }),
          {
            label: 'Works with',
            itemLabel: (props) => props.value ?? 'Select an addition it works well with',
          }
        ),
        uses: fields.array(
          fields.relationship({
          label: 'Best Uses for',
          collection: 'uses',
          }),
          {
            label: 'Works with',
            itemLabel: (props) => props.value ?? 'Select an Best Uses for',
          }
        ),
      },
    }),
    ingredients: collection({
      label: 'Ingredients',
      slugField: 'name',
      path: 'src/content/ingredients/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    benefits: collection({
      label: 'Benefits',
      slugField: 'name',
      path: 'src/content/benefits/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    additions: collection({
      label: 'Additions',
      slugField: 'name',
      path: 'src/content/additions/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    uses: collection({
      label: 'Uses',
      slugField: 'name',
      path: 'src/content/uses/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    locations: collection({
      label: 'Locations',
      slugField: 'name',
      path: 'src/content/locations/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        address: fields.text({ label: 'Address', multiline: true }),
        phone: fields.text({ label: 'Phone' }),
        email: fields.text({ label: 'Email' }),
        hours: fields.text({ label: 'Hours', multiline: true }),
        concierge: fields.checkbox({ label: 'Concierge available?' }),
        description: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
})
