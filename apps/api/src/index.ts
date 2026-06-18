import fastify from 'fastify';
import cors from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import usersRoutes from './routes/users';
import profilesRoutes from './routes/profiles';
import tendersRoutes from './routes/tenders';
import dashboardRoutes from './routes/dashboard';
import swaggerPlugin from './plugins/swagger';
import jwtPlugin from './plugins/jwt';

dotenv.config({ path: '../../.env' });

const app = fastify({ logger: true });

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(cors, { origin: '*' });

// Register plugins
app.register(swaggerPlugin);
app.register(jwtPlugin);

// Register routes
app.register(authRoutes, { prefix: '/api/auth' });
app.register(usersRoutes, { prefix: '/api/users' });
app.register(profilesRoutes, { prefix: '/api/search-profiles' });
app.register(tendersRoutes, { prefix: '/api/tenders' });
app.register(dashboardRoutes, { prefix: '/api/dashboard' });

app.get('/health', async () => {
  return { status: 'ok' };
});

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '4000', 10);
    await app.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
