module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/person-webhook',
      handler: 'person.createPerson',
      config: {
        auth: false
      }
    }
  ]
};
