import React from 'react';

export default class Accordion extends React.Component {
    state = {
        activeSelection: null
    }

    render() {
        return (
            <ul className="Accordion">
                {this.props.sections.map((section, index) => this.renderButton(section, index, this.state.activeSelection))}
            </ul>
        )
    }

    renderButton(section, index, activeSection) {
        return (
            <li>
                <button onClick={() => this.handleClick(index)}>{section.title}</button>
                {(activeSection === index) && <p>{section.content}</p>}
            </li>
        );
    }

    handleClick = index => {
        this.setState({
            activeSelection: index
        });
    }
}