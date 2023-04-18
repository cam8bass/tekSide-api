import { Schema, model } from "mongoose";
import { ArticleInterface } from "../shared/interfaces/";
import { REQUIRE_INPUT } from "../shared/messages/messages";




const articleSchema = new Schema<ArticleInterface>({
  title: {
    type: String,
    required: [true, REQUIRE_INPUT],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, REQUIRE_INPUT],
  },
  img: {
    type: String,
    required: [true, REQUIRE_INPUT],
  },
  description: {
    processor: {
      type: String,
      required: [true, REQUIRE_INPUT],
    },
    ram: {
      type: String,
      required: [true, REQUIRE_INPUT],
    },
    graphicCard: {
      type: String,
      required: [true, REQUIRE_INPUT],
    },
    harkDisk: {
      type: String,
      required: [true, REQUIRE_INPUT],
    },
    system: {
      type: String,
      required: [true, REQUIRE_INPUT],
    },
    wifi: {
      type: Boolean,
      required: [true, REQUIRE_INPUT],
    },
  },
  category: {
    type: String,
    required: [true, REQUIRE_INPUT],
  },
  createdAt: {
    type: String,
    required: [true, REQUIRE_INPUT],
  },
  availability: {
    type: Boolean,
    required: [true, REQUIRE_INPUT],
  },
});


const Article = model<ArticleInterface>("Article", articleSchema);

export default Article;
