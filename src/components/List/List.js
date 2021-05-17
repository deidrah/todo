import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from './../Hero/Hero';
import Column from './../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imageSrc: PropTypes.string,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.img}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={'Animals'} />
          <Column columnTitle={'Plants'} />
          <Column columnTitle={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List;