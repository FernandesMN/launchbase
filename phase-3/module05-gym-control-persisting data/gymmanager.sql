CREATE TABLE "instructors" (
  "id" SERIAL PRIMARY KEY,
  "avatar_url" text,
  "name" text,
  "birth" timestamp,
  "gender" text,
  "services" text,
  "created_at" timestamp
);

CREATE TABLE "members" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "avatar_url" text,
  "gender" text,
  "email" text,
  "birth" timestamp,
  "blood" text,
  "wheight" int,
  "height" int,
  "instructor_id" int
);
