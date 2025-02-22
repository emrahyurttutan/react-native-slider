import React, {FC, Fragment} from 'react';
import {View} from 'react-native';
import {StepNumber} from './StepNumber';
import {MarkerProps, SliderTrackMark} from './TrackMark';
//@ts-ignore
import type {ImageSource} from 'react-native/Libraries/Image/ImageSource';
import {styles} from '../utils/styles';
import {constants} from '../utils/constants';

export const StepsIndicator = ({
  options,
  sliderWidth,
  currentValue,
  customStepMarker,
  renderStepNumber,
  thumbImage,
}: {
  options: number[];
  sliderWidth: number;
  currentValue?: number;
  customStepMarker?: FC<MarkerProps> | boolean;
  renderStepNumber?: boolean;
  thumbImage?: ImageSource;
}) => {
  const stepNumberFontStyle = {
    fontSize:
      options.length > 9
        ? constants.STEP_NUMBER_TEXT_FONT_SMALL
        : constants.STEP_NUMBER_TEXT_FONT_BIG,
  };
  return (
    <View
      pointerEvents="none"
      style={[
        styles.stepsIndicator,
        {marginHorizontal: sliderWidth * constants.MARGIN_HORIZONTAL_PADDING},
      ]}>
      {options.map((i, index) => {
        return (
          <Fragment key={index}>
            <View style={styles.stepIndicatorElement}>
              <SliderTrackMark
                key={`${index}-SliderTrackMark`}
                isTrue={currentValue === i}
                thumbImage={thumbImage}
                StepMarker={customStepMarker}
              />
              {renderStepNumber ? (
                <StepNumber
                  i={i}
                  style={stepNumberFontStyle}
                  key={`${index}th-step`}
                />
              ) : null}
            </View>
          </Fragment>
        );
      })}
    </View>
  );
};
