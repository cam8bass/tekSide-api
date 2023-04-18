import { Response, Request } from "express";
import Article from "../models/article.model";
import { ArticleInterface } from "../shared/interfaces";
import ArticleFilter from "../utils/article.util";

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const filter = new ArticleFilter(
      Article.find(),
      req.query as Record<any, any>
    )
      .filter()
      .sort()
      .fields().page();
    const articles: ArticleInterface[] = await filter.queryMethod;
    res.status(200).json({
      status: "success",
      results: articles.length,
      data: {
        articles,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  try {
    const createdAt = Date.now();
    req.body.createdAt = createdAt;
    const article = await Article.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        article,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const getArticle = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const article = await Article.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        article,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        updatedArticle,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deletedArticle = await Article.findByIdAndDelete(id, { new: true });
    res.status(200).json({
      status: "success",
      data: {
        deletedArticle,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
