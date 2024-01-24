import React from 'react';
import { Card } from 'antd';
import './Guide.less'
const Map: React.FC = () => {
  return (
    <Card className="map-container">
      <iframe
        title="Google Maps"
        width="550"
        height="460"
        frameBorder="0"
        scrolling="no"
        marginHeight={1}
        marginWidth={1}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=1100&amp;height=600&amp;hl=en&amp;q=Garden%20City%20Nairobi+(Nairobi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Card>
  );
}

export default Map;
