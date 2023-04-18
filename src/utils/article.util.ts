import { Query } from "mongoose";

class ArticleFilter {
  public queryMethod: Query<any, any>;
  private requestQuery: Record<string, any>;

  constructor(queryMethod: Query<any, any>, requestQuery: Record<string, any>) {
    this.requestQuery = requestQuery;
    this.queryMethod = queryMethod;
  }

  filter() {
    const queryObj = { ...this.requestQuery };
    const excludedQuery = ["fields", "limit", "page", "sort"];
    excludedQuery.forEach((el) => delete queryObj[el]);
    const queryString = JSON.parse(
      JSON.stringify(queryObj).replace(
        /\b(gte|gt|lte|lt)\b/,
        (match) => `$${match}`
      )
    );
    this.queryMethod.find(queryString);
    return this;
  }

  sort() {
    if (this.requestQuery.sort) {
      const sortBy = JSON.stringify(this.requestQuery.sort)
        .split(",")
        .join(" ");
      this.queryMethod.sort(JSON.parse(sortBy));
    } else {
      this.queryMethod.sort("-createdAt");
    }
    return this;
  }

  fields() {
    if (this.requestQuery.fields) {
      const fields = JSON.stringify(this.requestQuery.fields)
        .split(",")
        .join(" ");
      console.log(fields);
      this.queryMethod.select(JSON.parse(fields));
    } else {
      this.queryMethod.select("-__v");
    }
    return this;
  }

  page() {
    const page: number = +this.requestQuery.page || 1;
    const limit: number = +this.requestQuery.limit || 100;
    const skipArticle: number = (page - 1) * limit;
    this.queryMethod.skip(skipArticle).limit(limit);
    return this;
  }
}

export default ArticleFilter;
