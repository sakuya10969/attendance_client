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
import { useRouter } from 'next/navigation';

import AuthFormLayout from '@/components/AuthFormLayout';
import { signIn } from '@/api/authApi';

const SignInPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async () => {
    await signIn(email, password);
    router.push('/');
  };

  return (
    <AuthFormLayout title="サインイン">
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
        <Anchor component={Link} href="/signUp" size="sm">
          アカウントを作成
        </Anchor>
        <Button onClick={handleSubmit}>サインイン</Button>
      </Group>
    </AuthFormLayout>
  );
};

export default SignInPage;
