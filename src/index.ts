import { Elysia } from 'elysia';
import { db } from './db';
import { users } from './db/schema';

const app = new Elysia()
  .get('/', () => ({ message: 'Hello Elysia' }))
  .get('/users', async () => {
    try {
      return await db.select().from(users);
    } catch (error) {
      return { error: 'Could not fetch users. Make sure database is connected.' };
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
