'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// Auth check (simple password for now)
export async function authenticateAdmin(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'paramendo2026';
  return password.trim() === adminPassword;
}

// -- Site Content --
export async function getSiteContent() {
  const content = await prisma.siteContent.findMany();
  // Return as a key-value map
  return content.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);
}

export async function updateSiteContent(key: string, value: string) {
  await prisma.siteContent.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
  revalidatePath('/');
  revalidatePath('/admin/content');
}

// -- Site Metrics --
export async function getSiteMetrics() {
  return await prisma.siteMetric.findMany();
}

export async function updateSiteMetric(key: string, value: number, label: string, icon?: string) {
  await prisma.siteMetric.upsert({
    where: { metricKey: key },
    update: { metricValue: value, label, icon },
    create: { metricKey: key, metricValue: value, label, icon },
  });
  revalidatePath('/');
  revalidatePath('/admin/metrics');
}

export async function deleteSiteMetric(key: string) {
  await prisma.siteMetric.delete({
    where: { metricKey: key },
  });
  revalidatePath('/');
  revalidatePath('/admin/metrics');
}

// -- Products --
export async function getProducts() {
  return await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function upsertProduct(id: string | null, data: any) {
  if (id) {
    await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        category: data.category,
        description: data.description,
        imageUrl: data.imageUrl || null,
        pricePerUnit: parseFloat(data.pricePerUnit) || null,
        plasticOffset: parseFloat(data.plasticOffset) || null,
      },
    });
  } else {
    await prisma.product.create({
      data: {
        name: data.name,
        category: data.category,
        description: data.description,
        imageUrl: data.imageUrl || null,
        pricePerUnit: parseFloat(data.pricePerUnit) || null,
        plasticOffset: parseFloat(data.plasticOffset) || null,
      },
    });
  }
  revalidatePath('/products');
  revalidatePath('/admin/products');
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  });
  revalidatePath('/products');
  revalidatePath('/admin/products');
}

// -- Quotes --
export async function getQuoteRequests() {
  return await prisma.quoteRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function updateQuoteStatus(id: string, status: string) {
  await prisma.quoteRequest.update({
    where: { id },
    data: { status },
  });
  revalidatePath('/admin');
}

// -- Blogs / Media --
export async function getBlogs() {
  return await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function upsertBlog(id: string | null, data: any) {
  if (id) {
    await prisma.blogPost.update({
      where: { id },
      data: {
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        imageUrl: data.imageUrl || null,
        type: data.type || 'Blog',
      },
    });
  } else {
    await prisma.blogPost.create({
      data: {
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        imageUrl: data.imageUrl || null,
        type: data.type || 'Blog',
      },
    });
  }
  revalidatePath('/');
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
}

export async function deleteBlog(id: string) {
  await prisma.blogPost.delete({
    where: { id },
  });
  revalidatePath('/');
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
}
