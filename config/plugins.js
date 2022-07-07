// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      institution: {
        transformEntry({ entry }) {
          const data = {
            title: entry?.title,
            logo: entry?.logo,
            content: entry?.content,
            phone: entry?.contact?.phone,
            slug: entry?.slug,
            type: entry?.type,
            address: entry?.address,
            specialisations: entry.specialisations.map(specialisation => specialisation?.title)
          }
          console.log(data);
          return data
        },
      }
    }
  },
}
