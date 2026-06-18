import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { PrismaClient } from '@tender/database';

const prisma = new PrismaClient();

const tendersRoutes: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.get(
    '/',
    {
      // preValidation: [fastify.authenticate], // TEMPORARILY DISABLED FOR MVP DEMO
    },
    async (request) => {
      // In a real app we'd get userId from request.user
      // For now we get the first user to show demo data
      const user = await prisma.user.findFirst();
      if (!user) return { items: [], total: 0 };

      const items = await prisma.tenderMatch.findMany({
        where: { userId: user.id },
        include: {
          tender: {
            include: {
              analyses: true,
            }
          },
          searchProfile: true,
        },
        orderBy: { score: 'desc' }
      });

      return { items, total: items.length };
    }
  );
};

export default tendersRoutes;
