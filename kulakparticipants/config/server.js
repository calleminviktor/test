module.exports = ({ env }) => ({
  host: env('testdomein.ilpavi.be', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    "path": "testdomein.ilpavi.be/dashboard" // We change the path to access to the admin (highly recommended for security reasons).
    ,auth:{
      
      secret: env('ADMIN_JWT_SECRET', '51a56f75911e82d7305db6e36f954d52'),
    },
  },
});
