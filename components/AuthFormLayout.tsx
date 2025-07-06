'use client';

import { Container, Paper, Title, Text, Stack } from '@mantine/core';
import { ReactNode } from 'react';

interface AuthFormLayoutProps {
  title: string;
  children: ReactNode;
}

const AuthFormLayout = ({ title, children }: AuthFormLayoutProps) => {
  return (
    <Container size={420} my={40}>
      <Title order={2} ta="center">
        {title}
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>{children}</Stack>
      </Paper>
    </Container>
  );
}

export default AuthFormLayout;
