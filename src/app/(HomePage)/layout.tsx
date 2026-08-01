import WelcomeGate from './WelcomeGate';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WelcomeGate>{children}</WelcomeGate>;
}
