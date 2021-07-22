interface feature {
  feature: {
    icon: string;
    title: string;
    description: string;
  };
}
const WorkFeatureItem: React.FC<feature> = ({ feature }) => {
  const { icon, title, description } = feature;
  return (
    <div className="work-feature__item">
      <img src={icon} alt={title} />
      <div className="work-feature__text">
        <h3 className="header-tertiary">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default WorkFeatureItem;
