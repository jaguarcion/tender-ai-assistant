import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

const usersRoutes: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.get(
    '/',
    {
      preValidation: [fastify.authenticate],
    },
    async () => {
      // Return mocked array of users
      return [{ id: '1', email: 'test@example.com' }];
    }
  );
};

export default usersRoutes;
