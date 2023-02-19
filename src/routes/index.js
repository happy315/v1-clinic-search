import express from 'express';
import clinicsRoutes from './clinics';

const router = express.Router();

//################################################################################################################
/**
 *  Collect all the routes supported by this server
 */
const routes = [...clinicsRoutes]

//################################################################################################################
/**
 * Map all routes to app as router.{{methodName}}
 * Example - GET/POST/PUT/PATCH/DELETE
 * All these methods will be allowed, we can set each method to similar GET method case
 */
routes.forEach(route => {
    switch (route.method) {
        case 'GET':
            router.get(route.path, ...route.handlers);
            break;
    };
})


export default router;