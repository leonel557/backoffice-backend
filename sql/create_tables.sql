CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username text DEFAULT '',
  password text,
  date_created timestamp
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  description text
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  id_question integer,
  description text,
  is_correct boolean,
  CONSTRAINT fk_questions FOREIGN KEY(id_question) REFERENCES questions(id)
);
