import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Використовуємо статичний експорт
  basePath: '/astrogenesis', // Додаємо базовий шлях для вашого проекту
  assetPrefix: '/astrogenesis/', // Префікс для доступу до статичних ресурсів
  trailingSlash: true, // Додаємо слеш до кінця URL
  reactStrictMode: true,
  images: {
    unoptimized: true, // Вимикаємо оптимізацію зображень
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i, // Додаємо підтримку webp та інших форматів
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/astrogenesis/_next/static/media', // Шлях для доступу до медіа
            outputPath: 'static/media', // Папка для збереження медіафайлів
            name: '[name].[hash].[ext]', // Імена файлів з хешем
          },
        },
      ],
    });

    // Додаємо підтримку правильного шляху для статичних ресурсів
    config.output.publicPath = '/astrogenesis/_next/static/'; // Статичні файли з префіксом

    return config;
  },
};


export default nextConfig;
