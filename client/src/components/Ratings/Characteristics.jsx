import React from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

function characteristicsBars({ resultsMeta }) {

  const barSize = 275;
  function getArrowPosition(value) {
    return (value / 5) * barSize;
  }

  const barStyling = {
    position: 'flex',
    height: 8,
    left: 100,
    width: barSize,
    background: '#D3D3D3',
    bottom: 30,
  };

  if (resultsMeta.Size) {
    return [

      <div
        className="char-padding-top"
      >
        <div className="char-padding-top">Fit</div>
        <div style={barStyling} />
        <div>
          <VscTriangleDown
            style={{ position: 'relative', left: getArrowPosition(resultsMeta.Size.value) }}
            key={resultsMeta.product_id}
          />
        </div>
        <div>
          <div className="char-descriptor-l">Runs Tight</div>
          <div style={{ display: 'inline', float: 'right' }}>Runs Loose</div>
        </div>
      </div>,

      <div
        className="char-padding-top"
      >
        <div className="char-padding-top">Length</div>
        <div style={barStyling} />
        <div>
          <VscTriangleDown
            style={{ position: 'relative', left: getArrowPosition(resultsMeta.Width.value) }}
            key={resultsMeta.product_id}
          />
        </div>
        <div>
          <div className="char-descriptor-l">Runs Short</div>
          <div style={{ display: 'inline', float: 'right' }}>Runs Long</div>
        </div>
      </div>,

      <div
        className="char-padding-top"
      >
        <div className="char-padding-top">Comfort</div>
        <div style={barStyling} />
        <div>
          <VscTriangleDown
            style={{ position: 'relative', left: getArrowPosition(resultsMeta.Comfort.value) }}
            key={resultsMeta.product_id}
          />
        </div>
        <div>
          <div className="char-descriptor-l">Uncomfortable</div>
          <div style={{ display: 'inline', float: 'right' }}>Perfect</div>
        </div>
      </div>,

      <div
        className="char-padding-top"
      >
        <div className="char-padding-top">Quality</div>
        <div style={barStyling} />
        <div>
          <VscTriangleDown
            style={{ position: 'relative', left: getArrowPosition(resultsMeta.Quality.value) }}
            key={resultsMeta.product_id}
          />
        </div>
        <div>
          <div className="char-descriptor-l">Poor</div>
          <div style={{ display: 'inline', float: 'right' }}>Premium</div>
        </div>

      </div>
    ];
  }

  return (<div>LOADING CHARS</div>);
}

export default characteristicsBars;
