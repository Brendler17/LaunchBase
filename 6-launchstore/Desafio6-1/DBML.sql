CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "cpf" int NOT NULL,
  "created_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "cnpj" int NOT NULL,
  "adress_id" int NOT NULL
);

CREATE TABLE "adresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text NOT NULL,
  "neighborhood" text NOT NULL,
  "number" int NOT NULL,
  "complement" text
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "color" text NOT NULL,
  "board" int NOT NULL,
  "price" int NOT NULL,
  "model_id" int NOT NULL
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text NOT NULL,
  "model" text NOT NULL,
  "year" int NOT NULL
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "number" int NOT NULL,
  "date" timestamp NOT NULL,
  "return_date" timestamp NOT NULL
);

CREATE TABLE "leases" (
  "id" SERIAL PRIMARY KEY,
  "car_id" int NOT NULL,
  "order_id" int NOT NULL
);

ALTER TABLE "adresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("adress_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "leases" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "leases" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");
