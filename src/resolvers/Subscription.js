function newLinkSubscribe(parent, args, context, info) {
  return context.db.subscription.link(
    {
      where: {
        mutation_in: ['CREATED', 'DELETED'],
      },
    },
    '{ mutation }',
  )
}

const newLink = {
  subscribe: newLinkSubscribe,
}

module.exports = {
  newLink,
}
