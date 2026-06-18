import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

const authRoutes: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.post(
    '/register',
    {
      schema: {
        body: z.object({
          email: z.string().email(),
          password: z.string().min(6),
          name: z.string().optional(),
        }),
        response: {
          201: z.object({ token: z.string(), user: z.any() }),
        },
      },
    },
    async (request, reply) => {
      // Mocked implementation until DB is wired fully
      const token = fastify.jwt.sign({ id: '1', email: request.body.email, role: 'USER' });
      return reply.code(201).send({ token, user: { id: '1', email: request.body.email } });
    }
  );

  server.post(
    '/login',
    {
      schema: {
        body: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
        response: {
          200: z.object({ token: z.string(), user: z.any() }),
        },
      },
    },
    async (request, reply) => {
      // Mocked implementation
      const token = fastify.jwt.sign({ id: '1', email: request.body.email, role: 'USER' });
      return { token, user: { id: '1', email: request.body.email } };
    }
  );

  server.get(
    '/me',
    {
      preValidation: [fastify.authenticate],
    },
    async (request) => {
      return { user: request.user };
    }
  );
};

export default authRoutes;
