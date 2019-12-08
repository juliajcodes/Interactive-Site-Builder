/* eslint-disable react/no-unused-state */
import React from 'react';
import { withRouter } from 'react-router';
// import NavBar from '../editorElements/navbar';
import Dragula from 'react-dragula';
import { EditorWrapper } from './styles';
import buildData from '../../store/buildData';
import BuildChild from '../BuildChild';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            builds: buildData.landing
        };

        this.builder = React.createRef();
    }

    componentDidMount() {
        const requestedTheme = this.props.match.params.theme;
        const theme = buildData[requestedTheme];
        if (theme) {
            this.setState({ builds: theme });
        }
    }

    dragulaDecorator = instance => {
        if (instance) {
            Dragula([instance]);
        }
    };

    guidGenerator = () => {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        };
        return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
    };

    handleRemoveBuild = uniqueID => {
        this.setState(prevState => ({
            ...prevState,
            builds: this.state.builds.filter(el => el.uniqueID !== uniqueID)
        }));
    };

    addNewElem = newElem => {
        const builds = this.state.builds.concat({ type: newElem });
        this.setState(prevState => ({
            ...prevState,
            builds
        }));

        setTimeout(() => {
            window.scroll({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });
        });
    };

    render() {
        const { builds } = this.state;
        return (
            <EditorWrapper className="editor" ref={this.dragulaDecorator}>
                {builds.map((build, index) => {
                    const uniqueID = this.guidGenerator();
                    build.uniqueID = uniqueID;
                    return (
                        <BuildChild
                            ref={this.builder}
                            name={build.type}
                            key={index}
                            id={uniqueID}
                            handleRemoveBuild={this.handleRemoveBuild}
                        />
                    );
                })}
            </EditorWrapper>
        );
    }
}

export default withRouter(Editor);
