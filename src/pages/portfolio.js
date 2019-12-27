/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import Isotope from 'isotope-layout/js/isotope';
import './portfolio.scss';

class PortfolioFilter extends React.Component {
  constructor() {
    super();
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickTech = this.handleClickTech.bind(this);
    this.handleClickPersonal = this.handleClickPersonal.bind(this);
    this.state = {
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false,
    };
  }

  handleClickAll(e) {
    this.setState({
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(`.articlesTiles`, {
        itemSelector: `.col`,
        layoutMode: 'fitRows',
      });
    this.iso.arrange({ filter: '*' });
  }

  handleClickTech(e) {
    this.setState({
      isClickedAll: false,
      isClickedTech: true,
      isClickedPersonal: false,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(`.articlesTiles`, {
        itemSelector: `.col`,
        layoutMode: 'fitRows',
      });
    this.iso.arrange({ filter: `.tech` });
  }

  handleClickPersonal(e) {
    this.setState({
      isClickedAll: false,
      isClickedTech: false,
      isClickedPersonal: true,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(`..articlesTiles`, {
        itemSelector: `.col`,
        layoutMode: 'fitRows',
      });
    this.iso.arrange({ filter: `.personal` });
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleClickAll}>All</button>
          <button onClick={this.handleClickTech}>Tech</button>
          <button onClick={this.handleClickPersonal}>Personal</button>
        </div>
        <div className="articlesTiles">
          <div className="tech col">tech</div>
          <div className="personal col">personal</div>
          <div className="tech col">tech</div>
          <div className="personal col">personal</div>
          <div className="tech col">tech</div>
          <div className="personal col">personal</div>
        </div>
      </>
    );
  }
}

export default PortfolioFilter;
