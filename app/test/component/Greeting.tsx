'use client';

import { useRouter } from 'next/navigation';

const Greeting = () => {
  const router = useRouter();

  return (
    <>
      <div className="mt-9 flex items-center gap-2 bg-yellow-200 p-4">
        <div className="bg-pink-200">가나다</div>
        <div className="bg-pink-200">라마바</div>
        <div className="shrink-0 bg-pink-200 px-10">사아자</div>
      </div>
      <button onClick={() => router.push('/')}>HOME</button>
    </>
  );
};

export default Greeting;
