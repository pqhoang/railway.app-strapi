module.exports = {
  async handleCozeData(ctx) {
    try {
      const { name, age, sex, email } = ctx.request.body;

      if (!name || !email) {
        return ctx.badRequest('Name and email are required.');
      }

      // Lưu dữ liệu vào collection "Person"
      const newPerson = await strapi.entityService.create('api::person.person', {
        data: {
          name,
          age,
          sex,
          email,
        },
      });

      ctx.send({ message: 'Data received successfully!', person: newPerson });
    } catch (error) {
      console.error('Error saving data:', error);
      ctx.send({ error: 'Failed to save data' });
    }
  },
};
