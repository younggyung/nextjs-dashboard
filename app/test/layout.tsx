import Greeting from './component/Greeting';

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Greeting />
      {children}
    </>
  );
}
