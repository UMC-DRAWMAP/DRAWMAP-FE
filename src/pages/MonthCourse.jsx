import ChallengeColumnBox from "../components/ChallengeColumnBox";
import Header from "../components/Header";

import '../pages/MonthCourse.scss'

const dummyChallengeCourse = [
    {
        title: "개구리",
        city: "서울",
        date: "2023.07.06",
        level: 3,
        info: "이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다."
    },
    {
        title: "개구리",
        city: "서울",
        date: "2023.07.06",
        level: 3,
        info: "이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다."
    },
    {
        title: "개구리",
        city: "서울",
        date: "2023.07.06",
        level: 3,
        info: "이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다."
    },
]


const MonthCourse = () => {
    return (
        <div className="MonthCourse">
            <Header />
            <p className='pagetitle'>드로맵 이달의 도전 코스</p>
            <div className="monthchallengecontainer">
                {dummyChallengeCourse.map((it) => (
                    <ChallengeColumnBox {...it} />
                ))}
            </div>
        </div>
    );
};

export default MonthCourse;