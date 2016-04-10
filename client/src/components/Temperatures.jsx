import React from 'react';

export default React.createClass({
    getValues: function() {
        return this.props.values || [];
    },
    render: function() {
        return <div className="valueBox">
            {this.getValues().map(entry =>
                <div key={entry.place}>
                    <h2>{entry.place}</h2>
                    <p>{entry.temperature}&#8451;</p>
                </div>
            )}
        </div>;
    }
});
