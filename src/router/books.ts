import swagger from "@elysiajs/swagger";
import Elysia, { t } from "elysia";
import booksController from "../controller/booksController";

const books_route = new Elysia();

books_route.use(
  swagger({
    documentation: {
      tags: [
        {
          name: "books",
          description: "Books Api",
        },
      ],
    },
  })
);

books_route.get(
  "/books",
  async (req) => {
    return await booksController(req).getAllBooks();
  },
  {
    detail: {
      tags: ["books"],
      description: "to get all books",
    },
  }
);

books_route.post(
  "/books/add",
  async (req) => {
    return await booksController(req).addBook(req.body);
  },
  {
    body: t.Object({
      name: t.String(),
      description: t.String(),
      author: t.String(),
      category: t.String(),
    }),
    detail: {
      tags: ["books"],
      description: "to add books",
    },
  }
);

books_route.get(
  "/books/:id",
  async (req) => {
    return await booksController(req).getBookDetail(req.params.id);
  },
  {
    detail: {
      tags: ["books"],
      description: "to get book detail",
    },
  }
);

books_route.delete(
  "/books/delete/:id",
  async (req) => {
    return await booksController(req).deleteBook(req.params.id);
  },
  {
    detail: {
      tags: ["books"],
      description: "to delete book by id",
    },
  }
);

export default books_route;
