'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Card,
  Group,
  Divider,
  Grid,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { getUser } from '@/api/rootApi';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const now = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <Container size="sm" my="xl">
      <Title order={2}>
        こんにちは、{loading ? '読み込み中...' : user?.name || 'ゲスト'}さん
      </Title>
      <Text c="dimmed">{now}</Text>

      <Card withBorder mt="lg" shadow="sm" radius="md">
        <Grid mt="md" gutter="sm">
          <Grid.Col span={6}>
            <Button fullWidth style={{ height: '150px', fontSize: '20px' }}>
              出勤する
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button fullWidth style={{ height: '150px', fontSize: '20px' }}>
              退勤する
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button variant="outline" fullWidth style={{ height: '150px', fontSize: '20px' }}>
              休憩する
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button variant="outline" fullWidth style={{ height: '150px', fontSize: '20px' }}>
              休憩終了
            </Button>
          </Grid.Col>
        </Grid>
      </Card>

      <Button fullWidth mt="lg" variant="light" component="a" href="/records" style={{ height: '100px', fontSize: '20px' }}>
        今月の勤怠を確認
      </Button>
    </Container>
  );
}
