export default async function config() {
    return {
        verbose: true,
        testMatch: [ "**/__tests__/**/*.?(m)js", "**/?(*.)+test.?(m)js" ],
        moduleFileExtensions: ["js", "json", "jsx", "node", "mjs"]
    };
};
