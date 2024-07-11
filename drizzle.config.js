 /**  @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview_owner:h4HFkvO9ybwj@ep-odd-mouse-a5q5dnrq.us-east-2.aws.neon.tech/ai-interview?sslmode=require'
    }
  };