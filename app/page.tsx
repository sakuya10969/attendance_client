'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Card,
  Group,
  Divider,
} from '@mantine/core';

export default function DashboardPage() {
  const now = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <Container size="sm" my="xl">
      <Title order={2}>こんにちは、山田太郎さん</Title>
      <Text c="dimmed">{now}</Text>

      <Card withBorder mt="lg" shadow="sm" radius="md" p="lg">
        <Title order={4}>本日の勤怠</Title>
        <Divider my="sm" />
        <Text>出勤：09:00</Text>
        <Text>退勤：--:--</Text>
        <Text>勤務時間：4時間32分</Text>

        <Group justify="flex-end" mt="md">
          <Button color="blue">退勤する</Button>
        </Group>
      </Card>

      <Button fullWidth mt="lg" variant="light" component="a" href="/records">
        今月の勤怠を確認
      </Button>
    </Container>
  );
}
