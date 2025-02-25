module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/person-webhook',
      handler: 'person.handleCozeData',
      config: {
        auth: false, // Tắt xác thực để Coze có thể gửi dữ liệu
      },
    },
  ],
};
