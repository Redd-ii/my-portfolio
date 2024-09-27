// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => {
      // Ensure rule.test is a RegExp before calling test()
      return rule.test instanceof RegExp && rule.test.test('.svg');
    });

    if (fileLoaderRule) {
      // Exclude SVGs from the default file loader
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add a new rule to handle SVGs with SVGR
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // Apply this rule to JS/TS files
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false, // Preserve the viewBox attribute
                },
              ],
            },
            titleProp: true, // Allows passing a title prop to SVG
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
