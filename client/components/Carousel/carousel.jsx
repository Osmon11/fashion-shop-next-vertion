import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import styles from "./carousel.module.css";

class CarouselComponent extends Component {
  state = {};
  slider() {
    this.setState({ IMAGE_PARTS: 4 });
    this.setState({ changeTO: null });
    this.setState({ AUTOCHANGE_TIME: 10000 });
    this.setState({ activeSlide: -1, prevSlide: -1, sliderReady: false });
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.changeTO);
  }

  componentDidMount() {
    let _this2 = this;
    this.slider();
    this.runAutochangeTO();
    setTimeout(function () {
      _this2.setState({ activeSlide: 0, sliderReady: true });
    }, 7000);
  }

  runAutochangeTO() {
    let _this3 = this;
    this.setState({
      changeTO: setTimeout(function () {
        _this3.changeSlides(1);
        _this3.runAutochangeTO();
      }, this.state.AUTOCHANGE_TIME),
    });
  }

  changeSlides(change) {
    window.clearTimeout(this.state.changeTO);
    let length = this.props.slides.length;
    let prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide: activeSlide, prevSlide: prevSlide });
  }

  render() {
    let _this4 = this;
    let _state = this.state;
    let activeSlide = _state.activeSlide;
    let prevSlide = _state.prevSlide;
    let sliderReady = _state.sliderReady;

    return (
      <div className={clsx(sliderReady && styles.s__ready, styles.slider)}>
        <div className={styles.slider__slides}>
          {this.props.slides.map(function (slide, index) {
            return (
              <div
                className={clsx(styles.slider__slide, [
                  activeSlide === index ? styles.s__active : "",
                  prevSlide === index ? styles.s__prev : "",
                ])}
                key={slide.city}
              >
                <div className={styles.slider__slide_content}>
                  <h3 className={styles.slider__slide_subheading}>
                    {" "}
                    {slide.country || slide.city}
                  </h3>
                  <h2 className={styles.slider__slide_heading}>
                    {slide.city.split("").map(function (l, i) {
                      return <span key={l + i}> {l} </span>;
                    })}
                  </h2>
                  <p className={styles.slider__slide_readmore}>Men & women</p>
                </div>
                <div className={styles.slider__slide_parts}>
                  {[]
                    .concat(Array(_state.IMAGE_PARTS).fill())
                    .map(function (x, i) {
                      return (
                        <div className={styles.slider__slide_part} key={i}>
                          <div
                            className={styles.slider__slide_part_inner}
                            style={{
                              backgroundImage: "url(" + slide.img + ")",
                            }}
                          ></div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
          <div
            className={styles.slider__control}
            onClick={function onClick() {
              return _this4.changeSlides(-1);
            }}
          />
          <div
            className={clsx(
              styles.slider__control,
              styles.slider__control__right
            )}
            onClick={function onClick() {
              return _this4.changeSlides(1);
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    slides: state.reducer.slides,
  };
};

export let Carousel = connect(mapStateToProps)(CarouselComponent);
