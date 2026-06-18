import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

const tendersRoutes: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.get(
    '/',
    {
      preValidation: [fastify.authenticate],
    },
    async () => {
      return { items: [], total: 0 };
    }
  );
};

export default tendersRoutes;
