/**
 * person controller
 */

import {factories} from '@strapi/strapi'

// export default factories.createCoreController('api::person.person');

export default factories.createCoreController("api::person.person", ({strapi}) => ({
    // async create(ctx) {
    //   // Nếu request body không có "data", tự động thêm vào
    //   if (!ctx.request.body.data) {
    //     ctx.request.body = { data: ctx.request.body };
    //   }
    //
    //   // Gọi hàm create mặc định của Strapi
    //   return await super.create(ctx);
    // }
    async create(ctx) {
        try {
            // 🛠 Kiểm tra nếu parameters là chuỗi, thì parse thành JSON object
            if (typeof ctx.request.body.parameters === "string") {
                ctx.request.body.parameters = JSON.parse(ctx.request.body.parameters);
            }

            const response = await strapi.entityService.create("api::person.person", {
                data: ctx.request.body.parameters,
            });


            return response;
        } catch (error) {
            ctx.throw(400, error);
        }
    },
}));

