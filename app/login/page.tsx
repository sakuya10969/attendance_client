'use client';

import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Anchor,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

import AuthFormLayout from '@/components/AuthFormLayout';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    // NestJSのAPIにPOSTする処理を書く（axiosなどで）
    console.log({ email, password });
  };

  return (
    <AuthFormLayout title="ログイン">
      <TextInput
        label="メールアドレス"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />
      <PasswordInput
        label="パスワード"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
      <Group justify="space-between" mt="md">
        <Anchor component={Link} href="/register" size="sm">
          アカウントを作成
        </Anchor>
        <Button onClick={handleSubmit}>ログイン</Button>
      </Group>
    </AuthFormLayout>
  );
};

export default LoginPage;
