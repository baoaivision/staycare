/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "62.72.12.96",
            "192.168.1.5"
        ]
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    }
};

export default nextConfig;
