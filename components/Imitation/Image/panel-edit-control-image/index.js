import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Modal from 'react-bootstrap/Modal';
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import FiltersItems from '../filters-thumbnails-items/';
import Photo from '../main-image/';
import EditPanel from '../edit-panel/';
import imageGram from '../../../../images/imageGram.jpg';
import DragImage from '../button-upload/';

const Button = styled.button `
    transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  &:hover,
  &:focus { 
   
    box-shadow: inset 0 0 0 2em #ffa260 ;
    color: #fff;
  }
 `;


class EditImage extends React.Component {

    constructor(props) {
        super(props);

        this.onUpdateFilter = this.onUpdateFilter.bind(this);
        this.onUpdateStyle = this.onUpdateStyle.bind(this);
        this.onUpdatePhoto = this.onUpdatePhoto.bind(this);
        this.toggle = this.toggle.bind(this);


        this.state = {
            picture: imageGram,
            filter: '',
            stylesBefore: {
                    "background" : "rgba(0, 0, 0, 0)",
                    "content" : " ",
                    "mixBlendMode" : "normal",
                    "opacity" : 0
                },
            styleFilters: [{
                    id: 0,
                    name: 'contrast',
                    value: 100,
                    max: 200,
                    type: '%',
                },
                {
                    id: 1,
                    name: 'brightness',
                    value: 100,
                    max: 200,
                    type: '%',
                },
                {
                    id: 2,
                    name: 'saturate',
                    value: 100,
                    max: 200,
                    type: '%',
                },
                {
                    id: 3,
                    name: 'sepia',
                    value: 0,
                    max: 100,
                    type: '%',
                },
                {
                    id: 4,
                    name: 'grayscale',
                    value: 0,
                    max: 100,
                    type: '%',
                },
                {
                    id: 5,
                    name: 'invert',
                    value: 0,
                    max: 100,
                    type: '%',
                },
                {
                    id: 6,
                    name: 'hue-rotate',
                    value: 0,
                    max: 360,
                    type: 'deg',
                },
                {
                    id: 7,
                    name: 'blur',
                    value: 0,
                    max: 10,
                    type: 'px',
                },
            ],
            mixBlendMode: [],
            gradientSize: [],
            gradientPosition: []
        };
    };
    
    toggle() {

        this.setState({ end: !this.state.end });
    };

    onUpdateFilter(val, styles) {
        let styleFiltersClone = this.state.styleFilters.slice();
        for (var i = 0; i < styleFiltersClone.length; i++) {
            if (styleFiltersClone[i].type === 'deg' || styleFiltersClone[i].type === 'px') {
                styleFiltersClone[i].value = styles[styleFiltersClone[i].name]
            } else {

                styleFiltersClone[i].value = Math.round(styles[styleFiltersClone[i].name] * 100);
            }
        }

        this.setState({
            filter: val,
            stylesBefore: styles.before,
            styleFilters: styleFiltersClone
        });

    };

    onUpdatePhoto(file) {

        this.setState({
            end: false,
            picture: file,
        });
    };

    onUpdateStyle(val, id) {
        let styleFiltersClone = this.state.styleFilters.slice();
        for (var i = 0; i < styleFiltersClone.length; i++) {

            if (id === styleFiltersClone[i].id) {
                styleFiltersClone[i].value = val;

            }
        }
        this.setState({ styleFilters: styleFiltersClone });
    };

    render() {

        return (
            <Fragment>
                
                <section id="imitationgram" >
                <div className="l-container">
                        <Fragment>
                            <Button onClick={this.toggle} > Upload Image  
                            

                                    <DragImage onUpdate={this.onUpdatePhoto} end={this.state.end}  />
                                
                            </Button>

                    
                        </Fragment>
                        <div className="image-rendered">
                            <Photo photo={this.state.picture} filter={this.state.filter} styleFilters={this.state.styleFilters} />
                        </div>
                    <div id="filters-items" >
                        <FiltersItems action={this.onUpdateFilter} styleFilters={this.state.styleFilters}/>
                    </div>
                    
                    
                </div>
            
                
                </section>
                <section id="edit-panel">
                        <EditPanel onUpdate={this.onUpdateStyle} styles={this.state.styles} before={this.state.stylesBefore} styleFilters={this.state.styleFilters}/>
                </section>
                <div className="clearfix"></div>
            </Fragment>
        );
    }
}
export default EditImage;

EditImage.propTypes = {
    picture: PropTypes.string,
    filter: PropTypes.string,
    styleFilters: PropTypes.object,
}

/*TODO : INCLUDE REDUX HERE*/