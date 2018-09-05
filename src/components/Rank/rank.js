import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className="f4 white b">
        {`${name}, your current entry count is...`}
      </div>
      <div className="f2 white b">
        {entries}
      </div>
    </div>
  );
};

export default Rank;
