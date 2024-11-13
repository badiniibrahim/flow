"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon, TrashIcon } from "lucide-react";
import { DeleteWorkflowAlertDialog } from "./DeleteWorkflowDialog";

type Props = {
  workflowName: string;
  workflowId: string;
};
function WorkflowAction({ workflowName, workflowId }: Props) {
  const [showDeleteWorkflow, setShowDeleteWorkflow] = useState<boolean>(false);

  return (
    <>
      <DeleteWorkflowAlertDialog
        open={showDeleteWorkflow}
        setOpen={setShowDeleteWorkflow}
        workflowName={workflowName}
        workflowId={workflowId}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size={"sm"}>
            <div
              className="flex items-center justify-center 
            w-full h-full"
            >
              <MoreVerticalIcon size={18} />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowDeleteWorkflow((prev) => !prev)}
            className="text-destructive flex items-center gap-2"
          >
            <TrashIcon size={16} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default WorkflowAction;
