const TestPage = () => {
  return (
    <>
      <div className="relative h-[200px] w-[400px] bg-sky-200">
        최상위 디브
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100">
          top과 left를 50% 씩 주면 왼쪽 상단 꼭짓점이 중앙에 위치, translate으로
          위치보정
        </div>
      </div>
    </>
  );
};

export default TestPage;
