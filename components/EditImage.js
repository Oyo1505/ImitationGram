import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Modal from 'react-bootstrap/Modal';
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import FiltersItems from '../components/FiltersItems';
import Photo from '../components/Photo';
import EditPanel from '../components/EditPanel';
import imageGram from '../images/imageGram.jpg';
import Snapshot from '../components/Snapshot';
import DragImage from '../components/DragImage';

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
            styleFilters: [{
                    id: 0,
                    name: 'Contrast',
                    value: 100,
                    max: 200,
                    type: '%',
                },
                {
                    id: 1,
                    name: 'Brightness',
                    value: 100,
                    max: 200,
                    type: '%',
                },
                {
                    id: 2,
                    name: 'Saturate',
                    value: 100,
                    max: 200,
                    type: '%',
                },
                {
                    id: 3,
                    name: 'Sepia',
                    value: 0,
                    max: 100,
                    type: '%',
                },
                {
                    id: 4,
                    name: 'Grayscale',
                    value: 0,
                    max: 100,
                    type: '%',
                },
                {
                    id: 5,
                    name: 'Invert',
                    value: 0,
                    max: 100,
                    type: '%',
                },
                {
                    id: 6,
                    name: 'Hue-rotate',
                    value: 0,
                    max: 360,
                    type: 'deg',
                },
                {
                    id: 7,
                    name: 'Blur',
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

    onUpdateFilter(val) {

        this.setState({

            filter: val
        });

    };

    onUpdatePhoto(file) {

        this.setState({
            end: false,
            picture: file,
        });
    };

    onUpdateStyle(val, id) {
        var styleFiltersClone = this.state.styleFilters.slice();
        for (var i = 0; i < styleFiltersClone.length; i++) {

            if (id == styleFiltersClone[i].id) {
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
						<FiltersItems action={this.onUpdateFilter} />
					</div>
					
					
				</div>
			
				
				</section>
				<section id="edit-panel">
						<EditPanel onUpdate={this.onUpdateStyle}  styleFilters={this.state.styleFilters}/>
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