"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getClients() {
  return await prisma.client.findMany({
    orderBy: { createdAt: 'desc' },
    include: { assets: true }
  });
}

export async function createClient(firstName: string, lastName: string, email: string, phone: string) {
  const newClient = await prisma.client.create({
    data: { firstName, lastName, email, phone }
  });
  revalidatePath("/admin/clients");
  return newClient;
}

export async function updateClient(id: number, firstName: string, lastName: string, email: string, phone: string) {
  const updated = await prisma.client.update({
    where: { id },
    data: { firstName, lastName, email, phone }
  });
  revalidatePath("/admin/clients");
  return updated;
}

export async function addClientAsset(clientId: number, fileName: string, filePath: string, fileType: string) {
  const asset = await prisma.clientAsset.create({
    data: { clientId, fileName, filePath, fileType }
  });
  revalidatePath("/admin/clients");
  return asset;
}

export async function deleteClientAsset(assetId: number) {
  const deleted = await prisma.clientAsset.delete({
    where: { id: assetId }
  });
  revalidatePath("/admin/clients");
  return deleted;
}

export async function deleteClient(id: number) {
  await prisma.client.delete({
    where: { id }
  });
  revalidatePath("/admin/clients");
}
