import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { PrismaClient } from '@tender/database';

const prisma = new PrismaClient();

const profilesRoutes: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.get(
    '/',
    {
      // preValidation: [fastify.authenticate],
    },
    async (request) => {
      const user = await prisma.user.findFirst();
      if (!user) return { items: [] };

      const items = await prisma.searchProfile.findMany({
        where: { userId: user.id },
      });

      return { items };
    }
  );

  server.post(
    '/',
    {
      preValidation: [fastify.authenticate],
      schema: {
        body: z.object({
          name: z.string(),
          keywords: z.array(z.string()),
        }),
      },
    },
    async (request, reply) => {
      return reply.code(201).send({ id: '1', ...request.body });
    }
  );
};

export default profilesRoutes;
