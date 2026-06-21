"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    register({ strapi }) {
        // Empty
    },
    async bootstrap({ strapi }) {
        // Bootstrap temporarily disabled for debugging
        strapi.log.info('Bootstrap disabled - Strapi loading...');
    },
};
