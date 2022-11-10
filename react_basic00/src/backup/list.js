import Some from './some';
const Test = ({ list, age, name, onClick }) => {
    console.log(onClick)
    return (
        <div>
            <button onClick={onClick}>^^*</button>
            <h2>
                my {list} {age}년도로 {name} list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>
            </h2>
            {/* jsx문법, 중괄호{ }를 찍어야 자스값으로 인식함 const {} = props */}
            <Some list={list} />
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
    )

}
export default Test;  