'use client';

import { useRouter } from 'next/navigation';

const Greeting = () => {
  const router = useRouter();

  return (
    <>
      <div className="mt-9 flex items-end gap-2 bg-yellow-200 p-4">
        <div className="bg-pink-200">안녕하</div>
        <div className="bg-pink-200">세요</div>
        <div className="shrink-0 bg-pink-200 px-10">환영합니다</div>
      </div>
      <button onClick={() => router.push('/')}>HOME</button>
    </>
  );
};

export default Greeting;
