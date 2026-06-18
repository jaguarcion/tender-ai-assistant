import { FastifyPluginAsync } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { PrismaClient } from '@tender/database';

const prisma = new PrismaClient();

const dashboardRoutes: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.get(
    '/stats',
    {
      // preValidation: [fastify.authenticate],
    },
    async (request) => {
      const user = await prisma.user.findFirst();
      if (!user) return { newTenders: 0, activeProfiles: 0, aiAnalyzed: 0, savedTime: 0 };

      const newTenders = await prisma.tenderMatch.count({
        where: { userId: user.id, status: 'new' }
      });

      const activeProfiles = await prisma.searchProfile.count({
        where: { userId: user.id, isActive: true }
      });

      const aiAnalyzed = await prisma.tenderAiAnalysis.count();
      
      // Rough estimate: 12 mins per tender analysis
      const savedTime = Math.round(aiAnalyzed * 0.2);

      return {
        newTenders,
        activeProfiles,
        aiAnalyzed,
        savedTime
      };
    }
  );
};

export default dashboardRoutes;
