
import {pgTable , serial ,text ,varchar } from "drizzle-orm/pg-core";

export const aiInterview= pgTable('aiInterview',{
    id:serial('id').primaryKey(),
    jsonAIResp:text('jsonAIresp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockID:varchar('mockId').notNull()
})

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIDRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    rating:varchar('rating'),
    feedback:text('feedback'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),
})