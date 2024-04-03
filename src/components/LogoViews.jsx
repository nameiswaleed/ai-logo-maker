
import Typography from "./logo/Typography";

const LogoViews = ({ logoConcepts }) => {
  return (
    <>
      <div className="grid grid-cols-3 bg-white p-5 space-x-2 ">
        {logoConcepts &&logoConcepts.length > 0 && logoConcepts.map((item, index) => (
          <Typography colors={item.color} title={item.title} slogan={item.slogan} font={item.font} key={index} />
        ))}
      </div>
    </>
  );
};

export default LogoViews;
