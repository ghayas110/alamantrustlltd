"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCMSContent(pageName: string, sectionKey: string, defaultValue: any) {
  const content = await prisma.cMSContent.findUnique({
    where: { pageName_sectionKey: { pageName, sectionKey } }
  });
  if (!content) return defaultValue;
  try {
    return content.contentJson;
  } catch (e) {
    return defaultValue;
  }
}

export async function updateCMSContent(pageName: string, sectionKey: string, contentJson: any) {
  await prisma.cMSContent.upsert({
    where: { pageName_sectionKey: { pageName, sectionKey } },
    update: { contentJson },
    create: { pageName, sectionKey, contentJson }
  });
  revalidatePath("/");
  revalidatePath("/contact");
  return { success: true };
}
