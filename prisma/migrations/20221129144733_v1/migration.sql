-- CreateTable
CREATE TABLE "Provider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "provId" INTEGER NOT NULL,
    "basicAuthUsername" TEXT,
    "basicAuthPassword" TEXT,
    "accessToken" TEXT,
    "reference" TEXT NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_name_key" ON "Provider"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_url_key" ON "Provider"("url");

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_provId_fkey" FOREIGN KEY ("provId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
