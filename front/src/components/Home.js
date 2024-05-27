import Test from './Test';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const movePage = useNavigate(); 

  function gosrchpage() {
    movePage('/api/searchpage')
  }
  return (
    <div className="home">
      리액트-스프링 부트 연동 테스트
      <Test />

      <br></br>
      <button onClick={gosrchpage}>검색창으로 이동</button>
    </div>
  );
}