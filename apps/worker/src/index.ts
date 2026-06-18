import { Worker, Queue } from 'bullmq';
import IORedis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null,
});

const searchQueueName = 'tender-search-queue';

// This worker will process search tasks
const searchWorker = new Worker(
  searchQueueName,
  async (job) => {
    console.log(`Processing search job ${job.id} for profile ${job.data.profileId}`);
    // Simulate some work
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Finished job ${job.id}`);
  },
  { connection }
);

searchWorker.on('completed', (job) => {
  console.log(`${job.id} has completed!`);
});

searchWorker.on('failed', (job, err) => {
  console.log(`${job?.id} has failed with ${err.message}`);
});

console.log('Worker is running and waiting for jobs...');
