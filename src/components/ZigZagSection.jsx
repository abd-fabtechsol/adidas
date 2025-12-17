import zigZagImg1 from '../assets/zig-zag-img-1.png';
import zigZagImg2 from '../assets/zig-zag-img-2.png';
import patternBg from '../assets/pattern-bg.png';
function ZigZagSection() {
  const sections = [
    {
      id: 1,
      image: zigZagImg1,
      title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
      description: 'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
      imagePosition: 'left',
    },
    {
      id: 2,
      image: zigZagImg2,
      title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
      description: 'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
      imagePosition: 'right',
    },
  ];
  const footerStyle = {
    backgroundImage: `url(${patternBg})`,
   paddingInline:"10%",
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    backgroundBlendMode: 'multiply',
  };
  return (
    <div style={{backgroundColor:"#053024"}}>
<div style={footerStyle}>


    <section className="zigzag-section">
      {sections.map((section) => (
        <div
          key={section.id}
          style={{backgroundColor:"#268143"}}
          className={`zigzag-item ${section.imagePosition === 'right' ? 'reverse' : ''}`}
        >
          
          <div className="zigzag-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div style={footerStyle}>
          <div className="zigzag-content">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
          </div>
        </div>
      ))}
    </section>
    </div>
    </div>
  );
}

export default ZigZagSection;
