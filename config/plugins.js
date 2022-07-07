// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      institution: {
        settings: {
          filterableAttributes: ['city', 'type', 'rating'],
          // sortableAttributes: [''],
          searchableAttributes: ['title', 'specialisations', 'slug'],
        },
        transformEntry({ entry }) {
          const data = {
            id: entry.id,
            title: entry?.title,
            logo: entry?.logo,
            content: entry?.content,
            phone: entry?.contact?.phone,
            slug: entry?.slug,
            type: entry?.type,
            rating: entry?.rating,
            address: entry?.address,
            specialisations: entry.specialisations.map(specialisation => specialisation?.title),
            city: entry?.address.split(',')[0].split('г.')[1]
          }
          return data
        },
      }
    }
  },
}
