import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Ensure a single PrismaClient instance is used
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.firstName || !body.email || !body.message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    // Insert into database
    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName || "",
        email: body.email,
        inquiryType: body.inquiryType || "General Question",
        message: body.message,
        projectArea: body.projectArea ? Number(body.projectArea) : null,
        unit: body.unit || null,
        estimatedCost: body.estimatedCost ? Number(body.estimatedCost) : null,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Quote request submitted successfully.",
        data: quoteRequest 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting quote request:", error);
    return NextResponse.json(
      { error: "Failed to process the quote request. Please try again later." },
      { status: 500 }
    );
  }
}
