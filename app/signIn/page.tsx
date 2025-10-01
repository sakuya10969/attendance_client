'use client';

import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Anchor,
  Container,
  Paper,
  Title,
  Stack,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';

import { signIn } from '@/api/authApi';

const SignInPage = () => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : '有効なメールアドレスを入力してください'),
      password: (value) => (value.length < 6 ? 'パスワードは6文字以上で入力してください' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const response = await signIn(values.email, values.password);
      router.push('/');
      return response
    }
    catch (error) {
      console.error(error)
    }
  };

  return (
    <Container size={420} my={40}>
      <Title order={2} ta="center">
        サインイン
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="メールアドレス"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
              required
            />
            <PasswordInput
              label="パスワード"
              placeholder="******"
              {...form.getInputProps('password')}
              required
            />
            <Group justify="space-between" mt="md">
              <Anchor component={Link} href="/signUp" size="sm">
                アカウントを作成
              </Anchor>
              <Button type="submit">サインイン</Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInPage;
