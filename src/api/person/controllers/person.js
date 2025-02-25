module.exports = {
  async createPerson(ctx) {
    try {
      const { name, age, sex, email } = ctx.request.body;

      if (!name || !email) {
        return ctx.badRequest('Name and email are required.');
      }

      // Tạo mới một bản ghi trong bảng Person
      const newPerson = await strapi.entityService.create('api::person.person', {
        data: {
          name,
          age,
          sex,
          email
        }
      });

      ctx.send({ message: 'Person created successfully', person: newPerson });
    } catch (err) {
      console.error('Error:', err);
      ctx.send({ error: 'Failed to create person' });
    }
  }
};
