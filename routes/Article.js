var express = require("express");
const ArticleController = require("../controllers/ArticleController");
var router = express.Router();

router.get("/:id/:pageNo", ArticleController.articleList);
router.post("/add-visitor",ArticleController.addVisitor);
router.get("/filterArticle/:userId/:filter/:pageNo",ArticleController.filterArticle);
router.get("/applyFilterForSourceAndGame/:userId/:FilterGame/:filterChannels/:pageNo",ArticleController.applyFilterForSourceAndGame);
router.get("/filterSourceArticle/:userId/:filter/:pageNo",ArticleController.filterSourceArticle);
router.get("/most/Upvote/:userId/:pageNo",ArticleController.mostUpvote);
router.get("/most/Viewed/:userId/:pageNo",ArticleController.mostViewed);
router.get("/most/Viewed/:userId/:pageNo",ArticleController.mostViewed);
router.post("/favorite-article",ArticleController.favoriteArticle);
router.post("/", ArticleController.storeArticle);
router.get("/getHigherArticle",ArticleController.getHigherArticle);
router.get("/favorite/article/:userId",ArticleController.favoriteArticleList);
router.delete("/favorite/delete/:userId/:articleId",ArticleController.removeFavorite);
router.get("/uniqueSource",ArticleController.uniqueSource);
router.get("/uniqueSourceArticle",ArticleController.uniqueSourceArticle);
router.put("/:id", ArticleController.articleUpdate);

router.get("/addSource/:displayScreenTitle/:source/:link/:icon" ,ArticleController.addSource);
router.get("/getAllSource",ArticleController.getAllSource);
router.delete("/deleteSource/:id",ArticleController.deleteSource);

router.get("/addPromotion/:AddTitle/:AddContent/:PromotedText/:VisitSiteLink/:AddImageUrl" ,ArticleController.addPromotion);
router.get("/getAllPromotion",ArticleController.getAllPromotion);
router.delete("/deletePromotion/:id",ArticleController.deletePromotion);


module.exports = router;
