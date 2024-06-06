/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: [
            "62.72.12.96",
            "192.168.1.5",
            "204c-14-224-138-139.ngrok-free.app"
        ]
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    }
};

export default nextConfig;
