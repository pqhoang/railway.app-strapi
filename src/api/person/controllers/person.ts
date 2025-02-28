/**
 * person controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::person.person');

export default factories.createCoreController("api::person.person", ({ strapi }) => ({
  async create(ctx) {
    // Nếu request body không có "data", tự động thêm vào
    if (!ctx.request.body.data) {
      ctx.request.body = { data: ctx.request.body };
    }

    // Gọi hàm create mặc định của Strapi
    return await super.create(ctx);
  }
}));