import express from 'express';

const router = express.Router();

import ClinicsRoutes from './clinics';

// Collect all the routes supported by this server
const routes = [
    ...ClinicsRoutes
]

// For each given route init route to app as router.{{method}}
routes.forEach(route => {
    switch (route.method) {
        case 'GET':
            router.get(route.path, ...route.handlers);
            break;

        // Similarly cases can be added for other allowed methods like  POST/PUT/PATCH/DELETE
    };
})

export default router;