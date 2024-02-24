'use client';
import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { useForm } from 'react-hook-form';

import 'easymde/dist/easymde.min.css';

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const { register } = useForm<IssueForm>();

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
}

export default NewIssuePage;
