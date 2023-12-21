import "./App.css";

function App() {
  const name = "카카오톡";
  return (
    <>
      <header className="react">
        <div>
          <ul>
            <div className="catock">{name}</div>
            <li className="li">카톡 안녕가이드</li>
            <li className="li"> 카톡설명서</li>
            <li className="li">다운로드</li>
          </ul>
        </div>
      </header>
      <article className="article">
        <div className="div1">
          <div className="div2">
            <h1 className="h1">카카오 쇼핑</h1>
            <p className="p">
              카톡에서 이뤄지는 오늘의 쇼핑 4번째 탭 '카카오쇼핑'에서 제공하는
              제품을 빠르고 간편하게 살펴보세요.
            </p>
          </div>
          <div className="div3">이미지가 들어갈 공간입니다.</div>
        </div>
      </article>
    </>
  );
}

export default App;
