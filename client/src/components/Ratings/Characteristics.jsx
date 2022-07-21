// INCOMPLETE
import React from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

function characteristicsBars({ resultsMeta }) {

  function getArrowPosition(value) {
    return (value / 5) * 275;
  }

  const barStyling = {
    position: 'flex',
    height: 8,
    left: 100,
    width: 275,
    background: '#D3D3D3',
    bottom: 30,
  };

  const charPaddingT = { padding: 10, paddingTop: 40 };
  const charPaddingB = { padding: 10, paddingBottom: 10 };

  if (resultsMeta.Size) {



    return [

      <div
        className="characteristics"
        style={charPaddingT}
      >
        <div style={charPaddingB}>Fit</div>

        <div style={barStyling} />

        <div>
          <VscTriangleDown style={{ position: 'relative', left: getArrowPosition(resultsMeta.Size.value) }} />
        </div>

        <div>
          <div style={{ display: 'inline', float: 'left' }}>Runs Tight</div>
          <div style={{ display: 'inline', float: 'right' }}>Runs Loose</div>
        </div>


      </div>,


      <div
        className="characteristics"
        style={charPaddingT}
      >
        <div style={charPaddingB}>Length</div>

        <div style={barStyling} />

        <div>
          <VscTriangleDown style={{ position: 'relative', left: getArrowPosition(resultsMeta.Width.value) }} />
        </div>

        <div>
          <div style={{ display: 'inline', float: 'left' }}>Runs Short</div>
          <div style={{ display: 'inline', float: 'right' }}>Runs Long</div>
        </div>


      </div>,

      <div
        className="characteristics"
        style={charPaddingT}
      >
        <div style={charPaddingB}>Comfort</div>

        <div style={barStyling} />

        <div>
          <VscTriangleDown style={{ position: 'relative', left: getArrowPosition(resultsMeta.Comfort.value) }} />
        </div>

        <div>
          <div style={{ display: 'inline', float: 'left' }}>Uncomfortable</div>
          <div style={{ display: 'inline', float: 'right' }}>Perfect</div>
        </div>


      </div>,

      <div
        className="characteristics"
        style={charPaddingT}
      >
        <div style={charPaddingB}>Quality</div>

        <div style={barStyling} />

        <div>
          <VscTriangleDown style={{ position: 'relative', left: getArrowPosition(resultsMeta.Quality.value) }} />
        </div>

        <div>
          <div style={{ display: 'inline', float: 'left' }}>Poor</div>
          <div style={{ display: 'inline', float: 'right' }}>Premium</div>
        </div>


      </div>


    ];
  }

  return (<div> LOADING CHARS</div>);
}

export default characteristicsBars;