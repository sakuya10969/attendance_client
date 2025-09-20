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

const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    // NestJSのAPIにPOSTする処理を書く
    console.log({ name, email, password });
  };

  return (
    <AuthFormLayout title="新規登録">
      <TextInput
        label="名前"
        placeholder="山田太郎"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
      />
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
        <Anchor component={Link} href="/signIn" size="sm">
          サインインはこちら
        </Anchor>
        <Button onClick={handleSubmit}>登録</Button>
      </Group>
    </AuthFormLayout>
  );
};

export default SignUpPage;
