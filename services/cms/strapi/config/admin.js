module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '483a5c134fafa33dcb9a51a0b28db00e'),
  },
});
