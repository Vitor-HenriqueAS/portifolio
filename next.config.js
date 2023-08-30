/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DOMINIO_1: process.env.DOMINIO_1,
    DOMINIO_2: process.env.DOMINIO_2,
    DOMINIO_3: process.env.DOMINIO_3,
    DOMINIO_4: process.env.DOMINIO_4,
    DOMINIO_5: process.env.DOMINIO_5,
    DOMINIO_6: process.env.DOMINIO_6,
    SERVICO_ID: process.env.SERVICO_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
}

module.exports = nextConfig
