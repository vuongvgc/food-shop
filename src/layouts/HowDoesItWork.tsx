import WorkFeatureItem from "../components/WorkFeatureItem";
import { workFeature } from "../assets/workFeature";
const HowDoesItWork: React.FC = () => {
  return (
    <div className="how-it-work__box">
      <h2 className="header-secondary">How does it work</h2>
      <div className="row Work-features__box">
        {workFeature.map((feature, index) => {
          return (
            <div className="col-1-of-4" key={feature.title + index}>
              <WorkFeatureItem feature={feature} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HowDoesItWork;
