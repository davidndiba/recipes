import React from 'react';
import { Card } from 'antd';

const Map: React.FC = () => {
  return (
    <Card title="Map" className="map-container">
      <iframe
        title="Google Maps"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=1100&amp;height=600&amp;hl=en&amp;q=Garden%20City%20Nairobi+(Nairobi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Card>
  );
}

export default Map;
