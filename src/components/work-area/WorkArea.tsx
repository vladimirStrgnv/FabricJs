import './styles';
import Sidebar from '../sidebar/Sidebar';

const WorkArea = () => {
    return (
        <section className="work-area">
            <div className="work-area__container">
                <div className="work-area__wrapper">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>)
}

export default WorkArea