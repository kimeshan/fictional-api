/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `Connection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authType` to the `Provider` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('HTTPBasicAuth', 'AccessToken');

-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "authType" "AuthType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Connection_reference_key" ON "Connection"("reference");
