import { Router } from 'express';
const router = Router();

router.post('/', (request, response) => {
  const { title, content } = request.body;
  console.log({
    title,
    content,
  });
});

export default router;
