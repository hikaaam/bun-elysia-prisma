import Elysia from "elysia";
import books from "./books";
const router = new Elysia();

router.use(books);

export default router;
