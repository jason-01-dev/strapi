"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = ({ env }) => {
    const isProduction = env('NODE_ENV') === 'production';
    return {
        connection: {
            client: 'sqlite', // On force le client SQLite pour le développement et Render
            connection: {
                filename: isProduction
                    ? '/data/data.db' // Le chemin absolu vers ton disque dur Render
                    : path_1.default.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')), // Ton SQLite local
            },
            useNullAsDefault: true,
            acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
    };
};
