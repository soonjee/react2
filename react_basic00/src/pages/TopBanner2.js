import { useRef, useState } from "react";
import { BsChevronBarUp } from "react-icons/bs";
const TopBanner = () => {
    //useRef 는 자바스크립트 객체다.
    //매번 렌더링될 때마다 동일한 객체를 넘긴다
    //동일한 객체를 가지고 있기 때문에 값이 변경되어도 리렌더링 되지 않는다.
    const TopSpan = useRef(null);
    return (
        <>
            <div className="TopBanner" ref={TopSpan}>
                <h2>Lorem ipsum dolor sit. </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                    Soluta vitae voluptatem voluptatum quas vel incidunt?</p>
                <a href="" onClick={
                    (e) => {
                        e.preventDefault();
                    }
                }>more</a>
            </div>
            <span onClick={e => {
                e.currentTarget.classList.toggle('on');
                TopSpan.current.classList.toggle('on');
            }} className="btn">
                <BsChevronBarUp />
            </span>
        </>
    )
}

export default TopBanner;