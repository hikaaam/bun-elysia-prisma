import { PrismaClient } from "@prisma/client";
import { i_books } from "../interfaces/books_interface";
import { Context } from "elysia";
const prisma = new PrismaClient();

const booksController = (req: Context<any, any>) => ({
  getAllBooks: async () => {
    try {
      const data = await prisma.books.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      return {
        success: true,
        data,
      };
    } catch (error: any) {
      req.set.status = 500;
      return {
        msg: error.message,
        success: false,
      };
    }
  },
  addBook: async (books: i_books) => {
    try {
      const data = await prisma.books.create({
        data: books,
      });
      return {
        success: true,
        data,
      };
    } catch (error: any) {
      req.set.status = 500;
      return {
        msg: error.message,
        success: false,
      };
    }
  },
  getBookDetail: async (id: string) => {
    try {
      const data = await prisma.books.findFirstOrThrow({
        where: { id: Number(id) },
      });
      return {
        success: true,
        data,
      };
    } catch (error: any) {
      req.set.status = 500;
      return {
        msg: error.message,
        success: false,
      };
    }
  },

  deleteBook: async (id: string) => {
    try {
      const data = await prisma.books.delete({
        where: { id: Number(id) },
      });
      return {
        success: true,
        data,
      };
    } catch (error: any) {
      req.set.status = 500;
      return {
        msg: error.message,
        success: false,
      };
    }
  },
});

export default booksController;
