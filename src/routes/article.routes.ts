import Router from "express";
import * as articleController from "./../controllers/article.controller";
const router = Router();

router
  .route("/")
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);
  
router
  .route("/:id")
  .get(articleController.getArticle)
  .patch(articleController.updateArticle)
  .delete(articleController.deleteArticle);

export default router;
