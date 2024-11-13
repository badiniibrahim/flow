"use server";

import {
  createWorkflowSchemaType,
  creteWorkflowSchema,
} from "@/schema/workflow";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs/server";
import { WorkflowStatus } from "@/types/workflow";
import { redirect } from "next/navigation";

export async function CreateWorkflow(from: createWorkflowSchemaType) {
  const { success, data } = creteWorkflowSchema.safeParse(from);
  if (!success) {
    throw new Error("invalid form data");
  }

  const { userId } = await auth();
  if (!userId) {
    throw new Error("unauthenticated");
  }

  const result = await prisma.workflow.create({
    data: {
      userId: userId,
      ...data,
      definition: "TODO",
      status: WorkflowStatus.DRAFT,
    },
  });

  if (!result) {
    throw new Error("failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
