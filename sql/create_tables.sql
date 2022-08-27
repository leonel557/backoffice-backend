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

CREATE TABLE evaluations (
  id SERIAL PRIMARY KEY,
  score integer,
  id_user integer,
  CONSTRAINT fk_user FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  id_evaluation integer,
  id_question integer,
  id_answer integer,
  CONSTRAINT fk_evaluvations FOREIGN KEY(id_evaluation) REFERENCES evaluations(id),
  CONSTRAINT fk_questions2 FOREIGN KEY(id_question) REFERENCES questions(id),
  CONSTRAINT fk_answer FOREIGN KEY(id_answer) REFERENCES answers(id)
);
